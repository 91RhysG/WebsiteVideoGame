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

    //Determines the table that is being altered along with the entry and performs a change in the database to satisfy the request.
    function SubmitDatabaseRequest($conn, $table, $postInformation)
    {
        if (!empty($postInformation) && !empty($table))
        {
            // foreach($postInformation as $value){
            //     echo "<script>console.log('" . $value . "');</script>";
            // }

            // echo "<script>console.log('" . json_encode($postInformation) . "')</script>";
            try
            {
                switch ($table)
                {
                    case 'Company':
                        if ($postInformation['idValue'] > -1)
                        {
                            $this->UpdateEntry($conn, 'Company', $postInformation);
                        }
                        else
                        {
                            //$this->CreateEntry('Company', $postInformation);
                        }
                        break;
                    case 'Address':
                        break;
                    case "Game":
                        break;
                    case "Peripheral":
                        break;
                    case "Platform":
                        break;
                    default:
                        echo "<script>console.log('Unable to locate the correct table, table requested: '" . $table . "')</script>";
                        break;
                }
            }
            catch (PDOException $ex)
            {
                echo ("An exception has occurred." . $ex);
            }
        }
    }

    function UpdateEntry($conn, $table, $postInformation)
    {
        if (!empty($postInformation) && !empty($table))
        {
            switch ($table)
            {
                case 'Company':
                    $sqlQuery = "UPDATE Company SET AddressID = :addressID, CompanyName = :companyName, 
                    CompanyProfile = :companyProfile, Founded = :founded, CurrentLogo = :currentLogo
                    WHERE CompanyID = :companyID;";
                    $address = $postInformation['addressValue'];
                    $name = $postInformation['nameValue'];
                    $profile = $postInformation['profileValue'];
                    $founded = $postInformation['foundedValue'];
                    $logo = $postInformation['logoValue'];
                    $id = $postInformation['idValue'];

                    $stmt = $conn->prepare($sqlQuery);
                    $stmt->bindParam(':addressID', $address);
                    $stmt->bindParam(':companyName', $name);
                    $stmt->bindParam(':companyProfile', $profile);
                    $stmt->bindParam(':founded', $founded);
                    $stmt->bindParam(':currentLogo', $logo);
                    $stmt->bindParam(':companyID', $id);
                    $stmt->execute();
                    break;
                case 'Address':
                    break;
                case "Game":
                    break;
                case "Peripheral":
                    break;
                case "Platform":
                    break;
                default:
                    echo "<script>console.log('Unable to locate the correct table, table requested: '" . $table . "')</script>";
                    break;
            }
        }
        function CreateEntry($table, $postInformation)
        {
            if (!empty($postInformation))
            {
                echo "<script>console.log('inside create!');</script>";
            }
        }
    }
}
