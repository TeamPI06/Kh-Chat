<?php
//if(isset($_POST['submit'])){
    require_once ('configdb.php');
    $message = $_POST['message'];
    $date = date("Y,M, D d");
    echo $date;
    $sql = "INSERT INTO messages (user, timestamp, message) VALUES ('nimol', '$date', '$message')";
    $conn->query($sql);
//    echo "hello";
//}