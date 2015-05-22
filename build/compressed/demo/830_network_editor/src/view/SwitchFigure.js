/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.SwitchFigure=function(){draw2d.AbstractCloudNodeFigure.call(this);};draw2d.SwitchFigure.prototype=new draw2d.AbstractCloudNodeFigure();draw2d.SwitchFigure.prototype.type="draw2d.SwitchFigure";draw2d.SwitchFigure.prototype.paint=function(){draw2d.AbstractCloudNodeFigure.prototype.paint.call(this);try{var _3b0=this.getModel();this.header.innerHTML=_3b0.getName();this.setDimension(this.getWidth(),this.getHeight());}catch(e){pushErrorStack(e,"draw2d.SwitchFigure.prototype.paint=function()");}};draw2d.SwitchFigure.prototype.createHTMLElement=function(){var item=draw2d.AbstractCloudNodeFigure.prototype.createHTMLElement.call(this);item.className="switch_frame";this.header.className="switch_header";item.style.border="";this.setDimension(this.getWidth(),this.getHeight());return item;};draw2d.SwitchFigure.prototype.initPorts=function(){try{if(this.inputPort!==null){return;}this.inputPort=new draw2d.NicInputPort();this.inputPort.setWorkflow(this.workflow);this.inputPort.setCanDrag(this.getCanDrag());this.addPort(this.inputPort,0,0);this.inputPort.paint();this.setDimension(this.getWidth(),this.getHeight());}catch(e){pushErrorStack(e,"draw2d.SwitchFigure.prototype.initPorts=function()");}};draw2d.SwitchFigure.prototype.setDimension=function(w,h){draw2d.AbstractCloudNodeFigure.prototype.setDimension.call(this,w,h);if(this.inputPort===null){return;}this.inputPort.setPosition(-5,h/2);};