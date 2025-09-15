function updateTime() {
    const now = new Date();
    const options = {
      timeZone: "America/Los_Angeles",
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    };
  
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const parts = formatter.formatToParts(now);
    const formatted = `${parts[0].value}/${parts[2].value}/${parts[4].value} ${parts[6].value}:${parts[8].value}${parts[10].value.toLowerCase()} SF`;
  
    document.getElementById("sf-time").textContent = formatted;
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  
  //  Delay animation
  window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
  
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
  
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 800); // match transition time
    }, 3000); // ⬅️ delay before fade-out (5 seconds)
  });
  