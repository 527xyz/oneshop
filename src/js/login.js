class Login_wrap{
    constructor(){
        this.login_name=document.querySelector(".login_id")
        this.more=document.querySelector(".more")
        this.more_link=document.querySelector(".more_landing")
        this.code=document.querySelector(".qr_code").children[1]
        this.auto=document.querySelector(".auto_login")
        this.init()
        this.index=0
    }
    
    init(){
        this.focus()
        this.blur()
        this.mouse()
        this.iptchange()
        this.more1()
        this.code1()
        this.autopass()
        this.login_ajax()
    }
    autopass(){
        var that=this
        this.auto.children[0].onclick=function(){
            if(this.checked==true){
                that.auto.children[2].style.display="inline-block"
            }else if(this.checked==false){
                that.auto.children[2].style.display="none"
            }
        }
    }
    code1(){
        this.code.onmouseenter=function(){
            this.src="../images/ewm2.jpg"
        }
        this.code.onmouseleave=function(){
            this.src="../images/ewm1.jpg"
        }
    }
    more1(){
        var that=this
        this.more.onclick=function(){
            // console.log(1)
            if(that.index==0){
                that.more_link.style.display="block"
                that.index=1
                return
            }
            if(that.index=1){
                that.more_link.style.display="none"
                that.index=0
                return
            }
        }
    }
    iptchange(){
        var that=this
        this.login_name.oninput=function(){
            this.style.color="black"
            console.log(1)
            if(that.getCookie(this.value)){
                console.log(2)
                $('.login_form>.login_pass>input').val(that.getCookie(this.value))
                that.auto.children[0].checked=true
                that.auto.children[2].style.display="inline-block"
            }else{
                $('.login_form>.login_pass>input').val('')
            }
        }
    }
    mouse(){
        this.login_name.onmouseenter=function(){
            this.focus()
        }
        this.login_name.onmouseleave=function(){
            this.blur()
        }
    }
    focus(){
        this.login_name.onfocus=function(){
            if(this.value=="邮箱/手机/用户名"){
                this.value=""
                
            }
        }
    }
    blur(){
        this.login_name.onblur=function(){
            if(this.value==""){
                this.value="邮箱/手机/用户名"
                this.style.color="#ccc"
            }
        }
    }
    
    login_ajax(){
        var that=this
        $('.login_form>.auto_login>button').on('click',function(){
            $('.error_tip').css('display','block')
            if($('.login_name>.login_id').val()=="邮箱/手机/用户名"&&$('.login_pass>input').val()=="")
             {
                $('.error_tip').html("<i class='iconfont icon-brainsmartbulb'></i> 请输入账户名和密码")
            }else if($('.login_name>.login_id').val()=="邮箱/手机/用户名"){
                $('.error_tip').html("<i class='iconfont icon-brainsmartbulb'></i> 请输入账户名")
            }else if($('.login_pass>input').val()==""){
                $('.error_tip').html("<i class='iconfont icon-brainsmartbulb'></i> 请输入密码")
            }

            $.ajax({
                url:'http://localhost/ws203/oneShop/src/php/login.php',
                data:`username=${$('.login_name>.login_id').val()}&password=${$('.login_pass>input').val()}`,
                success:function(data){
                    // console.log(data)
                    // console.log(JSON.parse(data))



                    var arr=JSON.parse(data)
                    if(arr.code==1&&$('.login_name>.login_id').val()!="邮箱/手机/用户名"&&$('.login_pass>input').val()!=""){
                        $('.error_tip').html("<i class='iconfont icon-brainsmartbulb'></i> 用户名不存在").css('color','red')
                    }else if(arr.code==2&&$('.login_pass>input').val()!=""){
                        $('.error_tip').html("<i class='iconfont icon-brainsmartbulb'></i> 密码错误").css('color','red')
                    }else if(arr.code==3){
                        //登录成功
                        // console.log(data)
                        $('.error_tip').css('display','none')
                        if($('.auto_login>em').css('display')=='inline-block'){
                            that.setCookie($('.login_name>.login_id').val(),$('.login_pass>input').val(),7)
                        }
                        location.href='../pages/index.html?'+$('.login_name>.login_id').val()
                    }
                }
            })


            return false
        })
    }
    setCookie(key,val,data){
        var d=new Date();
        d.setDate(d.getDate()+data)
        document.cookie=`${key}=${val};expires=${d}`
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
new Login_wrap
