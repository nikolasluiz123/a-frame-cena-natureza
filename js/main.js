import * as hands from "./hands-control.js"
import * as climate from "./climate-control.js"
import * as nature from "./nature-control.js"

function init() {
    hands.addHandsListeners();
    climate.showDay();
    nature.generateTrees();
}

window.addEventListener('DOMContentLoaded', init);