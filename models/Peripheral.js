class Peripheral
{
    constructor()
    {
        this.peripheralID = -1;
        this.manufacturerID = -1;
        this.platformID = -1;
        this.videoGameID = -1;
        this.perpipheralName = "No name";
        this.peripheralType = "No genre";
        this.peripheralProfile = "This is the game profile";
        this.numberShipped = 0;
        this.firstReleased = '1900';
    }


    //Set all
    set PeripheralID(id)
    {
        this.peripheralID = id;
    }
    set ManufacturerID(id)
    {
        this.manufacturerID = -1;
    }
    set PlatformID(id)
    {
        this.platformID = id;
    }
    set VideoGameID(id)
    {
        this.videoGameID = id;
    }
    set PeripheralName(name)
    {
        this.PeripheralName = name;
    }
    set PeripheralType(type)
    {
        this.peripheralType = type;
    }
    set PeripheralProfile(profile)
    {
        this.peripheralProfile = profile;
    }
    set NumberShipped(numberShipped)
    {
        this.numberShipped = numberShipped;
    }
    set FirstReleased(firstReleased)
    {
        this.firstReleased = firstReleased;
    }

    //Get all
    get PeripheralID()
    {
        return this.peripheralID;
    }
    get ManufacturerID()
    {
        return this.manufacturerID;
    }
    get PlatformID()
    {
        return this.platformID;
    }
    get VideoGameID()
    {
        return this.videoGameID;
    }
    get PeripheralName()
    {
        return this.PeripheralName;
    }
    get PeripheralType()
    {
        return this.peripheralType;
    }
    get PeripheralProfile()
    {
        return this.peripheralProfile;
    }
    get NumberShipped()
    {
        return this.numberShipped;
    }
    get FirstReleased()
    {
        return this.firstReleased;
    }
}
