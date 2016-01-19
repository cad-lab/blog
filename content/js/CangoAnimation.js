/*=====================================================================
  Filename: CangoAnimation-3v01.js
  Rev 3
  By: A.R.Collins
  Description:  This file augments the core Cango object with
                animation methods
  License: Released into the public domain
  latest version at
  <http://www/arc.id.au/>

  Date    Description                                             |By
  --------------------------------------------------------------------
  11May14 First release                                            ARC
  21Jul14 Updated to Cango-5 _buf becomes this.cnvs.buf            ARC
  24Jul14 Enable synchronised timeline for all layers
          Released as Version 2                                    ARC
  14Nov15 Dropped non-functional references to duration=0
          Rename Timeline to CgoTimeline to avoid conflicts        ARC
  16Nov15 Allow any path function, not just interpolate            ARC
  17Nov15 Add standard interpolateKeyFrames path function          ARC
          Let Timeline handle saving draw time as currState.time   ARC
  20Nov15 Support calling clipPath in pathFn (requires Cango7v16)  ARC
  22Nov15 rename 'interpolateKeyFrmaes' to 'interpolate',
          use x,y,scl,rot not xKeyFrames etc.
          Call render(obj, nextState) immediatley after initFn
          Make currState clone of nextState after initFn called    ARC
  23Nov15 Add support for ketTimes in interpolate
          Added optional start offset from paused                  ARC
  24Nov15 Change mode to STOPPED after duration time (not pause)   ARC
  28Nov15 Add resetClip after render in Animation instantiation
          ctx.save before pathFn call and ctx.restore after render ARC
  01Dec15 Released as 3v00 (based on 3beta-19)                     ARC
  17Dec15 bugfix: resume from stop didn't set currState.time=0.
          deleteAnimation forces timeline to paused mode           ARC
 =====================================================================*/

var CgoTimeline, interpolate;

Cango = (function(CangoCore)  // Cango must be declared a global before this file is loaded
{
  "use strict";

  if (!Date.now)
  {
    Date.now = function now()
    {
      return new Date().getTime();
    };
  }

  var isArray = function(obj)
  {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var isNumber = function(o)
  {
    return !isNaN(o) && o !== null && o !== "" && o !== false;
  };

  interpolate = function(time, options)    // a pre-defined pathFn
  {
    var opts = options || {delay:0, duration: 5000, loop:""},
        delay = opts.delay || 0,
        dur = opts.duration || 5000,
        loopStr = opts.loop || "",
        localTime, t,
        values, times;

    function getVal(vals, keyTimes)  // vals is an array of key frame values (or a static number)
    {
      var numSlabs, slabDur, slab, frac,
          i, tFrac;

      if (!isArray(vals))    // not an array, just a static value, return it every time
      {
        return vals;
      }
      if (!vals.length)
      {
        return 0;
      }
      if (vals.length === 1)
      {
        return vals[0];
      }
      // we have at least 2 element array of values
      if (t === 0)
      {
        return vals[0];
      }
      if (t >= dur)
      {
        return vals[vals.length-1];  // freeze at end value
      }
      numSlabs = vals.length-1;
      if (!isArray(keyTimes) || (vals.length !== keyTimes.length))
      {
        slabDur = dur/numSlabs;
        slab = Math.floor(t/slabDur);
        frac = (t - slab*slabDur)/slabDur;

        return vals[slab] + frac*(vals[slab+1] - vals[slab]);
      }

      // we have keyTimes to play work with copies of arrays
      values = [].concat(vals);
      times = [].concat(keyTimes);
      //with make sure times start with 0
      if (times[0] !== 0)
      {
        values.unshift(values[0]);
        times.unshift(0);
      }
      //with make sure times end with 1
      if (times[times.length-1] !== 1)
      {
        values.push(values[values.length-1]);
        times.push(1);
      }
      i = 0;
      tFrac = t/dur;
      while ((i < times.length-1) && (times[i+1] < tFrac))
      {
        i++;
      }
      slabDur = times[i+1]-times[i];
      frac = (tFrac - times[i])/slabDur;

      return values[i] + frac*(values[i+1] - values[i]);
    }

    if (opts.reStartOfs === undefined)
    {
      // make a static var to help looping
      opts.reStartOfs = 0;   // set this to 'time' to cause localTime to reset to 0 when looping
    }
    if (time === 0)       // re-starting after a stop
    {
      opts.reStartOfs = 0;     // reset this to prevent negative times
    }
    localTime = time - opts.reStartOfs;       // handles local looping
    if ((localTime > dur+delay) && (loopStr === 'loop'))
    {
      opts.reStartOfs = time;      // we will correct external time to re-start
      localTime = 0;          // force re-start at frame 0 now too
    }
    t = 0;
    if (localTime > delay)    // repeat initial frame if there is a delay to start
    {
      t = localTime - delay;
    }
    if (opts.hasOwnProperty("x"))
    {
      if (opts.hasOwnProperty("xTimes"))
      {
        this.nextState.x = getVal(opts.x, opts.xTimes);
      }
      else
      {
        this.nextState.x = getVal(opts.x);
      }
    }
    if (opts.hasOwnProperty("y"))
    {
      if (opts.hasOwnProperty("yTimes"))
      {
        this.nextState.y = getVal(opts.y, opts.yTimes);
      }
      else
      {
        this.nextState.y = getVal(opts.y);
      }
    }
    if (opts.hasOwnProperty("scl"))
    {
      if (opts.hasOwnProperty("sclTimes"))
      {
        this.nextState.scl = getVal(opts.scl, opts.sclTimes);
      }
      else
      {
        this.nextState.scl = getVal(opts.scl);
      }
    }
    if (opts.hasOwnProperty("rot"))
    {
      if (opts.hasOwnProperty("rotTimes"))
      {
        this.nextState.rot = getVal(opts.rot, opts.rotTimes);
      }
      else
      {
        this.nextState.rot = getVal(opts.rot);
      }
    }
  };

  function Animation(id, gc, obj, initFn, pathFn, options)
  {
    var prop;

    this.id = id;
    this.gc = gc;        // the Cango context to do the drawing
    this.obj = obj;
    this.pathFn = pathFn;    // root object (Obj2D or Group2D) of scene to be draw
    this.options = options;
    this.currState = {time:0, x:0, y:0, scl:1, rot:0};
    this.nextState = {time:0, x:0, y:0, scl:1, rot:0};
    this.gc.ctx.save();
    if (typeof initFn === "function")
    {
      initFn.call(this, options);  // call object creation code
    }
    // draw the object as setup by initFn (pathFn not called yet)
    this.gc.render(this.obj, this.nextState.x, this.nextState.y, this.nextState.scl, this.nextState.rot);
    this.gc.resetClip();    // if init calls clipPath, it must be reset so next frame doesn't combine clip areas
    this.gc.ctx.restore();  // if initFn makes changes to ctx restore to pre-initFn state
    // now it has been drawn save the currState values (nextState values are generated by pathFn)
    for (prop in this.nextState)   // if initFn creates new properties, make currState match
    {
      if (this.nextState.hasOwnProperty(prop))
      {
        this.currState[prop] = this.nextState[prop];
      }
    }
  }

  // this is the actual animator that draws the frame
  function drawFrame(timeline)
  {
    var temp, i, at,
        prevAt = null,
        localTime,
        time = Date.now();    // use this as a time stamp, browser don't all pass the same time code

    if (timeline.prevAnimMode === timeline.modes.STOPPED)
    {
      timeline.startTime = time - timeline.startOfs;    // forces localTime = 0, start from beginning
    }
    localTime =  time - timeline.startTime;

    // step through all the animation tasks
    for (i=0; i<timeline.animTasks.length; i++)
    {
      at = timeline.animTasks[i];
      if (at.gc.cId !== prevAt)
      {
        // check for new layer, only clear a layer once, there maybe several Cango contexts on each canvas
        at.gc.clearCanvas();
        prevAt = at.gc.cId;
      }
      at.gc.ctx.save();
      if (at.gc.buffered)
      {
        // drawing will be off screen, clear buffer
        at.gc.bufCtx.clearRect(0, 0, at.gc.rawWidth, at.gc.rawHeight);
        // swap buffers while drawing done off scrreen
        temp = at.gc.ctx;
        at.gc.ctx = at.gc.bufCtx;
      }
      // if re-starting after a stopAnimation reset the currState.time so pathFn doesn't get negative time between frames
      if (timeline.prevAnimMode === timeline.modes.STOPPED)
      {
        at.currState.time = 0;    // avoid -ve dT (=localTime-currState.time) in pathFn
      }
      if (typeof(at.pathFn) === 'function')  // static objects may have null or undefined
      {
        at.pathFn.call(at, localTime, at.options);
      }
      at.gc.render(at.obj, at.nextState.x, at.nextState.y, at.nextState.scl, at.nextState.rot);
      if (at.gc.buffered)
      {
        // drawing done, switch them back
        at.gc.ctx = temp;
        // now bit-blt the image in buffer to the on-screen canvas (all drawing over written)
        at.gc.ctx.drawImage(at.gc.cnvs.buf, 0, 0);
      }
      at.gc.resetClip();   // if pathFn calls clipPath, it must be reset so next frame doesn't combine clip areas
      at.gc.ctx.restore(); // if pathFn changes any ctx properties restore to pre pathFn state
      // now swap the currState and nextState vectors (pathFn may use currState to gen nextState)
      temp = at.currState;
      at.currState = at.nextState; // save current state vector, pathFn will use it
      at.nextState = temp;
      // save the draw time for pathFn
      at.currState.time = localTime;
    }
    timeline.currTime = localTime;      // timestamp of what is currently on screen
  }

  CgoTimeline = function()
  {
    this.animTasks = [];    // each layer can push an Animation object in here
    this.timer = null;                // need to save the rAF id for cancelling
    this.modes = {PAUSED:1, STOPPED:2, PLAYING:3, STEPPING:4};     // animation modes
    this.animMode = this.modes.STOPPED;
    this.prevAnimMode = this.modes.STOPPED;
    this.startTime = 0;               // Date.now when localTime was 0 used to generate localTime
    this.startOfs = 0;                // used if play calls with non-zero start time
    this.currTime = 0;                // time along timeline (starting at 0) of frame on screen
    this.stepTime = 50;               // animation step time interval (in msec)
  };

  CgoTimeline.prototype.stopAnimation = function()
  {
    window.cancelAnimationFrame(this.timer);
    this.prevAnimMode = this.animMode;
    this.animMode = this.modes.STOPPED;
    // reset the currTime so play and step know to start again
    this.currTime = 0;
    this.startOfs = 0;
  };

  CgoTimeline.prototype.pauseAnimation = function()
  {
    window.cancelAnimationFrame(this.timer);
    this.prevAnimMode = this.animMode;
    this.animMode = this.modes.PAUSED;
  };

  CgoTimeline.prototype.stepAnimation = function()
  {
    var savThis = this;

    // this is the actual animator that draws the frame
    function drawIt()
    {
      drawFrame(savThis);
      savThis.prevAnimMode = savThis.modes.PAUSED;
      savThis.animMode = savThis.modes.PAUSED;
    }

    // eqivalent to play for one frame and pause
    if (this.animMode === this.modes.PLAYING)
    {
      return;
    }
    if (this.animMode === this.modes.PAUSED)
    {
      this.startTime = Date.now() - this.currTime;  // move time as if currFrame just drawn
    }
    this.prevAnimMode = this.animMode;
    this.animMode = this.modes.STEPPING;

    setTimeout(drawIt, this.stepTime);
  };

  CgoTimeline.prototype.redrawAnimation = function()
  {
    // eqivalent to play for one frame and pause
    if (this.animMode === this.modes.PLAYING)
    {
      return;
    }
    this.startTime = Date.now() - this.currTime;  // move time as if currFrame just drawn

    drawFrame(this);
  };

  CgoTimeline.prototype.playAnimation = function(startOfs, stopOfs)
  {
    var savThis = this;

    function drawIt()
    {
      drawFrame(savThis);
      savThis.prevAnimMode = savThis.modes.PLAYING;
      if (stopOfs)
      {
        if (savThis.currTime < stopOfs)
        {
          savThis.timer = window.requestAnimationFrame(drawIt);
        }
        else
        {
          savThis.stopAnimation();     // go back to start of time line
        }
      }
      else
      {
        savThis.timer = window.requestAnimationFrame(drawIt);   // go forever
      }
    }

    this.startOfs = startOfs || 0;
    if (this.animMode === this.modes.PLAYING)
    {
      return;
    }
    if (this.animMode === this.modes.PAUSED)
    {
      this.startTime = Date.now() - this.currTime;  // move time as if currFrame just drawn
    }
    this.prevAnimMode = this.animMode;
    this.animMode = this.modes.PLAYING;

    this.timer = window.requestAnimationFrame(drawIt);
  };

//===============================================================================

  // flag Cango to create off screen buffer for each instance
  CangoCore.prototype.buffered = true;

  CangoCore.prototype.animate = function(obj, init, path, options)
  {
    var animObj,
        animId;

    animId = this.cId+"_"+this.getUnique();
    animObj = new Animation(animId, this, obj, init, path, options);
    // push this into the Cango animations array
    this.stopAnimation();   // make sure we are not still running and old animation
    this.bkgCanvas.timeline.animTasks.push(animObj);

    return animObj.id;   // so the animation just created can be deleted if required
  };

  CangoCore.prototype.pauseAnimation = function()
  {
    this.bkgCanvas.timeline.pauseAnimation();
  };

  CangoCore.prototype.playAnimation = function(startTime, stopTime)
  {
    this.bkgCanvas.timeline.playAnimation(startTime, stopTime);
  };

  CangoCore.prototype.stepAnimation = function()
  {
    this.bkgCanvas.timeline.stepAnimation();
  };

  CangoCore.prototype.stopAnimation = function()
  {
    this.bkgCanvas.timeline.stopAnimation();
  };

  CangoCore.prototype.redrawAnimation = function()
  {
    this.bkgCanvas.timeline.redrawAnimation();
  };

  CangoCore.prototype.deleteAnimation = function(animId)
  {
    var idx = -1,
        i;

    this.pauseAnimation();   // pause all animations
    for (i=0; i<this.bkgCanvas.timeline.animTasks.length; i++)
    {
      if (this.bkgCanvas.timeline.animTasks[i].id === animId)
      {
        idx = i;
        break;
      }
    }
    if (idx === -1)
    {
      // not found
      return;
    }
    this.bkgCanvas.timeline.animTasks.splice(idx,1);       // delete the animation object
  };

  CangoCore.prototype.deleteAllAnimations = function()
  {
    this.stopAnimation();
    this.bkgCanvas.timeline.animTasks = [];
  };

  return CangoCore;    // return the augmented Cango object, over-writing the existing

}(Cango));     // Take the existing Cango object and add animation methods

