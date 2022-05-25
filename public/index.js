const getData = () => {
    var name = document.getElementById("nombre").value;
    var date = document.getElementById("fecha").value;
    var color = document.getElementById("color").value;
    var cal = document.getElementById("calificacion").value;
    var tel = document.getElementById("telefono").value;
    var emaill = document.getElementById("email").value;
    var file = document.getElementById("archivo").value;
    var language = document.getElementById("lenguaje").value;
    // console.log(name)
    // console.log(calificacion) 
    // console.log(archivo)
    // console.log(color)
    // console.log(email)
    // console.log(date)
    // console.log(lenguaje)
    // console.log(telefono)

    const data = { name, date, color, cal, tel, emaill, file, language };
    // console.log(data)

    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch('/user', options)
        .then(response => response.json()) 
        .then(response => console.log(response)) 
}