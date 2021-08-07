namespace Podkrepibg.Campaigns.Application.Beneficiaries.Commands.CreateBeneficiary
{
    using System;
    using System.Threading;
    using System.Threading.Tasks;
    using DataContracts.Campaign;
    using MediatR;
    using Podkrepibg.Campaigns.Application.Data;
    using Podkrepibg.Campaigns.Domain.Types;
    using BeneficiaryAdditionalDetails = Domain.Types.BeneficiaryAdditionalDetails;
    using BeneficiaryEntity = Domain.Entities.Beneficiary;

    public record CreateBeneficiaryCommand(CreateBeneficiaryRequest Request) : IRequest<CreateBeneficiaryResponse>;

    public class CreateBeneficiaryCommandHandler : IRequestHandler<CreateBeneficiaryCommand, CreateBeneficiaryResponse>
    {
        private readonly IApplicationDbContext _dbContext;

        public CreateBeneficiaryCommandHandler(IApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<CreateBeneficiaryResponse> Handle(CreateBeneficiaryCommand request, CancellationToken cancellationToken)
        {
            var beneficiaryRequest = request.Request;
            var beneficiary = new BeneficiaryEntity
            {
                Name = beneficiaryRequest.Name,
                DateOfBirth = beneficiaryRequest.DateOfBirth,
                Type = (BeneficiaryType)beneficiaryRequest.Type,
                OrganizerId = Guid.Parse(beneficiaryRequest.OrganizerId),
                ISO2CountryCode = (ISO2CountryCode)beneficiaryRequest.CountryIsoCode,
                City = (City)beneficiaryRequest.City,
                Address = beneficiaryRequest.Address,
                Email = beneficiaryRequest.Email,
                Phone = beneficiaryRequest.Phone,
                AdditionalDetails = new BeneficiaryAdditionalDetails(beneficiaryRequest.Website),
                ConnectionWithBeneficiary = beneficiaryRequest.ConnectionWithBeneficiary
            };

            var trackedEntity = _dbContext.Beneficiaries.Add(beneficiary);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return new CreateBeneficiaryResponse
            {
                Id = trackedEntity.Entity.Id.ToString()
            };
        }
    }
}
