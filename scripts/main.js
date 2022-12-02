/*

                    ----------- CONNECTION TO NODE CODE -----------

This is the node.js portion of the code and cannot be run in the browser, I am keeping this for if/when I reach the node.js backend integration.

console.log("main js loaded");


function Connection()
{
    console.log("Inside Connection")
    let mysql = require('../node_modules/mysql');
    alert('Hi there!');

    console.log('require completed')
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        //password: '',
        database: 'gamingdb'
    });
    connection.connect(function (err)
    {
        if (err)
        {
            return console.error(`error: ${err.message}`);
        }

        console.log('Connected to MySQL server.');
    });



}

export { Connection };
*/
GenerateCompanyList = (information) => {
    let companyList = [];
    information.forEach(company =>
    {
        let newCompany = new Company(company[0], company[2], company[1], company[3], company[4], company[5]);
        companyList.push(newCompany);        
    });
    console.log(companyList);
    return companyList;
};