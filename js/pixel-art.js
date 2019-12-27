var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.

var colorPersonalizado = document.getElementById('color-personalizado');
var indicadorColor = document.getElementById('indicador-de-color');

colorPersonalizado.addEventListener('change',
  (function (e) {
    // Se guarda el color de la rueda en colorActual
    colorActual = e.target;
    colorActual = colorPersonalizado.value;
    console.log(colorActual);
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;
  })
);

// Selección de elementos del DOM

var paleta = document.getElementById("paleta");
var grilla = document.getElementById("grilla-pixeles");


// Paleta de Colores

function armarPaleta() {
  nombreColores.forEach(color => {
    const celdaColor = document.createElement('div');
    celdaColor.className = 'color-paleta';
    celdaColor.style.backgroundColor = color;
    celdaColor.id = color;
    paleta.appendChild(celdaColor);
  });
}


// Grilla Bastidor

function armarGrillaBastidor() {
  for (var i = 0; i < 1749; i++) {
    const celdaBastidor = document.createElement('div');
    celdaBastidor.className = 'celda-bastidor';
    grilla.appendChild(celdaBastidor);
    celdaBastidor.id = i;
  };
}

// Indicador de Color

var indicadorColor = document.getElementById('indicador-de-color');

function elegirColor() {

  paleta.addEventListener('click', function (e) {
    console.log(e);
    let colorSeleccionado = e.target.id;
    console.log(colorSeleccionado);
    indicadorColor.style.backgroundColor = colorSeleccionado;

  });
}

// Coloreando

var mouse = false;

function colorear(e) {
  if (mouse) {

    var colorAPintar = indicadorColor.style.backgroundColor;
    console.log(colorAPintar);
    console.log(e);
    let pixel = e.target;
    console.log(pixel);
    pixel.style.backgroundColor = colorAPintar;
    console.log(pixel.style.backgroundColor);
  }
}

grilla.addEventListener('mousedown', function (e) {
  mouse = true;
  colorear(e);
  console.log(mouse);
});

grilla.addEventListener('mouseover', function (e) {
  if (mouse === true) {
    colorear(e);
    console.log(mouse);
  }
})

grilla.addEventListener('mouseup', function (e) {
  mouse = false;
  console.log(mouse);
  colorear(e);
})

// Funcionalidad borrar todo

var botonBorrar = document.getElementById('borrar');
botonBorrar.addEventListener('click', function () {
  $('.celda-bastidor').animate({ 'background-color': 'white' }, 1000);
})

// Funcionalidad cargar Superhéroe

var cargarBatman = document.getElementById('batman');
var cargarWonder = document.getElementById('wonder');
var cargarFlash = document.getElementById('flash');
var cargarInvisible = document.getElementById('invisible');

cargarBatman.addEventListener('click', () => cargarSuperheroe(batman));
cargarWonder.addEventListener('click', () => cargarSuperheroe(wonder));
cargarFlash.addEventListener('click', () => cargarSuperheroe(flash));
cargarInvisible.addEventListener('click', () => cargarSuperheroe(invisible));

// Funcionalidad guardar y descargar

var botonGuardar = document.getElementById('guardar');
botonGuardar.addEventListener('click', function () {
  guardarPixelArt();
})


//Funciones ejecutadas
armarPaleta();
armarGrillaBastidor();
elegirColor();

// Sugerencias correción 


/* //declaro el click para cualquier imagen dentro del elemento con clase .imgs
$(".imgs img").click(function(){
  //obtengo referencia a la imagen en la cual hice click
  var imgActual = $(this);
  //de la imagen actual obtengo el attributo id
  var attrId = imgActual.attr("id");
  //finalmente paso el atributo como parametro
  cargarSuperheroe(attrId); //habria que chequear dentro de la funcion si existe ese objeto que se le pasa.
});
//NOTA: el codigo anterios es de referencia para que se entienda la idea... pero se puede acortar aun mas. */