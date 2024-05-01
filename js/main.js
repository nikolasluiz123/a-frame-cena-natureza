import * as hands from "./hands-control.js"
import * as climate from "./climate-control.js"

function init() {
    hands.addHandsListeners();
    climate.showDay();
}

window.addEventListener('DOMContentLoaded', init);