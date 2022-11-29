<?php


?>
<!DOCTYPE html>
<html lang="en">

<?php include_once("../shared/head.php"); ?>

<body>
    <script type='module'>
        import {
            Connection
        } from '../scripts/main.js';

        Connection();
    </script>
    <?php include_once("../shared/navbar.php"); ?>

    <div class="row">
        <aside class="col-2 outline">
            LOREM
        </aside>
        <main class="col-8 outline">
            <h1>HOME PAGE</h1>
        </main>
        <aside class="col-2 outline">
            LOREM
        </aside>
    </div>


    <?php include_once("../shared/footer.php"); ?>

</body>

</html>