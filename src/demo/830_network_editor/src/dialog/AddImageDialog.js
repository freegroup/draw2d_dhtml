/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */
 
/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.AddImageDialog=function(/*:String*/ id, /*:ServerModel*/ server)
{
  draw2d.FormDialog.call(this,id);
  
  if(!(server instanceof draw2d.ServerModel))
    throw "Wrong type of parameter in draw2d.AddImageDialog=function(/*:String*/ id, /*:ServerModel*/ server)";
    
  this.server = server;
  this.currentSelectedIcon = null;
  this.currentSelectedImage = null;
  
  $("dialog_select_image_header").update(draw2d.I18N.DIALOG_ADDIMAGE_HEADER);
  this.dialog_box.select(".draw2d_window_button_ok")[0].update(draw2d.I18N.DIALOG_ADDIMAGE_OK);;
  this.dialog_box.select(".draw2d_window_button_cancel")[0].update(draw2d.I18N.DIALOG_ADDIMAGE_CANCEL);
  
  // Einlesen und aufbauen der Gallery (Icons der einzelnen Images) + Name
  //
  var image_container = $("dialog_select_image_images");
  image_container.innerHTML="";
  var ul = $(document.createElement("ul"));
  ul.className = "gallery";
  image_container.appendChild(ul);
  for(var i=0; i< draw2d.ImageTemplates.length;i++)
  {
     var imageTemplate = draw2d.ImageTemplates[i];
     var li = $(document.createElement("li"));
     li.addClassName("gallery_li");
     li.observe("click", function(li, image)
     {
        if(this.currentSelectedIcon!=null)
          this.currentSelectedIcon.removeClassName("gallery_li_selected");
        this.currentSelectedIcon = li;
        this.currentSelectedImage = image;
        this.currentSelectedIcon.addClassName("gallery_li_selected");
       // checkAddTemplateButton();
     }.bind(this,li,imageTemplate));
     var img = $(document.createElement("img"));
     img.addClassName("gallery_li_img");
     img.title=imageTemplate.name;
     li.appendChild(img);
     if(imageTemplate.icon !==undefined && imageTemplate.icon!==null)
     {
        img.src= imageTemplate.icon;
     }
     else
     {
        img.src = draw2d.Configuration.IMAGEPATH+"image_default.png";
        var label = new Element("div");
        label.update(imageTemplate.name);
        li.appendChild(label);
        img.style.height="70px";
        img.style.width="100px";
     }
     ul.appendChild(li);
   }
}

draw2d.AddImageDialog.prototype = new draw2d.FormDialog();
/** @private **/
draw2d.AddImageDialog.prototype.type="draw2d.AddImageDialog";

draw2d.AddImageDialog.prototype.onOk=function()
{
  try
  {
    var image = new draw2d.ImageModel();
    image.setName(this.currentSelectedImage.name);
    image.setFileName(this.currentSelectedImage["file-name"]);
    image.setImageType(this.currentSelectedImage["image-type"]);
    image.setWriteback(this.currentSelectedImage["writeback"]);
    image.setReadonly(this.currentSelectedImage["readonly"]);

    var command = new draw2d.CommandAddImage(editor.getGraphicalViewer(),this.server, image);
    editor.getCommandStack().execute(command);
  }
  catch(e)
  {
    alert(e);
  }
};
    

draw2d.AddImageDialog.prototype.onCancel=function()
{
};
