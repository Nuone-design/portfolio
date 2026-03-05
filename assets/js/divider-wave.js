/**
 * divider-wave.js
 * Divider lines stay perfectly straight.
 * A subtle glow travels along the line with the cursor.
 */
(function () {
  'use strict';

  /* ── Config ─────────────────────────────────────────────────── */
  var BORDER   = '#1e1e1e';  // base line colour (matches --border)
  var GLOW_R   = 72;         // glow radius in px
  var GLOW_MAX = 0.30;       // peak glow opacity (white overlay)
  var LERP_POS = 0.18;       // how fast the glow spot follows cursor
  var LERP_AMP = 0.12;       // fade-in / fade-out speed

  function lerp(a, b, t) { return a + (b - a) * t; }

  /* ── Divider class ──────────────────────────────────────────── */
  function Divider(el, edge) {
    this.el   = el;
    this.edge = edge;          // 'bottom' | 'top'
    this.cur  = { x: 0, amp: 0 };
    this.tgt  = { x: 0, amp: 0 };
    this.raf  = null;
    this._setup();
  }

  Divider.prototype._setup = function () {
    var self   = this;
    var canvas = document.createElement('canvas');

    /* 1 CSS px tall — just the line, no extra height needed */
    canvas.style.cssText =
      'position:absolute;left:0;right:0;width:100%;height:1px;' +
      'pointer-events:none;z-index:5;' +
      (this.edge === 'bottom' ? 'bottom:0;' : 'top:0;');

    this.canvas = canvas;
    this.el.appendChild(canvas);

    this._resize();
    window.addEventListener('resize', function () { self._resize(); });

    this.el.addEventListener('mousemove', function (e) {
      var rect     = self.el.getBoundingClientRect();
      self.tgt.x   = e.clientX - rect.left;
      self.tgt.amp = 1;
      if (!self.raf) self._tick();
    });

    this.el.addEventListener('mouseleave', function () {
      self.tgt.amp = 0;
      if (!self.raf) self._tick();
    });
  };

  Divider.prototype._resize = function () {
    var dpr = window.devicePixelRatio || 1;
    var w   = this.el.offsetWidth;
    var c   = this.canvas;
    c.width  = Math.round(w * dpr);
    c.height = Math.round(1 * dpr);
    this.ctx = c.getContext('2d');
    this.ctx.scale(dpr, dpr);
    this._draw();
  };

  Divider.prototype._draw = function () {
    var ctx = this.ctx;
    var w   = this.el.offsetWidth;

    ctx.clearRect(0, 0, w, 1);

    /* ① flat base line */
    ctx.fillStyle = BORDER;
    ctx.fillRect(0, 0, w, 1);

    /* ② glow spot — purely horizontal radial gradient, no line movement */
    if (this.cur.amp > 0.004) {
      var alpha = GLOW_MAX * this.cur.amp;
      var cx    = this.cur.x;

      /* Radial gradient centred on the line at cursor X.
         At y=0.5 the gradient evaluates purely by horizontal distance,
         producing a smooth horizontal fade with no vertical spread.   */
      var grad = ctx.createRadialGradient(cx, 0.5, 0, cx, 0.5, GLOW_R);
      grad.addColorStop(0, 'rgba(255,255,255,' + alpha.toFixed(3) + ')');
      grad.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, 1);
    }
  };

  Divider.prototype._tick = function () {
    var self = this;
    this.cur.x   = lerp(this.cur.x,   this.tgt.x,   LERP_POS);
    this.cur.amp = lerp(this.cur.amp,  this.tgt.amp,  LERP_AMP);
    this._draw();

    var settled = this.tgt.amp === 0 && this.cur.amp < 0.004;
    if (settled) { this.raf = null; return; }

    this.raf = requestAnimationFrame(function () { self._tick(); });
  };

  /* ── Boot ────────────────────────────────────────────────────── */
  function boot() {
    var bottomSels = [
      '#work', '#about', '#ai-work',
      '.cs-header', '.video-section', '.img-section',
      '.text-section', '.img-block', '.cs-section'
    ];
    var topSels = ['.next-project'];

    function add(sel, edge) {
      document.querySelectorAll(sel).forEach(function (el) {
        new Divider(el, edge);
      });
    }
    bottomSels.forEach(function (s) { add(s, 'bottom'); });
    topSels.forEach(function (s)    { add(s, 'top');    });

    /* Hide CSS pseudo-element lines — the 1px canvas replaces them */
    var hide = document.createElement('style');
    hide.textContent =
      '#work::after,#about::after,#ai-work::after,' +
      '.cs-header::after,.video-section::after,.img-section::after,' +
      '.text-section::after,.img-block::after,.cs-section::after,' +
      '.next-project::before{display:none!important}';
    document.head.appendChild(hide);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
