<a href="https://blastcoding.com/anadiendo-google-ads-que-se-vean-bien-tanto-en-mobile-como-en-pc-gads/">Blastcoding gads only spanish</a>


<h1>How to use gads ?</h1>
<p>
Its simple you just add parent classes where your ads will go on adsname variable, next you ads your ads credentials in your c variable thats its an object.</p>

An example of adsname variable:

```
adsname =new Array(
  ".ads1",
  ".ads2",
  ".ads3"
);
```
c object are your ads credential all ads has a client and a slot credential you can get it at your google adsense ads blocks
```
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
```
next on your html you add a div with classes defined on adsname. for example:

<code>
  &lt;div class=&quot;ads1&quot;&gt;&lt;/div&gt;
</code>
