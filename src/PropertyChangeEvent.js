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
 * @class
 * A "PropertyChange" event gets delivered whenever a model changes a property. A PropertyChangeEvent object is sent
 * as an argument to the PropertyChangeListener methods.
 * Normally PropertyChangeEvents are accompanied by the name and the old and new value of the changed property.
 * Null values may be provided for the old and the new values if their true values are not known.
 * An event source may send a null object as the "property" to indicate that an arbitrary set of if its properties
 * have changed. In this case the old and new values should also be null.
 *
 * @version @VERSION@
 * @author Andreas Herz
 * @constructor
 * @since 0.9.15
 */
draw2d.PropertyChangeEvent=function(/*:AbstractObjectModel*/ model, /*:String*/ property, /*:Object*/ oldValue, /*:Object*/ newValue)
{
   this.model = model;
   this.property = property;
   this.oldValue = oldValue;
   this.newValue = newValue;
};

/** @private **/
draw2d.PropertyChangeEvent.prototype.type="draw2d.PropertyChangeEvent";

