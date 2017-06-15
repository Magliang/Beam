window.onload = function(){
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
    function nav_select(mo_dd,moment){
        moment.onclick =function(e){
            var mok = mo_dd[0].classList.contains('active'); //判断全部是否有active类名 true
            var sz = e.target.tagName.toLocaleLowerCase();//获取对应标签 事件
            if(sz == 'dd'){ //判断对应标签是否是dd
                e.target.classList.toggle('active');
                if(mok == true){ //如果全部 存在active
                    mo_dd[0].classList.remove('active'); //移除全部的active
                }
                var mkk;
                for (var i=1;i<mo_dd.length;i++){
                    mkk = mo_dd[i].classList.contains('active');
                    if(mkk){
                        break;
                    }
                }
                if(!mkk){
                    mo_dd[0].classList.toggle('active');
                }
            }
            if(e.target == mo_dd[0]){
                for (var i=1;i<mo_dd.length;i++){
                    mo_dd[i].classList.remove('active');
                }
            }
        }
    }
    (function(){
        var main_wrap = document.getElementsByClassName('main_wrap')[0];
        var moment = document.getElementsByClassName('moment')[0];
        var mo_dd = moment.getElementsByTagName('dd');
        var taste = document.getElementsByClassName('taste')[0];
        var ta_dd = taste.getElementsByTagName('dd');
        var spec = document.getElementsByClassName('spec')[0];
        var sp_dd = spec.getElementsByTagName('dd');

        nav_select(mo_dd,moment);
        nav_select(ta_dd,taste);
        nav_select(sp_dd,spec);
    })();

}



























