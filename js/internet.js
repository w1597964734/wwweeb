function hello(str) {
    alert(str);
}
function transKeyValue(key) {
    var keyvalue = encodeURIComponent(document.getElementById(key).value);
    return keyvalue;
}

//数据键值对获取发送给服务器的内容
function addStr(keyname, keyvalue)
{
    if(keyname==null || keyvalue == null){
        return "";
    }
    var result=""
    if (keyname.length != keyvalue)
    {
        return "";
    }
    else
    {
        //获取页面值
        var newkeyvalue = [];
        for(var i = 0; i < keyvalue.length; i++){
            //向数组中添加数据
            newkeyvalue.push(transKeyValue(keyvalue[i]));
            // newkeyname = newkeyname + transKeyValue(keyvalue[i]);
        }


        for(var i = 0; i < keyname.length; i++)
        {
            if(i == 0)
            {
                result = result + keyname[i] + "="+ newkeyvalue[i];
            }
            else
            {
                result = result + "&" + keyname[i] + "=" + newkeyvalue[i];
            }
        }
    }
    return result;
}

function sendMsg(mod,url,str,callback) {

    var tetle_tag = document.getElementById("title");
    var subTitle_tag = document.getElementById("subTitle");
    var info_tag = document.getElementById("info");

    var titles = window.localStorage.getItem("title")

    if(titles){
        var subTitles = window.localStorage.getItem("subTitle")
        var infos = window.localStorage.getItem("info")

        title.innerHTML=(titles)
        subTitle.innerHTML=(subTitles)
        info.innerHTML=(infos)
    }
    else{
        var xhr = new XMLHttpRequest();
        xhr.open(mod,url);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(str);
        xhr.onreadystatechange = function (ev) {
            if(xhr.readyState == 4 && xhr.status == 200)
            {
                var responsetData =JSON.parse(xhr.responseText);
                result = responsetData.data;
                var code = responsetData.code;
                if(code == 1){

                    window.localStorage.setItem("title",result.title)
                    window.localStorage.setItem("subTitle",result.subTitle)
                    window.localStorage.setItem("info",result.info)

                    title = result.title;
                    subTitle = result.subTitle;
                    info = result.info;


                }
                else
                {
                    return;
                }
            }
        }
    }




}