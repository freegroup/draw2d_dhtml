/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @private
 **/

function removeTextNodes(nodes)
{
   var result = new draw2d.ArrayList();
   for(var i=0;i<nodes.length;i++)
   {
      var child = nodes.item(i);
      var attName = child.nodeName;

      if(attName === "#text")
      {
    	  continue;
      }
      result.add(child);
  }
  return result.asArray();
}

draw2d.ModelXMLDeserializer=function()
{
   alert("do not init this class. Use the static methods instead");
};



draw2d.ModelXMLDeserializer.fromXML=function(/*:DOMNode*/ node, /*:Object*/ modelParent, /*:Object*/ modelRoot)
{
   var className = ""+node.nodeName;
   var value = node.nodeValue;
   if(value===null)
   {
       if(node.nodeTypedValue)
          value = node.nodeTypedValue;
       else
	      value=node.textContent;
   }
   var obj = null;
   var checkSwitches = false;
   
   switch(className.toLowerCase())
   {
      case "vnetwork":
         obj = new draw2d.VirtualNetworkCloudModel(node.getAttribute("id"));
         modelRoot = obj;
         break;
      case "server":
         if(modelParent instanceof draw2d.MountModel)
         {
            obj = new draw2d.ServerReferenceModel(node.getAttribute("reference"));
         }
         else if(modelParent instanceof draw2d.NicModel)
         {
            obj = new draw2d.ServerReferenceModel(node.getAttribute("reference"));
         }
         else
         {
            obj = new draw2d.ServerModel(node.getAttribute("id"));
         }
         break;
      case "storage":
         if(modelParent instanceof draw2d.MountModel)
         {
            obj = new draw2d.StorageReferenceModel(node.getAttribute("reference"));
         }
         else
         {
            obj = new draw2d.StorageModel(node.getAttribute("id"));
         }
         break;
      case "switch":
         if(modelParent instanceof draw2d.NicModel)
         {
            obj = new draw2d.SwitchReferenceModel(node.getAttribute("reference"));
         }
         else 
         {
            obj = new draw2d.SwitchModel(node.getAttribute("id"));
         }
         break;
      case "representation":
         obj = new draw2d.RepresentationModel();
         break;
      case "nics":
         obj = new draw2d.NicsModel();
         break;
      case "nic":
         if(modelParent instanceof draw2d.SwitchModel)
         {
            obj = new draw2d.NicReferenceModel(node.getAttribute("reference"));
         }
         else
         {
            obj = new draw2d.NicModel(node.getAttribute("id"));
            modelParent.addNicModel(obj);
            // Falls ein NIC angelegt wird, ist es wichtig für den UI-Desinger, dass der entsprechende
            // Switch ebenfalls vorhanden ist. Grund: Es muss ein Linie/Link gezeichnet werden welche sonst
            // im Nichts endet.
            checkSwitches = true;
         }
         break;
      case "images":
         obj = new draw2d.ImagesModel();
         break;
      case "image":
         obj = new draw2d.ImageModel(node.getAttribute("id"));
         modelParent.addImageModel(obj);
         break;
      case "mount":
         var children = removeTextNodes(node.childNodes);
         if(children[0].nodeName==="server")
         {
            obj = new draw2d.MountModel(children[1].getAttribute("reference"),children[0].getAttribute("reference"),node.getAttribute("id"));
         }
         else
         {
            obj = new draw2d.MountModel(children[0].getAttribute("reference"),children[1].getAttribute("reference"),node.getAttribute("id"));
         }
         
         break;
      default:
 		return value;
   }

   if(modelParent !== undefined && obj.setModelParent!==undefined)
   {
      obj.setModelParent(modelParent);
   }
   var childNodes = removeTextNodes(node.childNodes);
   var counter=0;
   for(var i=0;i<childNodes.length;i++)
   {
      var child = childNodes[i];
      var attName = child.nodeName;

      if(obj instanceof Array)
      {
        attName =counter;/* parseInt(attName.replace("index",""));*/
      }
        
      var childModel = draw2d.ModelXMLDeserializer.fromXML(child,obj instanceof draw2d.AbstractObjectModel?obj:modelParent, modelRoot);

      if(childModel instanceof draw2d.AbstractCloudNodeModel && obj instanceof draw2d.VirtualNetworkCloudModel)
      {
         obj.addCloudNodeModel(childModel);
      }
      else if(childModel instanceof draw2d.AbstractConnectionModel)
      {
         childModel.getSourceModel().addConnectionModel(childModel);
      }
      else
      {
         obj[attName] = childModel;
      }
      counter++;
   }
   var attributes = node.attributes;
   for(var ii=0;ii<attributes.length;ii++)
   {
      var childAtt = attributes.item(ii);
        
      obj[childAtt.nodeName] = childAtt.nodeValue;
   }
   
   if(checkSwitches===true)
   {
      var switchRef = obj.getSwitchReferenceModel();
      var serverRef = obj.getServerReferenceModel();
      if(switchRef!==null)
      {
        var sw = modelRoot.getCloudNodeModel(switchRef.getReference());
        if(sw===null)
        {
         sw =new draw2d.SwitchModel(switchRef.getReference());
          modelRoot.addCloudNodeModel(sw);
        }
        if(serverRef!==null)
        {
          var server = obj.getModelParent().getModelParent();
          if(server instanceof draw2d.ServerModel)
          {
             var con = new draw2d.NicConnectionModel(server.getId(),sw.getId());
             con.nicModel = obj;
             server.addConnectionModel(con);
          }
           
        }
      }

   }
   
   return obj;
};
