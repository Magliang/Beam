window.onload=function(){
    //鼠标右键
    var forRight=document.getElementById("mouseRightBut");
    forRight.style.display="none"; 
    var title=forRight.getElementsByTagName("li"); 

    for(var i=0;i<title.length;i++){ 
        title[i].onmouseover=function(){ 
            //其实这里我们也可以调用其他事件
            this.classname="active"; 
        }; 
        //这里也是鼠标的两个事件 
        title[i].onmouseout=function(){
            this.classname=""; 
        }; 
    } 
    //点击右键调出菜单
    document.oncontextmenu=function(event){
        //这是实现的关键点 
        var event=event||window.event;
        var width = window.innerWidth;
        var height = window.innerHeight -43;
        forRight.style.display="block";
        //鼠标的坐标
        forRight.style.left= event.clientX + "px"; 
        forRight.style.top= event.clientY + "px";
        //这里返回false就是为了屏蔽默认事件
        return false; 
    }; 
    //点击左键隐藏
    document.onclick=function(){ 
        forRight.style.display="none";
        //        $(".app").first().addClass("on");
    };
//    $("section").click(function(){
//        $(".app").siblings().removeClass("on");
//    })
    //文档加载完成调用系统时间
    abc();
    setInterval("abc()",1000);
    //开始菜单
    $(".menus").click(function(){
        $(".menusItem").toggle(100);
        $(".menusItem").css({
            "display" : "block"
        })
    })
    /*获取用户昵称*/
    var loca=window.localStorage;
    locaUN = loca.getItem("name");
    $(".userName").html(locaUN).css({
        color:"#ff8900"
    })
    //点击应用
    $(function(){
        //        var timer = null;
        $(".app").each(function(i,e){
            //获取应用名称
            var appText = $(".app span")[i].firstChild.data;
            $(".app:eq("+i+")").bind("click",function(){
                //                $(".app").first().addClass("on");
                $(this).addClass("on").siblings().removeClass("on");
                //双击事件 
                $(".app:eq("+i+")").bind("dblclick", function(){
                    $(".appName").html(appText);
                    if(appText == "360浏览器"){
                        $('iframe').attr('src','http://www.baidu.com');
                    }else if(appText == "QQ音乐"){
                        $('iframe').attr('src','http://y.qq.com/webplayer/player.html');
                    }else if(appText == "QQ"){
                        $('iframe').attr('src','http://web2.qq.com/');
                    }else if(appText == "腾讯视频"){
                        $('iframe').attr('src','https://v.qq.com/');
                    }else{
                        $('iframe').attr('src','');
                    }
                    $(".appWindow").css({
                        display: "block"
                    })
                })
            })
        })
        //关闭应用窗口事件
        $(function(){
            $(".appOFF").click(function(){
                $(".appWindow").css({
                    display:"none"
                })
            })
        })
    })
    //新建应用
    //更换图标-大
    $(".icoBig").click(function(){
        $(".desktop").css({
            width: "110px"
        })
        $(".app").css({
            width: "90px",
            marginBottom: "60px"
        })
        $(".app img").css({
            width: "90px",
            height: "90px"
        })
        $(".app span").css({
            width: "90px",
        })
    })
    //更换图标-中
    $(".icoMiddle").click(function(){
        $(".desktop").css({
            width: "80px"
        })
        $(".app").css({
            width: "60px",
            marginBottom: "30px"
        })
        $(".app img").css({
            width: "60px",
            height: "60px"
        })
        $(".app span").css({
            width: "60px",
        })
    })
    //更换图标-小
    $(".icoSmall").click(function(){
        $(".desktop").css({
            width: "80px"
        })
        $(".app").css({
            width: "50px",
            marginBottom: "10px"
        })
        $(".app img").css({
            width: "50px",
            height: "50px"
        })
        $(".app span").css({
            width: "50px",
        })
    })
    //更换壁纸
    var a=1;
    $(".changeBgimg").click(function(){
        a++;
        if(a > 4){
            a = 1;
        }
        changeBG(a)();
        function changeBG(a){
            return function(){
                $("main").css({
                    backgroundImage:"url(img/bg-"+a+".jpg)"
                })
            }
        }
    })
    //切换用户
    $(".cuser").click(function(){
        if(window.confirm('你确定要切换当前用户吗？')){
            //alert("确定");
            window.location.href="login.html"
            return true;
        }else{
            //alert("取消");
            return false;
        }
    })
    //关闭系统
    $(".systemOFF").click(function(){
        if(window.confirm('你确定要退出并且关闭系统吗？关闭后将为你自动跳转到百度')){
            //alert("确定");
            window.location.href="http://www.baidu.com"
            return true;
        }else{
            //alert("取消");
            return false;
        }
    })
};
//获取系统时间
function abc(){
    var mydate = new Date();
    $(".time").html('<span>'+mydate.toLocaleTimeString()+'</span>');
    $(".date").html('<span>'+mydate.toLocaleDateString()+'</span>');
}