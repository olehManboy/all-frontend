namespace Podkrepibg.Campaigns.Infrastructure.Persistence.Configurations
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Newtonsoft.Json;
    using Podkrepibg.Campaigns.Domain.Entities;
    using Podkrepibg.Campaigns.Domain.Types;

    public class BeneficiaryConfiguration : IEntityTypeConfiguration<Beneficiary>
    {
        public void Configure(EntityTypeBuilder<Beneficiary> builder)
        {
            builder
              .HasKey(b => b.Id);

            builder
              .Property(b => b.Id)
              .IsRequired()
              .HasDefaultValueSql("gen_random_uuid()");

            builder
              .Property(b => b.Name)
              .HasMaxLength(100)
              .IsRequired();

            builder
              .Property(b => b.DateOfBirth)
              .HasColumnType("Date")
              .IsRequired();

            builder
              .Property(b => b.Type)
              .HasConversion<int>()
              .IsRequired();

            builder
                .Property(b => b.OrganizerId)
                .IsRequired();

            builder
              .Property(b => b.ISO2CountryCode)
              .HasConversion<int>()
              .IsRequired();

            builder
              .Property(b => b.City)
              .HasConversion<int>()
              .IsRequired();

            builder
              .Property(b => b.Address)
              .HasMaxLength(100);

            builder
              .HasIndex(u => u.Email)
              .IsUnique();

            builder
              .Property(b => b.Email)
              .HasMaxLength(100);

            builder
              .Property(b => b.Phone)
              .HasMaxLength(50);

            builder
                .Property(b => b.AdditionalDetails)
                .HasColumnType("jsonb")
                .HasConversion(
                    a => JsonConvert.SerializeObject(a),
                    a => JsonConvert.DeserializeObject<BeneficiaryAdditionalDetails>(a));

            builder
                .Property(b => b.Relationship)
                .HasConversion<int>();
        }
    }
}
