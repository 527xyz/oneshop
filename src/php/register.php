<?php
header("content-type:text/html;charset:utf-8");
$username=$_REQUEST['username'];
$password=$_REQUEST['password'];
$phonenumber=$_REQUEST['phonenumber'];
$arr_suc=array("code"=>1);
$arr_def=array("code"=>0);
// $arr=array('账号'=>$username,'密码'=>$password,'电话'=>$phonenumber);
// $res=json_encode($arr);

$link=mysqli_connect("localhost","root","root","oneshop");
$sql_check="SELECT `username` FROM `userinfo` WHERE `username`='$username'";
$res_check=mysqli_query($link,$sql_check);
if(mysqli_fetch_assoc($res_check)){
    echo json_encode($arr_def);
}else{
    $sql="INSERT INTO `userinfo` VALUES(null,'$username','$password','$phonenumber')";
    $res=mysqli_query($link,$sql);
    echo json_encode($arr_suc);
}

// $sql="INSERT INTO `userinfo` VALUES(null,'$username','$password','$phonenumber')";
// $res=mysqli_query($link,$sql);







?>