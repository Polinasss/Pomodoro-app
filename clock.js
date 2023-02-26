const clock = document.getElementById('clock');
const p = document.createElement('p');
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    clock.textContent = currentTime;

    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-GB', options);
    p.textContent = currentDate;
    clock.append(p);
    return setTimeout(showTime, 1000);
}
showTime();