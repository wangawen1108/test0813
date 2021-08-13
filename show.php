<?php
//操作数据库
$db=mysqli_connect("localhost","root","root");
mysqli_select_db($db,"db0807");
mysqli_query($db,"set names utf8");
$sql="SELECT * FROM wtable";
//执行sql
$res=mysqli_query($db,$sql);
//服务器需要向客户端返回一个数组,将取出的每一条数据存放到数组中

while($arr=mysqli_fetch_array($res)){
    //如果取出数据就将数据存入数组中
    $data[]=$arr;//[{},{},{}]
}
echo json_encode($data);
?>