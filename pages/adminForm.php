<?php
/*
Rhys Gillham

This page takes in cookies that were set from the expected previous page (admin.php) and return a form that can be altered to allow the database to be updated.
If there are no cookies present it will generate a blank form for all models and display as required to the user to submit information required in order to complete entry.
*/
session_start(); //Needs to start otherwise cannot access $_COOKIE.
?>
<!DOCTYPE html>
<html lang="en">
<meta name="description" content="Admin Tools">
<meta name="keywords" content="one, two, three">

<title>Admin Tools</title>

<head>
    <?php
    include_once("../shared/head.php");
    ?>
    <!-- Imports all models available for the website. -->
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
    //Call in the cookies set by the previous page.
    if (isset($_COOKIE['table']) && isset($_COOKIE['id']))
    {
        $requestedTable = $_COOKIE['table'];
        $requestedID = $_COOKIE['id'];
        $entryInformation = $dbFunctions->GetRequestedEntry($conn, $requestedTable, $requestedID);
        $pageSuccessful = true;
    }
    else
    {
        echo "<h1 class='text-center'>Page has not been accessed correctly.</h1>";
        $pageSuccessful = false;
    }
    ?>
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
                //Generates a form pointing at the mainContent area of the page to provide consistency to all pages.
                GenerateForm('mainContent', '<?php echo $requestedTable ?>', <?php echo json_encode($entryInformation); ?>);
            </script>
        </main>
        <aside class="col-2 outline">
            LOREM
        </aside>
    </div>
    <?php include_once("../shared/footer.php"); ?>
</body>

</html>