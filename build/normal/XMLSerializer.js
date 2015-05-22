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
draw2d.XMLSerializer=function()
{
   alert("do not init this class. Use the static methods instead");
};


draw2d.XMLSerializer.toXML=function(obj, objectName, indentSpace)
{
   if(objectName == undefined)
       objectName = "model";
   indentSpace = indentSpace?indentSpace:'';

   var t = draw2d.XMLSerializer.getTypeName(obj);
   var s = indentSpace  + '<' + objectName +  ' type="' + t + '">';

   switch(t)
   {
      case "int":
      case "number":
      case "boolean":
         s += obj; 
         break;
      case "string":
         s += draw2d.XMLSerializer.xmlEncode(obj);
         break;
      case "date":
         s += obj.toLocaleString();
         break;
      case "Array":
      case "array":
         s += "\n";
         var indentSpace_plusOne = indentSpace + "   ";
         for(var i =0;i<obj.length;i++)
         {
            s += draw2d.XMLSerializer.toXML(obj[i], ('element'),indentSpace_plusOne );
         }
         s += indentSpace;
         break;
      default:
         if(obj!==null)
         {
            s += "\n";
            if(obj instanceof  draw2d.ArrayList)
               obj.trimToSize();

            var attributes = obj.getPersistentAttributes();
            var indentSpace_plusOne = indentSpace + "   ";
            for(var name in attributes)
            {
               s += draw2d.XMLSerializer.toXML(attributes[name], name, indentSpace_plusOne);
            }
            s += indentSpace;
         }
      break;
    }
    s += "</" + objectName + ">\n";
    return s;
};



draw2d.XMLSerializer.isSimpleVar=function(t)
{
   switch(t)
   {
      case "int":
      case "string":
      case "String":
      case "Number":
      case "number":
      case "Boolean":
      case "boolean":
      case "bool":
      case "dateTime":
      case "Date":
      case "date":
      case "float":
      return true;
   }

   return false;
};


draw2d.XMLSerializer.getTypeName=function(obj)
{
   if (obj===null)
      return "undefined";
   if (obj instanceof Array)
      return "Array";
   if (obj instanceof Date)
      return "Date";

   var t  = typeof(obj);

   if(t=="number")
      return (parseInt(obj).toString() == obj)?"int":"number";


   if (draw2d.XMLSerializer.isSimpleVar(t))
      return t;

   // don't remove the "+" in the string. The string will be replace during the build.xml run if you
   // remove this.
   return obj.type.replace("@NAMESPACE"+"@","");
};


draw2d.XMLSerializer.xmlEncode=function(textToEncode)
{
  var result = textToEncode;
  
  var amp = /&/gi;
  var gt = />/gi;
  var lt = /</gi;
  var quot = /"/gi;
  var apos = /'/gi;
  
  var xml_gt = "&#62;";
  var xml_lt = "&#38;#60;";
  var xml_amp = "&#38;#38;";
  var xml_quot = "&#34;";
  var xml_apos = "&#39;";
  
  result = result.replace(amp, xml_amp);
  result = result.replace(quot, xml_quot);
  result = result.replace(lt, xml_lt);
  result = result.replace(gt, xml_gt);
  result = result.replace(apos, xml_apos);
  return result;
}