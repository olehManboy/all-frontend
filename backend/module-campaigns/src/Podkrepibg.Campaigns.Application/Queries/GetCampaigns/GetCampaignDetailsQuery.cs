namespace Podkrepibg.Campaigns.Application.Queries.GetCampaigns
{
    using System;
    using System.Threading;
    using System.Threading.Tasks;
    using Mapster;
    using MediatR;
    using Microsoft.EntityFrameworkCore;
    using Podkrepibg.Campaigns.Application.Data;

    public record GetCampaignDetailsQuery(string Id) : IRequest<CampaignDetails>;

    public class GetCampaignDetailsQueryHandler : IRequestHandler<GetCampaignDetailsQuery, CampaignDetails>
    {
        private readonly IApplicationReadOnlyDbContext _dbContext;

        public GetCampaignDetailsQueryHandler(IApplicationReadOnlyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<CampaignDetails> Handle(GetCampaignDetailsQuery request, CancellationToken cancellationToken)
        {
            var campaign = await _dbContext.GetCampaigns()
                .FirstOrDefaultAsync(c => c.Id.Equals(Guid.Parse(request.Id)), cancellationToken);

            return campaign.Adapt<CampaignDetails>();
        }
    }
}
