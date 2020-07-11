class Index_wrap{
    constructor(){

        this.init()
    }
    init(){
        this.count_time()
        this.count_time_data()
        this.scene_data()
        this.live_fresh_slide()
        this.know_list()
        this.top_back()
        this.login()
        // this.banner()
    }
    
    
    count_time(){
        var time=5400
        var h,m,s;
        setInterval(function(){
            h=(parseInt(time/60/60)).toString()
            m=parseInt((time-h*60*60)/60).toString()
            s=parseInt((time-h*60*60-m*60)).toString()
            // console.log(h,m,s)
            $('.count_time>span').eq(0).text(zeroFillString(h))   
            $('.count_time>span').eq(1).text(zeroFillString(m))   
            $('.count_time>span').eq(2).text(zeroFillString(s))   
            if(time<=0){
                time=5400
            }else{
                time-=1
            }
        },1000)
        function zeroFillString(n){
            if(n.length<2){
                return '0'+n
            }
            return n
        }
    }
    count_time_data(){
        $.ajax({
            url:"../lib/sup_time.json",
            success:function(data){
                // console.log(data[0])
                for(var i=0;i<data.length;i++){
                    // data[i].img
                    $('.time_limit_con>ul').append(`
                    <li>
                        <a href="">
                            <div class="sup_top">
                                <img src="${data[i].img}" alt="">
                            </div>
                            <div class="sup_bottom">
                                <div class="s_title">
                                ${data[i].tit}
                                </div>
                                <div class="s_bar">
                                    <div class="progress" style="width:${data[i].wid}"></div>
                                </div>
                                <div class="s_son">
                                    <div class="s_num">
                                        <span>${data[i].price}</span><span>${data[i].pricehis}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    `)
                }
            }
        })
    }
    live_fresh_slide(){
            $('.qua_top_slide_right').on('click',function(){
                var next=$('.qua_top_slide_con').position().left-208
                if(next<='-550'){
                    $('.qua_top_slide_con').css('left','-401.95')
                }else{
                    $('.qua_top_slide_con').css('left',next)
                }
            }).prev().on('click',function(){
                console.log(1)
                var next=$('.qua_top_slide_con').position().left+208
                if(next>='20'){
                    $('.qua_top_slide_con').css('left','14.04')
                }else{
                    $('.qua_top_slide_con').css('left',next)
                }
            })
        // }
    }
    scene_data(){
        var that=this
        $.ajax({
            url:"../lib/scene.json",
            success:function(data){
                for(var i=0;i<data.length;i++){
                    $('.scene_floor_con').append(
                        `<div class="live_fresh">
                        <div class="qua_show">
                            <a href="" class="qua_tit">
                                <span>${data[i].qua_tit_span1}</span>
                                <span>${data[i].qua_tit_span2}</span>
                            </a>
                            <div class="qua_show_con">
                                <img src="${data[i].qua_show_con_left_img}" alt="" class="qua_show_con_left">
                                <div class="qua_left_font">
                                    <div class="qua_left_word">${data[i].qua_left_word1}</div>
                                    <div class="qua_left_word">${data[i].qua_left_word2}</div>
                                    <div class="qua_left_word">${data[i].qua_left_word3}</div>
                                    <div class="qua_left_word">${data[i].qua_left_word4}</div>
                                    <div class="qua_left_word">${data[i].qua_left_word5}</div>
                                    <div class="qua_left_word">${data[i].qua_left_word6}</div>
                                </div>
                                <div class="qua_show_con_right">
                                    <a href="" class="bursting_big">
                                        <p class="bursting_big_p1">${data[i].bur_big_p1}</p>
                                        <p class="bursting_big_p2">${data[i].bur_big_p2}</p>
                                        <div class="qua_buy_btn">${data[i].bur_big_buy}</div>
                                        <img src="${data[i].bur_big_img}" alt="">
                                    </a>
                                    <a href="" class="bursting_sm">
                                        <p class="bursting_sm_p1">${data[i].bur_sm1_p1}</p>
                                        <p class="bursting_sm_p2">${data[i].bur_sm1_p2}</p>
                                        <img src="${data[i].bur_sm1_img}" alt="">
                                    </a>
                                    <a href="" class="bursting_sm">
                                        <p class="bursting_sm_p1">${data[i].bur_sm2_p1}</p>
                                        <p class="bursting_sm_p2">${data[i].bur_sm2_p2}</p>
                                        <img src="${data[i].bur_sm2_img}" alt="">
                                    </a>
                                    <a href="" class="bursting_sm">
                                        <p class="bursting_sm_p1">${data[i].bur_sm3_p1}</p>
                                        <p class="bursting_sm_p2">${data[i].bur_sm3_p2}</p>
                                        <img src="${data[i].bur_sm3_img}" alt="">
                                    </a>
                                    <a href="" class="bursting_sm">
                                    <p class="bursting_sm_p1">${data[i].bur_sm4_p1}</p>
                                    <p class="bursting_sm_p2">${data[i].bur_sm4_p2}</p>
                                    <img src="${data[i].bur_sm4_img}" alt="">
                                    </a>
                                    <a href="" class="bursting_big">
                                        <p class="bursting_big_p1">${data[i].bur_big2_p1}</p>
                                        <p class="bursting_big_p2">${data[i].bur_big2_p2}</p>
                                        <div class="qua_buy_btn">${data[i].bur_big2_buy}</div>
                                        <img src="${data[i].bur_big2_img}" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="qua_top">
                            <img src="../images/qua_ph1.png" alt="" class="qua_ph">
                            <p class="qua_top_font">${data[i].qua_top_p1}</p>
                            <p class="qua_top_font2">${data[i].qua_top_p2}</p>
                            <div class="qua_top_slide">
                                <div class="qua_top_slide_con">
                                    <img src="${data[i].qua_top_img1}" alt="">
                                    <img src="${data[i].qua_top_img2}" alt="">
                                    <img src="${data[i].qua_top_img3}" alt="">
                                </div>
                            </div>
                            <span class="qua_top_slide_left">
                                <i class="iconfont icon-zuojiantou"></i>
                            </span>
                            <span class="qua_top_slide_right">
                                <i class="iconfont icon-youjiantou"></i>
                            </span>
                        </div>
                    </div>`
                    )
                }
                that.live_fresh_slide()
            }
        })
    }
    know_list(){
        $.ajax({
            url:"../lib/shop_list.json",
            success:function(data){
                for(var i=0;i<data.length;i++){
                    $('.under_list').append(`
                    <li class="under_list_single">
                        <div class="under_pic">
                            <img src="${data[i].img}" alt="">
                        </div>
                        <p class="single_tit">${data[i].name}</p>
                        <p class="single_money">￥${data[i].price}.00</p>
                        <div class="single_tag clear_fix">
                            <div class="single_ticket">领券</div>
                        </div>
                        <div class="single_btn">
                            <div class="single_btn_left">
                                <a href="" class="btn_car">
                                    <i class="iconfont icon-gouwuchekong"></i>
                                </a>
                            </div>
                            <div class="single_btn_right">
                                <a href="">找相似</a>
                            </div>
                        </div>
                        <a href="../pages/commodity-details.html?goodsId=${data[i].goodsId}" class="border_line"></a>
                    </li>`)
                }
                var oli=document.getElementsByClassName("under_list_single")
                for(var j=6;j<oli.length;j++){
                    $('.under_list_single').eq(j).css('display',"none")
                }
                var t;
                var top=2000;
                var num=0;
                window.onscroll=function(){
                    if(scrollY>=top){
                        $('.loading').css('display','block')
                        clearTimeout(t)
                        t=setTimeout(function(){
                            for(var m=6;m<num+6;m++){
                                if(num>=oli.length){
                                    for(var p=num-6;p<oli.length;p++){
                                        $('.under_list_single').eq(p).css('display',"block")
                                        $('.loading').css('display','none')
                                    }
                                    console.log(p)
                                    if(p>=oli.length){
                                        $('.loading').css('display','none')
                                        $('.loading_status').css('display','block')
                                    }
                                }else{
                                    $('.under_list_single').eq(m).css('display',"block")
                                    $('.loading').css('display','none')
                                }
                            }
                            top+=207
                            num+=6
                        },1000)
                        // top+=207
                        
                    }
                    if(scrollY>=450){
                        $('.fix').css('display','block')

                        $('.top_sear').css('display','block').animate({
                            top:0
                        },500)
                    }else{
                        $('.fix').css('display','none')

                        $('.top_sear').css({
                            display:"none",
                            top:-60
                        })
                    }
                    if(scrollY>=1400){
                        $('.top_back').css('display','block')
                    }else{
                        $('.top_back').css('display','none')
        
                    }

                }
                    
            }
            
        })
    }
    top_back(){
        $('.top_back').on('click',function(){
            console.log(window.scrollY)
            $('html,body').animate({
                scrollTop:0
            },500)
        })
    }
    login(){
        //路由防御开关
        // if(this.getCookie('active')!="true"){
        //     alert('请先登录')
        //     location.href="../pages/login.html"
        // }
        // var username=location.search.slice(1)
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
}
new Index_wrap


class Banner{
    constructor(){
        this.w=document.querySelector('.bn1').offsetWidth
        // console.log(this.w)
        this.init()
        this.click()
        this.auto()
        this.t
        this.mouse()
    }
    init(){
        $('.bn2').css('left',this.w)
        $('.btn_l').css({
            background:'#333',
            color:"#fff"
        })
    }
    click(){
        var that=this
        $('.btn_l').on('click',function(){
            if($('.auto').css('left')==-that.w+'px'){
                $('.auto').animate({
                    left:0
                },800)
            }
            $(this).css({
                background:'#333',
                color:"#fff"
            }).next().css({
                color:'#333',
                background: '#fff'
            })

        })
        
        $('.btn_r').on("click",function(){
            console.log($('.auto').css('left'))
            if($('.auto').css('left')=='0px'){
                $('.auto').animate({
                    left:-that.w
                },800)
            }
            if($('.auto').css('left')==-that.w*2+'px'){
                $('.auto').animate({
                    left:-that.w
                },800)
            }
            $(this).css({
                background:'#333',
                color:"#fff"
            }).prev().css({
                color:'#333',
                background: '#fff'
            })
        })
    }
    auto(){
        var that=this
        var l=that.w
        var index=1
        this.t=setInterval(() => {
            $('.auto').animate({
                left:-l
            },800,function(){
                l=l+l
                index++
                if(l>=3*that.w){
                    $('.auto').css('left','0')
                    l=that.w
                }
            })
            if(index%2!=0){
                $('.btn_r').css({
                    background:'#333',
                    color:"#fff"
                })
                $('.btn_l').css({
                    color:'#333',
                    background: '#fff'
                })
            }else{
                $('.btn_l').css({
                    background:'#333',
                    color:"#fff"
                })
                $('.btn_r').css({
                    color:'#333',
                    background: '#fff'
                })
            }
        }, 2000);
        
    }
    mouse(){
        var that=this
        $('.banner_btn span').on('mouseenter',function(){
            clearInterval(that.t)
        }).on('mouseleave',function(){
            that.auto()
        })
        // $('.auto').on('mouseenter',function(){
        //     clearInterval(that.t)
        // }).on('mouseleave',function(){
        //     that.auto()
        // })
    }
}
new Banner