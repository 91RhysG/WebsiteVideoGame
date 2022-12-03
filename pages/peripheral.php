<?php


?>
<!DOCTYPE html>
<html lang="en">
<meta name="description" content="Browse Peripherals">
<meta name="keywords" content="one, two, three">

<title>Home Page</title>

<head>
    <?php include_once("../shared/head.php"); ?>
    <script type='text/javascript' src='../models/Peripheral.js'></script>
    <?php
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
            <section id="mainContent" class="row align-items-start">

            </section>
            <script type=text/javascript>
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