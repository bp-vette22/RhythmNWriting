var c = document.getElementById('test-area');
var cx = c.getContext('2d');
var mousedown = false;
var oldx = null;
var oldy = null;
var pixels = null;
var letterpixels = null;
function setupCanvas() {
  c.height = 480;
  c.width = 320;
  cx.lineWidth = 20;
  cx.lineCap = 'round';
  cx.strokeStyle = 'rgb(255, 0, 50)';
  cx.font = 'bold 200px Helvetica';
  cx.fillStyle = 'rgb(0, 0, 0)';
  cx.textBaseline = 'middle';
  cx.fillText('vti', 10, 30 );
  pixels = cx.getImageData(0, 0, c.width, c.height);
  letterpixels = getpixelamount (0, 0, 0);
  cx
}


function pixelthreshold() {
  if (getpixelamount(0,0,0) / letterpixels > 0.35) {
   alert('you got it!');
  }
};
function onmousedown(ev) {
  mousedown = true;
  ev.preventDefault();
};
function onmouseup(ev) {
  mousedown = false;
  pixelthreshold();
  ev.preventDefault();
};
function onmousemove(ev) {
  var x = ev.clientX;
  var y = ev.clientY;
  if (mousedown) {
    paint(x, y);
  }
};
c.addEventListener('mousedown', onmousedown, false);
c.addEventListener('mouseup', onmouseup, false);
c.addEventListener('mousemove', onmousemove, false);
setupCanvas();