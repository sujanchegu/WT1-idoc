<?php
/**
* import checksum generation utility
* You can get this utility from https://developer.paytm.com/docs/checksum/
*/
require_once("encdec_paytm.php");

/* initialize an array */
$paytmParams = array();

/* body parameters */
$paytmParams["body"] = array(

    /* Find your MID in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys */
    "mid" => "DabXzK14662459679123",

    /* Possible value are "GENERIC", "FIXED", "INVOICE" */
    "linkType" => "FIXED",

    /* Enter your choice of payment link description here, special characters are not allowed */
    "linkDescription" => "eCampus",

    /* Enter your choice of payment link name here, special characters and spaces are not allowed */
    "linkName" => "WebApp",

    "expiryDate" => "31/12/2019",
    
    "amount" => "1.00",
);

/**
* Generate checksum by parameters we have in body
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
$checksum = getChecksumFromString(json_encode($paytmParams["body"], JSON_UNESCAPED_SLASHES), "rqXVnLUvTW3ihsPj");

/* head parameters */
$paytmParams["head"] = array(

    /* This will be AES */
    "tokenType"	=> "AES",

    /* put generated checksum value here */
    "signature"	=> $checksum
);

/* prepare JSON string for request */
$post_data = json_encode($paytmParams, JSON_UNESCAPED_SLASHES);

/* for Staging */
$url = "https://securegw-stage.paytm.in/link/create";

/* for Production */
// $url = "https://securegw.paytm.in/link/create";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json")); 
$response = curl_exec($ch);

$link = substr($response,strpos($response, "longUrl")+9,strpos($response, "shortUrl")-strpos($response, "longUrl")-11);
// echo $link;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Payment Gateway</title>
</head>
<body>
    <center>
    <h1>Do not refresh the page or press back button</h1>
    </center>
    <script>
        window.location.href = <?php echo $link?>;
    </script>
</body>
</html>