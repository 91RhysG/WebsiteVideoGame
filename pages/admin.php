<?php


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
    //Get all company data
    $sqlResults = $dbFunctions->GetTableList($conn, 'Company', '*', 'CompanyID');
    $companyInformation = $dbFunctions->ConvertToList($sqlResults);
    //Get all address data
    $sqlResults = $dbFunctions->GetTableList($conn, 'Address', '*', 'AddressID');
    $addressInformation = $dbFunctions->ConvertToList($sqlResults);
    //Get all platform data
    $sqlResults = $dbFunctions->GetTableList($conn, 'Platform', '*', 'PlatformID');
    $platformInformation = $dbFunctions->ConvertToList($sqlResults);
    //Get all game data
    $sqlResults = $dbFunctions->GetTableList($conn, 'Game', '*', 'GameID');
    $gameInformation = $dbFunctions->ConvertToList($sqlResults);
    //Get all peripheral data
    $sqlResults = $dbFunctions->GetTableList($conn, 'Peripheral', '*', 'PeripheralID');
    $peripheralInformation = $dbFunctions->ConvertToList($sqlResults);
    ?>
</head>


<body>
    <?php include_once("../shared/navbar.php"); ?>

    <div id="formLocation"></div>
    <div class="row">
        <aside class="col-2 outline">
            LOREM
        </aside>
        <main class="col-8 outline container">
            <h1 class="text-center">Admin Tools</h1>
            <section id="mainContent" class="container-fluid row justify-content-center">
                <ul class="nav nav-tabs" id="formTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="company-tab" data-bs-toggle="tab" data-bs-target="#company-tab-pane" type="button" role="tab" aria-controls="company-tab-pane" aria-selected="true">Company</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="address-tab" data-bs-toggle="tab" data-bs-target="#address-tab-pane" type="button" role="tab" aria-controls="address-tab-pane" aria-selected="false">Address</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="platform-tab" data-bs-toggle="tab" data-bs-target="#platform-tab-pane" type="button" role="tab" aria-controls="platform-tab-pane" aria-selected="false">Platform</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="game-tab" data-bs-toggle="tab" data-bs-target="#game-tab-pane" type="button" role="tab" aria-controls="game-tab-pane" aria-selected="false">Game</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="peripheral-tab" data-bs-toggle="tab" data-bs-target="#peripheral-tab-pane" type="button" role="tab" aria-controls="peripheral-tab-pane" aria-selected="false">Peripheral</button>
                    </li>
                </ul>
                <div class="tab-content" id="formTabsContent">
                    <div class="tab-pane fade show active" id="company-tab-pane" role="tabpanel" aria-labelledby="company-tab" tabindex="0">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Company ID</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Address ID</th>
                                    <th scope="col">Company Profile</th>
                                    <th scope="col">Founded</th>
                                    <th scope="col">Current Logo</th>
                                </tr>
                            </thead>
                            <tbody id="companyTableBody">
                                <script type=text/javascript>
                                    const companyList = GenerateCompanyList(<?php echo json_encode($companyInformation); ?>);
                                    companyList.forEach(company => {
                                        company.toTableBody("companyTableBody", "formLocation");
                                    });
                                    //AddTableListeners();
                                </script>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="address-tab-pane" role="tabpanel" aria-labelledby="address-tab" tabindex="0">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Address ID</th>
                                    <th scope="col">Street Number</th>
                                    <th scope="col">Street Name</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Postcode</th>
                                </tr>
                            </thead>
                            <tbody id="addressTableBody">
                                <script type=text/javascript>
                                    const addressList = GenerateAddressList(<?php echo json_encode($addressInformation); ?>);
                                    addressList.forEach(address => {
                                        address.toTableBody("addressTableBody");
                                    });
                                </script>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="platform-tab-pane" role="tabpanel" aria-labelledby="platform-tab" tabindex="0">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Platform ID</th>
                                    <th scope="col">Company ID</th>
                                    <th scope="col">Manufacturer ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Family</th>
                                    <th scope="col">Logo</th>
                                    <th scope="col">Shipped</th>
                                    <th scope="col">Released</th>
                                    <th scope="col">Profile</th>
                                </tr>
                            </thead>
                            <tbody id="platformTableBody">
                                <script type=text/javascript>
                                    const platformList = GeneratePlatformList(<?php echo json_encode($platformInformation); ?>);
                                    platformList.forEach(platform => {
                                        platform.toTableBody("platformTableBody");
                                    });
                                </script>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="game-tab-pane" role="tabpanel" aria-labelledby="game-tab" tabindex="0">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Game ID</th>
                                    <th scope="col">Platform ID</th>
                                    <th scope="col">Developer ID</th>
                                    <th scope="col">Publisher ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Profile</th>
                                    <th scope="col">Shipped</th>
                                    <th scope="col">Released</th>
                                </tr>
                            </thead>
                            <tbody id="gameTableBody">
                                <script type=text/javascript>
                                    const gameList = GenerateGameList(<?php echo json_encode($gameInformation); ?>);
                                    gameList.forEach(game => {
                                        game.toTableBody("gameTableBody");
                                    });
                                </script>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="peripheral-tab-pane" role="tabpanel" aria-labelledby="peripheral-tab" tabindex="0">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Peripheral ID</th>
                                    <th scope="col">Manufacturer ID</th>
                                    <th scope="col">Platform ID</th>
                                    <th scope="col">Video Game ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Profile</th>
                                    <th scope="col">Number Shipped</th>
                                    <th scope="col">Released</th>
                                </tr>
                            </thead>
                            <tbody id="peripheralTableBody">
                                <script type=text/javascript>
                                    const peripheralList = GeneratePeripheralList(<?php echo json_encode($peripheralInformation); ?>);
                                    peripheralList.forEach(peripheral => {
                                        peripheral.toTableBody("peripheralTableBody");
                                    });
                                </script>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
        <aside class="col-2 outline">
            LOREM
        </aside>
    </div>
    <?php include_once("../shared/footer.php"); ?>

</body>

</html>