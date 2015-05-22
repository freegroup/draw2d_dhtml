/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandRemoveCloudNode=function(/*:draw2d.AbstractCloudNodeModel*/ cloudNode)
{
   draw2d.Command.call(this,"Remove Network Element");
   this.cloudNode = cloudNode;
   this.parent = this.cloudNode.getModelParent();
   /** @private */
   this.connections = null;
};

draw2d.CommandRemoveCloudNode.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandRemoveCloudNode.prototype.type="draw2d.CommandRemoveCloudNode";


/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandRemoveCloudNode.prototype.execute=function()
{
   this.redo();
};

/**
 * Redo the command after the user has undo this command.
 *
 **/
draw2d.CommandRemoveCloudNode.prototype.redo=function()
{
   // remove all connections related to this element
   //
   this.connections = new draw2d.ArrayList();
   var cons = this.cloudNode.getModelParent().getConnectionModels().clone();
   var count = cons.getSize();
   for(var i=0; i<count;i++)
   {
       var con = cons.get(i);
       if(con.getSourceModel()===this.cloudNode)
       {
         con._tmpModelParent=con.getModelParent();
         con.getModelParent().removeConnectionModel(con);
         this.connections.add(con);
       }
       else if(con.getTargetModel()===this.cloudNode)
       {
         con._tmpModelParent=con.getModelParent();
         con.getModelParent().removeConnectionModel(con);
         this.connections.add(con);
       }
   }
   this.parent.removeCloudNodeModel(this.cloudNode);

};

/** 
 * Undo the command.
 *
 **/
draw2d.CommandRemoveCloudNode.prototype.undo=function()
{
   this.parent.addCloudNodeModel(this.cloudNode);
   var count = this.connections.getSize();
   for(var i=0; i<count;i++)
   {
       var con = this.connections.get(i);
       con._tmpModelParent.addConnectionModel(con);
   }
};
