function bodyWidth(){ return document.body.offsetWidth || window.innerWidth || document.documentElement.clientWidth || 0; };
function bodyHeight(){ return document.body.offsetHeight || window.innerHeight || document.documentElement.clientHeight || 0; };

draw2d.FormDialog=function(/*:String*/ id)
{
  if(id ===undefined)
    return;
    
  this.createOverlay();
  
  this.dialog_box = $(id);
  this.parent_element = this.dialog_box.parentNode;
  
  this.dialog_box.style.position = "absolute";
  
  var e_dims = Element.getDimensions(this.dialog_box);
  var b_dims = Element.getDimensions(this.overlay);
  
  this.dialog_box.style.left = ((b_dims.width/2) - (e_dims.width/2)) + 'px';
  this.dialog_box.style.top = "40px";
  this.dialog_box.style.zIndex = this.overlay.style.zIndex + 1;
}

/** @private **/
draw2d.FormDialog.prototype.type="draw2d.FormDialog";

draw2d.FormDialog.prototype.createOverlay=function()
{
   if($('dialog_overlay')) 
   {
     this.overlay = $('dialog_overlay');
   } 
   else 
   {
     this.overlay = document.createElement('div');
     this.overlay.id = 'dialog_overlay';
     Object.extend(this.overlay.style, {
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 50001,
            width: '100%',
            backgroundColor: "black",
            display: 'none'
     });
     document.body.appendChild(this.overlay);
  }
};

/**
 * @private
 **/ 
draw2d.FormDialog.prototype.moveDialogBox=function(/*:String*/ where)
{
   Element.remove(this.dialog_box);
   if(where == 'back')
     this.dialog_box = this.parent_element.appendChild(this.dialog_box);
   else
     this.dialog_box = this.overlay.parentNode.insertBefore(this.dialog_box, this.overlay);
};

draw2d.FormDialog.prototype.show=function()
{
  this.overlay.style.height = bodyHeight()+'px';
  this.moveDialogBox('out');
  this.overlay.onclick = this.hide.bind(this);
  var x= new fx.Opacity(this.overlay).setOpacity(0.3);
  this.overlay.style.display = '';
  this.dialog_box.style.display = '';
  this.dialog_box.style.left = '0px';
  var e_dims = Element.getDimensions(this.dialog_box);
  this.dialog_box.style.left = ((this.winWidth()/2) - (e_dims.width)/2) + 'px';
  this.dialog_box.style.top = "40px";
  
  this.okButton  =this.dialog_box.select(".draw2d_window_button_ok")[0];
  this.cancelButton  =this.dialog_box.select(".draw2d_window_button_cancel")[0];
  
  this.cancelButton.onclick = function()
  {
    this.hide();
    this.onCancel();
  }.bind(this);
  
  this.okButton.onclick = function()
  {
    this.hide();
    this.onOk();
  }.bind(this);
};
    
draw2d.FormDialog.prototype.onOk=function()
{
};
    

draw2d.FormDialog.prototype.onCancel=function()
{
};
    

draw2d.FormDialog.prototype.getScrollTop=function()
{
   return (window.pageYOffset)?window.pageYOffset:(document.documentElement && document.documentElement.scrollTop)?document.documentElement.scrollTop:document.body.scrollTop;
};
    

draw2d.FormDialog.prototype.hide=function()
{
  this.overlay.style.display = 'none';
  this.dialog_box.style.display = 'none';
  this.moveDialogBox('back');
  $A(this.dialog_box.getElementsByTagName('input')).each(function(e){if(e.type!='submit')e.value=''});
};
  
  
draw2d.FormDialog.prototype.winWidth=function()
{
   var viewportwidth;
   // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
   if (typeof window.innerWidth != 'undefined')
   {
     viewportwidth = window.innerWidth;
   }
         
   // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
   else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0)
   {
     viewportwidth = document.documentElement.clientWidth;
   }
         
   // older versions of IE
   else
   {
     viewportwidth = document.getElementsByTagName('body')[0].clientWidth
   }
   return viewportwidth;
};

draw2d.FormDialog.prototype.winHeight=function()
{
   var viewportheight;
         
   // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
   if (typeof window.innerHeight != 'undefined')
   {
      viewportheight = window.innerHeight
   }
         
   // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
   else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientHeight != 'undefined' && document.documentElement.clientHeight != 0)
   {
      viewportheight = document.documentElement.clientHeight;
   }
   // older versions of IE
   else
   {
      viewportheight = document.getElementsByTagName('body')[0].clientHeight;
   }
   return viewportheight;
};

