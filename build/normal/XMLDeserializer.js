/* This notice must be untouched at all times.

FreeGroup Draw2D 0.9.31
The latest version is available at
${draw2d.website}

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
draw2d.XMLDeserializer=function()
{
   alert("do not init this class. Use the static methods instead");
};



draw2d.XMLDeserializer.fromXML=function(/*:DOMNode*/ node, /*:Object*/ modelParent)
{
   var className = ""+node.getAttributes().getNamedItem("type").getNodeValue();
   var value = node.getNodeValue();
   switch(className)
   {
      case "int":
        try 
        {
           return parseInt(""+node.getChildNodes().item(0).getNodeValue());
        }catch(e)
        {
          alert("Error:"+e+"\nDataType:"+className+"\nXML Node:"+node);
        }
      case "string":
      case "String":
        try 
        {
           if(node.getChildNodes().getLength()>0)
            return ""+node.getChildNodes().item(0).getNodeValue();
           return "";
        }catch(e)
        {
          alert("Error:"+e+"\nDataType:"+className+"\nXML Node:"+node);
        }
      case "Number":
      case "number":
        try 
        {
           return parseFloat(""+node.getChildNodes().item(0).getNodeValue());
        }catch(e)
        {
          alert("Error:"+e+"\nDataType:"+className+"\nXML Node:"+node);
        }
      case "Boolean":
      case "boolean":
      case "bool":
        try 
        {
           return "true" == (""+node.getChildNodes().item(0).getNodeValue()).toLowerCase();
        }catch(e)
        {
          alert("Error:"+e+"\nDataType:"+className+"\nXML Node:"+node);
        }
      case "dateTime":
      case "Date":
      case "date":
        try 
        {
           return new Date(""+node.getChildNodes().item(0).getNodeValue());
        }catch(e)
        {
          alert("Error:"+e+"\nDataType:"+className+"\nXML Node:"+node);
        }
      case "float":
        try 
        {
           return parseFloat(""+node.getChildNodes().item(0).getNodeValue());
        }catch(e)
        {
          alert("Error:"+e+"\nDataType:"+className+"\nXML Node:"+node);
        }
        break;
   }
   className = className.replace("@NAMESPACE"+"@","");
   var obj = eval("new "+className+"()");
   if(modelParent != undefined && obj.setModelParent!=undefined)
      obj.setModelParent(modelParent);
   var children = node.getChildNodes();
   for(var i=0;i<children.length;i++)
   {
      var child = children.item(i);
      var attName = child.getNodeName();
      if(obj instanceof Array)
        attName =i;/* parseInt(attName.replace("index",""));*/
      obj[attName] = draw2d.XMLDeserializer.fromXML(child,obj instanceof draw2d.AbstractObjectModel?obj:modelParent);
   }
   return obj;
};


