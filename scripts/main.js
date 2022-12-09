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

AddCardListeners = () => {
  const cardList = document.getElementsByClassName("card");
  for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener("click", CardSelected);
  }
};

AddTableListeners = () => {
  const entryList = document.getElementsByClassName("tableEntry");
  for (let i = 0; i < entryList.length; i++) {
    entryList[i].addEventListener("click", EntrySelected);
    console.log("added listener");
  }
};

//This needs to be able to be filtered to just the card selected.
CardSelected = (cardSelected) => {
  let selectedCard = document.getElementById(`${cardSelected}`);
  console.log(cardSelected);
  selectedCard.classList.toggle("card");
  selectedCard.classList.toggle("expandedCard");

  let profileDetails = selectedCard.getElementsByClassName("profileDetails");
  for (let i = 0; i < profileDetails.length; i++) {
    profileDetails[i].classList.toggle("hidden");
  }
};

EntrySelected = (entrySelected) => {
  // const name = entrySelected.path[1].getElementsByClassName("name")[0].innerText;
  // console.log(name);
  // window.location.href = `adminForm.php?name=${name}`;
  console.log('succesS?')
};

GenerateCompanyList = (information) => {
  let companyList = [];
  information.forEach((company) => {
    let newCompany = new Company(
      company["CompanyID"],
      company["CompanyName"],
      company["AddressID"],
      company["CompanyProfile"],
      company["Founded"],
      company["CurrentLogo"]
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
      platform["PlatformID"],
      platform["CompanyID"],
      platform["ManufacturerID"],
      platform["PlatformName"],
      platform["PlatformModel"],
      platform["PlatformFamily"],
      platform["PlatformLogo"],
      platform["NumberShipped"],
      platform["FirstReleased"],
      platform["PlatformProfile"]
    );
    platformList.push(newPlatform);
  });
  return platformList;
};

GenerateAddressList = (information) => {
  let addressList = [];
  information.forEach((address) => {
    let newAddress = new Address(
      address["AddressID"],
      address["StreetNumber"],
      address["StreetName"],
      address["AddState"],
      address["Country"],
      address["Code"]
    );
    addressList.push(newAddress);
  });
  return addressList;
};
