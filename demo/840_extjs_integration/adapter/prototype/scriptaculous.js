var Scriptaculous={Version:"1.7.0",require:function(_1bea){
document.write("<script type=\"text/javascript\" src=\""+_1bea+"\"></script>");
},load:function(){
if((typeof Prototype=="undefined")||(typeof Element=="undefined")||(typeof Element.Methods=="undefined")||parseFloat(Prototype.Version.split(".")[0]+"."+Prototype.Version.split(".")[1])<1.5){
throw ("script.aculo.us requires the Prototype JavaScript framework >= 1.5.0");
}
$A(document.getElementsByTagName("script")).findAll(function(s){
return (s.src&&s.src.match(/scriptaculous\.js(\?.*)?$/));
}).each(function(s){
var path=s.src.replace(/scriptaculous\.js(\?.*)?$/,"");
var _1bee=s.src.match(/\?.*load=([a-z,]*)/);
(_1bee?_1bee[1]:"builder,effects,dragdrop,controls,slider").split(",").each(function(_1bef){
Scriptaculous.require(path+_1bef+".js");
});
});
}};
Scriptaculous.load();
