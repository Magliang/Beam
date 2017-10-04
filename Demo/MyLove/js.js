//获取textarea对象
var text=document.getElementById("text");
//要输出的内容
var str="     谢谢你，第一谢谢你让我知道了这个结果，第二谢谢你能实话实说，第三谢谢你，让我内心的愧疚感没有那样强烈了，其实一直以来我都没好过，积压在心底里，一年多了665，2016.6.5，我可能是很难忘记了，没能有一个希望的结局，我一直很失望，有一段时间一直有种负罪感，慢慢成了心病，正所谓心病还须心药医，解铃还须系铃人，谢谢你，我会越来越好，祝福你也越来越好，希望你不要再去试，而是靠眼睛去发现，用心去感受。谢谢你，这幸福的错觉。2017年10月4日 中秋 晚 -M";
var pos=0;
//利用递归和setTimeout()实现文字输出
function printer(){
    text.value=str.substring(0,pos)+"＿";
    //判断是否到达结尾.如果是则一秒后再来一遍.
    if(pos++>str.length){
        pos=0;
//        setTimeout("printer()",1000);
    }else{
        setTimeout("printer()",300);
    }
    setInterval(BgTop(),2000);
}

var Bgtop = document.getElementsByClassName("background_top")[0];
//顶部背景
function BgTop(){
    var TopOp = parseFloat(window.getComputedStyle(Bgtop,null).opacity);
    if(TopOp == 0.2){
        Bgtop.style.opacity = 0.9;
    }else if(TopOp == 0.9){
        Bgtop.style.opacity = 0.2;
    }
};

//加载彩条
setTimeout(function ColorBar(){
    var Cb = document.getElementsByClassName("colorbar")[0];
    Cb.style.width = "95%";
},1500)

//获取音乐按钮
function music_out(){
    var M = document.getElementById("Music");
    if (M.className == "audPrint"){
        M.className="audOut";
        M.style.left = "-300px";
    }else  if(M.className == "audOut"){
        M.className="audPrint";
        M.style.left = "0px";
    }
}
















