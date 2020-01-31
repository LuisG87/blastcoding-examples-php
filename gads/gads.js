function gads(client,slot,parent){

  this.client = client;
  this.slot = slot;

  function x(client,slot){
    cont ="<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"><\/script>";
    cont +="<!-- bc_horizontal_phones 480-->";
    cont +="<ins class=\"adsbygoogle\"";
    if(window.innerWidth < 480){
      cont +="style=\"display:inline-block;width:"+parent.offsetWidth+"px;height:75px\"";
    }else{
      cont +="style=\"display:inline-block;width:"+parent.offsetWidth+"px;height:90px\"";
    }
    cont +="data-ad-client=\""+client+"\"";
    cont +="data-ad-slot=\""+slot+"\"></ins>";
    cont +="<script>";
    cont +="(adsbygoogle = window.adsbygoogle || []).push({});";
    cont +="<\/script>";
    //alert(parent.width);
    return cont;
  }


  this.content = x(this.client,this.slot);

}
function checkForAds(selector){
  if(document.querySelector(selector) != null){
    var parent = document.querySelector(selector);
    selector = selector.substr(1);
    var adsX =new gads(c[selector]["client"],c[selector]["slot"],parent);
    parent.innerHTML = adsX.content;
  }
}

var c = {
   adsHeader:{
     client:"ca-pub-4130016885702357",
     slot:"7632206493"
   },
   adsFooter:{
     client:"ca-pub-4130016885702357",
     slot:"7424608342"
   },
   adsBc1:{
     client:"ca-pub-4130016885702357",
     slot:"1372854244"
   }
};

adsname =new Array(
  ".adsHeader",
  ".adsFooter",
  ".adsbc1"
);
(function(){
  for(ad in adsname){
    //alert(adsname[ad]);
    checkForAds(adsname[ad]);
  }
})();
