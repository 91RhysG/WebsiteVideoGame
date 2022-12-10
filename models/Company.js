/*
Rhys Gillham

This is the model that corresponds with a Company and contains all methods and properties of one.
The model can unpack itself to a form, list, or card as required to enable for one location to make changes. There are setters and getters however may be removed at a later date.
*/
class Company {
  //The base constructor for a Company.
  constructor(
    companyID,
    companyName,
    addressID,
    companyProfile,
    founded,
    currentLogo
  ) {
    this.companyID = companyID;
    this.companyName = companyName;
    this.addressID = addressID;
    this.companyProfile = companyProfile;
    this.founded = founded;
    this.currentLogo = currentLogo;
  }

  //When called, it will target an id to attempt to insert a form into.
  // ********** Currently not finished **********
  toForm = (elementToTarget) => {
    let node = document.getElementById(elementToTarget);
    node.innerHTML = `
    <div class="row">
    <label>ID</label>
      <input value="${this.companyID}">
    </div>
    <div class="row">
    <label>Name</label>
      <input value="${this.companyName}">
    </div>
    <div class="row">
    <label>Address ID</label>
      <input value="${this.addressID}">
    </div>
    <div class="row">
    <label>Profile</label>
      <input value="${this.companyProfile}">
    </div>
    <div class="row">
    <label>Founded</label>
      <input value="${this.founded}">
    </div>
    <div class="row">
    <label>Logo URL</label>
      <input value="${this.currentLogo}">
    </div>
    `;
  };

  //When called, it will target an id to attempt to insert a row of data into a table.
  toTableBody = (elementToTarget) => {
    let node = document.getElementById(elementToTarget);

    node.innerHTML += `
    <tr id="companyID${this.companyID}" class="tableEntry" form="formCompany${
      this.companyID
    }">
    <td class="table" hidden>Company</td>
    <td class='id'>${this.companyID}</td>  
    <td>${this.companyName}</td> 
    <td>${this.addressID}</td> 
    <td>${this.companyProfile.slice(0, 10)}</td> 
    <td>${this.founded}</td> 
    <td><img height="20rem" src="${this.currentLogo}" alt="The logo for ${
      this.companyName
    }">
    </td> 
    </tr> 
    `;
  };

  //When called, it will attempt to insert a card into an id called mainContent, this is the designated id for the middle of a page.
  toCard = () => {
    let node = document.getElementById("mainContent");
    let profileDetails = this.companyProfile;

    // ********** This currently does not catch slicing issues **********
    if (this.companyProfile.length > 30) {
      profileDetails = this.companyProfile.slice(0, 30) + "...";
    }

    node.innerHTML += `
      <section id="${this.companyID}" class="container-fluid row card col-6 g-2" onclick="CardSelected(${this.companyID});">
      <div class='col-12 row'>
        <div class="col cardContent">
          <div>
            <h5>
              ${this.companyName}
            </h5>
          </div>          
          <div>
            <p>
              ${this.addressID}
            </p>
          </div>
          <div>Founded: ${this.founded}</div>
        </div>
        <div class="col-6 justify-content-center">
          <div>
            <img  class="logoImage" src="${this.currentLogo}" alt="The logo for ${this.companyName}" >
          </div>
        </div>      
      </div>        
      <div class="col row seperator">
        <div>
          <p class='profileDetails'>
            ${profileDetails}
          </p>
          <p class='profileDetails hidden'>
            ${this.companyProfile}
          </p>
      </div>
      </section>`;
  };

  //#region Get and Set
  //Set All
  set CompanyID(companyID) {
    this.companyID = companyID;
  }

  set CompanyName(companyName) {
    this.companyName = companyName;
  }

  set AddressID(addressID) {
    this.addressID = addressID;
  }

  set CompanyProfile(companyProfile) {
    this.companyProfile = companyProfile;
  }

  set Founded(founded) {
    this.founded = founded;
  }

  set Logo(currentLogo) {
    this.currentLogo = currentLogo;
  }

  //Get All
  get CompanyID() {
    return this.companyID;
  }

  get CompanyName() {
    return this.companyName;
  }

  get AddressID() {
    return this.addressID;
  }

  get CompanyProfile() {
    return this.companyProfile;
  }

  get Founded() {
    return this.founded;
  }

  get Logo() {
    return this.currentLogo;
  }

  //#endregion
}
