"use strict";function _classCallCheck(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,s){for(var t=0;t<s.length;t++){var a=s[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,s,t){return s&&_defineProperties(n.prototype,s),t&&_defineProperties(n,t),n}var Index_wrap=function(){function n(){_classCallCheck(this,n),this.init()}return _createClass(n,[{key:"init",value:function(){this.count_time(),this.count_time_data(),this.scene_data(),this.live_fresh_slide(),this.know_list(),this.top_back(),this.login()}},{key:"count_time",value:function(){var n,s,t,a=5400;function c(n){return n.length<2?"0"+n:n}setInterval(function(){n=parseInt(a/60/60).toString(),s=parseInt((a-60*n*60)/60).toString(),t=parseInt(a-60*n*60-60*s).toString(),$(".count_time>span").eq(0).text(c(n)),$(".count_time>span").eq(1).text(c(s)),$(".count_time>span").eq(2).text(c(t)),a<=0?a=5400:a-=1},1e3)}},{key:"count_time_data",value:function(){$.ajax({url:"http://localhost/ws203/oneShop/src/lib/sup_time.json",success:function(n){for(var s=0;s<n.length;s++)$(".time_limit_con>ul").append('\n                    <li>\n                        <a href="">\n                            <div class="sup_top">\n                                <img src="'.concat(n[s].img,'" alt="">\n                            </div>\n                            <div class="sup_bottom">\n                                <div class="s_title">\n                                ').concat(n[s].tit,'\n                                </div>\n                                <div class="s_bar">\n                                    <div class="progress" style="width:').concat(n[s].wid,'"></div>\n                                </div>\n                                <div class="s_son">\n                                    <div class="s_num">\n                                        <span>').concat(n[s].price,"</span><span>").concat(n[s].pricehis,"</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    "))}})}},{key:"live_fresh_slide",value:function(){$(".qua_top_slide_right").on("click",function(){var n=$(".qua_top_slide_con").position().left-208;n<="-550"?$(".qua_top_slide_con").css("left","-401.95"):$(".qua_top_slide_con").css("left",n)}).prev().on("click",function(){console.log(1);var n=$(".qua_top_slide_con").position().left+208;"20"<=n?$(".qua_top_slide_con").css("left","14.04"):$(".qua_top_slide_con").css("left",n)})}},{key:"scene_data",value:function(){var t=this;$.ajax({url:"http://localhost/ws203/oneShop/src/lib/scene.json",success:function(n){for(var s=0;s<n.length;s++)$(".scene_floor_con").append('<div class="live_fresh">\n                        <div class="qua_show">\n                            <a href="" class="qua_tit">\n                                <span>'.concat(n[s].qua_tit_span1,"</span>\n                                <span>").concat(n[s].qua_tit_span2,'</span>\n                            </a>\n                            <div class="qua_show_con">\n                                <img src="').concat(n[s].qua_show_con_left_img,'" alt="" class="qua_show_con_left">\n                                <div class="qua_left_font">\n                                    <div class="qua_left_word">').concat(n[s].qua_left_word1,'</div>\n                                    <div class="qua_left_word">').concat(n[s].qua_left_word2,'</div>\n                                    <div class="qua_left_word">').concat(n[s].qua_left_word3,'</div>\n                                    <div class="qua_left_word">').concat(n[s].qua_left_word4,'</div>\n                                    <div class="qua_left_word">').concat(n[s].qua_left_word5,'</div>\n                                    <div class="qua_left_word">').concat(n[s].qua_left_word6,'</div>\n                                </div>\n                                <div class="qua_show_con_right">\n                                    <a href="" class="bursting_big">\n                                        <p class="bursting_big_p1">').concat(n[s].bur_big_p1,'</p>\n                                        <p class="bursting_big_p2">').concat(n[s].bur_big_p2,'</p>\n                                        <div class="qua_buy_btn">').concat(n[s].bur_big_buy,'</div>\n                                        <img src="').concat(n[s].bur_big_img,'" alt="">\n                                    </a>\n                                    <a href="" class="bursting_sm">\n                                        <p class="bursting_sm_p1">').concat(n[s].bur_sm1_p1,'</p>\n                                        <p class="bursting_sm_p2">').concat(n[s].bur_sm1_p2,'</p>\n                                        <img src="').concat(n[s].bur_sm1_img,'" alt="">\n                                    </a>\n                                    <a href="" class="bursting_sm">\n                                        <p class="bursting_sm_p1">').concat(n[s].bur_sm2_p1,'</p>\n                                        <p class="bursting_sm_p2">').concat(n[s].bur_sm2_p2,'</p>\n                                        <img src="').concat(n[s].bur_sm2_img,'" alt="">\n                                    </a>\n                                    <a href="" class="bursting_sm">\n                                        <p class="bursting_sm_p1">').concat(n[s].bur_sm3_p1,'</p>\n                                        <p class="bursting_sm_p2">').concat(n[s].bur_sm3_p2,'</p>\n                                        <img src="').concat(n[s].bur_sm3_img,'" alt="">\n                                    </a>\n                                    <a href="" class="bursting_sm">\n                                    <p class="bursting_sm_p1">').concat(n[s].bur_sm4_p1,'</p>\n                                    <p class="bursting_sm_p2">').concat(n[s].bur_sm4_p2,'</p>\n                                    <img src="').concat(n[s].bur_sm4_img,'" alt="">\n                                    </a>\n                                    <a href="" class="bursting_big">\n                                        <p class="bursting_big_p1">').concat(n[s].bur_big2_p1,'</p>\n                                        <p class="bursting_big_p2">').concat(n[s].bur_big2_p2,'</p>\n                                        <div class="qua_buy_btn">').concat(n[s].bur_big2_buy,'</div>\n                                        <img src="').concat(n[s].bur_big2_img,'" alt="">\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="qua_top">\n                            <img src="../images/qua_ph1.png" alt="" class="qua_ph">\n                            <p class="qua_top_font">').concat(n[s].qua_top_p1,'</p>\n                            <p class="qua_top_font2">').concat(n[s].qua_top_p2,'</p>\n                            <div class="qua_top_slide">\n                                <div class="qua_top_slide_con">\n                                    <img src="').concat(n[s].qua_top_img1,'" alt="">\n                                    <img src="').concat(n[s].qua_top_img2,'" alt="">\n                                    <img src="').concat(n[s].qua_top_img3,'" alt="">\n                                </div>\n                            </div>\n                            <span class="qua_top_slide_left">\n                                <i class="iconfont icon-zuojiantou"></i>\n                            </span>\n                            <span class="qua_top_slide_right">\n                                <i class="iconfont icon-youjiantou"></i>\n                            </span>\n                        </div>\n                    </div>'));t.live_fresh_slide()}})}},{key:"know_list",value:function(){$.ajax({url:"http://localhost/ws203/oneShop/src/lib/shop_list.json",success:function(n){for(var s=0;s<n.length;s++)$(".under_list").append('\n                    <li class="under_list_single">\n                        <div class="under_pic">\n                            <img src="'.concat(n[s].img,'" alt="">\n                        </div>\n                        <p class="single_tit">').concat(n[s].name,'</p>\n                        <p class="single_money">￥').concat(n[s].price,'.00</p>\n                        <div class="single_tag clear_fix">\n                            <div class="single_ticket">领券</div>\n                        </div>\n                        <div class="single_btn">\n                            <div class="single_btn_left">\n                                <a href="" class="btn_car">\n                                    <i class="iconfont icon-gouwuchekong"></i>\n                                </a>\n                            </div>\n                            <div class="single_btn_right">\n                                <a href="">找相似</a>\n                            </div>\n                        </div>\n                        <a href="http://localhost/ws203/oneShop/src/pages/commodity-details.html?goodsId=').concat(n[s].goodsId,'" class="border_line"></a>\n                    </li>'));for(var t,a=document.getElementsByClassName("under_list_single"),c=6;c<a.length;c++)$(".under_list_single").eq(c).css("display","none");var i=2e3,o=0;window.onscroll=function(){scrollY>=i&&($(".loading").css("display","block"),clearTimeout(t),t=setTimeout(function(){for(var n=6;n<o+6;n++)if(o>=a.length){for(var s=o-6;s<a.length;s++)$(".under_list_single").eq(s).css("display","block"),$(".loading").css("display","none");console.log(s),s>=a.length&&($(".loading").css("display","none"),$(".loading_status").css("display","block"))}else $(".under_list_single").eq(n).css("display","block"),$(".loading").css("display","none");i+=207,o+=6},1e3)),450<=scrollY?($(".fix").css("display","block"),$(".top_sear").css("display","block").animate({top:0},500)):($(".fix").css("display","none"),$(".top_sear").css({display:"none",top:-60})),1400<=scrollY?$(".top_back").css("display","block"):$(".top_back").css("display","none")}}})}},{key:"top_back",value:function(){$(".top_back").on("click",function(){console.log(window.scrollY),$("html,body").animate({scrollTop:0},500)})}},{key:"login",value:function(){"true"!=this.getCookie("active")&&(alert("请先登录"),location.href="../pages/login.html"),$(".top_vip .login_btn").text(this.getCookie("user")).prev().text("晚上好,亲爱的").nextAll(".register_btn").css("display","none")}},{key:"getCookie",value:function(n){for(var s,t=document.cookie.split("; "),a=0;a<t.length;a++)if((s=t[a].split("="))[0]==n)return s[1]}}]),n}();new Index_wrap;var Banner=function(){function n(){_classCallCheck(this,n),this.w=document.querySelector(".bn1").offsetWidth,this.init(),this.click(),this.auto(),this.t,this.mouse()}return _createClass(n,[{key:"init",value:function(){$(".bn2").css("left",this.w),$(".btn_l").css({background:"#333",color:"#fff"})}},{key:"click",value:function(){var n=this;$(".btn_l").on("click",function(){$(".auto").css("left")==-n.w+"px"&&$(".auto").animate({left:0},800),$(this).css({background:"#333",color:"#fff"}).next().css({color:"#333",background:"#fff"})}),$(".btn_r").on("click",function(){console.log($(".auto").css("left")),"0px"==$(".auto").css("left")&&$(".auto").animate({left:-n.w},800),$(".auto").css("left")==2*-n.w+"px"&&$(".auto").animate({left:-n.w},800),$(this).css({background:"#333",color:"#fff"}).prev().css({color:"#333",background:"#fff"})})}},{key:"auto",value:function(){var n=this,s=n.w,t=1;this.t=setInterval(function(){$(".auto").animate({left:-s},800,function(){t++,(s+=s)>=3*n.w&&($(".auto").css("left","0"),s=n.w)}),t%2!=0?($(".btn_r").css({background:"#333",color:"#fff"}),$(".btn_l").css({color:"#333",background:"#fff"})):($(".btn_l").css({background:"#333",color:"#fff"}),$(".btn_r").css({color:"#333",background:"#fff"}))},2e3)}},{key:"mouse",value:function(){var n=this;$(".banner_btn span").on("mouseenter",function(){clearInterval(n.t)}).on("mouseleave",function(){n.auto()})}}]),n}();new Banner;