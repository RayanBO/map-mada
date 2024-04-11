import * as tools  from './modules/tools.js'
import { geoMada } from './modules/delimitationMada.js'
import * as viewRegion from './modules/viewRegion.js'

let background = new tools.Test()


export var map = L.map('map').setView([-18.9211416,47.5079044], 6);

 //Map satellite,
L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3']}).addTo(map);


//1 Region Antananarivo
export let markerTANA = L.marker([-18.448462, 47.481901]).addTo(map);
  markerTANA.addEventListener("click",
   function(){
    map.setView([-18.9156356,47.5215796],14);
    viewRegion.regionAnalamanga();
  });




//2 Region Alaotra-Mangoro
export let markerAlaotra_Mangoro = L.marker(tools.coordonne.Alaotra_Mangoro).addTo(map);
  markerAlaotra_Mangoro.addEventListener("click",
    function(){
        map.setView([-17.823703, 48.4265],14);
        viewRegion.regionAlaotraMangoro();
  });

 

//3 Region Amoron'i mania
export let markerAmoron_i_mania = L.marker(tools.coordonne.Amoron_i_mania).addTo(map);
  markerAmoron_i_mania.addEventListener("click",
    function(){
        map.setView([-20.535978465549142, 47.24510706990074],14);
        viewRegion.regionAmoro_i_mania();
  });




//4 Region Anosy
export let markerAnosy = L.marker(tools.coordonne.anosy).addTo(map);
  markerAnosy.addEventListener("click",
  function(){
      map.setView([-25.030873, 46.991271],14);
      viewRegion.regionAnosy();
  });


//5 Region Androy
L.circleMarker(tools.coordonne.Androy, tools.point).addTo(map);

let markerAndroy = L.marker(tools.coordonne.Androy).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region d\'androy.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Androy</td></tr> </table> ');



//6 Region Antsinanana
L.circleMarker(tools.coordonne.antsinanana, tools.point).addTo(map);

let markerAntsinanana = L.marker(tools.coordonne.antsinanana).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region antsinanana.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Antsinanana</td></tr> </table>');



//7 Region Analanjirofo
L.circleMarker(tools.coordonne.Analanjirofo, tools.point).addTo(map);

let markerAnalanjirofo = L.marker(tools.coordonne.Analanjirofo).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region analanjirofo.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Analanjirofo</td></tr> </table> ');


//8 Region Atsimo-Atsinanana
L.circleMarker(tools.coordonne.Atsimo_Atsinanana, tools.point).addTo(map);

let markerAtsimo_Atsinanana = L.marker(tools.coordonne.Atsimo_Atsinanana).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region atsimo antsinanana.jpg" style="height:100px; width:165px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Atsimo-Atsinanana</td></tr> </table> ');



//9 Region Atsimo-Andrefana
L.circleMarker(tools.coordonne.Atsimo_Andrefana, tools.point).addTo(map);

let markerAtsimo_Andrefana = L.marker(tools.coordonne.Atsimo_Andrefana).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region atsimon andrefana.jpg" style="height:100px; width:165px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Atsimo Andrefana</td></tr> </table> ');



//10 Region Betsiboka
L.circleMarker(tools.coordonne.Betsiboka, tools.point).addTo(map);

let markerBetsiboka = L.marker(tools.coordonne.Betsiboka).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region d\'betsiboka.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region de Betsiboka</td></tr> </table>');



//11 Region Boeny
L.circleMarker(tools.coordonne.Boeny, tools.point).addTo(map);

let markerBoeny = L.marker(tools.coordonne.Boeny).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region boeny.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region de Boeny</td></tr> </table>');



//12 Region Bongolava
L.circleMarker(tools.coordonne.Bongolava, tools.point).addTo(map);

let markerBongolava = L.marker(tools.coordonne.Bongolava).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region bongolava.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region BONGOLAVA</td></tr> </table>');



//13 Region DIANA
L.circleMarker(tools.coordonne.diana, tools.point).addTo(map);

let markerdiana = L.marker(tools.coordonne.diana).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region diana.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Région DIANA </td></tr> </table>');



//14 Region Fitovinany
L.circleMarker(tools.coordonne.Fitovinany, tools.point).addTo(map);

let markerFitovinany = L.marker(tools.coordonne.Fitovinany).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region fitovinany.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Région FITOVINANY </td></tr> </table>');   



//15 Region Ihorombe
L.circleMarker(tools.coordonne.Ihorombe, tools.point).addTo(map);

let markerIhorombe = L.marker(tools.coordonne.Ihorombe).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region ihorombe.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Région Ihorombe </td></tr> </table>');



//16 Region Itasy
L.circleMarker(tools.coordonne.Itasy, tools.point).addTo(map);

let markerItasy = L.marker(tools.coordonne.Itasy).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region itasy-madagascar.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Région ITASY </td></tr> </table>');

    

//17 Region Melaky
L.circleMarker(tools.coordonne.Melaky, tools.point).addTo(map);

let markerMelaky = L.marker(tools.coordonne.Melaky).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region melaky.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Région MELAKY </td></tr> </table>');



//18 Region Menabe
L.circleMarker(tools.coordonne.Menabe, tools.point).addTo(map);

let markerMenabe = L.marker(tools.coordonne.Menabe).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region menabe.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Région MENABE </td></tr> </table>');



//19 Region Matsiatra_Ambony
L.circleMarker(tools.coordonne.Matsiatra_Ambony, tools.point).addTo(map);

let markerMatsiatra_Ambony = L.marker(tools.coordonne.Matsiatra_Ambony).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region matsiatra ambony.jpg" style="height:100px; width:175px; float:center;" scope="row"></td></tr> <tr><td>Région MATSIATRA AMBONY </td></tr> </table>');



//20 Region Sofia
L.circleMarker(tools.coordonne.Sofia, tools.point).addTo(map);

let markerSofia = L.marker(tools.coordonne.Sofia).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region sofia.jpg" style="height:100px; width:175px; float:center;" scope="row"></td></tr> <tr><td>Région SOFIA </td></tr> </table>');



//21 Region SAVA
L.circleMarker(tools.coordonne.sava, tools.point).addTo(map);

let markersava = L.marker(tools.coordonne.sava).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region sava.jpg" style="height:100px; width:175px; float:center;" scope="row"></td></tr> <tr><td>Région SAVA </td></tr> </table>');



//22 Region Vakinankaratra
L.circleMarker(tools.coordonne.Vakinankaratra, tools.point).addTo(map);

let markerVakinankaratra = L.marker(tools.coordonne.Vakinankaratra).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region vakinakaratra.jpg" style="height:100px; width:175px; float:center;" scope="row"></td></tr> <tr><td>Région VAKINANKARATRA </td></tr> </table>');  



//23 Region Vatovavy
L.circleMarker(tools.coordonne.Vatovavy, tools.point).addTo(map);

var markerVatovavy = L.marker(tools.coordonne.Vatovavy).addTo(map)
  .bindPopup('<table > <tr><td><img src="Pictures/region vatovavy.jpg" style="height:100px; width:175px; float:center;" scope="row"></td></tr> <tr><td>Région VATOVAVY </td></tr> </table>');

L.geoJSON(geoMada).addTo(map);

function style(geoMada) {
            return {
                fillColor: tools.getColor(geoMada.properties.density),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.1
  };
}
L.geoJson(geoMada, {style: style}).addTo(map);        

let geojson = L.geoJSON(
  geoMada, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);


function resetHighlight(e) {
  geojson.resetStyle(e.target);
}

function onEachFeature(features, layer) {
  layer.on({
      mouseover: background.highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
  });
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

var myIcon = L.icon({
  iconUrl: 'letter-e.png',
  iconSize: [28, 28],
});

var tt = L.Routing.control({
  waypoints: [
      L.latLng(-18.914508, 47.52415),
      L.latLng(-18.918314, 47.521469)
  ],
  routeWhileDragging: true
}).addTo(map);

L.Routing.control({
  waypoints: [
      L.latLng(-18.912214, 47.518336),
      L.latLng(-18.916101, 47.508401)
  ],
  routeWhileDragging: true
}).addTo(map);

