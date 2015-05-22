/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.UUID=function(){};draw2d.UUID.prototype.type="draw2d.UUID";draw2d.UUID.create=function(){var _32d=function(){return (((1+Math.random())*65536)|0).toString(16).substring(1);};return (_32d()+_32d()+"-"+_32d()+"-"+_32d()+"-"+_32d()+"-"+_32d()+_32d()+_32d());};