/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.SnapToHelper=function(_147f){this.workflow=_147f;};draw2d.SnapToHelper.NORTH=1;draw2d.SnapToHelper.SOUTH=4;draw2d.SnapToHelper.WEST=8;draw2d.SnapToHelper.EAST=16;draw2d.SnapToHelper.CENTER=32;draw2d.SnapToHelper.NORTH_EAST=draw2d.SnapToHelper.NORTH|draw2d.SnapToHelper.EAST;draw2d.SnapToHelper.NORTH_WEST=draw2d.SnapToHelper.NORTH|draw2d.SnapToHelper.WEST;draw2d.SnapToHelper.SOUTH_EAST=draw2d.SnapToHelper.SOUTH|draw2d.SnapToHelper.EAST;draw2d.SnapToHelper.SOUTH_WEST=draw2d.SnapToHelper.SOUTH|draw2d.SnapToHelper.WEST;draw2d.SnapToHelper.NORTH_SOUTH=draw2d.SnapToHelper.NORTH|draw2d.SnapToHelper.SOUTH;draw2d.SnapToHelper.EAST_WEST=draw2d.SnapToHelper.EAST|draw2d.SnapToHelper.WEST;draw2d.SnapToHelper.NSEW=draw2d.SnapToHelper.NORTH_SOUTH|draw2d.SnapToHelper.EAST_WEST;draw2d.SnapToHelper.prototype.snapPoint=function(_1480,_1481,_1482){return _1481;};draw2d.SnapToHelper.prototype.snapRectangle=function(_1483,_1484){return _1483;};draw2d.SnapToHelper.prototype.onSetDocumentDirty=function(){};