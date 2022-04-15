fetch("https://reqres.in/api/users?page=2")
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((datos) => {

    });

let nuevoUsuario = {
    name: "EStefani Davila",
    jobs: "Estudiante",
};

let cabecera = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoUsuario),
};

fetch("https://reqres.in/api/users")
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((usuarioCreado) => {
        console.table(usuarioCreado);
    })
    .catch((error) => {
        console.log(error);
    });