<?php
require_once ("db.php");
$hostname = HOSTNAME;
$dbname = DBNAME;
$usernamedb = DBUSERNAME;
$passworddb = DBPASSWORD;

$conn = mysqli_connect($hostname, $usernamedb, $passworddb, $dbname);

if ($conn->error) {
    die("Cannot connect to database");
}