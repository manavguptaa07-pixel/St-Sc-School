(function () {
  var cur = location.pathname.split('/').pop() || 'index.html';

  // ---------- header and footer (shared by all pages) ----------
  var HDR = `
<header class="site"><div class="wrap">
<a class="brand" href="index.html" aria-label="St. S.S. Public School home"><img alt="St. S.S. Public School crest" src="logo.jpg"><span>St. S.S. Public School<small>तमसो मा ज्योतिर्गमय</small></span></a>
<button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
<nav class="main" id="nav"><a href="index.html">Home</a><a href="about.html">About us</a><a href="academics.html">Academics</a><a href="admissions.html">Admissions</a><a href="gallery.html">Gallery</a><a href="contact.html">Contact</a><a class="social-link" href="https://www.instagram.com/st_ss_public_school/" target="_blank" rel="noopener" aria-label="Open our Instagram profile" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" class="dot"/></svg></a><a class="btn btn-pri" href="admissions.html">Enquiry Now</a></nav>
</div></header>`;

  var FTR = `
<footer><div class="wrap">
<a class="brand" href="index.html"><img alt="" src="logo.jpg"><span>St. S.S. Public School<small>तमसो मा ज्योतिर्गमय</small></span></a>
<div class="links"><a href="about.html">About</a><a href="academics.html">Academics</a><a href="admissions.html">Admissions</a><a href="gallery.html">Gallery</a><a href="contact.html">Contact</a><a class="social-link" href="https://www.instagram.com/st_ss_public_school/" target="_blank" rel="noopener" aria-label="Open our Instagram profile" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" class="dot"/></svg></a></div>
<p>© 2026 St. S.S. Public School. All rights reserved.</p>
</div></footer>
<a class="fab" href="https://wa.me/919116536047?text=Hello%20St.%20S.S.%20Public%20School" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
<svg viewBox="0 0 24 24"><path d="M12 2.5a9.5 9.5 0 00-8.1 14.4L2.5 21.5l4.7-1.2A9.5 9.5 0 1012 2.5zm0 2a7.5 7.5 0 11-3.9 13.9l-.4-.2-2.3.6.6-2.2-.3-.4A7.5 7.5 0 0112 4.5z"/><path d="M9 8.5c0 3.3 2.7 6 6 6l1.3-1.5-2-1-.9.8c-1-.4-1.9-1.3-2.3-2.3l.8-.9-1-2z"/></svg><span>Chat with us</span></a>`;

  document.getElementById('site-header').innerHTML = HDR;
  document.getElementById('site-footer').innerHTML = FTR;
  document.querySelectorAll('#nav a[href]').forEach(function (a) {
    if (a.getAttribute('href') === cur && !a.classList.contains('btn')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // ---------- illustrated fallbacks and representative stock photos ----------
  function svg(inner) { return '<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' + inner + '</svg>'; }
  var S = {};
  function windows(x, y, cols, rows, w, h, gx, gy, c) {
    var o = '';
    for (var r = 0; r < rows; r++) for (var i = 0; i < cols; i++)
      o += '<rect x="' + (x + i * gx) + '" y="' + (y + r * gy) + '" width="' + w + '" height="' + h + '" rx="2" fill="' + c + '"/>';
    return o;
  }
  S.campus = svg('<defs><linearGradient id="sk1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd3f0"/><stop offset="1" stop-color="#e6f4ef"/></linearGradient></defs><rect width="400" height="300" fill="url(#sk1)"/><circle cx="330" cy="60" r="28" fill="#f6dd5a"/><ellipse cx="90" cy="60" rx="38" ry="12" fill="#fff" opacity=".9"/><ellipse cx="120" cy="52" rx="26" ry="10" fill="#fff" opacity=".9"/><rect y="228" width="400" height="72" fill="#6fae7c"/><rect y="250" width="400" height="50" fill="#5b9a6a"/><rect x="70" y="120" width="260" height="110" fill="#e4602f"/><rect x="150" y="84" width="100" height="146" fill="#7a2330"/><polygon points="140,86 200,52 260,86" fill="#5b1a22"/><rect x="198" y="26" width="3" height="28" fill="#4a3b3d"/><polygon points="201,28 226,35 201,42" fill="#f0d94f"/><rect x="178" y="170" width="44" height="60" rx="4" fill="#3a1a1f"/>' + windows(84, 138, 3, 2, 26, 24, 34, 38, '#f7e7c8') + windows(266, 138, 2, 2, 26, 24, 34, 38, '#f7e7c8') + windows(166, 100, 4, 1, 16, 22, 22, 0, '#f7e7c8') + '<rect y="232" width="400" height="4" fill="#d9c9a8"/><circle cx="40" cy="214" r="26" fill="#2f6b4a"/><rect x="37" y="228" width="6" height="22" fill="#5a3b2a"/><circle cx="364" cy="210" r="30" fill="#3a7d57"/><rect x="361" y="228" width="6" height="22" fill="#5a3b2a"/>');
  S.classroom = svg('<rect width="400" height="300" fill="#f1e3c8"/><rect y="220" width="400" height="80" fill="#c9a77a"/><rect x="60" y="40" width="280" height="130" rx="6" fill="#2f6b4a" stroke="#7a4a2a" stroke-width="8"/><path d="M90 80h90M90 104h140M90 128h70" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".85"/><circle cx="290" cy="100" r="22" fill="none" stroke="#f0d94f" stroke-width="4"/><path d="M290 100v-14M290 100l10 6" stroke="#f0d94f" stroke-width="4" stroke-linecap="round"/><rect x="40" y="200" width="90" height="10" rx="3" fill="#7a4a2a"/><rect x="50" y="210" width="6" height="40" fill="#7a4a2a"/><rect x="114" y="210" width="6" height="40" fill="#7a4a2a"/><rect x="155" y="200" width="90" height="10" rx="3" fill="#7a4a2a"/><rect x="165" y="210" width="6" height="40" fill="#7a4a2a"/><rect x="229" y="210" width="6" height="40" fill="#7a4a2a"/><rect x="270" y="200" width="90" height="10" rx="3" fill="#7a4a2a"/><rect x="280" y="210" width="6" height="40" fill="#7a4a2a"/><rect x="344" y="210" width="6" height="40" fill="#7a4a2a"/><rect x="60" y="184" width="30" height="16" fill="#e4602f"/><rect x="175" y="184" width="30" height="16" fill="#1f2d6b"/><rect x="290" y="184" width="30" height="16" fill="#5b1a22"/>');
  S.ground = svg('<defs><linearGradient id="sk2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd0f2"/><stop offset="1" stop-color="#f6efc9"/></linearGradient></defs><rect width="400" height="300" fill="url(#sk2)"/><circle cx="70" cy="64" r="30" fill="#f6dd5a"/><ellipse cx="270" cy="70" rx="44" ry="13" fill="#fff"/><rect y="160" width="400" height="140" fill="#5fa86e"/><path d="M0 200h400M0 240h400" stroke="#4d935c" stroke-width="3"/><ellipse cx="200" cy="230" rx="150" ry="46" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/><path d="M60 200V150h50V200M300 200V150h50V200" fill="none" stroke="#fff" stroke-width="5"/><circle cx="200" cy="232" r="13" fill="#fff" stroke="#2b1519" stroke-width="2"/><path d="M200 219l6 8-3 9h-6l-3-9z" fill="#2b1519"/>');
  S.lab = svg('<rect width="400" height="300" fill="#dcebf3"/><rect y="200" width="400" height="100" fill="#8a6a4e"/><rect y="196" width="400" height="12" fill="#a98563"/><path d="M110 196v-70l-22-42h60l-22 42v70z" fill="#bfe8da" stroke="#2f6b4a" stroke-width="4" stroke-linejoin="round"/><path d="M96 150h28v46h-28z" fill="#2fa37a" opacity=".7"/><circle cx="215" cy="150" r="46" fill="#f4c9b8" stroke="#e4602f" stroke-width="4"/><rect x="204" y="86" width="22" height="20" fill="#e4602f"/><path d="M175 160a40 40 0 0080 0z" fill="#e4602f" opacity=".6"/><rect x="300" y="110" width="30" height="86" rx="6" fill="#cfe1f7" stroke="#1f2d6b" stroke-width="4"/><path d="M300 140h30M300 160h30M300 180h30" stroke="#1f2d6b" stroke-width="3"/><circle cx="60" cy="60" r="6" fill="#e4602f"/><circle cx="340" cy="60" r="5" fill="#1f2d6b"/><circle cx="310" cy="40" r="4" fill="#2f6b4a"/>');
  var bookCols = ['#e4602f', '#1f2d6b', '#5b1a22', '#2f6b4a', '#f0d94f', '#c94d20', '#4a6fd1'];
  function shelf(y) {
    var o = '<rect x="30" y="' + (y + 46) + '" width="340" height="8" rx="3" fill="#7a4a2a"/>', x = 40;
    for (var i = 0; i < 15; i++) {
      var w = 14 + (i * 7) % 12, h = 30 + (i * 11) % 18;
      o += '<rect x="' + x + '" y="' + (y + 46 - h) + '" width="' + w + '" height="' + h + '" rx="2" fill="' + bookCols[i % 7] + '"/>';
      x += w + 4;
    }
    return o;
  }
  S.library = svg('<rect width="400" height="300" fill="#f3e6cf"/>' + shelf(40) + shelf(120) + shelf(200) + '<rect x="20" y="30" width="360" height="250" fill="none" stroke="#7a4a2a" stroke-width="8" rx="4"/>');
  S.stage = svg('<defs><linearGradient id="cur" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5b1a22"/><stop offset=".5" stop-color="#8a2a35"/><stop offset="1" stop-color="#5b1a22"/></linearGradient></defs><rect width="400" height="300" fill="#2a1418"/><rect x="0" y="0" width="90" height="250" fill="url(#cur)"/><rect x="310" y="0" width="90" height="250" fill="url(#cur)"/><rect x="0" y="0" width="400" height="34" fill="#5b1a22"/><rect y="250" width="400" height="50" fill="#a98563"/><path d="M200 60l9 20 22 2-17 14 5 22-19-12-19 12 5-22-17-14 22-2z" fill="#f0d94f"/><circle cx="130" cy="210" r="14" fill="#e4602f"/><rect x="118" y="224" width="24" height="26" rx="6" fill="#e4602f"/><circle cx="200" cy="205" r="14" fill="#9cc7a8"/><rect x="188" y="219" width="24" height="31" rx="6" fill="#9cc7a8"/><circle cx="270" cy="210" r="14" fill="#4a6fd1"/><rect x="258" y="224" width="24" height="26" rx="6" fill="#4a6fd1"/>');
  S.art = svg('<rect width="400" height="300" fill="#fbeedc"/><path d="M60 230c10-90 40-130 90-130s50 70 20 110z" fill="#e4602f" opacity=".9"/><circle cx="250" cy="110" r="54" fill="#1f2d6b" opacity=".92"/><circle cx="250" cy="110" r="26" fill="#f0d94f"/><path d="M200 240c40-70 110-70 160 0z" fill="#2f6b4a"/><path d="M40 60l30 20M70 50l-10 34M340 220l22-20" stroke="#5b1a22" stroke-width="5" stroke-linecap="round"/>');
  S.kids = svg('<defs><linearGradient id="sk3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f5"/><stop offset="1" stop-color="#fff6d8"/></linearGradient></defs><rect width="400" height="300" fill="url(#sk3)"/><rect y="220" width="400" height="80" fill="#79b887"/><rect x="40" y="80" width="14" height="140" fill="#e4602f"/><rect x="346" y="80" width="14" height="140" fill="#e4602f"/><path d="M47 84Q200 190 353 84" fill="none" stroke="#5b1a22" stroke-width="5"/><path d="M200 150v52" stroke="#5b1a22" stroke-width="4"/><rect x="180" y="200" width="40" height="8" rx="4" fill="#f0d94f"/><circle cx="110" cy="190" r="13" fill="#f2b38e"/><rect x="98" y="203" width="24" height="32" rx="8" fill="#1f2d6b"/><circle cx="300" cy="190" r="13" fill="#e8a17a"/><rect x="288" y="203" width="24" height="32" rx="8" fill="#e4602f"/><circle cx="60" cy="50" r="22" fill="#f6dd5a"/>');

  var photoByScene = {
    campus: 'students-classroom.jpg',
    classroom: 'students-classroom.jpg',
    ground: 'sports-ground.jpg',
    lab: 'students-learning.jpg',
    library: 'students-learning.jpg',
    stage: 'annual-function.jpg',
    art: 'students-activity.jpg',
    kids: 'students-learning.jpg'
  };

  // Fills every element that has data-scene="name" with a photo when available.
  document.querySelectorAll('[data-scene]').forEach(function (el) {
    var n = el.getAttribute('data-scene');
    if (S[n]) el.innerHTML = S[n];
    if (!photoByScene[n]) return;
    var im = new Image();
    im.alt = el.getAttribute('data-alt') || 'Students learning together (representative stock photo)';
    im.onload = function () { el.innerHTML = ''; el.appendChild(im); };
    im.src = photoByScene[n];
  });

  // ---------- mobile menu ----------
  var mb = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  if (mb) {
    mb.addEventListener('click', function () {
      var o = nav.classList.toggle('open');
      mb.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
  }

  // ---------- enquiry form: builds a WhatsApp message ----------
  var f = document.getElementById('enqForm');
  if (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (i) { var x = document.getElementById(i); return x ? x.value.trim() : ''; };
      var p = v('parent'), ch = v('child'), cl = v('cls'), ph = v('phone'), m = v('msg');
      var hint = document.getElementById('hint'), wa = document.getElementById('waSend'), res = document.getElementById('result');
      res.hidden = false;
      if (!p || !ph) { hint.textContent = 'Please add your name and phone number first.'; wa.hidden = true; return; }
      wa.hidden = false;
      var t = 'Enquiry for St. S.S. Public School\nParent: ' + p + (ch ? '\nChild: ' + ch : '') + (cl ? '\nClass: ' + cl : '') + '\nPhone: ' + ph + (m ? '\nMessage: ' + m : '');
      wa.href = 'https://wa.me/919116536047?text=' + encodeURIComponent(t);
      hint.textContent = 'Tap the green button to open WhatsApp with your enquiry.';
    });
  }

  // ---------- gallery filter ----------
  var fl = document.getElementById('filters');
  if (fl) {
    fl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var k = b.getAttribute('data-k');
      fl.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      document.querySelectorAll('.tile').forEach(function (t) { t.hidden = !(k === 'all' || t.getAttribute('data-k') === k); });
    });
  }
})();