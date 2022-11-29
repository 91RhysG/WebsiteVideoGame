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