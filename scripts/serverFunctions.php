<?php
/*
Rhys Gillham

This is the class that handles all database interactions, an instance must be created to validate connection information.
When moved to a server it will ensure that the functions that should be restricted or allowed are validated often.
*/

class ServerFunctions
{

    //Performs the initial connection to the server.
    function Connect($host, $username, $dbName, $password)
    {
        include_once('inputChecking.php');
        //XAMPP does not require a password, this side steps a future issue.
        if (!InputChecker::StringIsNullOrEmpty($password))
        {
            try
            {
                $conn = new PDO("mysql:host=$host;dbname=$dbName", $username);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            }
            catch (PDOException $e)
            {
                echo '<script>console.log("Connection has failed ' . $e->getMessage() . '");</script>';
                return null;
            }
        }
        else
        {
            try
            {
                $conn = new PDO("mysql:host=$host;dbname=$dbName", $username, $password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            }
            catch (PDOException $e)
            {
                echo '<script>console.log("Connection has failed ' . $e->getMessage() . '");</script>';
                return null;
            }
        }
    }

    //Allows for one to all columns to be seleted in a table and how to order data.
    function GetTableList($conn, $tableName, $selectCondition, $orderRequest)
    {
        $sqlQuery = 'SELECT ' . $selectCondition . ' FROM ' . $tableName . ' ORDER BY ' . $orderRequest . '';
        $sqlQuery = $conn->prepare($sqlQuery);
        $sqlQuery->execute();

        return $sqlQuery;
    }

    //Converts database information to a generic array to allow for like to like movement of data.
    function ConvertToList($sqlResults)
    {
        $returnList = array();
        while ($entry = $sqlResults->fetch())
        {
            $returnList[] = $entry;
           
        }
        return $returnList;
    }

    //Performs a targeted search in the database, may require further validation.
    function GetRequestedEntry($conn, $table, $id)
    {
        $sqlQuery = 'SELECT * FROM ' . $table . ' WHERE ' . $table . 'ID = ' . $id . '';

        $sqlQuery = $conn->prepare($sqlQuery);
        $sqlQuery->execute();

        return $this->ConvertToList($sqlQuery);
    }
}
