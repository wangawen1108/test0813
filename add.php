<?php

include "public.php";
//接收客户端
//$_REQUEST[] 可以接收get或post方式传递的数据
//接收从data传过来的值
$content=$_REQUEST["content"];
$where=$_REQUEST["where"];
$idea=$_REQUEST["idea"];
$sql="INSERT INTO `wtable`( `content`, `wwhere`, `idea`) VALUES ('$content','$where','$idea')";
$row=mysqli_query($db,$sql);
if($row){
    echo 1;//成功
}else{
    echo 0;//失败
}
?>