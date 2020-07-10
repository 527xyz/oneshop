class Publicjs{
    constructor(){
        this.init()
    }
    init(){
        this.notice_roll()
        this.antistop()
        this.splb_data()
    }
    notice_roll(){
        var distance=0
        this.t=setInterval(() => {
            distance-=30
            $('.top_notice>.notice_ul').animate({
                top:distance,
            },function(){
                if(distance=='-90'){
                    $('.top_notice>.notice_ul').css('top','0')
                    distance=0
                }
            })
        }, 1500);
        
    }
    antistop(){
        $('.search>input').on('input',function(){
            $(this).nextAll('.antistop').css('display','block')
            
            var text=$(this).val()
            $.ajax({
                url:"https://suggest.taobao.com/sug?code=utf-8&q="+text+"&_ksTS=1593314375249_483&k=1&area=c2c&bucketid=12",
                success:function(data){
                    $('.search>.antistop').empty()
                    $.each(data.result,function(index,value){
                        $('.search>.antistop').append('<li><a>'+value[0]+'</a></li>')
                    })
                },
                dataType:"jsonp"
            })
        }).nextAll('.antistop').on('mouseleave',function(){
            $(this).css('display','none')
            $('.search>input').on("click",function(){
                $(this).nextAll('.antistop').css('display','block')
                $(this).on('blur',function(){
                    $(this).nextAll('.antistop').css('display','none')
                })
            })
        })
    }
    splb_data(){
        $('.splb_title').on('mouseenter',function(){
            $(this).find('.splb_title_list').css('display','block')
            $.ajax({
                url:'../lib/data.json',
                success:function(data){
                    for(var i=0;i<data.length;i++){
                        $('.category-item').eq(i).empty()
                        var str_p=`<p>${data[i].tit}</p>`
                        var str_ul=""
                        var str_li=""
                        var arr=data[i].word.split(",")
                        $.each(arr,function(idx,val){
                        str_li+=`<li><a href="">${val}</a></li>`
                        })
                        str_ul="<ul>"+str_li+"</ul>"
                        $('.category-item').eq(i).html(str_p+str_ul)
                    }
                }
            })
        }).on("mouseleave",function(){
            $(this).find('.splb_title_list').css('display','none')
        })
    }
}
new Publicjs