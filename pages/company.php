<?php
/*
Rhys Gillham

This page contains all of the companies and their information from the server, they are stored within cards that move and expand with the page and user selections.
*/
?>
<!DOCTYPE html>
<html lang="en">
<meta name="description" content="Browse Companies">
<meta name="keywords" content="one, two, three">

<title>Companies</title>

<head>
    <?php include_once("../shared/head.php"); ?>
    <!-- Model -->
    <script type='text/javascript' src='../models/Company.js'></script>
    <?php
    //SQL query
    $sqlResults = $dbFunctions->GetTableList($conn, 'Company', '*', 'CompanyName');
    $information = $dbFunctions->ConvertToList($sqlResults);
    ?>
</head>

<body>
    <?php include_once("../shared/navbar.php"); ?>
    <div class="row">
        <aside class="col-2 outline">
            LOREM
        </aside>
        <main class="col-8 outline container">
            <h1 class="text-center">Companies</h1>
            <section id="mainContent" class="container-fluid row justify-content-center">
            </section>
            <script type=text/javascript>
                //Encodes the php array to a useable product for JavaScript to populate the page.
                const companyList = GenerateCompanyList(<?php echo json_encode($information); ?>);
                companyList.forEach(company => {
                    company.toCard()
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