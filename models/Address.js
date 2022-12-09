class Address {
  constructor(addressID, streetNumber, streetName, addState, country, code) {
    this.addressID = addressID;
    this.streetNumber = streetNumber;
    this.streetName = streetName;
    this.addState = addState;
    this.country = country;
    this.code = code;
  }

  toTableBody = (elementToTarget) => {
    let node = document.getElementById(elementToTarget);

      node.innerHTML += `
    <tr id="addressID${this.addressID}" class="tableEntry">
    <td>${this.addressID}</td>  
    <td>${this.streetNumber}</td> 
    <td>${this.streetName}</td>  
    <td>${this.addState}</td> 
    <td>${this.country}</td> 
    <td>${this.code}</td> 
    </td> 
    </tr>
    `;
  };
}