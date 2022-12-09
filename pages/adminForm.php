<?php

if(isset($_GET['name'])){

    echo "<script>console.log('".$_GET['name']."')</script>";
}
else{
    echo "<script>console.log('not being recieved!')</script>";
}
?>
<!DOCTYPE html>
<html lang="en">
<meta name="description" content="Admin Tools">
<meta name="keywords" content="one, two, three">

<title>Home Page</title>

<head>
    <?php
    include_once("../shared/head.php");
    include_once("../scripts/adminTools.php");
    ?>
    <script type='text/javascript' src="../models/Company.js">
    </script>
    <script type='text/javascript' src="../models/Address.js">
    </script>
    <script type='text/javascript' src="../models/Platform.js">
    </script>
    <script type='text/javascript' src="../models/Game.js">
    </script>
    <script type='text/javascript' src="../models/Peripheral.js">
    </script>
    <?php
    // //Get all company data
    // $sqlResults = $dbFunctions->GetTableList($conn, 'Company', '*', 'CompanyID');
    // $companyInformation = $dbFunctions->ConvertToList($sqlResults);
    // //Get all address data
    // $sqlResults = $dbFunctions->GetTableList($conn, 'Address', '*', 'AddressID');
    // $addressInformation = $dbFunctions->ConvertToList($sqlResults);
    // //Get all platform data
    // $sqlResults = $dbFunctions->GetTableList($conn, 'Platform', '*', 'PlatformID');
    // $platformInformation = $dbFunctions->ConvertToList($sqlResults);
    // //Get all game data
    // $sqlResults = $dbFunctions->GetTableList($conn, 'Game', '*', 'GameID');
    // $gameInformation = $dbFunctions->ConvertToList($sqlResults);
    // //Get all peripheral data
    // $sqlResults = $dbFunctions->GetTableList($conn, 'Peripheral', '*', 'PeripheralID');
    // $peripheralInformation = $dbFunctions->ConvertToList($sqlResults);
    // ?>
</head>


<body>
    <?php include_once("../shared/navbar.php"); ?>
    <div class="row">
        <aside class="col-2 outline">
            LOREM
        </aside>
        <main class="col-8 outline container">
            <h1 class="text-center">Data Tools</h1>
            <section id="mainContent" class="container-fluid row justify-content-center">
                
            </section>
            <script type=text/javascript>
            </script>
        </main>
        <aside class="col-2 outline">
            LOREM
        </aside>
    </div>


    <?php include_once("../shared/footer.php"); ?>

</body>

</html>