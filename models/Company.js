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
  // ********** Currently not finished -> May be able to change to appending elements. **********
  // ********** Look into submitting full form as JSON and change a title value to show updated. **********
  toForm = (elementToTarget) => {
    let node = document.getElementById(elementToTarget);
    node.innerHTML = `
    <form action="admin.php" method="post" id="updatedForm" name="updatedForm">
    <div class="row mb-3">
      <label for="idValue" class="col-sm-2 col-form-label" name="idValue" hidden>ID</label>
      <div class="col-sm-10">
        <input id="idValue" name="idValue" type="text" class="form-control-plaintext" hidden required value="${this.companyID}">
      </div>      
    </div>
    <div class="row mb-3">
      <label for="nameValue" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input id="nameValue" name="nameValue" type="text" class="form-control" required value="${this.companyName}">
      </div>      
    </div>
    <div class="row mb-3">
      <label for="addressValue" class="col-sm-2 col-form-label">Address</label>
      <div class="col-sm-10">
        <input id="addressValue" name="addressValue" type="text" class="form-control" required value="${this.addressID}">
      </div>      
    </div>
    <div class="row mb-3">
      <label for="profileValue" class="col-sm-2 col-form-label">Profile</label>
      <div class="col-sm-10">
        <textarea id="profileValue" name="profileValue" type="text" class="form-control" required rows="10" value="">${this.companyProfile}</textarea>
      </div>      
    </div>
    <div class="row mb-3">
      <label for="foundedValue" class="col-sm-2 col-form-label">Founded</label>
      <div class="col-sm-10">
        <input id="foundedValue" name="foundedValue" type="text" class="form-control" required value="${this.founded}">
      </div>      
    </div>
    <div class="row mb-3">
      <label for="logoValue" class="col-sm-2 col-form-label">Logo</label>
      <div class="col-sm-10">
        <input id="logoValue" name="logoValue" type="text" class="form-control" required value="${this.currentLogo}">
      </div>      
    </div>
    <div class="col-12 mb-3 d-md-flex justify-content-md-center">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>    
    </form>
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
