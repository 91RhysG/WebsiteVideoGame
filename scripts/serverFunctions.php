<?php
class ServerFunctions
{

    function Connect($host, $username, $dbName, $password)
    {
        include_once('inputChecking.php');
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

    function GetTableList($conn, $tableName, $selectCondition, $orderRequest)
    {
        $sqlQuery = 'SELECT ' . $selectCondition . ' FROM ' . $tableName . ' ORDER BY ' . $orderRequest . '';
        $sqlQuery = $conn->prepare($sqlQuery);
        $sqlQuery->execute();

        return $sqlQuery;
    }

    function ConvertToList($sqlResults)
    {
        $returnList = array();
        while ($entry = $sqlResults->fetch())
        {
            $returnList[] = $entry;
        }
        return $returnList;
    }

}
