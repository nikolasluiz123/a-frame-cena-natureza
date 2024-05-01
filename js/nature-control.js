function generateNatureComponents(sphere) {
    configureEnvironment();
    generateTrees();
}

function configureEnvironment() {
    let element = document.getElementById("env");
    let environmentAttribute = element.getAttribute("environment");

    environmentAttribute.active = true;
    environmentAttribute.preset = "default";
    environmentAttribute.seed = "1";
    environmentAttribute.skyType = "atmosphere";
    environmentAttribute.skyColor = "#24b59f";
    environmentAttribute.horizonColor = "#eff9b7"
    environmentAttribute.lighting = "distant";
    environmentAttribute.shadow = "true";
    environmentAttribute.shadowSize = "10";
    environmentAttribute.lightPosition = { "x": 0, "y": 1, "z": -1 };
    environmentAttribute.fog = "0.78";
    environmentAttribute.flatShading= "false";
    environmentAttribute.playArea = "1"
    environmentAttribute.ground = "noise";
    environmentAttribute.groundYScale = "4"
    environmentAttribute.groundTexture = "walkernoise";
    environmentAttribute.groundColor = "#3F8C5B";
    environmentAttribute.groundColor2 = "#52B475";
    environmentAttribute.dressing = "none";
    environmentAttribute.dressingAmount = "10"
    environmentAttribute.dressingColor = "#795449";
    environmentAttribute.dressingScale = "1";
    environmentAttribute.dressingVariance = { "x": 0, "y": 0, "z": 0 };
    environmentAttribute.dressingUniformScale = "true";
    environmentAttribute.dressingOnPlayArea = "0";
    environmentAttribute.grid = "none";
    environmentAttribute.gridColor = "#ccc";

    element.setAttribute("environment", environmentAttribute)
}

function generateTrees() {
    const assets = document.querySelector('a-assets').getElementsByTagName('a-asset-items');
    const treeModels = Array.from(assets).filter((a) => a.id.startsWith("treeModel"));

    var randomPosition1 = Math.floor(Math.random() * treeModels.length);
    var randomPosition2 = Math.floor(Math.random() * treeModels.length);

    const treeModel1 = treeModels[randomPosition1];
    const treeModel2 = treeModels[randomPosition2];

    const spherePosition = sphere.getAttribute("position")

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {

        }
    }
}

export { generateNatureComponents };