function changeColor() {
    let colors = ["#711919", "#712f19", "#714519", "#715b19", "#717119", "#5b7119"]	
    let random = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[random];
}

function displayDate(){
    document.getElementById("myDiv").innerHTML = Date();
}

document.getElementById("myTime"). addEventListener("click", displayTime); 
function displayTime(){
    let currentDate = new Date();
    let hours = currentDate.getHours(); 
    let am = true;
    if (hours > 12){
        am = false; 
        hours -= 12;
    }
    let currentTime = hours + ":" + currentDate.getMinutes();

    if (am){
        currentTime += "AM"; 
  } else {
    currentTime += "PM";
  }
  document.getElementById("miDiv").innerHTML = currentTime; 
}