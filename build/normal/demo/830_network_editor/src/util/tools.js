/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */
function ellipsis(e) 
{
    var w = e.getWidth()-10;
    var t = e.innerHTML;
    var title = t.replace(/<br>/g, "");
    var hasElipsis = false;
    e.innerHTML = "<span>" + t + "</span>";
    e = e.down();
    var cut =0;
    while (t.length > 0 && e.getWidth() >= w) {
      var center = (t.length - cut / 2);
      text = "..."+t.substr(cut, t.length - 1);

      e.innerHTML = text;
      hasElipsis=true;
      cut +=1;
    }
    if(hasElipsis)
      e.setAttribute("title",title);
}


draw2d.IdGenerator=function()
{
   alert("Don't create an instance of this class. Call draw2d.IdGenerator.getNext()");
};
draw2d.IdGenerator.nextId  = 0;

/**
 **/
draw2d.IdGenerator.getNext=function( )
{
  draw2d.IdGenerator.nextId +=1;
  return draw2d.IdGenerator.nextId-1;
};

/**
 **/
draw2d.IdGenerator.reserve=function(/*:String*/ id )
{
    id = parseInt(id,10);
    if(isNaN(id))
    {
     id=0;
    }
	draw2d.IdGenerator.nextId =Math.max(draw2d.IdGenerator.nextId,id+1);
};

function urlParam(/*:String*/ paramName )
{
  paramName = paramName.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+paramName+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results === null )
  {
    return "";
  }
  return results[1];
}
 
/**
 * Load the Document into the create Editor
 */
function loadDocument(/*:String*/ docId)
{
    // Wenn das Backend geladen wurde kann die Importer definition angezeigt werden.
    // Vorher macht dies keinen Sinn, da man keine Tablen, Columns, UniqueKey Definitionen hat.
    // API Documentation: http://www.prototypejs.org/api/ajax/request
    //
    var req= new Ajax.Request(draw2d.Configuration.GET_XML+"?xml="+docId,
    {
      method: 'get',
      onFailure: function (transport)
      { 
         // init editor with default model and as readonly 
         editor  = new draw2d.NetworkCloudGraphicalEditor("paintarea",true);
         editor.setModel(new draw2d.VirtualNetworkCloudModel());
         editor.setFatalError(draw2d.I18N.ERRORMESSAGE_WRONG_MODELURL+draw2d.Configuration.GET_XML+"?xml="+docId);
         // layout the ui
         resize();
      },
      onSuccess: function (transport)
      { 
        try
        {
            var model = null;
            var fatalErrorMessage=null;
            // very(!) simple to to ensure that the returned content is XML
            //
            if(transport.responseText.indexOf("<vnetwork")!==-1)
                model = draw2d.ModelXMLDeserializer.fromXML(transport.responseXML.firstChild);
                
            if(model===null)
            {
               // create default model to avoid crashing the UI
               model = new draw2d.VirtualNetworkCloudModel();
               fatalErrorMessage =draw2d.I18N.ERRORMESSAGE_NULL_MODEL;
            }
            
            editor  = new draw2d.NetworkCloudGraphicalEditor("paintarea",false);
            editor.setModel(model);
            if(fatalErrorMessage!=null)
          	  editor.setFatalError(fatalErrorMessage);
            // layout the ui
            resize();
        }
        catch(e)
        {
          alert("Edit Document\n"+e+"\n"+_errorStack_+"\n");
        }
      }
    });
}



function TransparentMessage(/*:String*/ msg)
{
    this.msg = msg;
}

/**
 *
 *
 **/
TransparentMessage.prototype.show=function()
{
      var content = $("body");

      this.center = document.createElement("center");
      this.center.id ="transparentMessage";
      this.center.style.padding="20px";
      this.center.style.position ="absolute";
      this.center.style.top ="0px";
      this.center.style.width ="100%";
      this.center.style.opacity="0.001";
      this.center.style.filter = "alpha(opacity=1)";

      var jacob_window = document.createElement("div");
      this.center.appendChild(jacob_window);
      jacob_window.innerHTML=this.msg;
      jacob_window.className ="transparent_message";
      jacob_window.style.backgroundColor="#8CC73F";
      jacob_window.style.color="white";
      jacob_window.style.width="300px";
      jacob_window.style.fontWeight="bold";
      jacob_window.style.fontSize="15pt";
      jacob_window.style.position="relative";
      content.appendChild(this.center);
      var x= new fx.Opacity( 'transparentMessage',{duration:300} ).custom(0.001,0.8);
      var y= new fx.Interval( function() 
      { 
          try
          {
              var z1=new fx.Opacity( 'transparentMessage',{duration:1000} ).custom(0.8,0) ;
              var z2=new fx.Top( 'transparentMessage',{duration:1500, onComplete: function(){$("transparentMessage").remove();}} ).custom(0,-100) ; 
          }
          catch(e)
          {
             alert(e);
           }
      },1);
};


