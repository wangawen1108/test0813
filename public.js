function stringToDate(str) {
    return new Date(str);
}
function diff(start, end) {
    return (end.getTime() - start.getTime()) / 1000;
}
function $id(id) {
    return document.getElementById(id);
}
function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function getColor() {
    var str = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += str.charAt(rand(0, 15));
    }
    return color;
}
function pz(obj1, obj2) {
    var L1 = obj1.offsetLeft;//左
    var R1 = obj1.offsetLeft + obj1.offsetWidth;//右
    var T1 = obj1.offsetTop;//上
    var B1 = obj1.offsetTop + obj1.offsetHeight;//下

    var L2 = obj2.offsetLeft;//左
    var R2 = obj2.offsetLeft + obj2.offsetWidth;//右
    var T2 = obj2.offsetTop;//上
    var B2 = obj2.offsetTop + obj2.offsetHeight;//下

    if (R1 < L2 || B1 < T2 || L1 > R2 || T1 > B2) {
        return false;
    } else {
        return true;
    }
}
//获取非行内元素样式值
//返回值是字符型
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, false)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
//obj 要操作 的元素
//target 目标值
//attr 属性
//backcall 回调函数
//json=[
//    attr:target 
//]
function startMove(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var current = 0;
        var flag = true;//true时停止运动
        for (var attr in json) {//target:json[attr]
            if (attr == "opacity") {
                current = parseFloat(getStyle(obj, attr)) * 100;
            } else {
                current = parseInt(getStyle(obj, attr))
            }
            //匀速
            var speed = (json[attr] - current) > 0 ? 1 : -1;

            //缓冲速度
            // var speed = (json[attr] - current) / 10;
            // speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (current != json[attr]) {//没有达到目标值
                flag = false;
            }

            if (attr == "opacity") {
                obj.style[attr] = (current + speed) / 100;
            } else if (attr == "zIndex") {

            }
            else {
                obj.style[attr] = current + speed + "px";

            }
        }

        //循环执行后 判断flag值如果为true 停止定时器
        if (flag) {
            clearInterval(obj.timer);
            //上一个动作完成进入到下一个动作
            if (callback) {
                callback();
            }
        }
    }, 30)
}









