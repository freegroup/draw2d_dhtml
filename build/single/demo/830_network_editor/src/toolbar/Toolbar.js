draw2d.Toolbar=function(divId){
this.groups=new draw2d.ArrayList();
this.divId=divId;
};
draw2d.Toolbar.prototype.getHTMLElement=function(){
return $(this.divId);
};
draw2d.Toolbar.prototype.addElement=function(group){
this.groups.add(group);
this.getHTMLElement().appendChild(group.getHTMLElement());
};
