window.onload = function(){
    /*图片轮播*/
    (function(){
        var banner = document.getElementsByClassName('slider')[0];
        var img = document.getElementById('img_ul');
        var lis = img.getElementsByTagName('li');
        var order = document.getElementById('order');

        //根据上面图片的数量创建相应个数的焦点
        for(i=0;i<lis.length;i++){
            var creLi = document.createElement('li');
            order.appendChild(creLi);
        }
        //获取焦点事件源，并将第一个添加类（class="on"）
        var orderLis = order.getElementsByTagName('li');
        orderLis[0].className = 'on';
        //前期准备工作结束，开始正式的主要部分，让它动起来
        var num = 0; 
        var xh = null;
        function play(num){
            for(i=0;i<lis.length;i++){
                lis[i].className = '';
                orderLis[i].className = '';
            }
            lis[num].className = 'on';
            orderLis[num].className = 'on';
        }
        //自动播放
        function autoPlay(){
            xh = setInterval(function(){
                num++;
                if(num >= lis.length){
                    num = 0;
                }
                play(num);
                //            console.log(num);
            },2000);
        }
        autoPlay();
        //添加鼠标移入暂停，移出继续轮播事件
        banner.onmouseover = function(){
            clearInterval(xh);
            xh = null;
        }
        banner.onmouseout = function(){
            autoPlay();
        }
        //给焦点添加实时监控事件，鼠标移到哪个焦点，就显示那个对应的图片
        for(i=0;i<orderLis.length;i++){
            //万物皆对象，遍历出的所有orderLis都是一个个单独的对象，给每个orderLis添加index属性，利用它记忆每个orderLis自己的索引号
            orderLis[i].index = i;
            orderLis[i].onmouseover = function(){
                //让全局变量num等于此时显示的图片的索引号，防止鼠标离开后继续播放不正常的事情发生
                num = this.index;
                play(this.index);
            }
        }
    })();
    (function(){
        var height = innerHeight;
        var top_butt = document.getElementsByClassName('toggle_content')[0];
        var main = document.getElementsByClassName('main')[0];
        var tt = 0;
        top_butt.onclick = function(){
            if(tt == 0){
                main.style.top = (height - 585) + 'px';
                top_butt.style.transform = 'rotate(180deg)'
                tt = 1;
            }else if(tt ==1){
                main.style.top =  (height - 30) + 'px';
                top_butt.style.transform = 'rotate(0deg)'
                tt = 0;
            }
        }
        setTimeout(function(){
            main.style.top = (height - 585) + 'px';
            top_butt.style.transform = 'rotate(180deg)'
            tt = 1;
        },3000)
    })();

    /*导航栏子菜单*/
    (function(){
        var have_in = document.getElementsByClassName('have_inner')[0];
        var have_in1 = document.getElementsByClassName('have_inner1')[0];
        have_in.onmouseover = function(){
            document.getElementsByClassName('inner_wrap')[0].style.display = 'block';
        }
        have_in.onmouseout = function(){
            document.getElementsByClassName('inner_wrap')[0].style.display = 'none';
        } 
        have_in1.onmouseover = function(){
            document.getElementsByClassName('inner_wrap')[1].style.display = 'block';
        }
        have_in1.onmouseout = function(){
            document.getElementsByClassName('inner_wrap')[1].style.display = 'none';
        }
    })();

    /*推荐区商品悬浮事件-用到闭包函数*/
    (function(){
        var p_list = document.getElementsByClassName('p_list')[0];
        var p_item = p_list.getElementsByTagName('li');
        var item_len = p_item.length;
        var p_detail = document.getElementsByClassName('p_detail');
        for(var i=0; i< item_len;i++){
            fn1(i)();
        }
        function fn1(i){
            return function(){
                p_item[i].onmouseover = function(){
                    p_detail[i].style.top = '-40px';
                }
                p_item[i].onmouseout = function(){
                    p_detail[i].style.top = '0px';
                }
            }
        }
    })();
}


























