<?php
/*
Rhys Gillham

This page contains all of the peripherals and their information from the server, they are stored within cards that move and expand with the page and user selections.
*/
?>
<!DOCTYPE html>
<html lang="en">
<meta name="description" content="Browse Peripherals">
<meta name="keywords" content="one, two, three">

<title>Peripherals</title>

<head>
    <?php include_once("../shared/head.php"); ?>
    <!-- Model -->
    <script type='text/javascript' src='../models/Peripheral.js'></script>
    <?php
    //SQL query
    $sqlResults = $dbFunctions->GetTableList($conn, 'Peripheral', '*', 'PeripheralName');
    $information = $dbFunctions->ConvertToList($sqlResults);
    ?>
</head>

<body>
    <?php include_once("../shared/navbar.php"); ?>
    <div class="row">
        <aside class="col-2 outline">
            LOREM
        </aside>
        <main class="col-8 outline">
            <h1 class="text-center">Peripherals</h1>
            <section id="mainContent" class="container-fluid row justify-content-center">
            </section>
            <script type=text/javascript>
                //Encodes the php array to a useable product for JavaScript to populate the page.
                const peripheralList = GeneratePeripheralList(<?php echo json_encode($information); ?>);
                peripheralList.forEach(peripheral => {
                    peripheral.toCard()
                });
            </script>
        </main>
        <aside class="col-2 outline">
            LOREM
        </aside>
    </div>
    <?php include_once("../shared/footer.php"); ?>
</body>

</html>