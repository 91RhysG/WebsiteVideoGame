class Company {
  constructor() {
    this.companyID = -1;
    this.companyName = "No Name";
    this.addressID = -1;
    this.companyProfile = "Blank Profile";
    this.founded = "1900";
    this.currentLogo = "Path to file";
  }

  GenerateCard() {
    document.writeln(`Company Name ${companyName} and founded in ${founded}`);
  }

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
