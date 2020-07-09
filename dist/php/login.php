<?php
header("content-type:text/html;charset:utf-8");

$username=$_REQUEST['username'];
$password=$_REQUEST['password'];

$link=mysqli_connect('localhost','root','root','oneshop');
$sql_id="SELECT `username` FROM `userinfo` WHERE `username`='$username'";
$sql_all="SELECT * FROM `userinfo` WHERE `username`='$username' AND `password`='$password'";
$res_id=mysqli_query($link,$sql_id);
$res_all=mysqli_query($link,$sql_all);

$arr_id_def=array('code'=>1);
$arr_pw_def=array('code'=>2);
$arr_login_suc=array('code'=>3);

if(!mysqli_fetch_assoc($res_id)){
    echo json_encode($arr_id_def);
}else if(!mysqli_fetch_assoc($res_all)){
    echo json_encode($arr_pw_def);
}else{
    echo json_encode($arr_login_suc);
}
// if(mysqli_fetch_assoc($res_all))

// if(mysqli_fetch_assoc($res_id)&&mysqli_fetch_assoc($res_pw)){
//     echo '登录成功';
// }else{
//     echo '登录失败';
// }
// if(mysqli_fetch_assoc($res_all)){
//     echo 888;
// }else{
//     echo 777;
// }
// if(mysqli_fetch_assoc($res_id)&&!mysqli_fetch_assoc($res_pw)){
//     echo '密码错';
// }else{
//     echo '对';
// }
// mysqli_fetch_assoc($res_id)&&

// if(!mysqli_fetch_assoc($res_id)){
//     echo json_encode($arr_id_def);
// }else if(!mysqli_fetch_assoc($res_pw)){
//     echo json_encode($arr_pw_def);
//     // echo 69;
// }else if(mysqli_fetch_assoc($res_all)){
//     echo json_encode($arr_login_suc);
// }
// if(!mysqli_fetch_assoc($res_id)){
//     echo json_encode($arr_id_def);
// }
// if((!mysqli_fetch_assoc($res_id))&&(!mysqli_fetch_assoc($res_pw))){
//     echo json_encode($arr_pw_def);
//     // echo 69;
// }

// if(mysqli_fetch_assoc($res_all)){
//     echo json_encode($arr_login_suc);
// }


















?>