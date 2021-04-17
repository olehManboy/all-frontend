using System;
using Podkrepibg.Campaigns.Domain.Types;

namespace Podkrepibg.Campaigns.Domain.Entities
{
    public class Campaign
    {
        public Guid Id { get; set; }

        public CampaignState State { get; set; }

        public Guid InitiatorId { get; set; }

        public Guid BeneficiaryId { get; set; }

        public Guid OperatorId { get; set; }

        public Guid CampaignTypeId { get; set; }

        public Guid CampaignSubTypeId { get; set; }

        public string TitleKey { get; set; }

        public string ShortDescriptionKey { get; set; }

        public string FullDescriptionKey { get; set; }

        public decimal TargetAmount { get; set; }

        public CurrencyCode Currency { get; set; }

        public DateTime CreationDate { get; set; }

        public bool Verified { get; set; }

        public DateTime? Deadline { get; set; }

        public bool Recurring { get; set; }

        public CampaignOptionalDetails OptionalDetails { get; set; }

        public CampaignType CampaignType { get; set; }

        public CampaignSubType CampaignSubType { get; set; }
    }
}
