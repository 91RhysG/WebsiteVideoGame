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
    this.manufacturerID = manufacturerID;
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

  toTableBody = (elementToTarget) => {
    let node = document.getElementById(elementToTarget);

    node.innerHTML += `
    <tr class="tableEntry">
    <td>${this.platformID}</td>  
    <td>${this.companyID}</td> 
    <td>${this.manufacturerID}</td>  
    <td>${this.platformName}</td> 
    <td>${this.platformModel}</td> 
    <td>${this.platformFamily}</td> 
    <td>
      <img height="20rem" src="${this.platformLogo}" alt="The image for ${this.platformName}">
    </td> 
    <td>${this.numberShipped}</td> 
    <td>${this.firstReleased}</td> 
    <td>${this.platformProfile}</td> 
    </td> 
    </tr>
    `;
  };

  toCard = () => {
    let node = document.getElementById("mainContent");
    node.innerHTML += `
      <section id="${this.platformID}" class="container card col row g-2" onclick="CardSelected(${this.platformID});">
        <div class="col-6">
          <div>Platform Name: ${this.platformName}</div>
          <div>Number Shipped: ${this.numberShipped}</div>
        </div>
        <div class="col-6">
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
