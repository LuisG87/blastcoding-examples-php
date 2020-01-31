/*gads vewrsion 1.0.1*/
function gads(client,slot,parent){

  this.client = client;
  this.slot = slot;


  function x(client,slot){
    var parent = document.createElement("div");
    parent.setAttribute("class","ads");
    var script1 = document.createElement("script");
    script1.setAttribute("async","");
    script1.setAttribute("src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");

    var g_ins = document.createElement("ins");
    g_ins.setAttribute("class","adsbygoogle");
    if(window.innerWidth < 480){
      g_ins.setAttribute("style","display:inline-block;width:"+parent.offsetWidth+"px;height:75px");

    }else{
      g_ins.setAttribute("style","display:inline-block;width:"+parent.offsetWidth+"px;height:90px");
    }
    g_ins.setAttribute("data-ad-client",client);
    g_ins.setAttribute("data-ad-slot",slot);
    var script2 = document.createElement("script");
    text = document.createTextNode("(adsbygoogle = window.adsbygoogle || []).push({});");
    script2.appendChild(text);
    parent.appendChild(script1);
    parent.appendChild(g_ins);
    parent.appendChild(script2);
    return parent;
  }



  this.content = x(this.client,this.slot);

}
function checkForAds(selector){
  if(document.querySelector(selector) != null){
    var parent = document.querySelector(selector);
    selector = selector.substr(1);
    var adsX =new gads(c[selector]["client"],c[selector]["slot"],parent);
    parent.appendChild(adsX.content);
  }
}

var c = {
   adsHeader:{
     client:"client-code",
     slot:"slot-code-1"
   },
   adsFooter:{
     client:"client-code",
     slot:"slot-code-2"
   },
   adsBc1:{
     client:"client-code",
     slot:"slot-code-3"
   }
};

adsname =new Array(
  ".adsHeader",
  ".adsFooter",
  ".adsbc1"
);
(function(){
  for(ad in adsname){
    checkForAds(adsname[ad]);
  }
})();
