class Register_wrap{
    constructor(){
        this.init()
    }
    init(){
        this.tow_tip()
        this.anew_focus()
        this.reg_verify()
        this.ipt_change()
        this.test()
        this.submit()
        
    }
    tow_tip(){
        $('.register_form>li').find('.re62').on('focus',function(){
            $(this).next().animate({
                left:-62,
            },100)
            $(this).nextAll('.tit').css('display','block').animate({
                width: 160,
                height: 40,
            },100)
        })
        $('.register_form>li').find('.re76').on('focus',function(){
            $(this).next().animate({
                left:-76,
            },100)
            $(this).nextAll('.tit').css('display','block')
            $(this).nextAll('.tit_prev').animate({
                width: 160,
                height: 40,
            },100)
            $(this).nextAll('.tit_last').animate({
                width: 84,
                height: 20,
            },100).find('p').text("请再次输入密码").css('color','#333')
        }) 
    }
    anew_focus(){
        $('.register_form>li').find('.reg1').on('focus',function(){
            $(this).nextAll("em").css('display','none')
        })
        $('.register_form>li').find('.reg2').on('focus',function(){
            $(this).nextAll("em").css('display','none')
        })
        $('.register_form>li').find('.reg3').on('focus',function(){
            $(this).nextAll("em").css('display','none')
        })
        $('.register_form>li').find('.tit_last').prevAll(".re76").on('blur',function(){
            if($(this).val()==$('.register_form>li').find('.reg3').val()&&$(this).val()!=""){
                $(this).nextAll("em").css('display','block')
                $(this).nextAll(".tit_last").css('display','none')
            }else if($(this).val()!=$('.register_form>li').find('.reg3').val()){
                $(this).nextAll(".tit").find('p').text("两次密码不一致").css('color','red')
            }
        }).on('focus',function(){
            $(this).nextAll("em").css('display','none')
            $(this).nextAll(".tit_last").css('display','block')
        })
    }
    reg_verify(){
        var reg1=/^[\u4e00-\u9fa50-9a-zA-Z\-]{4,20}$/
        var reg2=/^1[3456789]\d{9}$/
        var reg3=/^[\x21-\x7E]{6,20}$/
        var ipt=document.querySelectorAll(".register_form li")
        for(let i=0;i<ipt.length-1;i++){
            ipt[i].onclick=function(eve){
                var that=this
                var e=eve||window.event
                var target=e.target||e.srcElement
                if(target.className=="re62 reg1"){
                    target.onblur=function(){
                        re(this,reg1)
                    }
                }
                if(target.className=="re62 reg2"){
                    target.onblur=function(){
                        re(this,reg2)
                    }
                }
                if(target.className=="re76 reg3"){
                    target.onblur=function(){
                        re(this,reg3)
                        $(this).nextAll(".pass_strong").css('display','none')
                    }
                }
                function re(ele,reg){
                    if(reg.test(ele.value)){
                        $(that).find("em").css('display','block')
                        $(that).find(".tit").css('display','none').animate({
                            width: 0,
                            height: 0,
                        },100)
                    }
                }
            }
        }
    }
    ipt_change(){
        var reg1=/\d/
        var reg2=/[a-zA-Z]/
        var reg3=/[^(a-zA-Z\d)]/
        $('.register_form>li').find('.reg3').bind('input propertychange',function(){
            if(reg1.test(this.value)&&reg2.test(this.value)&&reg3.test(this.value)&&(this.value.length>5&&this.value.length<21)){
                $(this).nextAll(".tit").css('display','none')
                console.log("密码强度：强")
                $(this).nextAll(".pass_strong").css('display','none')
                $(this).nextAll(".pass_strong3").css('display','block')
            }else if(((reg1.test(this.value)&&reg2.test(this.value))||(reg1.test(this.value)&&reg3.test(this.value))||(reg3.test(this.value)&&reg2.test(this.value)))&&(this.value.length>5&&this.value.length<21)){
                $(this).nextAll(".tit").css('display','none')
                console.log("密码强度：中")
                $(this).nextAll(".pass_strong").css('display','none')
                $(this).nextAll(".pass_strong2").css('display','block')
            }else if(((reg1.test(this.value)||reg2.test(this.value)||reg3.test(this.value)))&&(this.value.length>5&&this.value.length<21)){
                $(this).nextAll(".tit").css('display','none')
                console.log("密码强度：弱")
                $(this).nextAll(".pass_strong").css('display','none')
                $(this).nextAll(".pass_strong1").css('display','block')
            }
        })
    }
    test(){
        var that=this
        $('.register_form>li').find('.re90').nextAll('a').on('click',function(){
            $('.register_form>li').find('.re90').val(that.verificationCode()).next().animate({
                left:-90,
            },50).nextAll("em").css({
                display:'block',
                right:-180
            })
        })
    }
    verificationCode(){
        function randomInt(min,max){
            if(min>max){
                var ls=min
                min=max
                max=ls
            }
            return Math.floor(Math.random()*(max-min+1)+min)
        }
        var str=''
            for(var i=0;i<4;i++){
                var num=randomInt(0,9)
                var AZ=String.fromCharCode(randomInt(65,90))
                var az=String.fromCharCode(randomInt(97,122))
                str+=num+AZ+az
            }
            var Str=''
            for(var i=0;i<4;i++){
                Str+=str[randomInt(0,str.length-1)]
            }
            return Str
    }
    submit(){
        var ipt=document.querySelectorAll('.register_form>li>input')
        var tit=document.querySelectorAll('.register_form>li>.tit')
        var oem=document.querySelectorAll('.register_form>li>em')
        var name=document.getElementsByClassName("reg1")[0]
        var phonenumber=document.getElementsByClassName("reg2")[0]
        var password=document.getElementsByClassName("reg3")[0]
        var index=0
        var n=0
        var m=0
        $('.register_form>li>.agreement_word').nextAll('a').on('click',function(){
            for(var i=0;i<ipt.length;i++){
                if(ipt[i].value==""){
                    index=1
                    break
                }
            }
            if(index==1){
                alert("您还有信息没有填写，请全部填写后再点击注册")
            }
            for(var i=0;i<tit.length;i++){
                if($(tit[i]).css('display')=="block"&&index==0){
                    n=1
                    break
                }
            }
            if(n==1){
                alert("请按规则提示填写")
                n=0
            }else{
                index=0
            }
            for(var i=0;i<oem.length;i++){
                if($(oem[i]).css('display')=="none"){
                    m=1
                    break
                }else{
                    m=0
                }
            }
            if(m==0){
                $.ajax({
                    url:'http://localhost/ws203/oneShop/src/php/register.php',
                    data:`username=${name.value}&password=${password.value}&phonenumber=${phonenumber.value}`,
                    success:function(data){
                        // console.log(data)
                        // console.log(JSON.parse(data))
                        var arr=JSON.parse(data)
                        // console.log(arr)
                        if(arr.code==0){
                            alert("注册失败，用户名已存在")
                        }else if(arr.code==1){
                            alert("注册成功,点击确定跳转到登录界面")
                            // location.href='../pages/register_transit_shipment.html'
                            location.href='../pages/login.html'
                        }
                    },
                })




                // location.href='../pages/transit_shipment.html'
            }
        })

        // $('.register_form>li>.agreement_word').nextAll('a').on('click',function(){
        //     $.ajax({
        //         url:'http://localhost/ws203/oneShop/src/php/register.php',
        //         data:`username=${name.value}&password=${password.value}&phonenumber=${phonenumber.value}`,
        //         success:function(data){
        //             console.log(JSON.parse(data))
        //         },
        //     })
        // })
    }
    
}
new Register_wrap

