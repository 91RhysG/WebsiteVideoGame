/*

                    ----------- CONNECTION TO NODE CODE -----------

This is the node.js portion of the code and cannot be run in the browser, I am keeping this for if/when I reach the node.js backend integration.

console.log("main js loaded");


function Connection()
{
    console.log("Inside Connection")
    let mysql = require('../node_modules/mysql');
    alert('Hi there!');

    console.log('require completed')
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        //password: '',
        database: 'gamingdb'
    });
    connection.connect(function (err)
    {
        if (err)
        {
            return console.error(`error: ${err.message}`);
        }

        console.log('Connected to MySQL server.');
    });



}

export { Connection };
*/

AddCardListeners = () =>
{
  const cardList = document.getElementsByClassName("card");
  for (let i = 0; i < cardList.length; i++)
  {
    cardList[i].addEventListener('click', CardSelected)
  }
}

CardSelected = (cardSelected) =>
{
  let selectedCard = document.getElementById(`${cardSelected}`)
  selectedCard.classList.toggle('card');
  selectedCard.classList.toggle("expandedCard");
}

GenerateCompanyList = (information) => {
  let companyList = [];
  information.forEach((company) => {
    let newCompany = new Company(
      company['CompanyID'],
      company['CompanyName'],
      company['AddressID'],
      company['CompanyProfile'],
      company['Founded'],
      company['CurrentLogo']
    );
    companyList.push(newCompany);
  });
  return companyList;
};

GenerateGameList = (information) => {
  let gameList = [];
  information.forEach((game) => {
    let newGame = new Game(
      game["GameID"],
      game["PlatformID"],
      game["DeveloperID"],
      game["GamePublisherID"],
      game["GameName"],
      game["GameGenre"],
      game["GameProfile"],
      game["NumberShipped"],
      game["FirstReleased"]
    );
    gameList.push(newGame);
  });
  return gameList;
};

GeneratePeripheralList = (information) => {
  let peripheralList = [];
  information.forEach((peripheral) => {
    let newPeripheral = new Peripheral(
      peripheral["PeripheralID"],
      peripheral["ManufacturerID"],
      peripheral["PlatformID"],
      peripheral["GameID"],
      peripheral["PeripheralName"],
      peripheral["PeripheralType"],
      peripheral["PeripheralProfile"],
      peripheral["NumberShipped"],
      peripheral["FirstReleased"]
    );
    peripheralList.push(newPeripheral);
  });
  return peripheralList;
};

GeneratePlatformList = (information) => {
  let platformList = [];
  information.forEach((platform) => {
    let newPlatform = new Platform(
      platform["PeripheralID"],
      platform["ManufacturerID"],
      platform["PlatformID"],
      platform["GameID"],
      platform["PeripheralName"],
      platform["PeripheralType"],
      platform["PeripheralProfile"],
      platform["NumberShipped"],
      platform["FirstReleased"]
    );
    platformList.push(newPlatform);
  });
  return platformList;
};
