document.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var clusterSize = 100; // Number of pixels in each cluster
  
    for (var i = 0; i < clusterSize; i++) {
      var staticPixel = document.createElement('div');
      staticPixel.classList.add('static-pixel');
  
      // Randomize the pixel position within a larger range
      var randomX = x + Math.random() * 400 - 200;
      var randomY = y + Math.random() * 400 - 200;
      staticPixel.style.top = randomY + 'px';
      staticPixel.style.left = randomX + 'px';
  
      document.body.appendChild(staticPixel);
  
      setTimeout(function() {
        staticPixel.remove();
      }, 5000);
    }
  });
  