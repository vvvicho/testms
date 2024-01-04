<?php

/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

*/

if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}

$page = htmlspecialchars($_GET["p"]);

if(!$page){
    $page = "yaraHome";
}

$time = time();

//echo ($time);






?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Atfarm is easy-to-use precision agriculture software. Get instant insights for your fields and crops to improve nitrogen use efficiency. Sign up now for FREE!">
    <meta name="keywords" content="Yara, Farming, Harvest, Crops, Fetizer">
    <meta name="author" content="Yara">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="assets/scss/main.css?v=<?php echo ($time); ?>">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="assets/scss/yaraGlobal.css?v=<?php echo ($time); ?>">
    <title>Precision farming made simple – Atfarm app by Yara</title>


<body data-page="<?php echo ($page); ?>" class="<?php echo ($page); ?>">


    <?php
        require_once ABSPATH . $page . '.php';   
    ?>
    


</body>

</html>