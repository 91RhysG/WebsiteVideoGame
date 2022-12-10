<?php
/*
Rhys Gillham

This page contains all of the platforms and their information from the server, they are stored within cards that move and expand with the page and user selections.
*/
?>
<!DOCTYPE html>
<html lang="en">
<meta name="description" content="Browse Platforms">
<meta name="keywords" content="one, two, three">

<title>Platform Page</title>

<head>
    <?php include_once("../shared/head.php"); ?>
    <!-- Model -->
    <script type='text/javascript' src='../models/Platform.js'></script>
    <?php
    //SQL query
    $sqlResults = $dbFunctions->GetTableList($conn, 'Platform', '*', 'PlatformName');
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
            <h1 class="text-center">Platforms</h1>
            <section id="mainContent" class="container-fluid row justify-content-center">
            </section>
            <script type=text/javascript>
                //Encodes the php array to a useable product for JavaScript to populate the page.
                const platformList = GeneratePlatformList(<?php echo json_encode($information); ?>);
                platformList.forEach(platform => {
                    platform.toCard()
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