var hours = document.getElementById("hour")
var minute = document.getElementById("min")
var second = document.getElementById("sec")
var msecond = document.getElementById("mSec")



var hour = 0
var min = 0
var sec = 0
var mSec = 0


var inter;


function SWatch() {
    mSec++
    msecond.innerHTML = mSec
    if (mSec == 100) {
        sec++
        second.innerHTML = sec
        mSec = 0
    } else if (sec == 60) {
        min++
        minute.innerHTML = min
        sec = 0
    } else if (min == 60) {
        hour++
        hours.innerHTML = hour
        min = 0
    }
}

function start() {
    var StopBtn = document.getElementById("StopBtn")
    var SarttBtn = document.getElementById("SarttBtn")
    var ResetBtn = document.getElementById("ResetBtn")
    inter = setInterval(SWatch, 10)
    SarttBtn.disabled = true
    StopBtn.disabled = false
    ResetBtn.disabled = false
}

function stop() {
    var SarttBtn = document.getElementById("SarttBtn")
    var StopBtn = document.getElementById("StopBtn")
    var ResetBtn = document.getElementById("ResetBtn")

    clearInterval(inter)
    SarttBtn.disabled = false
    StopBtn.disabled = true
    ResetBtn.disabled = false

}

function reset() {
    var StopBtn = document.getElementById("StopBtn")
    var SarttBtn = document.getElementById("SarttBtn")
    var ResetBtn = document.getElementById("ResetBtn")
    SarttBtn.disabled = false
    StopBtn.disabled = false
    ResetBtn.disabled = true
    clearInterval(inter)
    msecond.innerHTML = 0
    second.innerHTML = 0
    minute.innerHTML = 0
    hours.innerHTML = 0



    hour = 0
    min = 0
    sec = 0
    mSec = 0

}