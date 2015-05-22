/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.GenericButton=function(_c9c){draw2d.Button.call(this,_c9c,16,16);};draw2d.GenericButton.prototype=new draw2d.Button();draw2d.GenericButton.prototype.type="draw2d.GenericButton";draw2d.GenericButton.prototype.getImageUrl=function(){if(this.enabled){return draw2d.Configuration.IMAGEPATH+this.type+".png";}else{return draw2d.Configuration.IMAGEPATH+this.type+"_disabled.png";}};