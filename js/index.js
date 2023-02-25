let url = 'https://grg80.github.io/index.json';
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("myHeader").innerHTML = data.nombre
    document.getElementById("progleng1").innerHTML = data.lenguajes
    document.getElementById("frontend1").innerHTML = data.frontend
    document.getElementById("backend1").innerHTML = data.backend
    document.getElementById("Lenguaje").innerHTML = data.Lenguaje
    document.getElementById("hobbies").innerHTML = data.Hobbies
    document.getElementById("email").innerHTML = data.email
    document.getElementById("experiencia").innerHTML = data.Experience.puesto
    document.getElementById("proyectos").innerHTML = data.Experience.proyectos[0]
    document.getElementById("resumen").innerHTML = data.educacion
    document.getElementById("proyectoprincipal").innerHTML = data.ProyectoPrincipal
    document.getElementById("proyectosecundario").innerHTML = data.ProyectoSecundario

  }
  )
  document.getElementById('boton1').onclick = function(){
    alert('Diseñamos una arquitectura con puntos de conversión claros y fáciles, para captar bases de datos con los visitantes que llegan al sitio web. Del mismo modo, con este diseño profesional y a través de Google Analytics, generamos la manera de identificar como están funcionando las secciones por cada segmento al que nos dirigimos.');
}
document.getElementById('boton2').onclick = function(){
  alert('El sitio web fue indexado (conectado o reportado) a Google para que este empezara a considerarlo como resultado de búsqueda para los usuarios. También, se incorporó el site map y el fichero Robots.txt, con este mismo propósito de posicionamiento y rastreo en los motores de búsqueda');
}