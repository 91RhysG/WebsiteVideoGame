class Game
{
    constructor()
    {
        this.videoGameID = -1;
        this.platformID = -1;
        this.developerID = -1;
        this.gamePublisherID = -1;
        this.gameName = "No name";
        this.gameGenre = "No genre";
        this.gameProfile = "This is the game profile";
        this.numberShipped = 0;
        this.firstReleased = '1900';
    }


    //Set all
    set VideoGameID(id)
    {
        this.videoGameID = id;
    }

    set PlatformID(id)
    {
        this.platformID = id;
    }

    set DeveloperID(id)
    {
        this.developerID = id;
    }

    set GamePublisherID(id)
    {
        this.gamePublisherID = -1;
    }

    set GameName(gameName)
    {
        this.gameName = gameName;
    }
    set GameGenre(gameGenre)
    {
        this.gameGenre = gameGenre;
    }
    set GameProfile(gameProfile)
    {
        this.gameProfile = gameProfile;
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
    get VideoGameID()
    {
        return this.videoGameID;
    }
    get PlatformID()
    {
        return this.platformID;
    }
    get DeveloperID()
    {
        return this.developerID;
    }
    get GamePublisherID()
    {
        return this.gamePublisherID;
    }
    get GameName()
    {
        return this.gameName;
    }
    get GameGenre()
    {
        return this.gameGenre;
    }
    get GameProfile()
    {
        return this.gameProfile;
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
