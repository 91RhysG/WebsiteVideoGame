<?php


?>
<!DOCTYPE html>
<html lang="en">
<meta name="description" content="Browse Platforms">
<meta name="keywords" content="one, two, three">

<title>Home Page</title>

<?php include_once("../shared/head.php"); ?>

<body>
    <?php include_once("../shared/navbar.php"); ?>

    <div class="row">
        <aside class="col-2 outline">
            LOREM
        </aside>
        <main class="col-8 outline">
            <h1>Platform PAGE</h1>
            <?php $sqlResults = $dbFunctions->GetTableList($conn, 'Platform', '*', 'PlatformName');
            while ($entry = $sqlResults->fetch())
            {
                echo    '<p>
                            ' . $entry['PlatformName'] . '
                        </p>';
            } ?>

        </main>
        <aside class="col-2 outline">
            LOREM
        </aside>
    </div>

    <?php include_once("../shared/footer.php"); ?>

</body>

</html>