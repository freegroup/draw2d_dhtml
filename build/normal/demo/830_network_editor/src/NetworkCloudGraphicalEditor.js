/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */
 
 
/**
 * A factory for creating new EditParts. EditPartViewers can be configured with an EditPartFactory.
 * Whenever an EditPart in that viewer needs to create another EditPart, it can use the Viewer's factory.
 * The factory is also used by the viewer whenever EditPartViewer.setContents(Object)  is called.
 * 
 * @version 0.9.3
 * @date 2011-07-05 20:15:49
 * @author Andreas Herz
 * @constructor
 **/
draw2d.NetworkCloudGraphicalEditor=function(/*:String*/ id, /*:boolean*/ readonly)
{
   draw2d.GraphicalEditor.call(this,id);
   this.readonly = readonly;
};

draw2d.NetworkCloudGraphicalEditor.prototype = new draw2d.GraphicalEditor();
/** @private **/
draw2d.NetworkCloudGraphicalEditor.prototype.type="draw2d.NetworkCloudGraphicalEditor";


/**
 * Called to configure the graphical viewer before it receives its contents. 
 * Subclasses should extend or override this method as needed.
 **/
draw2d.NetworkCloudGraphicalEditor.prototype.setModel=function(/*:draw2d.AbstractObjectModel*/ model)
{
	try
	{
	   this.model = model;
	   // assign the model to the view
	   this.getGraphicalViewer().setModel(this.model);
	   // ...and the factory for the editparts/figures
       this.getGraphicalViewer().setEditPartFactory(new draw2d.NetworkCloudGraphicalEditorFactory(this.readonly));

       this.getGraphicalViewer().setViewPort("scrollarea");
       this.getGraphicalViewer().setPanning(true);
       this.getGraphicalViewer().setCurrentSelection(null);

       // Init the Object Palette
       //
       var palette = new draw2d.ExternalPalette(this.getGraphicalViewer(),"object_panel");
       var part1 = new draw2d.ServerPalettePart(model);
       var part2 = new draw2d.StoragePalettePart(model);
       var part3 = new draw2d.SwitchPalettePart(model);
       palette.addPalettePart(part1);
       part1.setPosition(20,40);
       palette.addPalettePart(part2);
       part2.setPosition(20,90);
       palette.addPalettePart(part3);
       part3.setPosition(20,140);
           
       // Init Toolbar
       var toolbar = new draw2d.Toolbar("toolbar");

       var fileGroup = new draw2d.ToolbarButtonGroup();
       toolbar.addElement(fileGroup);
       fileGroup.addElement(new draw2d.ToolbarButtonSave(this));
       if(draw2d.Configuration.APPLY_XML!==null)
         fileGroup.addElement(new draw2d.ToolbarButtonApply(this));
       fileGroup.addElement(new draw2d.ToolbarButtonShowXML(this));
              
       var toolGroup = new draw2d.ToolbarButtonGroup();
       toolbar.addElement(toolGroup);
       toolGroup.addElement(new draw2d.ToolbarButtonUndo(this));
       toolGroup.addElement(new draw2d.ToolbarButtonRedo(this));
       // Network element selection flow menu
       //
       this.getGraphicalViewer().addSelectionListener(new draw2d.FlowMenu(editor.getGraphicalViewer()));
            
       // Property Panel
       //
       this.propertyPanel = new draw2d.PropertyPanel("property_panel");
       this.getGraphicalViewer().addSelectionListener(this.propertyPanel);	
    }
	catch(e)
	{
	   pushErrorStack(e,"draw2d.NetworkCloudGraphicalEditor.prototype.setModel=function()");
	}
};

draw2d.NetworkCloudGraphicalEditor.prototype.getCommandStack=function()
{
	return this.getGraphicalViewer().getCommandStack();
}


/**
 * Create a gray overlay above the editor and display an error message.
 * This is the point of no return. Editor can only be closed and restart. Usefull for unrecoverable
 * errors.
 *
 */
draw2d.NetworkCloudGraphicalEditor.prototype.setFatalError=function(/*:String*/ errorMessage)
{
   var overlay = document.createElement('div');
   var message = document.createElement('div');
   message.className = 'fatal_error_message';
   overlay.className = 'fatal_error_overlay';
   message.innerHTML="<br><br><br><br><br>"+errorMessage;
   document.body.appendChild(overlay);
   document.body.appendChild(message);
   new fx.Opacity(overlay).setOpacity(0.3);
   overlay.style.display = '';
};

/**
 *  Return true if the editor is in readonly mode.
 *  @type boolean
 */
draw2d.NetworkCloudGraphicalEditor.prototype.isReadonly=function()
{
   return this.readonly;
};


draw2d.NetworkCloudGraphicalEditor.prototype.getModel=function()
{
   return this.model;
};
