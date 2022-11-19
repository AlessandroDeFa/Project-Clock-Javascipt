function setHour(){
  let data = new Date();
  let hour = data.getHours();
  let minutes = data.getMinutes();
  let seconds = data.getSeconds();


  if(hour < 10){
    hour = "0" + hour;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  const hourDiv =  document.querySelector('.content-clock');
  hourDiv.innerHTML = hour + ':' + minutes + ':' + seconds;

}

setInterval(setHour, 1000);