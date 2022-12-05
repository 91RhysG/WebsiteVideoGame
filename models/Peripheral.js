class Peripheral {
  constructor(
    peripheralID,
    manufacturerID,
    platformID,
    videoGameID,
    perpipheralName,
    peripheralType,
    peripheralProfile,
    numberShipped,
    firstReleased
  ) {
    this.peripheralID = peripheralID;
    this.manufacturerID = manufacturerID;
    this.platformID = platformID;
    this.videoGameID = videoGameID;
    this.perpipheralName = perpipheralName;
    this.peripheralType = peripheralType;
    this.peripheralProfile = peripheralProfile;
    this.numberShipped = numberShipped;
    this.firstReleased = firstReleased;
  }
  toString = () => {
    document.writeln(
      `Peripheral Name ${this.perpipheralName} and number shipped is ${this.numberShipped} <br>`
    );
  };

  toCard = () => {
    let node = document.getElementById("mainContent");
    node.innerHTML += `
      <section class="container card col row g-2">
        <div class="col-6">
          <div>Peripheral Name: ${this.peripheralName}</div>
          <div>First Released: ${this.firstReleased}</div>
        </div>
        <div class="col-6">
          <div>Number Shipped: ${this.numberShipped}</div>
          <div>Profile: ${this.peripheralProfile}</div>
        </div>
      </section>`;
  };

  //Set all
  set PeripheralID(id) {
    this.peripheralID = id;
  }
  set ManufacturerID(id) {
    this.manufacturerID = -1;
  }
  set PlatformID(id) {
    this.platformID = id;
  }
  set VideoGameID(id) {
    this.videoGameID = id;
  }
  set PeripheralName(name) {
    this.PeripheralName = name;
  }
  set PeripheralType(type) {
    this.peripheralType = type;
  }
  set PeripheralProfile(profile) {
    this.peripheralProfile = profile;
  }
  set NumberShipped(numberShipped) {
    this.numberShipped = numberShipped;
  }
  set FirstReleased(firstReleased) {
    this.firstReleased = firstReleased;
  }

  //Get all
  get PeripheralID() {
    return this.peripheralID;
  }
  get ManufacturerID() {
    return this.manufacturerID;
  }
  get PlatformID() {
    return this.platformID;
  }
  get VideoGameID() {
    return this.videoGameID;
  }
  get PeripheralName() {
    return this.PeripheralName;
  }
  get PeripheralType() {
    return this.peripheralType;
  }
  get PeripheralProfile() {
    return this.peripheralProfile;
  }
  get NumberShipped() {
    return this.numberShipped;
  }
  get FirstReleased() {
    return this.firstReleased;
  }
}
