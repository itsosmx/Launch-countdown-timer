var LaunchDate = new Date("Jan 5, 2025 15:37:25").getTime();



var Update = setInterval(function () {
    var now = new Date().getTime();
    var Deff = LaunchDate - now;
    var OneDay = (1000 * 60 * 60 * 24)
    var days = Math.floor(Deff / OneDay)
    var hours = Math.floor((Deff % OneDay) / (1000 * 60 * 60))
    var minutes = Math.floor((Deff % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((Deff % (1000 * 60)) / 1000)


    var daysElm = document.getElementById("days")
    daysElm.innerHTML = days

    var hoursElm = document.getElementById("hours")
    hoursElm.innerHTML = hours
    
    var minutesElm = document.getElementById("minutes")
    minutesElm.innerHTML = minutes
    
    var secondsElm = document.getElementById("seconds")
    secondsElm.innerHTML = seconds


    if (Deff < 0) {
        clearInterval(Update)
    }

})
