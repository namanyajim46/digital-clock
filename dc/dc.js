const hourEl = document.getElementById("hour")
const minEl = document.getElementById("min")
const secEl = document.getElementById("sec")
const ampmEl = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = new Date().getHours()
    if (h > 12) {
        h = h - 12
        ampm = "PM"
    } else if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (h < 10) {
        h = "0" + h
    }
    hourEl.textContent = h
    minEl.textContent = m
    secEl.textContent = s
    ampmEl.textContent = ampm
    setTimeout(() => {
        updateClock()
    }, 1000)
}
updateClock()