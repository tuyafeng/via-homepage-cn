if(!localStorage.getItem("first"))
{
    var a=["book","set","first"],
        b=[[["find()","./images/discover.png","精选站点"],["http://www.163.com","./images/163.com.png","网易"],["http://m.shouhu.com","./images/sohu.com.png","搜狐"],["http://www.youku.com","./images/youku.com.png","优酷"],["http://m.bilibili.com","./images/bilibili.com.png","Bilibili"],["https://m.weibo.com","./images/weibo.com.png","微博"],["https://m.taobao.com","./images/taobao.com.png","淘宝"],["https://sina.cn","./images/sina.cn.png","新浪"],["http://portal.3g.qq.com","./images/qq.com.png","腾讯"],["https://www.google.com/ncr","./images/google.ru.png","Google"]],[["engines","via"],["transition",0],["wallpaper",""],["logo","./images/logo.png"],["bookcolor","black"]],0];
    for(var i=a.length-1;i>-1;i--)localStorage.setItem(a[i],JSON.stringify(b[i]));
    alert("感谢您的使用本主页，本页面书签和设置基于网页存储，请勿清除缓存里的网页存储。");
}

var Storage,html="";
Storage.book=JSON.parse(localStorage.getItem('book'));
for(var i=0;i<Storage.book.length;i++){
    html+='<li><div value="' + Storage.book[i][0] + '"><div class="imgbook" style="background-image:url(' + Storage.book[i][1] + ')"></div><p>' + Storage.book[i][2] + "</p></div></li>";
}
$("#book").html(html);
function Size(e) {
    var t = ($(window).height()-$("#main").height())/2;
    e?$("#main").animate({top:t},200):$("#main").css("top",t);
}
Size(0);

Storage.set=JSON.parse(localStorage.getItem('set'));
for(var i=Storage.set.length-1;i>-1;i--)Storage.set[Storage.set[i][0]]=Storage.set[i][1]; 
$("body").css("background-image","url("+Storage.set.wallpaper+")");
$("#logo").css("background-image","url("+Storage.set.logo+")");
$("#book").css('color',Storage.set.bookcolor);

$(function() {
    $("body").append('<div class="search">'+
    '    <ul class="suggestion"></ul>'+
    '    <div class="div-input">'+
    '        <input class="input" placeholder="搜索或输入网址"><div class="back"></div><div class="close">取消</div>'+
    '    </div>'+
    '    <div class="shortcut">'+
    '        <ul class="shortcut1"><li>www.</li><li>m.</li><li>wap.</li><li>.org</li></ul>'+
    '        <ul class="shortcut2"><li>.</li><li>/</li><li>.cn</li><li>.com</li><li>.org</li></ul>'+
    '        <ul class="shortcut3"><li><a>快速搜索:</a></li><li></li><li></li><li></li><li></li><li></li></ul>'+
    '    </div>'+
    '</div>'+
    '<div class="addbook-shade">'+
    '    <div class="addbook-from">'+
    '        <div class="addbook-title">添加书签</div>'+
    '        <div class="addbook-content">'+
    '            <input type="text" class="addbook-input" placeholder="标题">'+
    '            <input type="text" class="addbook-input" placeholder="地址">'+
    '            <div id="addbook-upload"></div>'+ 
    '            <input type="file" id="addbook-pick">'+
    '        </div>'+
    '        <div class="addbook-btn"><a class="addbook-btn1">取消</a><a class="addbook-btn0">确定</a></div>'+
    '    </div>'+
    '</div>'+
    '<div class="set-from">'+
    '    <div class="set-back"></div>'+
    '    <p class="set-logo">设置</p>'+
    '    <ul class="set-option-from">'+
    '        <li class="set-option">'+
    '            <p class="set-title">搜索引擎</p>'+
    '            <select class="set-select"><option value="via">跟随VIA</option><option value="baidu">百度</option><option value="google">谷歌</option><option value="bing">必应</option><option value="sm">神马</option><option value="haosou">好搜</option><option value="sogou">搜狗</option></select>'+
    '            <p class="set-description">非VIA浏览器请设置搜索引擎</p>'+
    '        </li>'+
    '        <li class="set-option">'+
    '            <p class="set-title">过渡动画</p>'+
    '            <div class="set-switch"></div>'+
    '            <p class="set-description">开闭返回不重载请关闭</p>'+
    '        </li>'+
    '        <li class="set-option">'+
    '            <p class="set-title">壁纸</p>'+
    '            <div class="set-upload"></div>'+
    '            <p class="set-description">图片过大会影响加载速度</p>'+
    '        </li>'+
    '        <li class="set-option">'+
    '            <p class="set-title">LOGO</p>'+
    '            <div class="set-upload"></div>'+
    '            <p class="set-description">图片过大会影响加载速度</p>'+
    '        </li>'+
    '        <li class="set-option">'+
    '            <p class="set-title">标签颜色</p>'+
    '            <select class="set-select"><option value="black">黑色</option><option value="white">白色</option></select>'+
    '            <p class="set-description">主页书签文字颜色</p>'+
    '        </li>'+
    '        <li class="set-option">'+
    '            <p class="set-title">删除壁纸和LOGO</p>'+
    '        </li>'+
/*    '        <li class="set-option">'+
    '            <p class="set-title">备份</p>'+
    '            <p class="set-description">未完成</p>'+
    '        </li>'+
    '        <li class="set-option">'+
    '            <p class="set-title">还原</p>'+
    '            <div class="set-upload"></div>'+
    '            <p class="set-description">未完成</p>'+
    '        </li>'+*/
    '        <li class="set-option">'+
    '            <p class="set-title">检查更新</p>'+
    '            <p class="set-description">当前版本：1.0</p>'+
    '        </li>'+
    '        <li class="set-option">'+
    '            <p class="set-title">百度云下载</p>'+
    '            <p class="set-description">https://pan.baidu.com/s/1dEDjwXF</p>'+
    '        </li>'+
    '        <li class="set-option">'+
    '            <p class="set-title">关于</p>'+
    '            <p class="set-description">作者：BigLop</p>'+
    '        </li>'+
    '    </ul>'+
    '    <input type="file" id="set-upload">'+
    '</div>'+
    '<div class="find-from">'+
    '    <div class="find-background">'+
    '    <ul class="find-page">'+
    '        <li>科技</li>'+
    '        <li>生活</li>'+
    '        <li>设计</li>'+
    '        <li>工具</li>'+
    '        <span class="active-span"></span>'+
    '    </ul>'+
    '    <div class="find-swipe">'+
    '      <ul class="find-ul">'+
    '        <li class="find-list">'+
    '                <a href="https://www.zhihu.com"><img src="images/zhihu.com.png"><p>知乎</p><p>知识分享社区</p></a>'+
    '                <a href="http://36kr.com"><img src="images/36kr.png"><p>36kr</p><p>互联网创业资讯</p></a>'+
    '                <a href="http://sspai.com"><img src="images/sspai.png"><p>少数派</p><p>高质量应用推荐</p></a>'+
    '                <a href="http://www.ifanr.com"><img src="images/ifanr.png"><p>爱范儿</p><p>范科技媒体</p></a>'+
    '                <a href="http://www.zealer.com"><img src="images/zealer.com.png"><p>ZEALER</p><p>电子产品评测网站</p></a>'+
    '                <a href="http://www.dgtle.com"><img src="images/dgtle.png"><p>数码尾巴</p><p>分享美好数字生活</p></a>'+
    '                <a href="http://cn.engadget.com"><img src="images/engadget.png"><p>瘾科技</p><p>科技新闻和评测</p></a>'+
    '                <a href="https://m.huxiu.com"><img src="images/huxiu.com.png"><p>虎嗅网</p><p>科技媒体</p></a>'+
    '                <a href="http://www.pingwest.com"><img src="images/pingwest.png"><p>品玩</p><p>有品好玩的科技</p></a>'+
    '                <a href="http://www.jianshu.com"><img src="images/jianshu.png"><p>简书</p><p>优质原创内容社区</p></a>'+
    '                <a href="https://www.v2ex.com"><img src="images/v2ex.png"><p>V2EX</p><p>关于分享和探索的地方</p></a>'+
    '        </li>'+
    '        <li class="find-list">'+
    '           '+
    '                <a href="http://m.douban.com"><img src="images/douban.png"><p>豆瓣</p><p>一个神奇的社区</p></a>'+
    '                <a href="http://qingmang.me/magazines"><img src="images/qingmang.png"><p>轻芒杂志</p><p>生活兴趣杂志</p></a>'+
    '                <a href="http://m.wufazhuce.com"><img src="images/wufazhuce.com.png"><p>ONE</p><p>韩寒监制</p></a>'+
    '                <a href="http://m.mafengwo.cn"><img src="images/mafengwo.png"><p>马蜂窝</p><p>旅游攻略社区</p></a>'+
    '                <a href="http://m.xiaohongshu.com"><img src="images/xiaohongshu.png"><p>小红书</p><p>可以买到国外的好东西</p></a>'+
    '                <a href="http://m.smzdm.com"><img src="images/smzdm.png"><p>什么值得买</p><p>应该能省点钱吧</p></a>'+
    '                <a href="https://dianying.taobao.com"><img src="images/taopiaopiao.png"><p>淘票票</p><p>不看书，就看几场电影吧</p></a>'+
    '                <a href="http://m.xiachufang.com"><img src="images/xiachufang.png"><p>下厨房</p><p>是男人就学做几道菜</p></a>'+
    '                <a href="https://enjoy.ricebook.com"><img src="images/enjoy.png"><p>ENJOY</p><p>高端美食团购</p></a>'+
    '                <a href="http://www.o2bra.com.cn"><img src="images/o2bra.png"><p>氧气</p><p>帮她挑一件性感bra</p></a>'+
    '        </li>'+
    '        <li class="find-list">'+
    '                <a href="http://m.zcool.com.cn"><img src="images/zcool.png"><p>站酷网</p><p>设计师互动平台</p></a>'+
    '                <a href="http://www.lofter.com"><img src="images/lofter.png"><p>Lofter</p><p>摄影爱好者社区</p></a>'+
    '                <a href="http://www.behance.net"><img src="images/behance.png"><p>Behance</p><p>Adobe旗下的创意平台</p></a>'+
    '                <a href="https://dribbble.com"><img src="images/dribbble.png"><p>Dribbble</p><p>好设计都在这</p></a>'+
    '                <a href="http://www.uisdc.com"><img src="images/uisdc.png"><p>优设网</p><p>设计从业者入门网站</p></a>'+
    '                <a href="http://miniature-calendar.com"><img src="images/miniature-calendar.png"><p>小型日历</p><p>脑洞无限巨大</p></a>'+
    '                <a href="https://thefwa.com"><img src="images/thefwa.png"><p>thefwa</p><p>网页界的奥斯卡</p></a>'+
    '                <a href="https://500px.com"><img src="images/500px.png"><p>500px</p><p>最出色的摄影社区</p></a>'+
    '                <a href="http://m.moko.cc"><img src="images/moko.png"><p>MOKO!</p><p>娱乐人才平台</p></a>'+
    '        </li>'+
    '        <li class="find-list">'+
    '                <a href="http://www.wandoujia.com/award"><img src="images/wandoujia.png"><p>豌豆荚设计</p><p>发现最优美的应用</p></a>'+
    '                <a href="http://m.ximalaya.com"><img src="images/xmlyfm.png"><p>喜马拉雅听</p><p>音频分享平台</p></a>'+
    '                <a href="http://www.coolapk.com"><img src="images/coolapk.png"><p>酷安</p><p>发现应用的乐趣</p></a>'+
    '                <a href="https://developer.mozilla.org/zh-CN"><img src="images/mozilla.png"><p>Mozilla</p><p>学习web开发的最佳实践</p></a>'+
    '                <a href="http://m.open.163.com"><img src="images/open163.png"><p>网易公开课</p><p>人chou就要多学习</p></a>'+
    '                <a href="https://shimo.im"><img src="images/shimo.png"><p>石墨文档</p><p>可多人实时协作的云端文档</p></a>'+
    '        </li>'+
    '      </ul>'+
    '    </div>'+
    '    <div class="find-close"></div>'+
    '    </div>'+
    '</div>'+
    '<input class="s-temp">'+
    '<div class="transition"></div>'+
    '<div class="btn_prev"></div>'+
    '<div class="btn_next"></div>');
    
    Size(0);
    
    function book_li_longPress() {
        $("#book li").longPress(function() {
            if (!$(".addbook").length  && !$(".delbook").length) {
                for(var i=$(".imgbook").length;i>-1;i--){
                    $(".imgbook").eq(i).append('<div class="delbook"></div>');
                }
                $("#book li").length < 20 && $("#book").append('<li class="addbook"><div value="addbook()"><div class="imgbook" style="background-image:url(./images/addbook.png)"></div><p>添加</p></div></li>');
                Size(1);
            }
        });
    }
    book_li_longPress();

    $("#book").on("click", "li", function(e) {
        e.stopPropagation();
        if (!$(this).find(".delbook").length) {
            var t = $(this).find('div').attr("value");
            switch(t){
              case "find()":
                find();
                break;
              case "addbook()":
                $(".addbook-input").val('');
                $("#addbook-upload").html('点击选择图标');
                $(".addbook-shade").show();
                $(document).click();
                break;
              case void 0:
                break;
              default:
                !Storage.set.transition && $(".transition").show();
                self.location = t;
            }
        }
    });

    
    $("#edit").click(function() {
        //主页
        $("#edit,#book").css('animation','down .2s');
        //搜索页初始化
        $(".suggestion").html("");
        $(".close").html("取消");
        $(".shortcut1").show();
        $(".shortcut2,.shortcut3,.back").hide();
        $(".s-temp").focus();
        //搜索页
        $(".search").css('animation','fadeIn .2s').show();
        setTimeout(function() {
            $(".div-input,.shortcut").show();
            $(".input").focus().val("");
        }, 170);
    });
    
    $(".suggestion").click(function(e) {
        if(e.target.nodeName==="LI"){var s=e.target.innerText;if(s)return searchText(s)}
        //主页
        $("#edit,#book").css('animation','up .2s');
        //搜索页
        $(".search").css('animation','fadeOut .2s');
        setTimeout(function() {
            $(".search,.shortcut,.div-input").hide();
        }, 170);
    });
    
    $("#addbook-upload").click(function(){
        $("#addbook-pick").click();
    })
    
    $("#addbook-pick").on("change",function(e){
        var files = $(this).prop('files');
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.addEventListener("load", function(e) {
            $("#addbook-upload").html('<img src="'+e.target.result+'"></img><div>'+files[0].name+'</div>');
        })
    })
    
    $(".addbook-btn0").click(function(){
        var t = $(".addbook-input").eq(0).val(),u = $(".addbook-input").eq(1).val(),p = $("#addbook-upload img").attr('src');
        if(t.length && u.length && p.length){
            u = u.match(/^(ht|f)tp(s?):\/\//) ? u : "http://" + u;
            Storage.book.push([u,p,t]);
            localStorage.setItem("book", JSON.stringify(Storage.book));
            $(".addbook-btn1").click();
            var i = Storage.book.length-1;
            $("#book").append('<li><div value="' + u + '"><div class="imgbook" style="background-image:url(' + p + ')"></div><p>' + t + "</p></div></li>");
            $("#book li").eq(i).find('div').eq(0).css('margin-top','84px').animate({marginTop:0},200,function() {Size(1);});
            book_li_longPress();
        }
    })

    $(".addbook-btn1").click(function(){
        $(".addbook-shade").css("animation","fadeOut .2s");
        $(".addbook-from").css("animation","down .2s");
        setTimeout(function() {
            $(".addbook-shade").hide();
            $(".addbook-shade,.addbook-from").removeAttr("style");
        }, 170);
        
    })

     $("#book").on("click", ".delbook", function(e) {
        e.stopPropagation();
        var i = $(this).parents('li').index();
        $("#book li").eq(i).find('.delbook').remove();
        $("#book li").eq(i).find('div').eq(0).animate({marginTop:84},200,function(){$("#book li").eq(i).remove();Size(1);});
        Storage.book.splice(i, 1);
        localStorage.setItem("book", JSON.stringify(Storage.book));
    });
    
    $(".addbook-shade").click(function(e){
        if(e.target.className==="addbook-shade")
        $(".addbook-btn1").click();
    })
    
    $(document).click(function(){
        if($(".delbook").length){
            $(".delbook").css('animation','scale2 .2s');
            setTimeout(function() {
                $(".delbook").remove();
                Size(1);
            }, 150);
            $(".addbook").remove();
        }
    });
    
    $(".input").on("input", function() {
        input_change();
    });

    $(".back").click(function() {
        $(".input").focus().val("");
        input_change();
    });

    $(".shortcut1").click(function(e) {
        $(".input").focus().val($(".input").val() + e.target.innerText);
        input_change();
    });

    $(".shortcut2").click(function(e) {
        $(".input").focus().val($(".input").val() + e.target.innerText);
        input_change();
    });

    $(".shortcut3 li").click(function() {
        var t;
        switch ($(this).index()) {
          case 1:
            t = "http://s.weibo.com/weibo/";
            break;

          case 2:
            t = "https://www.zhihu.com/search?type=content&q=";
            break;

          case 3:
            t = "http://www.soku.com/m/y/video?q=";
            break;

          case 4:
            t = "https://m.douban.com/search?query=";
            break;

          case 5:
            t = "http://weixin.sogou.com/weixin?type=2&query=";
            break;
        }
        t && (!Storage.set.transition && $(".transition").show(),self.location = t + $(".input").val());
    });
    
    function input_change() {
        var t = $(".input").val();
        $(".shortcut1,.shortcut2,.shortcut3").hide();
        if (!t) {
            $(".back").hide();
            $(".close").html("取消");
            $(".shortcut1").show();
        } else {
            $(".back").show();
            $(".close").html(/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(t) ? "进入" :"搜索");
            escape(t).indexOf("%u") < 0 ? $(".shortcut2").show() :$(".shortcut3").show();
        }
        $.ajax({url:"http://suggestion.baidu.com/su",type:"GET",dataType:"jsonp",data:{wd:t,cb:"su"},timeout:5e3});
    }
    
    $(".close").click(function() {
        search();
    });

    $(".input").keydown(function(e) {
        e.keyCode === 13 && search();
    });

    function search() {
        var t = $(".input").val();
        if (!t) {
            $(".input").blur();
            $(".suggestion").click();
        } else {
            searchText(t);
        }
    }

    function searchText(t) {
        !Storage.set.transition ? $(".transition").show() : $(".suggestion").click();
        var u;
        switch (Storage.set.engines) {
          case 'baidu':
            u = "https://www.baidu.com/s?wd=";
            break;
          case 'google':
            u = "https://www.google.com.hk/search?q=";
            break;
          case 'bing':
            u = "http://cn.bing.com/search?q=";
            break;
          case 'sm':
            u = "http://m.sm.cn/s?q=";
            break;
          case 'haosou':
            u = "https://www.so.com/s?q=";
            break;
          case 'sogou':
            u = "https://www.sogou.com/web?query=";
            break;
        }
        
        u?self.location=u+t:window.via.searchText(t);
    }

    $(".find-close").click(function() {
        $(".find-background").css('animation','findDown .3s');
        $(".find-from").css({'animation':'fadeOut .2s','top':'0'});
        setTimeout(function() {
            $(".find-from").css({'animation':'','top':'-100%'});
        }, 170);
    });

    function find() {
        $(".find-background").css('animation','findUp .3s');
        $(".find-from").css({'animation':'find .2s','top':'0'}).show();
    }

    $(".find-from a").click(function() {
        !Storage.set.transition ? $(".transition").show() :$(".find-from").css("top", "-100%"), 
        $(".find-from").removeClass("find"), $(".find-background").removeClass("findUp");
    });

    //touchSlider
    !function(a){a.fn.touchSlider=function(c){c.supportsCssTransitions=function(a){var c,d,b=["Webkit","Moz","Ms"];for(c=0,d=b.length;d>c;c++)if("undefined"!=typeof a[b[c]+"Transition"])return!0;return!1}(document.createElement("div").style),c=jQuery.extend({roll:!0,flexible:!1,btn_prev:null,btn_next:null,paging:null,speed:75,view:1,range:.15,page:1,transition:!1,initComplete:null,counter:null,multi:!1},c);var d=[];return d=a.extend({},a.fn.touchSlider.defaults,c),this.each(function(){a.fn.extend(this,b);var c=this;this.opts=d,this._view=this.opts.view,this._speed=this.opts.speed,this._tg=a(this),this._list=this._tg.children().children(),this._width=parseInt(this._tg.css("width")),this._item_w=parseInt(this._list.css("width")),this._len=this._list.length,this._range=this.opts.range*this._width,this._pos=[],this._start=[],this._startX=0,this._startY=0,this._left=0,this._top=0,this._drag=!1,this._scroll=!1,this._btn_prev,this._btn_next,this.init(),a(this).bind("touchstart",this.touchstart).bind("touchmove",this.touchmove).bind("touchend",this.touchend).bind("dragstart",this.touchstart).bind("drag",this.touchmove).bind("dragend",this.touchend),a(window).bind("orientationchange resize",function(){c.resize(c)})})};var b={init:function(){var c,d,b=this;for(a(this).children().css({width:this._width+"px",overflow:"visible"}),this.opts.flexible&&(this._item_w=this._width/this._view),this.opts.roll&&(this._len=Math.ceil(this._len/this._view)*this._view),c=this.opts.page>1&&this.opts.page<=this._len?(this.opts.page-1)*this._item_w:0,d=0;d<this._len;++d)this._pos[d]=this._item_w*d-c,this._start[d]=this._pos[d],this._list.eq(d).css({"float":"none",display:"block",position:"absolute",top:"0",left:this._pos[d]+"px",width:this._item_w+"px"}),this.opts.supportsCssTransitions&&this.opts.transition&&this._list.eq(d).css({"-moz-transition":"0ms","-moz-transform":"","-ms-transition":"0ms","-ms-transform":"","-webkit-transition":"0ms","-webkit-transform":"",transition:"0ms",transform:""});this.opts.btn_prev&&this.opts.btn_next&&(this.opts.btn_prev.bind("click",function(){return b.animate(1,!0),!1}),this.opts.btn_next.bind("click",function(){return b.animate(-1,!0),!1})),this.opts.paging&&a(this._list).each(function(a){var d=b.opts.paging.eq(a);d.bind("click",function(c){return b.go_page(a,c),!1})}),this.counter(),this.initComplete()},initComplete:function(){"function"==typeof this.opts.initComplete&&this.opts.initComplete(this)},resize:function(a){var b,c;if(a.opts.flexible)for(b=a._item_w,a._width=parseInt(a._tg.css("width")),a._item_w=a._width/a._view,a._range=a.opts.range*a._width,c=0;c<a._len;++c)a._pos[c]=a._pos[c]/b*a._item_w,a._start[c]=a._start[c]/b*a._item_w,a._list.eq(c).css({left:a._pos[c]+"px",width:a._item_w+"px"}),this.opts.supportsCssTransitions&&this.opts.transition&&a._list.eq(c).css({"-moz-transition":"0ms","-moz-transform":"","-ms-transition":"0ms","-ms-transform":"","-webkit-transition":"0ms","-webkit-transform":"",transition:"0ms",transform:""});this.counter()},touchstart:function(a){if("touchstart"==a.type&&a.originalEvent.touches.length<=1||"dragstart"==a.type){this._startX=a.pageX||a.originalEvent.touches[0].pageX,this._startY=a.pageY||a.originalEvent.touches[0].pageY,this._scroll=!1,this._start=[];for(var b=0;b<this._len;++b)this._start[b]=this._pos[b]}},touchmove:function(a){var b,c,d,e,f;if("touchmove"==a.type&&a.originalEvent.touches.length<=1||"drag"==a.type)for(this._left=(a.pageX||a.originalEvent.touches[0].pageX)-this._startX,this._top=(a.pageY||a.originalEvent.touches[0].pageY)-this._startY,b=this._left<0?-1*this._left:this._left,c=this._top<0?-1*this._top:this._top,c>b||this._scroll?(this._left=0,this._drag=!1,this._scroll=!0):(a.preventDefault(),this._drag=!0,this._scroll=!1,this.position(a)),d=0;d<this._len;++d)e=this._start[d]+this._left,this.opts.supportsCssTransitions&&this.opts.transition?(f="translate3d("+e+"px,0,0)",this._list.eq(d).css({left:"","-moz-transition":"0ms","-moz-transform":f,"-ms-transition":"0ms","-ms-transform":f,"-webkit-transition":"0ms","-webkit-transform":f,transition:"0ms",transform:f})):this._list.eq(d).css("left",e+"px"),this._pos[d]=e},touchend:function(a){if("touchend"==a.type&&a.originalEvent.touches.length<=1||"dragend"==a.type){if(this._scroll)return this._drag=!1,this._scroll=!1,!1;this.animate(this.direction()),this._drag=!1,this._scroll=!1}},position:function(b){var d,e,f,g,h,c=this._view*this._item_w;if(-1==b||1==b){for(this._startX=0,this._start=[],d=0;d<this._len;++d)this._start[d]=this._pos[d];this._left=b*c}else this._left>c&&(this._left=c),this._left<-c&&(this._left=-c);if(this.opts.roll){for(e=[],d=0;d<this._len;++d)e[d]=this._pos[d];if(e.sort(function(a,b){return a-b}),f=e[this._len-this._view],g=a.inArray(e[0],this._pos),h=a.inArray(f,this._pos),this._view<=1&&(f=this._len-1),this.opts.multi){if(1==b&&e[0]>=0||this._drag&&e[0]>=100)for(d=0;d<this._view;++d,++g,++h)this._start[h]=this._start[g]-c,this._list.eq(h).css("left",this._start[h]+"px");else if(-1==b&&e[0]<=0||this._drag&&e[0]<=-100)for(d=0;d<this._view;++d,++g,++h)this._start[g]=this._start[h]+c,this._list.eq(g).css("left",this._start[g]+"px")}else if(1==b&&e[0]>=0||this._drag&&e[0]>0)for(d=0;d<this._view;++d,++g,++h)this._start[h]=this._start[g]-c,this._list.eq(h).css("left",this._start[h]+"px");else if(-1==b&&e[f]<=0||this._drag&&e[f]<=0)for(d=0;d<this._view;++d,++g,++h)this._start[g]=this._start[h]+c,this._list.eq(g).css("left",this._start[g]+"px")}else this.limit_chk()&&(this._left=this._left/2)},animate:function(b,c){var d,e,f;(this._drag||!this._scroll||c)&&(d=this,e=this._speed,c&&this.position(b),f=b*this._item_w*this._view,(0==this._left||!this.opts.roll&&this.limit_chk())&&(f=0),this._list.each(function(b){var h,i;d._pos[b]=d._start[b]+f,d.opts.supportsCssTransitions&&d.opts.transition?(h=e+"ms",i="translate3d("+d._pos[b]+"px,0,0)",c&&(h="0ms"),a(this).css({left:"","-moz-transition":h,"-moz-transform":i,"-ms-transition":h,"-ms-transform":i,"-webkit-transition":h,"-webkit-transform":i,transition:h,transform:i})):(a(this).stop(),a(this).animate({left:d._pos[b]+"px"},e))}),this.counter())},direction:function(){var a=0;return this._left<-this._range?a=-1:this._left>this._range&&(a=1),(!this._drag||this._scroll)&&(a=0),a},limit_chk:function(){var a=parseInt((this._len-1)/this._view)*this._view;return 0==this._start[0]&&this._left>0||0==this._start[a]&&this._left<0},go_page:function(b){for(var d=a.inArray(0,this._pos)/this._view+1,e=d-(b+1);0!=e;)0>e?(this.animate(-1,!0),e++):e>0&&(this.animate(1,!0),e--)},counter:function(){if("function"==typeof this.opts.counter){var b={total:Math.ceil(this._len/this._view),current:a.inArray(0,this._pos)/this._view+1};this.opts.counter(b)}}}}(jQuery);

    var fp = 0;

    $(".find-page li").click(function() {
        var index = $(this).index();
        var fpn = index - fp;
        for(var i=fpn>0?fpn:-fpn;i>0;i--){
            $(fpn > 0 ? ".btn_next" :".btn_prev").click();
        }
        fp = index;
    });

    $(".find-swipe").touchSlider({
        btn_prev:$(".btn_prev"),
        btn_next:$(".btn_next"),
        flexible:true,
        speed:200,
        counter:function(e) {
            var t = $(".find-page li");
            var i = e.current - 1;
            var w = t.width();
            t.eq(this.p).css("color", "#999");
            $(".active-span").animate({
                left:w * i + w / 2 + 30
            }, 200);
            t.eq(i).css("color", "#000");
            this.p = fp = i;
        }
    });

    $("#logo").click(function() {
        self.location = "folder://";
    });

    $("#logo").longPress(function() {
        $(".set-from").animate({opacity:1,marginTop:0},200).show();
        for(var i=Storage.set.length-1;i>-1;i--)
        {
            if(Storage.set[Storage.set[i][0]]===0)
            {
                $(".set-option").eq(i).find('.set-switch').addClass('set-active');
            }else{
                $(".set-option").eq(i).find('select').val(Storage.set[Storage.set[i][0]]);
                
            }
        }
    });

    $(".set-back").click(function() {
        $(".set-from").animate({opacity:0,marginTop:40},200,function(){$(".set-from").hide();});
    });
    
    $(".set-option").click(function() {
        var i = $(this).index(),v;
        if($(".set-option").eq(i).find('.set-switch').length){
            if(Storage.set[i][1]===0)
            {
                $(".set-option").eq(i).find('.set-switch').removeClass('set-active');
                v=1;
            }else{
                $(".set-option").eq(i).find('.set-switch').addClass('set-active');
                v=0;
            }  
            Storage.set[i][1]=Storage.set[Storage.set[i][0]]=v;
            localStorage.setItem("set", JSON.stringify(Storage.set));
        }else if($(".set-option").eq(i).find('.set-upload').length){
            $('#set-upload').click().attr('option',i);
        }else if($(".set-option").eq(i).find('p').html()==="删除壁纸和LOGO")
        {
            Storage.set[2][1]=Storage.set[Storage.set[2][0]]=""
            Storage.set[3][1]=Storage.set[Storage.set[3][0]]="./images/logo.png";
            localStorage.setItem("set", JSON.stringify(Storage.set));
            $("body").css("background-image","");
            $("#logo").css("background-image","url(./images/logo.png)");
        }
    });
    
    $("#set-upload").change(function(){
        var i = $(this).attr('option');
        var files = $('#set-upload').prop('files');
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.addEventListener("load", function(e) {
            Storage.set[i][1]=Storage.set[Storage.set[i][0]]=e.target.result;
            localStorage.setItem("set", JSON.stringify(Storage.set));
            $("body").css("background-image","url("+Storage.set.wallpaper+")");
            $("#logo").css("background-image","url("+Storage.set.logo+")");
        })
    });
    
    $(".set-select").change(function() {
        var _this=$(this),i=_this.parent().index(),v=_this.val();
        Storage.set[i][1]=Storage.set[Storage.set[i][0]]=v;
        localStorage.setItem("set", JSON.stringify(Storage.set));
        $("#book").css('color',Storage.set.bookcolor);
    })
        
    $(function() {
        var x,y,_this,w,h,p,left,top,wid,pos,status=0,$this=$("#book")[0];
        $this.addEventListener("touchstart", function(e) {
            var t = $(e.target).parents('li');
            if(!t.is('li') || !$(".delbook").length || t.is('.addbook') || e.target.className==='delbook' || status) return;
            _this  = t;
            pos = _this.index();
            w = _this.width();
            h = _this.height();
            p = _this.offset();
            left = p.left;
            top = p.top;
            _this.css({"width":w, "height":h, "position":"fixed", opacity:.8, left:left, top:top}).before('<li class="holder"></li>');
            wid = $(".holder");
            var thouch = e.targetTouches[0];
            x = thouch.pageX;
            y = thouch.pageY;
            w/=2;
            h/=2;
            status = 1;
        }, {passive: true});
        
        $this.addEventListener("touchmove", function(e) {
            if(status){
                var thouch = e.targetTouches[0];
                var l = left + thouch.pageX - x;
                var t = top + thouch.pageY - y;
                _this.css({"left":l, "top":t});
                l+=w;
                t+=h;
                $($this).children().not(_this).not(wid).not('.addbook').each(function(i) {
                    var obj = $(this),p = obj.offset();
                    if(p.left<l&&l<p.left+obj.width()&&p.top<t&&t<p.top+obj.height())return obj.next(".holder").length?wid.insertBefore(this):wid.insertAfter(this),!1;
                });
            }
        }, {passive: true});
        
        $this.addEventListener("touchend", function() {
            if(status){
                 var p = wid.offset();
                _this.animate({"left":p.left, "top":p.top}, 200, function() {
                    if($(".holder").length){
                        _this.removeAttr("style");
                        wid.replaceWith(_this);
                        var pos2 = _this.index();
                        Storage.book.splice(pos2 + (pos - pos2 < 0 && 1),0,Storage.book[pos]);
                        Storage.book.splice(pos + (pos - pos2 > 0 && 1),1);
                        localStorage.setItem("book", JSON.stringify(Storage.book));
                        status=0;
                    }
                });
            }
        }, {passive: true});
    })
    
});

function su(e) {
    var urls = e.s;
    var html = "";
    for(var i=urls.length;i>0;i--){
        html += "<li>" + urls[i-1] + "</li>";
    }
    $(".suggestion").html(html).scrollTop($(".suggestion")[0].scrollHeight);
}

$.fn.longPress = function(fn) {
    var timeout = void 0, $this = this, startPos, movePos, endPos;
    for (var i = $this.length-1; i > -1; i--) {
        $this[i].addEventListener("touchstart", function(e) {
            var touch=e.targetTouches[0];
            startPos={x:touch.pageX,y:touch.pageY};
            timeout=setTimeout(fn,700);
        }, {passive: true});
        $this[i].addEventListener("touchmove", function(e) {
            var touch=e.targetTouches[0];
            movePos={x:touch.pageX-startPos.x,y:touch.pageY-startPos.y};
            Math.abs(movePos.x-startPos.x)>10||Math.abs(movePos.y-startPos.y)>10&&clearTimeout(timeout);
        }, {passive: true});
        $this[i].addEventListener("touchend", function() {
            clearTimeout(timeout);
        }, {passive: true});
    }
};

//测速
/*function testa(){
    function a(){
        Storage.book.length
    }
    console.time("a");
    for(var i=0;i<1e4;i++){a();}
    console.timeEnd("a");

}
function testb(){
    function b(){
        Storage["book"].length
    }
    console.time("b");
    for(var i=0;i<1e4;i++){b();}
    console.timeEnd("b");
}*/