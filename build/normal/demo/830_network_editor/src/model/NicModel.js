/* This notice must be untouched at all times.

Open-jACOB Draw2D
The latest version is available at
http://www.openjacob.org

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
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.NicModel=function(/*:String*/ id)
{
   draw2d.AbstractCloudNodeModel.call(this, id);
   
   // set some default values
   this.ipaddress = draw2d.Configuration.DEFAULT_NIC_IPADDRESS;
   this.dbid = "";
   this.server=null;
   this["switch"]=null;
};

draw2d.NicModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.NicModel.prototype.type="draw2d.NicModel";
draw2d.NicModel.prototype.tag="nic";


draw2d.NicModel.prototype.getSwitchReferenceModel=function()
{
  return this["switch"];
};

draw2d.NicModel.prototype.getServerReferenceModel=function()
{
  return this.server;
};


draw2d.NicModel.prototype.setSwitchReferenceModel=function(/*:draw2d.SwitchReferenceModel*/ switchRef)
{
  this["switch"]= switchRef;
};


draw2d.NicModel.prototype.setServerReferenceModel=function(/*:draw2d.ServerReferenceModel*/ serverRef)
{
   this.server=serverRef;
};


/**
 * Set the ip of the nic.
 *
 * @param {String} name The new name of the server.
 **/
draw2d.NicModel.prototype.setIpAddress=function(/*:String*/ ip)
{
   // delegate to the NIC-Model below the related server
   this.ipaddress=ip;
};

/**
 * Return the ip of the NIC .
 *
 * @type String the ip address of the nic.
 * @public
 **/
draw2d.NicModel.prototype.getIpAddress=function()
{
   return this.ipaddress;
};


/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 * @since 0.9.15
 **/
draw2d.NicModel.prototype.getPersistentAttributes=function()
{
   var memento = draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   memento.attributes.id= this.id;

   if(this.dbid.length>0)
   {
  	 memento.dbid = this.dbid;
   }     

   if(this.ipaddress.length>0)
   {
  	 memento.ipaddress = this.ipaddress;
   }     
   
   if(this.server!==null)
   {
  	 memento.server = this.server;
   }     

   if(this["switch"]!==null)
   {
     memento["switch"]=this["switch"];
   }     
   return memento;
};
