// Variables Globales

let lat = 0;
let lng = 0;

let ubicacionUsuario = { lat: + lat, lng: + lng };

const lugares = [
    "Mar del Plata, Buenos Aires Province, Argentina",
    "Torre Eiffel, Avenue Anatole France, Paris, France",
    "Cancún, Quintana Roo, Mexico",
    "Humahuaca, Jujuy",
    "Tilcara, Jujuy",
    "Parque Nacional El Impenetrable, General Güemes, Chaco Province",
    "Puerto Iguazú, Misiones Province",
    "Nordelta, Benavidez, Buenos Aires Province",
    "Gualeguaychú, Entre Rios",
    "Bariloche Center, San Martín, San Carlos de Bariloche, Río Negro",
    "Iruya, Salta Province, Argentina",
    "Cafayate, Salta Province, Argentina",
    "Tenerife, Spain",
    "Zambia",
    "South Africa",
    "Namibia, Mangaung, South Africa",
    "Madagascar - Dubai - United Arab Emirates",
    "Botswana - Dubai - United Arab Emirates",
    "Playa del Carmen, Quintana Roo, Mexico",
    "Gran Caimán, Cayman Islands",
    "Rio de Janeiro, State of Rio de Janeiro, Brasil",
    "Roatán, Honduras",
    "Universal Orlando Resort, Universal Boulevard, Orlando, FL, USA",
    "Beijing, China ",
    "Jamaica",
    "Estambul, İstanbul, Turkey",
    "Cuzco, Peru",
    "Sacred Valley, Peru",
    "Phuket, Thailand",
    "Venezia, Metropolitan City of Venice, Italia",
    "Siem Reap, Cambodia",
    "Creta, Greece",
    "San Petersburgo, Russia",
    "Bali, Indonesia",
    "Rome, Metropolitan City of Rome, Italy",
    "Giza, Egypt",
    "Londres, UK",
    "Gran Muralla Chinesa, Huairou District, China",
    "Hollywood Sign, Los Angeles, CA, USA",
    "Leaning Tower of Pisa, Pisa, Province of Pisa, Italy",
    "The Grand Palace, Na Phra Lan Road, Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok, Thailand",
    "Monte Fuji, Kitayama, Fujinomiya, Shizuoka, Japan",
    "Gyeongbokgung, Sajik-ro, Sejongno, Jongno-gu, Seoul, South Korea",
    "Ópera de Sídney, Australia",
    "Disneyland Park, Anaheim, EE.UU",
    "Monte Everest, Nepal y China",
    "Kilimanjaro, Tanzania",
    "Montaña de la Mesa, Table Mountain (Nature Reserve), Cape Town, South Africa",
    "Cataratas del Niágara, NY, USA",
    "Machu Picchu, Perú",
    "Acropolis, Athens, Greece",
    "Parque Nacional de Yellowstone, United States",
    "Stonehenge, Salisbury, UK",
    "Phuket, Mueang Phuket District, Phuket, Thailand",
    "República Dominicana"

];

// Obtener ubicación

function ubicacion(ubic) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
    return ubic;
  } else {
    alert("No es posible encontrar tu ubicación :/");
  }

  // Si me dio la ubicacion

  function success(getCurrentPosition) {
    // Guardo las coordenadas del usuario
    ubicacionUsuario = getCurrentPosition.coords;
    lat = ubicacionUsuario.latitude;
    lng = ubicacionUsuario.longitude;

    console.log(`Tu ubicación es ${lat}, ${lng}. Quería utilizar estos datos para crear un camino desde tu ubicación a otro punto. Utilicé Google Maps, pero al ser de pago y al yo no tener tarjeta de credito, no lo pude utilizar . . . Así que esto es lo mejor que pude crear :D`);

    let pagina1 = document.getElementById("pagina1");
    let pagina2 = document.getElementById("pagina2");
    pagina1.style.display = "none";
    pagina2.style.display = "flex";
  }

  // Si No me da la ubicacion

  function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }
}

// Destino del viajero

function viajar() {
  let pagina2 = document.getElementById("pagina2");
  let pagina3 = document.getElementById("pagina3");

  pagina2.style.display = "none";
  pagina3.style.display = "block";

    //   Creamos un número random

    let aleatorio = 0 + Math.floor(Math.random() * lugares.length);
    console.log(aleatorio);

    // Enviamos el valor a la dirección.

  document.getElementById("map").src=`https://www.google.com/maps/embed/v1/place?key=AIzaSyBzTDYgMmrq35_6Z0Z19thTF-FPhd7eFMU
  &q=${lugares[aleatorio]}`;
}
