//获取系统时间
function abc(){
    var mydate = new Date();  $(".time").html('<span>'+mydate.toLocaleTimeString()+'</span>');  /*$(".date").html('<span>'+mydate.toLocaleDateString()+'</span>');*/
}
//文档加载完成调用系统时间
abc();
setInterval("abc()",1000);
/**/
setInterval(function(){
    if(a == "ok"){
        window.location.href="operation.html"
    }
    console.log("正在等待判断密码正确");
},5000);
/*点击头像进入系统*/
var a = 0;
$(".userImg").click(function(){
    if($(".userPwd").val() == 123456){
        if($(".userName").val() ==""){
            $(".hint").html("请输入一个八字内昵称，让我认识下你呗").css({
                color:"#ff8900"
            })
        }else{
            var loca=window.localStorage;
            var userName = $(".userName").val();
            loca.setItem("name",userName);
            $(".userLogin").fadeOut(300)    
            $(".up i")  .animate({
                marginTop: -960
            },2000)
            $(".down i").animate({
                marginTop: 960
            },2000)
            $(".userName_yz").html(userName);
            setTimeout(function(){
                a = "ok"
            },2000)
        }
    }else{
        $(".userLogin span").animate({
            opacity:1,
        },1000)
        $(".hint").html("请输入一个国际密码").css({
            color:"red"
        })
        $("input").animate({
            "margin-bottom":"20px"
        })
    }
});
/*点击收起input动画*/
$(".Door").click(function(){
    $(".userLogin span").animate({
        opacity:0,
        //        top: "-40px"
    })
    $("input").animate({
        "margin-bottom":"0px"
    })
})
/*点击input动画*/
$("input").click(function(){
    $(".userLogin span").animate({
        opacity:1,
    },1000)
    $("input").animate({
        "margin-bottom":"20px"
    })
})
/*验证密码*/
$(".userPwd").bind('input propertychange',function(){
    if($(".userPwd").val() == 123456){
        $(".hint").html("密码正确，请点击头像进入系统").css({
            color:"green"
        })
    }else if($(".userPwd").val() == ""){
        $(".hint").html("点击头像进入").css({
            color:"#fff"
        })
    }else{
        $(".hint").html("密码错误，请重新输入").css({
            color: "red"
        })
    }
})


























