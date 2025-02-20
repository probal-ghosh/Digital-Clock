function UpdateClock(){

    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    const meridian = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minute = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minute}:${second}:${meridian}`;



    document.getElementById('clock').textContent = timestring
}


UpdateClock()
setInterval(UpdateClock,1000)