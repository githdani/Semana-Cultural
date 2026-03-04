let actividades = [
  {
    titulo: "Taller de creatividad digital",
    dia: "Lunes",
    fecha: "2026-03-16",
    horaInicio: "09:00",
    horaFin: "11:00",
    lugar: "Aula de Informática 1",
    tipo: "Taller",
    responsable: "Departamento de Tecnología",
    requiereInscripcion: true,
    plazas: 20,
    descripcion: "Introducción a herramientas digitales para crear contenido creativo.",
    publico: "3º y 4º ESO",
    observaciones: "Traer auriculares"
  },
  {
    titulo: "Charla sobre orientación profesional",
    dia: "Lunes",
    fecha: "2026-03-16",
    horaInicio: "12:00",
    horaFin: "13:30",
    lugar: "Salón de Actos",
    tipo: "Charla",
    responsable: "Departamento de Orientación",
    requiereInscripcion: false,
    plazas: null,
    descripcion: "Consejos sobre salidas académicas y profesionales.",
    publico: "4º ESO y Bachillerato",
    observaciones: "Se ruega puntualidad"
  },
  {
    titulo: "Concurso de fotografía",
    dia: "Martes",
    fecha: "2026-03-17",
    horaInicio: "10:00",
    horaFin: "14:00",
    lugar: "Hall del instituto",
    tipo: "Concurso",
    responsable: "Departamento de Plástica",
    requiereInscripcion: true,
    plazas: 30,
    descripcion: "Concurso de fotografía con temática cultural.",
    publico: "Todos los cursos",
    observaciones: "Las fotos deben ser originales"
  },
  {
    titulo: "Exposición de trabajos artísticos",
    dia: "Martes",
    fecha: "2026-03-17",
    horaInicio: "09:00",
    horaFin: "14:00",
    lugar: "Biblioteca",
    tipo: "Exposición",
    responsable: "Departamento de Artes",
    requiereInscripcion: false,
    plazas: null,
    descripcion: "Muestra de dibujos, pinturas y esculturas del alumnado.",
    publico: "Toda la comunidad educativa",
    observaciones: ""
  },
  {
    titulo: "Taller de robótica básica",
    dia: "Miércoles",
    fecha: "2026-03-18",
    horaInicio: "09:30",
    horaFin: "11:30",
    lugar: "Aula de Tecnología",
    tipo: "Taller",
    responsable: "Profesor de Tecnología",
    requiereInscripcion: true,
    plazas: 15,
    descripcion: "Introducción a la robótica educativa.",
    publico: "1º y 2º ESO",
    observaciones: "No se requieren conocimientos previos"
  },
  {
    titulo: "Proyección de cortometrajes",
    dia: "Miércoles",
    fecha: "2026-03-18",
    horaInicio: "12:00",
    horaFin: "13:30",
    lugar: "Salón de Actos",
    tipo: "Proyección",
    responsable: "Departamento de Lengua",
    requiereInscripcion: false,
    plazas: null,
    descripcion: "Selección de cortos con temática social.",
    publico: "3º ESO en adelante",
    observaciones: "Se apagará el móvil durante la proyección"
  },
  {
    titulo: "Feria de ciencias",
    dia: "Jueves",
    fecha: "2026-03-19",
    horaInicio: "10:00",
    horaFin: "13:00",
    lugar: "Patio",
    tipo: "Feria",
    responsable: "Departamento de Ciencias",
    requiereInscripcion: false,
    plazas: null,
    descripcion: "Experimentos y demostraciones científicas.",
    publico: "Todos los cursos",
    observaciones: "Actividad al aire libre"
  },
  {
    titulo: "Charla sobre igualdad y convivencia",
    dia: "Jueves",
    fecha: "2026-03-19",
    horaInicio: "12:30",
    horaFin: "14:00",
    lugar: "Salón de Actos",
    tipo: "Charla",
    responsable: "Invitado externo",
    requiereInscripcion: false,
    plazas: null,
    descripcion: "Reflexión sobre valores de respeto e igualdad.",
    publico: "ESO y Bachillerato",
    observaciones: ""
  },
  {
    titulo: "Actividad deportiva: torneo de fútbol",
    dia: "Viernes",
    fecha: "2026-03-20",
    horaInicio: "09:00",
    horaFin: "13:00",
    lugar: "Pistas deportivas",
    tipo: "Actividad deportiva",
    responsable: "Departamento de Educación Física",
    requiereInscripcion: true,
    plazas: 40,
    descripcion: "Torneo amistoso entre clases.",
    publico: "ESO",
    observaciones: "Traer ropa deportiva"
  },
  {
    titulo: "Taller de escritura creativa",
    dia: "Viernes",
    fecha: "2026-03-20",
    horaInicio: "11:30",
    horaFin: "13:00",
    lugar: "Biblioteca",
    tipo: "Taller",
    responsable: "Departamento de Lengua",
    requiereInscripcion: true,
    plazas: 25,
    descripcion: "Ejercicios prácticos para mejorar la creatividad escrita.",
    publico: "3º ESO y Bachillerato",
    observaciones: "Traer cuaderno"
  },
  {
    titulo: "Exposición histórica del instituto",
    dia: "Sábado",
    fecha: "2026-03-21",
    horaInicio: "10:00",
    horaFin: "13:00",
    lugar: "Hall principal",
    tipo: "Exposición",
    responsable: "Departamento de Geografía e Historia",
    requiereInscripcion: false,
    plazas: null,
    descripcion: "Recorrido por la historia del centro.",
    publico: "Familias y alumnado",
    observaciones: ""
  },
  {
    titulo: "Feria del libro",
    dia: "Sábado",
    fecha: "2026-03-21",
    horaInicio: "11:00",
    horaFin: "14:00",
    lugar: "Patio cubierto",
    tipo: "Feria",
    responsable: "Departamento de Lengua",
    requiereInscripcion: false,
    plazas: null,
    descripcion: "Venta e intercambio de libros.",
    publico: "Todos los públicos",
    observaciones: "Pago en efectivo"
  },
  {
    titulo: "Taller de mindfulness",
    dia: "Domingo",
    fecha: "2026-03-22",
    horaInicio: "10:00",
    horaFin: "11:30",
    lugar: "Aula Multiusos",
    tipo: "Taller",
    responsable: "Orientadora del centro",
    requiereInscripcion: true,
    plazas: 20,
    descripcion: "Técnicas básicas de relajación y concentración.",
    publico: "ESO y Bachillerato",
    observaciones: "Ropa cómoda"
  },
  {
    titulo: "Concierto de música escolar",
    dia: "Domingo",
    fecha: "2026-03-22",
    horaInicio: "12:00",
    horaFin: "13:30",
    lugar: "Salón de Actos",
    tipo: "Actuación",
    responsable: "Departamento de Música",
    requiereInscripcion: false,
    plazas: null,
    descripcion: "Actuaciones musicales del alumnado.",
    publico: "Toda la comunidad educativa",
    observaciones: ""
  },
  {
    titulo: "Exposición permanente de proyectos",
    dia: "Toda la semana",
    fecha: "2026-03-16",
    horaInicio: "09:00",
    horaFin: "14:00",
    lugar: "Pasillos del centro",
    tipo: "Exposición",
    responsable: "Varios departamentos",
    requiereInscripcion: false,
    plazas: null,
    descripcion: "Proyectos destacados realizados durante el curso.",
    publico: "Todos los públicos",
    observaciones: ""
  }
]


let contenedorDias = document.getElementById("contenedorDias")

let filtroDia = document.getElementById("filtroDia")
let filtroTipo = document.getElementById("filtroTipo")
let buscador = document.getElementById("buscador")
let btnLimpiar = document.getElementById("btnLimpiar")

let toggleModo = document.getElementById("toggleModo")


let ordenDias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
  "Toda la semana"
]


function renderizarActividades(listaActividades) 
{

  contenedorDias.innerHTML = ""
  ordenDias.forEach(dia => {

    let actividadesDelDia = listaActividades.filter(act => act.dia === dia)

    if (actividadesDelDia.length === 0) return

    let bloqueDia = document.createElement("section")
    bloqueDia.classList.add("bloque-dia");

    let tituloDia = document.createElement("h2")
    tituloDia.textContent = dia

    bloqueDia.appendChild(tituloDia)

    let contenedorTarjetas = document.createElement("div")
    contenedorTarjetas.classList.add("contenedor-tarjetas")

    actividadesDelDia.forEach(act => {

      let tarjeta = document.createElement("div")
      tarjeta.classList.add("tarjeta")

      tarjeta.innerHTML = `
        <h3>${act.titulo}</h3>
        <p><strong>${act.horaInicio} - ${act.horaFin}</strong> | ${act.lugar}</p>
        <p>${act.descripcion}</p>
        <p><strong>Responsable:</strong> ${act.responsable}</p>

        <div class="badges">
            <span class="badge badge-tipo">${act.tipo}</span>
            <span class="badge badge-publico">${act.publico}</span>
            <span class="badge badge-acceso">
            ${act.requiereInscripcion ? "Inscripción" : "Acceso libre"}
            </span>
            ${act.plazas ? `<span class="badge badge-plazas">${act.plazas} plazas</span>` : ""}
        </div>
        `


      contenedorTarjetas.appendChild(tarjeta)
    })

    bloqueDia.appendChild(contenedorTarjetas)
    contenedorDias.appendChild(bloqueDia)
  })
}

function aplicarFiltros() 
{
    let resultado = actividades;

    let valorDia = filtroDia.value;
    let valorTipo = filtroTipo.value;
    let textoBusqueda = buscador.value.toLowerCase();

    if (valorDia !== "Todos") 
    {
        resultado = resultado.filter(act => act.dia === valorDia);
    }

    // Filtro por tipo
    if (valorTipo !== "Todos") {
        resultado = resultado.filter(act => act.tipo === valorTipo);
    }

    //  Buscador de texto
    if (textoBusqueda !== "") {
        resultado = resultado.filter(act =>
        act.titulo.toLowerCase().includes(textoBusqueda) ||
        act.lugar.toLowerCase().includes(textoBusqueda) ||
        act.tipo.toLowerCase().includes(textoBusqueda) ||
        act.responsable.toLowerCase().includes(textoBusqueda) ||
        act.descripcion.toLowerCase().includes(textoBusqueda) ||
        act.publico.toLowerCase().includes(textoBusqueda)
        )
    }

    renderizarActividades(resultado)
}


renderizarActividades(actividades)

filtroDia.addEventListener("change", aplicarFiltros)
filtroTipo.addEventListener("change", aplicarFiltros)
buscador.addEventListener("input", aplicarFiltros)

btnLimpiar.addEventListener("click", () => {
  filtroDia.value = "Todos"
  filtroTipo.value = "Todos"
  buscador.value = ""
  renderizarActividades(actividades)
})


toggleModo.addEventListener("click", () => {
  
  document.body.classList.toggle("light-mode")

  if (document.body.classList.contains("light-mode")) 
  {
    toggleModo.textContent = "Modo oscuro"
  } 
  else 
  {
    toggleModo.textContent = "Modo claro"
  }
})
