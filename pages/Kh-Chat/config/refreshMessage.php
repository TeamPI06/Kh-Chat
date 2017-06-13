<?php
//echo "<script>alert('Love you');</script>";
require_once ('configdb.php');
$sql = "SELECT * FROM messages";
$result = $conn->query($sql);
//echo $result->num_rows;
while($row=$result->fetch_assoc()){
    echo "<div class=\"row\">
                <div class=\"col-md-3\">
                    <div class=\"row\">
                        <strong>".$row['user']."</strong>
                    </div>
                    <div class=\"row\" style=\"color: grey\">
                        <i>".$row['timestamp']."</i>
                    </div>
                </div>
                <div class=\"row\" style=\"text-align: center;\">
                    ".$row['message']."
                </div>
            </div>";
}