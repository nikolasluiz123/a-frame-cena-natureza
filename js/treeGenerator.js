AFRAME.registerComponent('tree-generator', {
    schema:{
        posX:   {type: 'int', default: -55}     // Posição X fixa inicial
    ,   posZ:   {type: 'int', default: -50}     // Posição Z fixa inicial
    ,   posAltX: {type: 'int', default: 0}      // Posição para alteração de distancia entre as arvores
    ,   posAltY: {type: 'int', default: 0}      // Posição para alteração de distancia entre as arvores
    ,   columns:  {type: 'int', default: 3}     // Quantidade de colunas
    ,   quantityTree: {type: 'int', default: 5} // Quantidade de arvores em cada colunas
    },

    init: function () {
        var sceneEl = this.el;
        var treeTemplate = document.querySelector('#tree-template');

        var backupPosX = this.data.posX;

        for (var i = 0; i < this.data.columns; i++) {
            for (var j = 0; j < this.data.quantityTree; j++){

                var scale = Math.random() * 0.5 + 0.5;
                
                this.data.posX += 5 + this.data.posAltX; // Cálculo para distanciar as árvores das outras na linha X

                var tree = treeTemplate.cloneNode(true);
                tree.setAttribute('position', { x: this.data.posX + (Math.random() * 3), y: 0, z: this.data.posZ + (Math.random() * 3)});
                tree.setAttribute('scale', { x: scale, y: scale, z: scale });

                sceneEl.appendChild(tree);

            }

            this.data.posX = backupPosX // Cálculo para o reset da linha x, voltando para a linha inicial
            this.data.posZ += 10 + this.data.posAltY // Cálculo para pular na próxima coluna   
            
        }
    }
});
