!function(t){t.fn.socialize=function(){function e(e){t(e).find("a.sz").on("click",function(e){e.preventDefault();var a=t(document),i={},n={},r="";switch(i.target=t(this).attr("class").match(/sz-[\w-]*\b/)[0].replace("sz-",""),i.url=t(this).attr("data-url")||window.location.href||"",i.title=t(this).attr("data-title")||a.find("title").text()||"",i.desc=t(this).attr("data-desc")||t('meta[property="og:description"]').attr("content")||t('meta[name="description"]').attr("content")||"",i.image=t(this).attr("data-image")||t('meta[property="og:image"]').attr("content")||"",i.target){case"twitter":n={url:i.url,text:i.title,count:"none/"},r="http://twitter.com/share?"+t.param(n),window.open(r,"tweet","height=300,width=550");break;case"facebook":n={u:i.url},r="http://www.facebook.com/sharer.php?"+t.param(n),window.open(r,"facebook","height=300,width=550");break;case"pinterest":n={url:i.url,description:i.desc},""!==i.image&&(n.media=i.image),r="http://pinterest.com/pin/create/button/?"+t.param(n),window.open(r,"pinterest","width=640,height=400");break;case"google-plus":n={url:i.url},r="https://plus.google.com/share?"+t.param(n),window.open(r,"Google Plus","height=300,width=550");break;case"linkedin":n={mini:"true",url:i.url,title:i.title,summary:i.desc},r="https://www.linkedin.com/sharing/share-offsite/?"+t.param(n),window.open(r,"linkedin","height=300,width=550");break;case"print":window.print();break;case"vk":n={url:i.url},r="http://vkontakte.ru/share.php?"+t.param(n),window.open(r,"vk","width=500,height=400");break;case"sinaweibo":n={url:i.url,description:i.desc},r="http://v.t.sina.com.cn/share/share.php?"+t.param(n),window.open(r,"sinaweibo","width=500,height=400");break;case"mail":r="mailto:?subject="+encodeURIComponent(i.title)+"&body="+encodeURIComponent(i.desc)+"%0D%0A%0D%0A"+encodeURIComponent(i.url);var o=t('<a style="display:none!important;">').attr("href",r).appendTo(t("body"));o[0].click(),o.remove()}})}return this.each(function(){new e(this)})}}(jQuery);