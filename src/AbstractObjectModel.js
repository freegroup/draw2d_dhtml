/* This notice must be untouched at all times.

FreeGroup @APPLICATIONNAME@ @VERSION@
The latest version is available at
@APPLICATIONWEBSITE@

Copyright (c) 2006 Andreas Herz. All rights reserved.
Created 5. 11. 2006 by Andreas Herz (Web: http://www.freegroup.de )

LICENSE: LGPL

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License (LGPL) as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA,
or see http://www.gnu.org/copyleft/lesser.html
*/

/**
 * A factory for creating new EditParts. EditPartViewers can be configured with an EditPartFactory.
 * Whenever an EditPart in that viewer needs to create another EditPart, it can use the Viewer's factory.
 * The factory is also used by the viewer whenever EditPartViewer.setContents(Object)  is called.
 * 
 * @version @VERSION@
 * @author Andreas Herz
 * @constructor
 * @since 0.9.16
 */
draw2d.AbstractObjectModel=function()
{
  /** @private **/
  this.listeners = new draw2d.ArrayList();
  /** @private **/
  this.id = draw2d.UUID.create();
};

draw2d.AbstractObjectModel.EVENT_ELEMENT_ADDED     = "element added";
draw2d.AbstractObjectModel.EVENT_ELEMENT_REMOVED   = "element removed";
draw2d.AbstractObjectModel.EVENT_CONNECTION_ADDED  = "connection addedx";
draw2d.AbstractObjectModel.EVENT_CONNECTION_REMOVED= "connection removed";

/** @private **/
draw2d.AbstractObjectModel.prototype.type="draw2d.AbstractObjectModel";

/**
 * Return all model children of this model object.
 *
 * @type  draw2d.ArrayList
 **/
draw2d.AbstractObjectModel.prototype.getModelChildren=function()
{
   return new draw2d.ArrayList();
};

/**
 * Return the parent model of this element or null if this the root object of
 * the model.
 *
 * @type  draw2d.AbstractObjectModel
 **/
draw2d.AbstractObjectModel.prototype.getModelParent=function()
{
   return this.modelParent;
};

draw2d.AbstractObjectModel.prototype.setModelParent=function(/*:draw2d.AbstractObjectModel*/ parent)
{
   this.modelParent=parent;
};

/**
 * Return the unique id of this model element.
 *
 * @type String
 **/
draw2d.AbstractObjectModel.prototype.getId=function()
{
   return this.id;
};

/**
 * Notifies any property change listeners that a property has changed. Only listeners registered at 
 * the time this method is called are notified.
 *
 **/
draw2d.AbstractObjectModel.prototype.firePropertyChange=function(/*:String*/ propertyName, /*:Object*/ oldValue, /*:Object*/ newValue)
{
   var count = this.listeners.getSize();
   if(count===0)
    return;

   var event = new draw2d.PropertyChangeEvent(this, propertyName, oldValue, newValue);
   for(var i=0; i<count;i++)
   {
       try
       {
         this.listeners.get(i).propertyChange(event);
       }
       catch(e)
       {
          alert("Method: draw2d.AbstractObjectModel.prototype.firePropertyChange\n"+e+ "\nProperty: "+propertyName+"\nListener Class:"+this.listeners.get(i).type);
       }
   }
};

/**
 *
 * Adds a PropertyChangeListener to the listener list. The listener is registered for all properties of this class,
 * If listener is null, no exception is thrown and no action is performed.
 *
 **/
draw2d.AbstractObjectModel.prototype.addPropertyChangeListener=function( listener)
{
   if(listener!==null)
     this.listeners.add(listener);
};

/**
 * Removes a PropertyChangeListener from the listener list. This method should be used to remove 
 * PropertyChangeListeners that were registered for all properties of this class.
 * If listener is null, no exception is thrown and no action is performed. 
 **/
draw2d.AbstractObjectModel.prototype.removePropertyChangeListener=function( listener)
{
   if(listener!==null)
      this.listeners.remove(listener);
};

/**
 * Returns all attributes which are relevatn for serialization.
 * 
 * @return The list of persistend attribute.
 **/
draw2d.AbstractObjectModel.prototype.getPersistentAttributes=function()
{
   return {
            id: this.id
          };
};

