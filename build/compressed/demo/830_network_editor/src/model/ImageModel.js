/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ImageModel=function(id){draw2d.AbstractCloudNodeModel.call(this,id);this.index=0;this.name=draw2d.Configuration.DEFAULT_IMAGE_NAME;this["file-name"]=draw2d.Configuration.DEFAULT_IMAGE_FILENAME;this["image-type"]=draw2d.Configuration.DEFAULT_IMAGE_IMAGETYPE;this.writeback=draw2d.Configuration.DEFAULT_IMAGE_WRITEBACK;this.dbid=null;this.order=draw2d.Configuration.DEFAULT_IMAGE_ORDER;this["boot-order"]=draw2d.Configuration.DEFAULT_IMAGE_BOOTORDER;this.readonly=draw2d.Configuration.DEFAULT_IMAGE_READONLY;};draw2d.ImageModel.prototype=new draw2d.AbstractCloudNodeModel();draw2d.ImageModel.prototype.type="draw2d.ImageModel";draw2d.ImageModel.prototype.tag="image";draw2d.ImageModel.TYPE=new draw2d.ArrayList();draw2d.ImageModel.TYPE.add("cdrom");draw2d.ImageModel.TYPE.add("fdd");draw2d.ImageModel.TYPE.add("hdd");draw2d.ImageModel.TYPE.add("usb");draw2d.ImageModel.WRITEBACK=new draw2d.ArrayList();draw2d.ImageModel.WRITEBACK.add("inplace");draw2d.ImageModel.WRITEBACK.add("snapshot");draw2d.ImageModel.WRITEBACK.add("none");draw2d.ImageModel.prototype.setName=function(name){var save=this.name;if(save===name){return;}this.name=name;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,name);};draw2d.ImageModel.prototype.setIndex=function(_cc0){var save=this.index;if(save===_cc0){return;}this.index=_cc0;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,_cc0);};draw2d.ImageModel.prototype.getIndex=function(){return this.index;};draw2d.ImageModel.prototype.getName=function(){return this.name;};draw2d.ImageModel.prototype.getFileName=function(){return this["file-name"];};draw2d.ImageModel.prototype.setFileName=function(_cc2){var save=this.getFileName();if(save===_cc2){return;}this["file-name"]=_cc2;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,_cc2);};draw2d.ImageModel.prototype.getImageType=function(){return this["image-type"];};draw2d.ImageModel.prototype.setImageType=function(_cc4){var save=this.getImageType();if(save===_cc4){return;}if(draw2d.ImageModel.TYPE.indexOf(_cc4)===-1){throw "Invalid image type ["+_cc4+"] in [draw2d.ImageModel.prototype.setImageType]. Valid values "+draw2d.ImageModel.TYPE.asArray().toJSON();}this["image-type"]=_cc4;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,_cc4);};draw2d.ImageModel.prototype.getWriteback=function(){return this.writeback;};draw2d.ImageModel.prototype.setWriteback=function(_cc6){var save=this.getWriteback();if(save===_cc6){return;}if(draw2d.ImageModel.WRITEBACK.indexOf(_cc6)===-1){throw "Invalid writeback type ["+_cc6+"] in [draw2d.ImageModel.prototype.setWriteback]. Valid values "+draw2d.ImageModel.WRITEBACK.asArray().toJSON();}this.writeback=_cc6;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,_cc6);};draw2d.ImageModel.prototype.getOrder=function(){return this.order;};draw2d.ImageModel.prototype.setOrder=function(_cc8){_cc8=parseInt(_cc8,10);if(isNaN(_cc8)){return;}var save=this.getOrder();if(save===_cc8){return;}this.order=_cc8;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,_cc8);};draw2d.ImageModel.prototype.getBootOrder=function(){var _cca=parseInt(this["boot-order"],10);if(isNaN(_cca)){_cca=1;}return _cca;};draw2d.ImageModel.prototype.setBootOrder=function(_ccb){_ccb=parseInt(_ccb,10);if(isNaN(_ccb)){return;}var save=this.getBootOrder();if(save===_ccb){return;}this["boot-order"]=_ccb;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,_ccb);};draw2d.ImageModel.prototype.getReadonly=function(){return this.readonly;};draw2d.ImageModel.prototype.setReadonly=function(_ccd){var save=this.getReadonly();if(save===_ccd){return;}this.readonly=_ccd;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,_ccd);};draw2d.ImageModel.prototype.getPersistentAttributes=function(){var _ccf=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);_ccf.attributes.id=this.id;_ccf.attributes.index=this.index;_ccf.name=this.name;_ccf["file-name"]=this["file-name"];_ccf["image-type"]=this["image-type"];_ccf.writeback=this.writeback;if(this.dbid){_ccf.dbid=this.dbid;}_ccf.order=this.order;if(this["boot-order"]){_ccf["boot-order"]=this["boot-order"];}if(this.index!==null){_ccf["index"]=this.index;}_ccf.readonly=this.readonly;return _ccf;};