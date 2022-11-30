class Card
{
    constructor()
    {
    }

    BuildCompanyCard(companyID, companyName, companyFounded, companyLogo, companyProfileExcerpt, companyAddress)
    {
        this.companyID = companyID;
        this.companyName = companyName;
        this.companyFounded = companyFounded; 
        this.companyLogo = companyLogo;
        this.companyProfileExcerpt = companyProfileExcerpt;
        this.companyAddress = companyAddress;
    }
}