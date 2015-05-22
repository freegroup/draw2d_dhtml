/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.ServerPropertyPage=function()
{
   draw2d.PropertyPage.call(this);
   
   this.html = document.createElement("div");
   this.html.style.width="100%";
   this.html.style.height="100%";
  
   this.header = this.createLabelElement(draw2d.I18N.PROPERTYPANEL_HEADER_SERVER,0,0);
   this.header.className="panel_header";
   this.html.appendChild(this.header);
   
   // The Name of the Server
   //
   this.datarowLabel = this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_NAME,10,45);
   this.html.appendChild(this.datarowLabel);

   this.nameText = document.createElement("input");
   this.nameText.type = "text";
   var oThis = this;
   if(editor.isReadonly())
   {
      this.nameText.disabled ="true";
   }
   else
   {
      Event.observe(this.nameText,"keyup",function(e)
      {
         var func = oThis.currentModel.setName.bind(oThis.currentModel);
         var command = new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,oThis.currentModel.getName(),oThis.nameText.value);
         editor.executeCommand(command);
      });
   }
   this.nameText.style.position="absolute";
   this.nameText.style.width="210px";
   this.nameText.style.top="65px";
   this.nameText.style.left="10px";
   this.html.appendChild(this.nameText);
   
   // CPU Units of the Server
   //
   this.cpuLabel = this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_CPUUNITS,10,95);
   this.html.appendChild(this.cpuLabel);

   this.listboxCPU = document.createElement("select");
   this.listboxCPU.style.position="absolute";
   this.listboxCPU.style.overflow="auto";
   this.listboxCPU.style.width="60px";
   this.listboxCPU.style.top="115px";
   this.listboxCPU.style.left="10px";
   this.listboxCPU.size=1;
   this.listboxCPU['onchange']=function()
   {
      var func = oThis.currentModel.setCpuUnits.bind(oThis.currentModel);
      var command = new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,oThis.currentModel.getCpuUnits(),oThis.listboxCPU.selectedIndex+1);
      editor.executeCommand(command);
   };
   
   for(var i=1;i<8;i++)
   {
      var node = document.createElement("option");
      node.value = ""+i;
      node.appendChild(document.createTextNode(""+i));
      this.listboxCPU.appendChild(node);
   }
   this.html.appendChild(this.listboxCPU);
   
   // RAM in MB
   //
   this.ramLabel = this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_RAM_MB,100,95);
   this.html.appendChild(this.ramLabel);

   this.ramText = document.createElement("input");
   this.ramText.type = "text";
   var ramUpdateFunc = function(ramText)
   {
     var ram  = parseInt(ramText.value,10);
     if(isNaN(ram))
     {
       ram = 1024;
     }  
         
     ramText.value = ""+ram;
     var func = this.currentModel.setRAM.bind(this.currentModel);
     var command = new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,this.currentModel.getRAM(),ramText.value);
     editor.executeCommand(command);
   };
   ramUpdateFunc = ramUpdateFunc.bind(this, this.ramText);
   Event.observe(this.ramText,"keyup",ramUpdateFunc);
      
      
   this.ramText.style.position="absolute";
   this.ramText.style.width="110px";
   this.ramText.style.top="115px";
   this.ramText.style.left="100px";
   this.html.appendChild(this.ramText);

   this.imagesLabel = this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGES,10,155);
   this.imagesLabel.className="property_panel_image_header";
   this.html.appendChild(this.imagesLabel);

   this.imagesAddLabel = this.createLabelElement(" ",120,155);
   this.imagesAddLabel.className="property_panel_image_add";
   this.imagesAddLabel.title=draw2d.I18N.TOOLTIP_BUTTON_ADD_IMAGE;
   this.html.appendChild(this.imagesAddLabel);
   Event.observe(this.imagesAddLabel,"click",function()
   {
      var addTemplateDialog = new draw2d.AddImageDialog("dialog_add_image", this.currentModel);
      addTemplateDialog.show();
   }.bind(this));

   this.imageContainer = document.createElement("div");
   this.imageContainer.style.position="absolute";
   this.imageContainer.style.top="175px";
   this.imageContainer.style.left="10px";
   this.imageContainer.style.width="240px";
   this.imageContainer.style.overflowX="hidden";
   this.imageContainer.style.overflowY="auto";
   this.imageContainer.className="property_panel_image_container";
   
   this.html.appendChild(this.imageContainer);
};

draw2d.ServerPropertyPage.prototype = new draw2d.PropertyPage();
/** @private **/
draw2d.ServerPropertyPage.prototype.type="draw2d.ServerPropertyPage";


/**
 *
 **/
draw2d.ServerPropertyPage.prototype.init=function(/*:draw2d.AbstractObjectModel*/ model)
{
   this.currentModel = model;
   this.nameText.value = model.getName();
   this.ramText.value = model.getRAM();
   this.listboxCPU.selectedIndex = parseInt(model.getCpuUnits(),10)-1;
   
   // Create for each image a table row with the corresponding content
   this.imageContainer.innerHTML="";
   var table =  new Element("table");
   table.style.position="absolute";
   table.style.top="0px";
   table.style.left="0px";
   table.style.width="220px";
   table.style.tableLayout="fixed";
   table.cellspacing="0";
   table.cellpadding="0";
 
   var images = model.getImagesModel().getImageModels();
   // eigentlcih sollte man die Tabelle erst zum Schluss einhängen wenn alle elemente eingefügt
   // wurden. Es wäre Performanter. Die Methode "ellipsis" kann allerdings nur angewendet werden wenn
   // die Elemente im sichtbaren DOM Baum hängen.
   //
   this.imageContainer.appendChild(table);
   for(var i=0;i<images.getSize();i++)
   {
     var img = images.get(i);
     // name header
     this.createNewImageHeader(table,img);

     // boot order
     cell=this.createNewImageCell(table,draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGE_BOOTORDER);
     var bootOrderListbox = document.createElement("select");
     bootOrderListbox.style.overflow="auto";
     bootOrderListbox.style.width="60px";
     bootOrderListbox.size=1;
     var bootOrderUpdateFunc=function(listbox)
     {
       var func = this.setBootOrder.bind(this);
       var command = new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,this.getBootOrder(),listbox.selectedIndex+1);
       editor.executeCommand(command);
     };

     for(var ii=1;ii<10;ii++)
     {
       var node = document.createElement("option");
       node.value = ""+ii;
       node.appendChild(document.createTextNode(""+ii));
       bootOrderListbox.appendChild(node);
     }

     bootOrderListbox.selectedIndex=img.getBootOrder()-1;
     cell.appendChild(bootOrderListbox);
     bootOrderUpdateFunc = bootOrderUpdateFunc.bind(img,bootOrderListbox);
     Event.observe(bootOrderListbox,"change",bootOrderUpdateFunc);

     // file-name
     cell=this.createNewImageCell(table,draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGE_FILENAME);
     cell.innerHTML =img.getFileName(); 
     ellipsis(cell);

     // image-type
     cell=this.createNewImageCell(table,draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGE_TYPE);
     cell.innerHTML =img.getImageType(); 

     // writeback
     cell=this.createNewImageCell(table,draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGE_WRITEBACK);
     cell.innerHTML =img.getWriteback(); 
     
     // readonly
     cell=this.createNewImageCell(table,draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGE_READONLY);
     cell.innerHTML =img.getReadonly(); 

     cell=this.createSeparator(table);
   }
};

/**
 * The container panel did have changed the dimension. Adjust the layout of labels...if required.
 *
 **/
draw2d.ServerPropertyPage.prototype.onResize=function(/*:int*/ w, /*:int*/ h)
{
   this.imageContainer.style.height = Math.max(10,h-parseInt(this.imageContainer.style.top,10))+"px";
};


/**
 * Legt eine neue Zeile (2 Spalten) mit dem Label an (1. Zelle) und liefert die 
 * die 2. Zelle zurück. In der 2. Zelle kann dan das Eingabefeld (Combobox oder Textfeld)
 * eingetragen werden.
 *
 * @private
 **/
draw2d.ServerPropertyPage.prototype.createNewImageHeader=function(/*DOMNode*/ parentTable, /*:ImageModel*/ image)
{
   var row = parentTable.insertRow(parentTable.rows.length);
   var cell=row.insertCell(0);
   cell.style.width="70px";
   cell.innerHTML = image.getName()+"   ";
   cell.className = "property_panel_image_name";
   cell.setAttribute("colspan","2");

   var element = document.createElement("span");
   element.style.whiteSpace ="nowrap";
   element.className = "property_panel_image_remove";
   element.title=draw2d.I18N.TOOLTIP_BUTTON_REMOVE_IMAGE;
   element.innerHTML=" ";
   cell.appendChild(element);
   Event.observe(element,"click",function(server, image)
   {
      var command = new draw2d.CommandRemoveImage(editor.getGraphicalViewer(),server, image);
      editor.getCommandStack().execute(command);
   }.bind(this, this.currentModel,image));
};

/**
 * Legt eine neue Zeile (2 Spalten) mit dem Label an (1. Zelle) und liefert die 
 * die 2. Zelle zurück. In der 2. Zelle kann dan das Eingabefeld (Combobox oder Textfeld)
 * eingetragen werden.
 *
 * @private
 **/
draw2d.ServerPropertyPage.prototype.createNewImageCell=function(/*DOMNode*/ parentTable, /*:String*/ label)
{
   var row = parentTable.insertRow(parentTable.rows.length);
   var cell=row.insertCell(0);
   cell.innerHTML = label;
   cell.className = "property_panel_label";
   cell.style.width="70px";
   var cell= row.insertCell(1);
   cell.style.overflow="hidden";
   cell.style.width="130px";
   cell.className="property_panel_data";
   var element = document.createElement("div");
   element.style.whiteSpace ="nowrap";
   element.style.overflow="hidden";
   cell.appendChild(element);
   return element;
};

/**
 * Legt eine neue Zeile an welche als Delimiter zwischen zwei "Images" dient
 *
 * @private
 **/
draw2d.ServerPropertyPage.prototype.createSeparator=function(/*DOMNode*/ parentTable)
{
   var row = parentTable.insertRow(parentTable.rows.length);
   var cell=row.insertCell(0);
   cell.innerHTML = " ";
   cell.className = "property_panel_image_separator";
   cell.setAttribute("colspan","2");
};


/**
 *
 **/
draw2d.ServerPropertyPage.prototype.deinit=function()
{
};

/**
 * @abstract
 * @type HTMLElement
 * @private
 **/
draw2d.ServerPropertyPage.prototype.getHTMLElement=function()
{
  return this.html;
};