<html>
<head>
    <title>
        Project Chat
    </title>
    <link rel="stylesheet" href="public/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="public/vendors/font-awesome-4.7.0/css/font-awesome.min.css">
    <script src="public/vendors/jquery/jquery-3.1.1.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="form-group">
            <form id="input" method="post" class="form-group" style="text-align: center">
                <input type="text" class="form-control" name="message">
                <input type="submit" class="btn btn-primary" name="submit" onclick="return send()">
            </form>
        </div>
        <div id="newMessage" class="row" style="padding: 50px">

        </div>
    </div>
</body>
<script>
    function send(){
        $.ajax({
            type: 'post',
            url: 'config/updateMessage.php',
            data: $('#input').serialize(),
            success: function(html){
            }
        });
        return false;
    }
    
    $(document).ready(function () {

        setInterval(function () {
//            alert("Hello");
            $.ajax({
                url: 'config/refreshMessage.php',
                //dataType: 'json',
                success: function (html) {
                    $('#newMessage').html(html);
                }
            });
        }, 100);
    });
</script>
</html>
