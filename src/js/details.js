class Details{
    constructor(){
        this.init()
        this.location_url()
        this.hello()
        this.num()
    }
    init(){
        var that=this
        var timer;
        $.ajax({
            url:"http://localhost/ws203/oneShop/src/lib/shop_list.json",
            success:function(data){
                clearTimeout(timer)
                for(var i=0;i<data.length;i++){
                    if(data[i].goodsId==(location.search).slice(9)){
                        $('#prodet_wrap').html(`
                        <div class="detail_crumb clear_fix">
                            <div class="crumb">
                                <a href="">${data[i].type} ></a>
                            </div>
                        </div>
                        <div class="detail_con clear_fix">
                            <div class="det_l">
                                <div class="img_border">
                                    <div class="pro_img">
                                        <img src="${data[i].img}" alt="">
                                        <div class="mini_glass"></div>
                                    </div>
                                </div>
                                <div class="pro_img_big">
                                    <img src="${data[i].img}" alt="">
                                </div>
                            <div class="serial">
                                <div class="ser_num">
                                    <p>商品编号 &nbsp; 10010699${data[i].goodsId}</p>
                                </div>
                            </div>
                            <div class="like">
                                <a href="">
                                    <i class="iconfont icon-guanzhu"></i>
                                    <span>关注</span>
                                </a>
                            </div>
                        </div>
                        <div class="main_content">
                            <div class="detail_information">
                                <div class="pro_name">
                                    <h1>${data[i].name}</h1>
                                </div>
                                <div class="pro_price">
                                    <span>价格</span>
                                    <span>￥${data[i].price}</span>
                                </div>
                                <div class="pro_size">
                                    <span>选择规格：</span>
                                </div>
                                <div class="pro_car clear_fix">
                                    <div class="pro_car_btn">
                                        <i class="iconfont icon-gouwuchekong"></i>
                                        <span>加入购物车</span>
                                    </div>
                                    <div class="seven">
                                        <i class="iconfont icon-xuanzhong-"></i>
                                        <span>支持7天无理由退货</span>
                                    </div>
                                    <img src="../images/yy.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                        `)
                        var dat=data[i]
                        $('.pro_car_btn').on('click',function(){
                            $.get('../php/addwq.php',{
                                id:dat.goodsId,
                                name:dat.name,
                                price:dat.price,
                                img:dat.img
                            },function(data){
                                console.log(JSON.parse(data))
                                $('#car_suc').css('display',"block")


                                $.ajax({
                                    url:"http://localhost/ws203/oneShop/src/php/showlist.php",
                                    success:function(data){
                                        var db=JSON.parse(data).data
                                        var number=parseInt(db.length)
                                        $('.hd_c_num').css('display','block').text(number)
                                    },
                                })


                                timer=setTimeout(function(){
                                    $('#car_suc').css('display',"none")
                                },1500)
                            })

                        })
                        new Fdj
                    }
                }
                
            }
        })
    }
    location_url(){
        $('.top_site span').on('click',function(){
            location.href="../pages/index.html"
        })
    }
    hello(){
        if(this.getCookie('active')!="true"){
            alert('请先登录')
            location.href="../pages/login.html"
        }
        $('.top_vip .login_btn').text(this.getCookie('user')).prev().text('晚上好,亲爱的').nextAll('.register_btn').css('display','none')
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
    num(){
        window.onload=function(){
            
            $.ajax({
                url:"http://localhost/ws203/oneShop/src/php/showlist.php",
                success:function(data){
                    console.log(1)
                    var db=JSON.parse(data).data
                    console.log(db)
                    var number=parseInt(db.length)
                    if(db){
                        $('.hd_c_num').css('display','block').text(number)
                    }else{
                        $('.hd_c_num').css('display','none').text('')
                        
                    }
                }
            })
        }
        
    }
}
new Details




class Fdj{
    constructor(){
        this.Sbox = document.querySelector(".pro_img");
        this.span = document.querySelector(".mini_glass");
        this.Bbox = document.querySelector(".pro_img_big");
        this.Bimg = document.querySelector(".pro_img_big>img");
        this.init()
    }
    init(){
        var that=this
        this.Sbox.onmouseover=function(){
            that.over()
        }
        this.Sbox.onmouseout=function(){
            that.out()
        }
        this.Sbox.onmousemove=function(eve){
            var e=eve || window.event
            that.move(e)
        }
    }
    over(){
        this.span.style.display="block";
        this.Bbox.style.display="block";
        var spanW=this.Bimg.offsetWidth/this.Bbox.offsetWidth;
        var spanH=this.Bimg.offsetHeight/this.Bbox.offsetHeight;
        this.span.style.width=this.Sbox.offsetWidth/spanW;
        this.span.style.height=this.Sbox.offsetHeight/spanH;
    }
    out(){
        this.span.style.display="none";
        this.Bbox.style.display="none"
    }
    move(e){
        var pd=document.querySelector(".det_l")
        var l=e.pageX-(this.Sbox.offsetLeft+pd.offsetLeft)-this.span.offsetWidth/2;
        var t=e.pageY-(this.Sbox.offsetTop+pd.offsetTop)-this.span.offsetHeight/2
        if(l<0) l=0;
        if(t<0) t=0;
        if(l > this.Sbox.offsetWidth - this.span.offsetWidth){
            l = this.Sbox.offsetWidth - this.span.offsetWidth
        }
        if(t > this.Sbox.offsetHeight - this.span.offsetHeight){
            t = this.Sbox.offsetHeight - this.span.offsetHeight
        }
        this.span.style.left=l+'px';
        this.span.style.top=t+'px';
        var x=l/(this.Sbox.offsetWidth-this.span.offsetWidth)
        var y=t/(this.Sbox.offsetHeight-this.span.offsetHeight)
        this.Bimg.style.left=(this.Bbox.offsetWidth-this.Bimg.offsetWidth)*x +'px'
        this.Bimg.style.top=(this.Bbox.offsetHeight-this.Bimg.offsetHeight)*y +'px'
    }
}
