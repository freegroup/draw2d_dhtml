/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.PropertyPage=function()
{
};

/** @private **/
draw2d.PropertyPage.prototype.type="draw2d.PropertyPage";


/**
 * @param {draw2d.AbstractObjectModel} mode - the current selected model
 * @abstract
 **/
draw2d.PropertyPage.prototype.init=function(/*:draw2d.AbstractObjectModel*/ model)
{
  throw "Inherit classes must override the abstract function [PropertyPage.prototype.init]";
};

/**
 * Creates a new Figure given the specified model.
 * @final
 **/
draw2d.PropertyPage.prototype.deinit=function()
{
  throw "Inherit classes must override the abstract function [PropertyPage.prototype.deinit]";
};

/**
 * @abstract
 * @type HTMLElement
 * @private
 **/
draw2d.PropertyPage.prototype.getHTMLElement=function()
{
  throw "Inherit classes must override the abstract function [PropertyPage.prototype.getHTMLElement]";
};

/**
 * The container panel did have changed the dimension. Adjust the layout of labels...if required.
 *
 **/
draw2d.PropertyPage.prototype.onResize=function(/*:int*/ w, /*:int*/ h)
{
};

/**
 * @type HTMLElement
 * @private
 **/
draw2d.PropertyPage.prototype.createInputElement=function(/*:int*/x, /*:int*/ y)
{
  var element = document.createElement("input");
  element.type="text";
  element.style.width="260px";
  element.style.left = x+"px";
  element.style.top  = y+"px";
  element.style.font="normal 11px verdana";
  element.style.paddingLeft="5px";
  element.style.position ="absolute";

  return element;
};

/**
 * @type HTMLElement
 * @private
 **/
draw2d.PropertyPage.prototype.createLabelElement=function(/*:String*/ text,/*:int*/ x,/*:int*/ y)
{
  var element = document.createElement("div");
  element.style.left = x+"px";
  element.style.top  = y+"px";
  element.style.position ="absolute";
  element.className="property_panel_label";
  element.innerHTML=text;
  return element;
};

