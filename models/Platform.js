class Platform
{
    constructor()
    {
        this.platformID = -1;
        this.companyID = -1;
        this.manufacturerID = -1;
        this.platformName = "platform name";
        this.platformModel = 'platform model';
        this.platformFamily = 'platform family';
        this.platformLogo = 'platform logo';
        this.numberShipped = 0;
        this.firstReleased = '1900';
        this.platformProfile = 'platform profile';
    }

    //Set all
    set PlatformID(platformID)
    {
        this.platformID = platformID;
    }

    set CompanyID(companyID)
    {
        this.companyID = companyID;
    }

    set ManufacturerID(manufacturerID)
    {
        this.manufacturerID = manufacturerID;
    }

    set PlatformName(platformName)
    {
        this.platformName = platformName;
    }

    set PlatformModel(platformModel)
    {
        this.platformModel = platformModel;
    }
    
    set PlatformFamily(platformFamily)
    {
        this.platformFamily = platformFamily;
    }

    set PlatformLogo(platformLogo)
    {
        this.platformLogo = platformLogo;
    }

    set NumberShipped(numberShipped)
    {
        this.numberShipped = numberShipped;
    }

    set FirstReleased(firstReleased)
    {
        this.firstReleased = firstReleased;
    }

    set PlatformProfile(platformProfile)
    {
        this.platformProfile = platformProfile;
    }


    //Get All
    get PlatformID()
    {
        return this.platformID;
    }

    get CompanyID()
    {
        return this.companyID;
    }

    get ManufacturerID()
    {
        return this.manufacturerID;
    }

    get PlatformName()
    {
        return this.platformName;
    }

    get PlatformModel()
    {
        return this.platformModel;
    }
    
    get PlatformFamily()
    {
        return this.platformFamily;
    }

    get PlatformLogo()
    {
        return this.platformLogo;
    }

    get NumberShipped()
    {
        return this.numberShipped;
    }

    get FirstReleased()
    {
        return this.firstReleased;
    }

    get PlatformProfile()
    {
        return this.platformProfile;
    }
}