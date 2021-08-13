 //封装一个ajax函数
//  callback:该函数是一个回调函数
 function ajaxGet(url,callback,data) {
    var ajax = null;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(data){
        url=url+"?"+data;
    }
    ajax.open("GET",url);
    ajax.onreadystatechange=function(){
        if(ajax.status==200&&ajax.readyState==4){
            //通过回调函数解决异步
            callback(ajax.responseText);
        }
    }
    ajax.send();
}


function ajaxPost(url,data,callback){
    var ajax = null;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.open("POST",url);
    //设置请求头
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.onreadystatechange=function(){
        if(ajax.status==200&&ajax.readyState==4){
            alert(ajax.responseText); 
        }
    }
    ajax.send(data);
}