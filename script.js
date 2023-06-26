const pixelCount = 5; // number of pixels to orbit around the image
const radius = 65; // radius of the orbit
const speed = 0.02; // speed of the orbit
let pixels = [];
let angles = Array(pixelCount).fill(0);

// get the image position
const profilePic = document.getElementById("profilePic");

// create the pixels
for (let i = 0; i < pixelCount; i++) {
  let staticPixel = document.createElement("div");
  let baseColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--base-color"
  );

  staticPixel.classList.add("static-pixel");
  staticPixel.style.backgroundColor = baseColor;
  document.body.appendChild(staticPixel);
  pixels.push(staticPixel);
}

// update the image position within the setInterval function
setInterval(function () {
  // Get updated position of the image.
  const rect = profilePic.getBoundingClientRect();
  const adjustmentX = window.innerWidth / 205; // adjust these values as needed
  const adjustmentY = window.innerHeight / 40; // adjust these values as needed
  const centerX = rect.left + rect.width / 2 - adjustmentX;
  const centerY = rect.top + rect.height / 2 - adjustmentY;

  for (let i = 0; i < pixelCount; i++) {
    let angle = angles[i];
    let x = centerX + radius * Math.cos(angle * (i + 1));
    let y = centerY + radius * Math.sin(angle * (i + 1));

    let scale = Math.sin(angle) * 0.2 + 0.3;
    let opacity = Math.sin(angle) * 0.1 + 0.2;

    pixels[i].style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    pixels[i].style.opacity = opacity;
    angles[i] += speed;
  }
}, 20);
