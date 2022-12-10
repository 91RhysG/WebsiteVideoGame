<?php
/*
Rhys Gillham

This is the partial render for the head of each webpage, there are no html tags either opening or closing the content as each page may wish to included additional content and different titles.
*/
?>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- CSS -->
<link href="../css/normalize.css" rel="stylesheet" />
<link href="../css/reset.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link href="../css/style.css" rel="stylesheet" />

<!--Javascript-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
<script type='text/javascript' src='../scripts/main.js'>
</script>
<?php
//Initial set up for connection to the database and constants.
include_once('../scripts/serverFunctions.php');
include_once('../scripts/constants.php');
$dbFunctions = new ServerFunctions();
$conn = $dbFunctions->Connect(Constants::$host, Constants::$username, Constants::$database, null) ?>