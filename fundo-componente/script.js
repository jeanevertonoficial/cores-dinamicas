document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', function() {
      const computedStyle = getComputedStyle(box);
      const backgroundColor = computedStyle.backgroundColor;
      const rgb = backgroundColor.match(/\d+/g);
      const averageColor = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3;
  
      console.log(backgroundColor)
      let shadowColor;
      if (averageColor < 128) {
        shadowColor = 'rgba(255, 255, 255, 0.5)';
      } else {
        shadowColor = 'rgba(0, 0, 0, 0.5)';
      }
  
      box.style.boxShadow = `0 0 10px ${backgroundColor}, 0 0 20px ${backgroundColor}, 0 0 30px ${backgroundColor}`;
    });
  
    box.addEventListener('mouseleave', function() {
      box.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
  });
  