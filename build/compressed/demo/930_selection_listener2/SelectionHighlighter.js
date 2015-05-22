/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.SelectionHighlighter=function(_1a3){this.workflow=_1a3;this.counter=0;this.black=new draw2d.Color(0,0,0);this.gray=new draw2d.Color(200,200,200);};draw2d.SelectionHighlighter.prototype.type="SelectionHighlighter";draw2d.SelectionHighlighter.prototype.onSelectionChanged=function(_1a4){this.counter++;debugLabel.setText("Count:"+this.counter);var _1a5=(_1a4===null)?1:0.2;var _1a6=(_1a4===null)?this.black:this.gray;var doc=this.workflow.getDocument();var _1a8=doc.getFigures();for(var i=0;i<_1a8.getSize();i++){_1a8.get(i).setAlpha(_1a5);}var _1aa=doc.getLines();for(var i=0;i<_1aa.getSize();i++){_1aa.get(i).setColor(_1a6);}if(_1a4!==null){_1a4.setAlpha(1);if(_1a4 instanceof draw2d.Node){var _1ab=_1a4.getPorts();for(var i=0;i<_1ab.getSize();i++){var port=_1ab.get(i);var _1ad=port.getConnections();for(var j=0;j<_1ad.getSize();j++){_1ad.get(j).setColor(this.black);}}}}};