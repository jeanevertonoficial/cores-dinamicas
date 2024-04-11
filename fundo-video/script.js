const video = document.getElementById('video');
const colorThief = new ColorThief();

video.addEventListener('loadeddata', function() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dominantColor = colorThief.getColor(canvas);
    const rgb = `rgb(${dominantColor.join(', ')})`;
    document.body.style.backgroundColor = rgb;
  }, 1000);
});
