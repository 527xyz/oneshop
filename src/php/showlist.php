<?php
header('content-type:text/html;charset=utf8');
require('./_connect.php');

//书写sql语句
$sql = "SELECT * FROM cart";

//执行sql语句
$result = mysqli_query($conn,$sql);

if(mysqli_num_rows($result)>0){	
	$arr = mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode(array("code"=>1,"data"=>$arr));
}else{	
	echo json_encode(array("code"=>0));
}


?>