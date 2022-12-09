class Game {
  constructor(
    videoGameID,
    platformID,
    developerID,
    gamePublisherID,
    gameName,
    gameGenre,
    gameProfile,
    numberShipped,
    firstReleased
  ) {
    this.videoGameID = videoGameID;
    this.platformID = platformID;
    this.developerID = developerID;
    this.gamePublisherID = gamePublisherID;
    this.gameName = gameName;
    this.gameGenre = gameGenre;
    this.gameProfile = gameProfile;
    this.numberShipped = numberShipped;
    this.firstReleased = firstReleased;
  }

  toString = () => {
    document.writeln(
      `Company Name ${this.gameName} and has shipped ${this.numberShipped} <br>`
    );
  };

  toTableBody = (elementToTarget) => {
    let node = document.getElementById(elementToTarget);

    node.innerHTML += `
    <tr id="gameID${this.videoGameID}" class="tableEntry">
    <td>${this.videoGameID}</td>  
    <td>${this.platformID}</td> 
    <td>${this.developerID}</td>  
    <td>${this.gamePublisherID}</td> 
    <td>${this.gameName}</td> 
    <td>${this.gameGenre}</td> 
    <td>${this.gameProfile}</td> 
    <td>${this.numberShipped}</td> 
    <td>${this.firstReleased}</td> 
    </td> 
    </tr>
    `;
  };

  toCard = () => {
    let node = document.getElementById("mainContent");
    node.innerHTML += `
      <section id="${this.videoGameID}" class="container card col row g-2" onclick="CardSelected(${this.videoGameID});">
        <div class="col-6">
          <div>Game Name: ${this.gameName}</div>
          <div>Number Shipped: ${this.numberShipped}</div>
        </div>
        <div class="col-6">
          <div>First Released: ${this.firstReleased}</div>
          <div>Profile: ${this.gameProfile}</div>
        </div>
      </section>`;
  };

  //Set all
  set VideoGameID(id) {
    this.videoGameID = id;
  }

  set PlatformID(id) {
    this.platformID = id;
  }

  set DeveloperID(id) {
    this.developerID = id;
  }

  set GamePublisherID(id) {
    this.gamePublisherID = -1;
  }

  set GameName(gameName) {
    this.gameName = gameName;
  }
  set GameGenre(gameGenre) {
    this.gameGenre = gameGenre;
  }
  set GameProfile(gameProfile) {
    this.gameProfile = gameProfile;
  }
  set NumberShipped(numberShipped) {
    this.numberShipped = numberShipped;
  }
  set FirstReleased(firstReleased) {
    this.firstReleased = firstReleased;
  }

  //Get all
  get VideoGameID() {
    return this.videoGameID;
  }
  get PlatformID() {
    return this.platformID;
  }
  get DeveloperID() {
    return this.developerID;
  }
  get GamePublisherID() {
    return this.gamePublisherID;
  }
  get GameName() {
    return this.gameName;
  }
  get GameGenre() {
    return this.gameGenre;
  }
  get GameProfile() {
    return this.gameProfile;
  }
  get NumberShipped() {
    return this.numberShipped;
  }
  get FirstReleased() {
    return this.firstReleased;
  }
}
