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
    const averageColor = (dominantColor[0] + dominantColor[1] + dominantColor[2]) / 3;

    let shadowColor;
    if (averageColor < 128) {
      shadowColor = 'rgba(255, 255, 255, 0.5)';
    } else {
      shadowColor = 'rgba(0, 0, 0, 0.5)';
    }

    video.style.boxShadow = `0 0 10px ${shadowColor}, 0 0 20px ${shadowColor}, 0 0 30px ${shadowColor}`;
  }, 1000); // Atualize a cor da sombra a cada segundo
});
