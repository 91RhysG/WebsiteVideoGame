/*
 CURRENT ISSUES:
 -- On delete cascading everything, this should be restricted to only a set of circumstances where a game company is deleted, no manufacturers, devs, publishers,
    or any other company should remove values or be allowed to be deleted without being cleared of entries first.
 
 -- Seed data is very limited and does not display current requirements accurately
 
 */
-- Create db
DROP DATABASE IF EXISTS GamingDB;
CREATE DATABASE IF NOT EXISTS GamingDB;
-- Use db
USE GamingDB;
-- create table address
CREATE TABLE IF NOT EXISTS Address(
    AddressID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    StreetNumber INT NOT NULL,
    StreetName VARCHAR(180) NOT NULL,
    AddState VARCHAR(90) NOT NULL,
    Country VARCHAR(60) NOT NULL,
    Code INT NOT NULL
);
-- create table company
CREATE TABLE IF NOT EXISTS Company(
    CompanyID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    AddressID INT NOT NULL,
    CompanyName VARCHAR(50) NOT NULL,
    CompanyProfile TEXT NOT NULL,
    Founded INT NOT NULL,
    CurrentLogo TEXT NOT NULL,
    CONSTRAINT FK_Address FOREIGN KEY (AddressID) REFERENCES Address(AddressID) ON DELETE CASCADE
);
-- create platform
CREATE TABLE IF NOT EXISTS Platform(
    PlatformID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CompanyID INT NOT NULL,
    ManufacturerID INT NOT NULL,
    PlatformName VARCHAR(150) NOT NULL,
    PlatformModel VARCHAR(150) NOT NULL,
    PlatformFamily VARCHAR(150) NOT NULL,
    PlatformLogo TEXT NOT NULL,
    NumberShipped INT NOT NULL,
    FirstReleased DATE NOT NULL,
    PlatformProfile TEXT NOT NULL,
    CONSTRAINT FK_Company FOREIGN KEY (CompanyID) REFERENCES Company(CompanyID) ON DELETE CASCADE,
    CONSTRAINT FK_Manufacturer FOREIGN KEY (ManufacturerID) REFERENCES Company(CompanyID) ON DELETE CASCADE
);
-- create video game
CREATE TABLE IF NOT EXISTS Game(
    GameID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    DeveloperID INT NOT NULL,
    GamePublisherID INT NOT NULL,
    GameName VARCHAR(150) NOT NULL,
    GameGenre VARCHAR(150) NOT NULL,
    GameProfile TEXT NOT NULL,
    NumberShipped INT NOT NULL,
    FirstReleased DATE NOT NULL,
    CONSTRAINT FK_Developer FOREIGN KEY (DeveloperID) REFERENCES Company(CompanyID) ON DELETE CASCADE,
    CONSTRAINT FK_GamePublisher FOREIGN KEY (GamePublisherID) REFERENCES Company(CompanyID) ON DELETE CASCADE
);
-- create peripheral
CREATE TABLE IF NOT EXISTS Peripheral(
    PeripheralID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ManufacturerID INT NOT NULL,
    PlatformID INT NOT NULL,
    GameID INT NOT NULL,
    PeripheralName VARCHAR(150) NOT NULL,
    PeripheralType VARCHAR(150) NOT NULL,
    PeripheralProfile TEXT NOT NULL,
    NumberShipped INT NOT NULL,
    FirstReleased DATE NOT NULL,
    CONSTRAINT FK_Manufacter FOREIGN KEY (ManufacturerID) REFERENCES Company(CompanyID) ON DELETE CASCADE,
    CONSTRAINT FK_Platform FOREIGN KEY (PlatformID) REFERENCES Company(CompanyID) ON DELETE CASCADE
);
-- add values address
-- Company address
INSERT INTO Address(
        StreetNumber,
        StreetName,
        AddState,
        Country,
        Code
    )
VALUES(
        1,
        'DEV Street 1',
        'State 1',
        'Country 1',
        1111
    );
-- Manufacturer address
INSERT INTO Address(
        StreetNumber,
        StreetName,
        AddState,
        Country,
        Code
    )
VALUES(
        2,
        'MAN Street 2',
        'State 2',
        'Country 2',
        2222
    );
-- Developer address
INSERT INTO Address(
        StreetNumber,
        StreetName,
        AddState,
        Country,
        Code
    )
VALUES(
        3,
        'DEV Street 3',
        'State 3',
        'Country 3',
        3333
    );
-- Publisher address
INSERT INTO Address(
        StreetNumber,
        StreetName,
        AddState,
        Country,
        Code
    )
VALUES(
        4,
        'PUB Street 4',
        'State 4',
        'Country 4',
        4444
    );
-- add values company
-- Company Address
INSERT INTO Company(
        AddressID,
        CompanyName,
        CompanyProfile,
        Founded,
        CurrentLogo
    )
VALUES(
        1,
        'Playstation',
        'This is the main playstation nonsense',
        1111,
        'link to image'
    );
-- Manufacturer Address
INSERT INTO Company(
        AddressID,
        CompanyName,
        CompanyProfile,
        Founded,
        CurrentLogo
    )
VALUES(
        2,
        'Building Things',
        'This is the main manufacturer',
        2222,
        'link to image'
    );
-- Dev Address
INSERT INTO Company(
        AddressID,
        CompanyName,
        CompanyProfile,
        Founded,
        CurrentLogo
    )
VALUES(
        3,
        'DEV COMP',
        'This is the main developer',
        3333,
        'link to image'
    );
-- Publisher Address
INSERT INTO Company(
        AddressID,
        CompanyName,
        CompanyProfile,
        Founded,
        CurrentLogo
    )
VALUES(
        4,
        'Publishing Publisher',
        'This is the main publisher',
        4444,
        'link to image'
    );
-- add values platform
INSERT INTO Platform(
        CompanyID,
        ManufacturerID,
        PlatformName,
        PlatformModel,
        PlatformFamily,
        PlatformLogo,
        NumberShipped,
        FirstReleased,
        PlatformProfile
    )
VALUES(
        1,
        1,
        'Playstation 3',
        'Model 3.2',
        'Playstation',
        'Playstation LOGO',
        1,
        '1111-1-11',
        'This is the profile for a playstation.'
    );
-- add values video game
INSERT INTO Game(
        DeveloperID,
        GamePublisherID,
        GameName,
        GameGenre,
        GameProfile,
        NumberShipped,
        FirstReleased
    )
VALUES(
        1,
        1,
        'GameName',
        'Genre',
        'This is the profile for a game',
        111,
        '1111-1-11'
    );
-- add values peripheral
INSERT INTO Peripheral(
        ManufacturerID,
        PlatformID,
        GameID,
        PeripheralName,
        PeripheralType,
        PeripheralProfile,
        NumberShipped,
        FirstReleased
    )
VALUES(
        1,
        1,
        1,
        'Keyboard',
        'Keyboard',
        'This is the profile for the keyboard',
        1,
        '1111-1-11'
    );