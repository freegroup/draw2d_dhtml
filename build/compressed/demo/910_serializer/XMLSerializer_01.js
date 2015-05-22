/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.XMLSerializer_01=function(){};draw2d.XMLSerializer_01.prototype.type="XMLSerializer_01";draw2d.XMLSerializer_01.prototype.toXML=function(_62a){var xml="<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n";xml=xml+"<form>\n";var _62c=_62a.getFigures();for(var i=0;i<_62c.getSize();i++){var _62e=_62c.get(i);xml=xml+"<"+_62e.type+" x=\""+_62e.getX()+"\" y=\""+_62e.getY()+"\" id=\""+_62e.getId()+"\">\n";xml=xml+this.getPropertyXML(_62e,"   ");if(_62e instanceof draw2d.CompartmentFigure){xml=xml+this.getChildXML(_62e,"   ");}xml=xml+"</"+_62e.type+">\n";}xml=xml+"</form>\n";return xml;};draw2d.XMLSerializer_01.prototype.getChildXML=function(_62f,_630){var xml="";var _632=_62f.getChildren();for(var i=0;i<_632.getSize();i++){var _634=_632.get(i);xml=xml+_630+"<"+_634.type+" x=\""+_634.getX()+"\" y=\""+_634.getY()+"\" id=\""+_634.getId()+"\">\n";xml=xml+this.getPropertyXML(_634,"   "+_630);if(_634 instanceof draw2d.CompartmentFigure){xml=xml+this.getChildXML(_634,"   "+_630);}xml=xml+_630+"</"+_634.type+">\n";}return xml;};draw2d.XMLSerializer_01.prototype.getPropertyXML=function(_635,_636){var xml="";var _638=_635.getProperties();for(key in _638){var _639=_638[key];if(_639!==null){xml=xml+_636+"<property name=\""+key+"\" value=\""+_639+"\">\n";}}return xml;};