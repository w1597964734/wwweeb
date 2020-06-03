
function sendMsg(mod,url,str,callback) {

    //创建网络请求对象
    var xhr = new XMLHttpRequest();
    xhr.open(mod,url);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(str);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            var responsetData =JSON.parse(xhr.responseText);
            var obj = responsetData.data;
            callback(obj,xhr.responseText)

        }
    }





}