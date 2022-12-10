/*
Rhys Gillham

This is the model that corresponds with a Peripheral and contains all methods and properties of one.
The model can unpack itself to a form, list, or card as required to enable for one location to make changes. There are setters and getters however may be removed at a later date.
*/
class Peripheral {
  //The base constructor for a Peripheral
  constructor(
    peripheralID,
    manufacturerID,
    platformID,
    videoGameID,
    peripheralName,
    peripheralType,
    peripheralProfile,
    numberShipped,
    firstReleased
  ) {
    this.peripheralID = peripheralID;
    this.manufacturerID = manufacturerID;
    this.platformID = platformID;
    this.videoGameID = videoGameID;
    this.peripheralName = peripheralName;
    this.peripheralType = peripheralType;
    this.peripheralProfile = peripheralProfile;
    this.numberShipped = numberShipped;
    this.firstReleased = firstReleased;
  }

  //When called, it will target an id to attempt to insert a row of data into a table.
  toTableBody = (elementToTarget) => {
    let node = document.getElementById(elementToTarget);

    node.innerHTML += `
    <tr id="peripheralID${this.peripheralID}" class="tableEntry">
    <td>${this.peripheralID}</td>  
    <td>${this.manufacturerID}</td> 
    <td>${this.platformID}</td>  
    <td>${this.videoGameID}</td> 
    <td>${this.peripheralName}</td> 
    <td>${this.peripheralType}</td> 
    <td>${this.peripheralProfile.slice(0, 10)}</td> 
    <td>${this.numberShipped}</td> 
    <td>${this.firstReleased}</td> 
    </td> 
    </tr>
    `;
  };

  /*
  When called, it will attempt to insert a card into an id called mainContent, this is the designated id for the middle of a page.
   ******************* Formatting of the card is off *******************
   */
  toCard = () => {
    let node = document.getElementById("mainContent");
    node.innerHTML += `
      <section id="${this.peripheralID}" class="container card col row g-2" onclick="CardSelected(${this.peripheralID});">
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

  //#region Get and Set
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
  //#endregion
}
