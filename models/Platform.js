class Platform {
  constructor(
    platformID,
    companyID,
    manufacturerID,
    platformName,
    platformModel,
    platformFamily,
    platformLogo,
    numberShipped,
    firstReleased,
    platformProfile
  ) {
    this.platformID = platformID;
    this.companyID = companyID;
    this.manufacturerID = companyID;
    this.platformName = platformName;
    this.platformModel = platformModel;
    this.platformFamily = platformFamily;
    this.platformLogo = platformLogo;
    this.numberShipped = numberShipped;
    this.firstReleased = firstReleased;
    this.platformProfile = platformProfile;
  }

  toString = () => {
    document.writeln(
      `Company Name ${this.gameName} and has shipped ${this.numberShipped} <br>`
    );
  };

  toCard = () => {
    let node = document.getElementById("mainContent");
    node.innerHTML += `
      <section class="cardLayout col-3 row">
        <div class="col">
          <div>Platform Name: ${this.platformName}</div>
          <div>Number Shipped: ${this.numberShipped}</div>
        </div>
        <div class="col">
          <div>First Released: ${this.firstReleased}</div>
          <div>Profile: ${this.platformProfile}</div>
        </div>
      </section>`;
  };

  //Set all
  set PlatformID(platformID) {
    this.platformID = platformID;
  }

  set CompanyID(companyID) {
    this.companyID = companyID;
  }

  set ManufacturerID(manufacturerID) {
    this.manufacturerID = manufacturerID;
  }

  set PlatformName(platformName) {
    this.platformName = platformName;
  }

  set PlatformModel(platformModel) {
    this.platformModel = platformModel;
  }

  set PlatformFamily(platformFamily) {
    this.platformFamily = platformFamily;
  }

  set PlatformLogo(platformLogo) {
    this.platformLogo = platformLogo;
  }

  set NumberShipped(numberShipped) {
    this.numberShipped = numberShipped;
  }

  set FirstReleased(firstReleased) {
    this.firstReleased = firstReleased;
  }

  set PlatformProfile(platformProfile) {
    this.platformProfile = platformProfile;
  }

  //Get All
  get PlatformID() {
    return this.platformID;
  }

  get CompanyID() {
    return this.companyID;
  }

  get ManufacturerID() {
    return this.manufacturerID;
  }

  get PlatformName() {
    return this.platformName;
  }

  get PlatformModel() {
    return this.platformModel;
  }

  get PlatformFamily() {
    return this.platformFamily;
  }

  get PlatformLogo() {
    return this.platformLogo;
  }

  get NumberShipped() {
    return this.numberShipped;
  }

  get FirstReleased() {
    return this.firstReleased;
  }

  get PlatformProfile() {
    return this.platformProfile;
  }
}
