/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ExternalPalette=function(_cdf,_ce0){this.html=document.getElementById(_ce0);this.workflow=_cdf;this.parts=new draw2d.ArrayList();};draw2d.ExternalPalette.prototype.type="draw2d.ExternalPalette";draw2d.ExternalPalette.prototype.getHTMLElement=function(){return this.html;};draw2d.ExternalPalette.prototype.addPalettePart=function(part){if(!(part instanceof draw2d.AbstractPalettePart)){throw "parameter is not instanceof [draw2d.AbstractPalettePart]";}this.parts.add(part);this.html.appendChild(part.getHTMLElement());part.setEnviroment(this.workflow,this);};