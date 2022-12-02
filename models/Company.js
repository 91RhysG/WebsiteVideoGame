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

  toCard = () =>
  {
    let node = document.getElementById('mainContent')
    console.log('inside tocard')
    node.innerHTML += `
      <section class="cardLayout col-4 row outline">
        <div class="col">
          <div>Company Name: ${this.companyName}</div>
          <div>Founded: ${this.founded}</div>
        </div>
        <div class="col">
          <div>Logo: ${this.logoPath}</div>
          <div>Profile: ${this.CompanyProfile}</div>
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

  set Logo(logoPath) {
    this.currentLogo = logoPath;
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
