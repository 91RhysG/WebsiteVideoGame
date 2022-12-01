<?php


?>
<!DOCTYPE html>
<html lang="en">
<meta name="description" content="Browse Companies">
<meta name="keywords" content="one, two, three">

<title>Home Page</title>

<?php include_once("../shared/head.php"); ?>

<body>
    <?php include_once("../shared/navbar.php"); ?>
    <?php $sqlResults = $dbFunctions->GetTableList($conn, 'Company', '*', 'CompanyName');
    $information = $dbFunctions->ConvertToCompany($sqlResults);
    ?>
    <div class="row">
        <aside class="col-2 outline">
            LOREM
        </aside>
        <main class="col-8 outline">
            <h1>COMPANY PAGE</h1>
            <script type=text/javascript>
                var information = <?php echo json_encode($information); ?>;
            </script>


        </main>
        <aside class="col-2 outline">
            LOREM
        </aside>
    </div>


    <?php include_once("../shared/footer.php"); ?>

</body>

</html>