/*
moo.fx, simple effects library built with prototype.js (http://prototype.conio.net).
by Valerio Proietti (http://mad4milk.net) MIT-style LICENSE.
for more info (http://moofx.mad4milk.net).
Sunday, March 05, 2006
v 1.2.3
*/

var fx = new Object();
//base
fx.Base = function(){};
fx.Base.prototype = {

    setOptions: function(options) {
    this.options = {
        duration: 500,
        onComplete: '',
        transition: fx.sinoidal
    }
    Object.extend(this.options, options || {});
    },

    step: function() {
        var time  = (new Date).getTime();
        if (time >= this.options.duration+this.startTime) {
            this.now = this.to;
            clearInterval (this.timer);
            this.timer = null;
            if (this.options.onComplete) setTimeout(this.options.onComplete.bind(this), 10);
        }
        else {
            var Tpos = (time - this.startTime) / (this.options.duration);
            this.now = this.options.transition(Tpos) * (this.to-this.from) + this.from;
        }
        this.increase();
    },

    custom: function(from, to) {
        if (this.timer != null) return;
        this.from = from;
        this.to = to;
        this.startTime = (new Date).getTime();
        this.timer = setInterval (this.step.bind(this), 13);
    },

    compute: function(from, to){
        var change = to - from;
        return this.options.transition(this.cTime, from, change, this.options.duration);
    },

    hide: function() {
        this.now = 0;
        this.increase();
    },

    clearTimer: function() {
        clearInterval(this.timer);
        this.timer = null;
    }
}


fx.Color = Class.create();
Object.extend(Object.extend(fx.Color.prototype, fx.Base.prototype), {   
    initialize: function(el, property, options){
        this.el = $(el);
        this.now = {};
                this.property = property.camelize();
        this.setOptions(options);
    },

    step: function() {
        var time  = (new Date).getTime();
        if (time >= this.options.duration+this.startTime) {
            this.now = this.to;
            clearInterval (this.timer);
            this.timer = null;
            if (this.options.onComplete) setTimeout(this.options.onComplete.bind(this), 10);
        }
        else {
            var Tpos = this.options.transition((time - this.startTime) / (this.options.duration));
            this.now[0] =parseInt( Tpos * (this.to[0]-this.from[0]) + this.from[0]);
            this.now[1] =parseInt( Tpos * (this.to[1]-this.from[1]) + this.from[1]);
            this.now[2] =parseInt( Tpos * (this.to[2]-this.from[2]) + this.from[2]);
        }
        this.increase();
    },

    clearTimer: function() {
        clearInterval(this.timer);
        this.timer = null;
    },
    custom: function(from, to){
        if (this.timer != null) return;
        this.from = from.hexToRgb(true);
        this.to = to.hexToRgb(true);
        this.startTime = (new Date).getTime();
        this.timer = setInterval (this.step.bind(this), 13);
    },

    set: function(to) {
            this.now = to.hexToRgb(true);
        this.increase();
    },

    increase: function(){
        this.el.style[this.property] = "rgb("+this.now[0]+","+this.now[1]+","+this.now[2]+")";
    }

});

// Intervall
// Created by A.Herz
/* class Interval */
fx.Interval = Class.create();
fx.Interval.prototype = 
{
    /// handler, timeout in seconds || 5, repeat count || 1 (-1:endless)
    initialize: function( handler, timeout, count ) {
            if( typeof handler == 'function' ) {
            var index = 0;
            var handle = window.setInterval(
                function() {
                    try {
                        handler();
                    }
                    catch( e ){
                    }
                    if( ++index == ( count || 1 ) ) {
                        window.clearInterval( handle );
                    }
                },
                ( timeout || 5 ) * 1000
            )
        };
    }
}
/* end class Interval */

//scroller 
// Created by A.Herz
fx.Scroll = Class.create();
Object.extend(Object.extend(fx.Scroll.prototype, fx.Base.prototype), {  
    initialize: function(el,options) {
    this.el = $(el);
    this.options = {
        duration: 500,
        onComplete: '',
        transition: fx.sinoidal
    }
    },

    step: function() {
    var time  = (new Date).getTime();
    if (time >= this.options.duration+this.startTime) {
        this.nowX = this.toX;
        this.nowY = this.toY;
        clearInterval (this.timer);
        this.timer = null;
        if (this.options.onComplete) setTimeout(this.options.onComplete.bind(this), 10);
    }
    else {
        var Tpos = (time - this.startTime) / (this.options.duration);
        this.nowX = this.options.transition(Tpos) * (this.toX-this.fromX) + this.fromX;
        this.nowY = this.options.transition(Tpos) * (this.toY-this.fromY) + this.fromY;
    }
    this.increase();
    },

    scrollTo: function(x,y){
        this.custom(x,y);
    },

    custom: function(toX,toY) {
    if (this.timer != null) return;
    this.fromX = this.el.scrollLeft;
    this.fromY = this.el.scrollTop;
    this.toX = toX;
    this.toY = toY;
    this.startTime = (new Date).getTime();
    this.timer = setInterval (this.step.bind(this), 13);
     },

    clearTimer: function() {
    clearInterval(this.timer);
    this.timer = null;
    },

    increase: function(){
       this.el.scrollLeft= this.nowX;
       this.el.scrollTop= this.nowY;
    }
});


//stretchers
fx.Layout = Class.create();
fx.Layout.prototype = Object.extend(new fx.Base(), {
    initialize: function(el, options) {
        this.el = $(el);
        this.el.style.overflow = "hidden";
        this.iniWidth = this.el.offsetWidth;
        this.iniHeight = this.el.offsetHeight;
        this.setOptions(options);
    }
});

fx.Top = Class.create();
Object.extend(Object.extend(fx.Top.prototype, fx.Layout.prototype), {   
    increase: function() {
        this.el.style.top = this.now + "px";
    }
});

fx.Left = Class.create();
Object.extend(Object.extend(fx.Left.prototype, fx.Layout.prototype), {  
    increase: function() {
        this.el.style.left = this.now + "px";
    }
});

fx.Height = Class.create();
Object.extend(Object.extend(fx.Height.prototype, fx.Layout.prototype), {    
    increase: function() {
        this.el.style.height = this.now + "px";
    },

    toggle: function() {
        if (this.el.offsetHeight > 0) this.custom(this.el.offsetHeight, 0);
        else this.custom(0, this.el.scrollHeight);
    }
});

fx.Width = Class.create();
Object.extend(Object.extend(fx.Width.prototype, fx.Layout.prototype), { 
    increase: function() {
        this.el.style.width = this.now + "px";
    },

    toggle: function(){
        if (this.el.offsetWidth > 0) this.custom(this.el.offsetWidth, 0);
        else this.custom(0, this.iniWidth);
    }
});


//fader
fx.Opacity = Class.create();
fx.Opacity.prototype = Object.extend(new fx.Base(), {
    initialize: function(el, options) {
        this.el = $(el);
        this.setOptions(options);
    },

    increase: function() {
        if (this.now == 1 && (/Firefox/.test(navigator.userAgent))) this.now = 0.9999;
        this.setOpacity(this.now);
    },
    
    setOpacity: function(opacity) {
        if (opacity == 0 && this.el.style.visibility != "hidden") this.el.style.visibility = "hidden";
        else if (this.el.style.visibility != "visible") this.el.style.visibility = "visible";
        if (window.ActiveXObject) this.el.style.filter = "alpha(opacity=" + opacity*100 + ")";
        this.el.style.opacity = opacity;
    },

    toggle: function() {
        if (this.now > 0) this.custom(1, 0);
        else this.custom(0, 1);
    }
});

//transitions
fx.sinoidal = function(pos){
    return ((-Math.cos(pos*Math.PI)/2) + 0.5);
}
fx.linear = function(pos){
    return pos;
}
fx.cubic = function(pos){
    return Math.pow(pos, 3);
}
fx.circ = function(pos){
    return Math.sqrt(pos);
}
