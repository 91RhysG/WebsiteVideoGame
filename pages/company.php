<?php


?>
<!DOCTYPE html>
<html lang="en">
<meta name="description" content="Browse Companies">
<meta name="keywords" content="one, two, three">

<title>Home Page</title>

<head>
    <?php include_once("../shared/head.php"); ?>
    <script type='text/javascript' src='../models/Company.js'></script>
    <?php
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