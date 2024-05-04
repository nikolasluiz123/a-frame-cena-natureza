
const LUA_RADIUS = 80; // Raio da trajetória do sol
    const SPEED = 0.01; // Velocidade angular
    let theta = 0; // Ângulo inicial
    const lua = document.getElementById("lua");

    setInterval(() => {
        const x = LUA_RADIUS * Math.cos(theta); // Calcula a posição X
        const y = LUA_RADIUS * Math.sin(theta) ; // Calcula a posição Y para uma órbita completa
        const z = 0; // Posição fixa em Z

        lua.setAttribute("position", `${x} ${y} ${z}`);
        theta += SPEED; // Incrementa o ângulo

        // Se o ângulo passar de 2π, reinicia para 0
        if (theta > 2 * Math.PI) {
            theta = 0;
        }
    }, 10); // Intervalo de atualização de 10 milissegundos