<?php
include "public.php";

$id=$_GET["id"];
$sql="DELETE FROM `wtable` WHERE wid=$id";
$row=mysqli_query($db,$sql);
if($row){
    echo 1;//成功
}else{
    echo 0;//失败
}
?>