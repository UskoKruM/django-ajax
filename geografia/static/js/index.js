let ciudades = [];

const listarCiudades = async (idPais) => {
    try {
        const response = await fetch(`./ciudades/${idPais}`);
        const data = await response.json();

        if (data.message === "Success") {
            ciudades = data.ciudades;
            let opciones = ``;
            ciudades.forEach((ciudad) => {
                opciones += `<option value='${ciudad.id}'>${ciudad.nombre}</option>`;
            });
            cboCiudad.innerHTML = opciones;
            mostrarAlcalde(ciudades[0].id);
        } else {
            alert("Países no encontrados...");
        }
    } catch (error) {
        console.log(error);
    }
};

const listarPaises = async () => {
    try {
        const response = await fetch("./paises");
        const data = await response.json();

        if (data.message === "Success") {
            let opciones = ``;
            data.paises.forEach((pais) => {
                opciones += `<option value='${pais.id}'>${pais.nombre}</option>`;
            });
            cboPais.innerHTML = opciones;
            listarCiudades(data.paises[0].id);
        } else {
            alert("Países no encontrados...");
        }
    } catch (error) {
        console.log(error);
    }
};

const mostrarAlcalde = (idCiudad) => {
    let ciudadEncontrada = ciudades.filter((ciudad) => ciudad.id == idCiudad)[0];
    let alcalde = ciudadEncontrada.alcalde;
    txtAlcalde.innerText = `Alcalde: ${alcalde}`;
};

const cargaInicial = async () => {
    await listarPaises();

    cboPais.addEventListener("change", (event) => {
        listarCiudades(event.target.value);
    });

    cboCiudad.addEventListener("change", (event) => {
        mostrarAlcalde(event.target.value);
    });
};

window.addEventListener("load", async () => {
    await cargaInicial();
});
