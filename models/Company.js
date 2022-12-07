class Company {
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

  toString = () => {
    document.writeln(
      `Company Name ${this.companyName} and founded in ${this.founded} <br>`
    );
  };

  toTableBody = (elementToTarget) => {
    let node = document.getElementById(elementToTarget);

    node.innerHTML += `
    <tr class="tableEntry">
    <td>${this.companyID}</td>  
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

  toCard = () => {
    let node = document.getElementById("mainContent");
    let profileDetails = this.companyProfile;

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

  //Set all
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
}
