<?php
extract($_POST);


$desc = "Fee Payment for Next Semester";

$conn=mysqli_connect("localhost","id11635269_root","Sujan_13?");
if(!$conn){
    die ('connection failed');
}


mysqli_select_db($conn,"id11635269_ecampus");

$sql = "Select * from OldStudents where username='$username'";
$res=mysqli_query($conn,$sql);
if(!$res){
    die ('query for adding user failed');
}
$c = 0;
while($row = mysqli_fetch_assoc($res))
{
    if($row['password'] == $password){
        $fee = $row['fee'];
        $c = 1;
    }
}

if($c == 0)
{
    die("Invalid Credentials");
}


?>


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Checkout</title>

    <style>
        body {
            font-weight: 100 !important;
        }

        #content {
            background-color: rgba(0, 127, 127, 0.3);
            text-align: center;
            margin: auto;
            margin-top: 10%;
            width: 30%;
            height: 30%;
            padding: 10px;
        }
    </style>
</head>

<body>
    <div id="content">
        <p style="font-size:xx-large;">Checkout Summary</p>
        <form action="createlink.php" method="GET">
            <input type="hidden" id="fee" name="fee">
            <p style="font-size:medium; color:green;">Description: <?php echo $desc; ?><br></p>
            <p style="font-size:medium; color:green;">Amount Payable: <?php echo $fee; ?> <br></p>
            <button type="submit">Pay Here</button>
        </form>
    </div>
    <script>
        var fee = document.getElementById("fee");
        fee.value = <?php echo $fee; ?>;
    </script>
</body>

</html>