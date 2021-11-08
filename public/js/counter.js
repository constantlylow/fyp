function startCountdown(seconds) {
  let counter = seconds;
  timer.style.display = "flex";

  const interval = setInterval(() => {
    counter--;
    document.getElementById("countup").innerHTML = counter + " sec";
    localStorage.setItem("timer",counter);
    var counting = localStorage.getItem("timer");
    console.log(counting);

    if (counter <= 0) {
      clearInterval(interval);
      console.log("Ding!");
      window.location.href = "game1ResultLower.html";
    }
  }, 1000);
}

startCountdown(60);
