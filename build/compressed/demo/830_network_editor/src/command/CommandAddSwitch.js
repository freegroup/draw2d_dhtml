/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandAddSwitch=function(_c4b,x,y){draw2d.Command.call(this,"Add Switch");this.model=new draw2d.SwitchModel();this.network=_c4b;this.x=x;this.y=y;};draw2d.CommandAddSwitch.prototype=new draw2d.Command();draw2d.CommandAddSwitch.prototype.type="draw2d.CommandAddSwitch";draw2d.CommandAddSwitch.prototype.canExecute=function(){return true;};draw2d.CommandAddSwitch.prototype.execute=function(){this.redo();};draw2d.CommandAddSwitch.prototype.undo=function(){this.network.removeCloudNodeModel(this.model);};draw2d.CommandAddSwitch.prototype.redo=function(){this.network.addCloudNodeModel(this.model);this.model.setPosition(this.x,this.y);};