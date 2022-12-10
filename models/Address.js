/*
Rhys Gillham

This is the model that corresponds with an Address and contains all methods and properties of one.
*/
class Address {
  //The base constructor for a Company.
  constructor(addressID, streetNumber, streetName, addState, country, code) {
    this.addressID = addressID;
    this.streetNumber = streetNumber;
    this.streetName = streetName;
    this.addState = addState;
    this.country = country;
    this.code = code;
  }

  //When called, it will target an id to attempt to insert a row of data into a table.
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
