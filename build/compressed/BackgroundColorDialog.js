/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.BackgroundColorDialog=function(_b42){draw2d.ColorDialog.call(this);this.figure=_b42;var _b43=_b42.getBackgroundColor();if(_b43!==null){this.updateH(this.rgb2hex(_b43.getRed(),_b43.getGreen(),_b43.getBlue()));}};draw2d.BackgroundColorDialog.prototype=new draw2d.ColorDialog();draw2d.BackgroundColorDialog.prototype.type="draw2d.BackgroundColorDialog";draw2d.BackgroundColorDialog.prototype.onOk=function(){var _b44=this.workflow;draw2d.ColorDialog.prototype.onOk.call(this);if(typeof this.figure.setBackgroundColor=="function"){_b44.getCommandStack().execute(new draw2d.CommandSetBackgroundColor(this.figure,this.getSelectedColor()));if(_b44.getCurrentSelection()==this.figure){_b44.setCurrentSelection(this.figure);}}};