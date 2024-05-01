import * as climate from "./climate-control.js"

function addHandsListeners() {
    const elements = Array.from(document.getElementsByClassName('grabbable-obj'));

    elements.forEach((element) => {
        element.addEventListener('grab-start', (e) => {

            if(e.target.id == "snowSphere") {
                climate.showSnow();
            } else if(e.target.id == "rainSphere") {
                climate.showRain();
            } else if(e.target.id == "dustSphere") {
                climate.showDust();
            } else if(e.target.id == "daySphere") {
                climate.stopSphereSound("nightSphere")
                climate.showGradativeDay()
            } else if(e.target.id == "nightSphere") {
                climate.showGradativeNight()
            }
        });

        element.addEventListener('grab-end', (e) => {
            if(e.target.id == "snowSphere") {
                climate.hideSnow();
            } else if(e.target.id == "rainSphere") {
                climate.hideRain();
            } else if(e.target.id == "dustSphere") {
                climate.hideDust();
            }
        });
    });
}

export { addHandsListeners };