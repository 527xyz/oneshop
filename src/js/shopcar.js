class Car{
    constructor(){
        this.show()
        this.location_url()
        this.hello()
        this.aaa()
    }
    show(){
        var that=this
        $.ajax({
            url:"../php/showlist.php",
            success:function(data){
                var db=JSON.parse(data).data
                $('.product_data').empty()
                $('.product_data').append(`
                    <div class="product_list_head abtn">
                    <span class="check">
                        <a href="javascript:;" ><img src="../images/check_bg.png" alt="" class="qx aaa"></a>
                        全选
                    </span>
                    <span class="tit">商品信息</span>
                    <span class="price">单价（元）</span>
                    <span class="num">数量</span>
                    <span class="total">小计（元）</span>
                    <span class="act">操作</span>
                </div>`)
                
                for(var i=0;i<db.length;i++){
                    $('.product_data').append(`
                    <div class="car_list">
                <div class="car_tit clear_fix">
                    <span class="check">
                        <a href="javascript:;"><img src="../images/check_bg.png" alt="" class="aaa"></a>
                        <em>1号店官方自营</em>
                        <em><img src="../images/wangwang.jpg" alt=""></em>
                    </span>
                </div>
                <div class="car_wrap">
                    <ul class="car_item">
                        <li>
                            <div class="car_prod clear_fix">
                                <span class="check">
                                    <a href="javascript:;"><img src="../images/check_bg.png" alt="" class="aaa"></a>
                                </span>
                                <a href="" class="item_pic">
                                    <img src="${db[i].product_img}" alt="">
                                </a>
                                <a href="" class="item_tit">${db[i].product_name}</a>
                                <a href="" class="seven"><img src="../images/regist_new.png" alt="">&nbsp;正品保障 &nbsp;7天无理由</a>
                                <p class="item_price">${db[i].product_price}.00</p>
                                <div class="item_num">
                                    <a href="javascript:;" class="un">-</a>
                                    <input type="text" disabled="true">
                                    <a href="javascript:;" class="add">+</a>
                                </div>
                                
                                <p class="item_money">${db[i].product_num*db[i].product_price}.00</p>
                                <i class="iconfont icon-shanchu shanchu"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="car_amount">
                    <div class="amount">
                        商品总价：
                        <span>
                            <em>￥</em>${db[i].product_num*db[i].product_price}
                        </span>
                    </div>
                </div>
            </div>
                    `)
                    $('.item_num input').eq(i).val(db[i].product_num)
                }
                that.num(db)
                that.money()
                that.del(db)
                that.sum(db)
                that.car_null()
                new Goux
            }
        })
    }
    num(db){
        var that=this
        var list=document.querySelectorAll('.car_list')
        var un=document.querySelectorAll('.un')
        var add=document.querySelectorAll('.add')
        var ipt=document.querySelectorAll('.item_num input')
        var money=document.querySelectorAll('.amount span')
        var data=db
        for(let j=0;j<list.length;j++){
            un[j].onclick=function(){
                if(ipt[j].value<=1){
                    ipt[j].value=1
                }else{
                    ipt[j].value-=1
                }
                $('.item_money').eq(j).text(ipt[j].value*data[j].product_price)
                $('.amount span').eq(j).text("￥"+ipt[j].value*data[j].product_price)
                that.money()
                new Goux
            }
            add[j].onclick=function(){
                ipt[j].value=parseInt(ipt[j].value)+1
                $('.item_money').eq(j).text(ipt[j].value*data[j].product_price)
                $('.amount span').eq(j).text("￥"+ipt[j].value*data[j].product_price)
                that.money()
                new Goux
            }
        }
        
    }
    money(){
        var money=document.querySelectorAll('.amount span')
        var str;
        var num=0
        for(var i=0;i<$('.amount span').length;i++){
            str=$('.amount span').eq(i).text().replace(/[^0-9]/ig,"")
            num+=parseInt(str)
        }
        $('.rpt_count b').text(num)
    }
    del(db){
        var that=this
        var lt=db
        var list_del=document.querySelectorAll('.car_list')
        for(let i=0;i<list_del.length;i++){
            list_del[i].onclick=function(eve){
                var e=eve || window.event
                var target= e.target||src.element
                if(target.className=="iconfont icon-shanchu shanchu"){
                    this.remove()
                    that.money()
                    that.del_data(lt[i].product_id)
                    that.sum(db)
                    $('.rpv_count b').text($('.car_list').length)
                    new Goux
                }
                that.car_null()

            }
        }
    }
    del_data(n){
        $.get('../php/delwq.php',{
                id:n
            }
        )
    }
    location_url(){
        $('.top_site').on('click',function(){
            location.href='../pages/index.html'
        })
    }
    sum(db){
        $('.rpv_count b').text(db.length)
    }
    hello(){
        if(this.getCookie('active')!="true"){
            alert('请先登录')
            location.href="../pages/login.html"
        }
        $('.top_vip .login_btn').text(this.getCookie('user')).prev().text('晚上好,亲爱的').css('color',"#666").nextAll('.register_btn').css('display','none')
    }
    getCookie(key){
        var str=document.cookie;
        var arr=str.split("; ");
        var newArr;
        for(var i=0;i<arr.length;i++){
            newArr=arr[i].split("=");
            if(newArr[0]==key){
                return newArr[1];
            }
        }
    }
    car_null(){
        if($('.car_list').length!=0){
            $('#car_null').css('display','none')
        }else{
            $('#car_null').css('display','block')
            $('.product_data').css('display','none')
            $('.settle').css('display','none')
        }
               
    }
    aaa(){
        var that=this
        window.onload=function(){
            that.show()
            // that.car_null()
        }
    }
}
// new Car

class Goux{
    constructor(){
        this.yes()
        this.index=1
    }
    yes(){
        var that=this
        
        // var qx=document.querySelector('.qx')
        var cases=document.querySelector('.rpv_count b').innerHTML
        var moy=document.querySelector('.rpt_count b').innerHTML
        $('.abtn').on('click',function(){
            
            if(that.index==1){
                $('.aaa').css('display','none')
                $('.rpv_count b').text(0)
                $('.rpt_count b').text(0.00)
                that.index=0
            }else{
                $('.aaa').css('display','block')
                $('.rpv_count b').text(cases)
                $('.rpt_count b').text(moy)
                that.index=1
            }
        })
    }
}

window.onload=function(){
    console.log(1)
    new Car
    new Goux
}

