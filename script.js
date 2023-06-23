setInterval(function() {
    var staticPixel = document.createElement('div');
    staticPixel.classList.add('static-pixel');
    staticPixel.style.setProperty('--translate-x', Math.random() * window.innerWidth + 'px');
    staticPixel.style.setProperty('--translate-y', Math.random() * window.innerHeight + 'px');
  
    document.body.appendChild(staticPixel);
  
    setTimeout(function() {
      staticPixel.remove();
    }, 10000);
  }, 200);
  