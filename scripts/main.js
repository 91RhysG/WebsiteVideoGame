/*
Rhys Gillham

Contains all of the JavaScript code that does not fall neatly within a model or may be required across many models.
*/

//#region Node.js Code
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

//#endregion

//Adds listeners to any element that is designated with the card CSS class.
AddCardListeners = () => {
  const cardList = document.getElementsByClassName("card");
  for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener("click", CardSelected);
  }
};

//Adds listeners to any element that is designated with the tableEntry CSS class.
AddTableListeners = () => {
  const entryList = document.getElementsByClassName("tableEntry");
  for (let i = 0; i < entryList.length; i++) {
    entryList[i].addEventListener("click", EntrySelected); //Does not seem to like taking parameters, passes the full event.
  }
};

//Takes in the event, selects the correct card via the id and toggles styling based on expectations.
CardSelected = (cardSelected) => {
  let selectedCard = document.getElementById(`${cardSelected}`);
  selectedCard.classList.toggle("card");
  selectedCard.classList.toggle("expandedCard");

  let profileDetails = selectedCard.getElementsByClassName("profileDetails");
  for (let i = 0; i < profileDetails.length; i++) {
    profileDetails[i].classList.toggle("hidden");
  }
};

//When a user selects an entry it will load values into cookies to be used at a later stage, it will then direct to the adminForm.php.
// ********** Will have to be moved into an admin only JS file that only loads once authorised. **********
EntrySelected = (entrySelected) => {
  //The image tag is nested differently, this throws off the setting of tables and values, must be traversed one layer deeper.
  if (entrySelected.path[0].nodeName === "IMG") {
    document.cookie = `table=${
      entrySelected.path[2].getElementsByClassName("table")[0].innerText
    }`;
    document.cookie = `id=${
      entrySelected.path[2].getElementsByClassName("id")[0].innerText
    }`;
  } else {
    document.cookie = `table=${
      entrySelected.path[1].getElementsByClassName("table")[0].innerText
    }`;
    document.cookie = `id=${
      entrySelected.path[1].getElementsByClassName("id")[0].innerText
    }`;
  }
  window.location.href = "adminForm.php";
};

//When the adminForm.php is loaded this will populate the correct form for the information that is to be altered.
// ********** Will have to be moved into an admin only JS file that only loads once authorised. **********
GenerateForm = (elementToTarget, tableOriginated, information) => {
  switch (tableOriginated) {
    case "Company":
      let company = new Company(
        information[0]["CompanyID"],
        information[0]["CompanyName"],
        information[0]["AddressID"],
        information[0]["CompanyProfile"],
        information[0]["Founded"],
        information[0]["CurrentLogo"]
      );
      company.toForm(elementToTarget);
      break;
    case "Address":
      break;
    case "Game":
      break;
    case "Peripheral":
      break;
    case "Platform":
      break;
    default:
      break;
  }
};

//Will accept data and then unpack it into a Company model, may need to add validation.
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

//Will accept data and then unpack it into a Game model, may need to add validation.
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

//Will accept data and then unpack it into a Peripheral model, may need to add validation.
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

//Will accept data and then unpack it into a Platform model, may need to add validation.
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

//Will accept data and then unpack it into a Address model, may need to add validation.
//********** Currently not used and not tested **********
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
