var map = L.map('map').setView([-18.9211416,47.5079044], 15);

 /*
            L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', { maxZoom: 19,
            attribution: '' }).addTo(map);
            */
         
            //street,
/*            L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{maxZoom: 20,
                subdomains:['mt0','mt1','mt2','mt3']}).addTo(map);
        
*/

           //satellite,
           L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
           subdomains:['mt0','mt1','mt2','mt3']
       }).addTo(map);


       var marker = L.marker([-18.9211416,47.5079044]).addTo(map);
           marker.bindPopup("Tongasoa eto andavamaba").openPopup();
       
       //var barea = L.marker([-18.919463, 47.525849]).addTo(map);
              


       //circle    
       var circle = L.circle([-18.9211416,47.5079044], {
           color: 'red',
           fillColor: '#f03',
           fillOpacity: 0.5,
           radius: 500
       }).addTo(map);


   //click anywhere
/*       function onMapClick(e) {
       alert("Vous avez clickez sur la position: " + e.latlng );
   }

   map.on('click', onMapClick);
*/        
   //pointToLayer    
   var geojsonMarkerOptions = {
       radius: 6,
       fillColor: "#ff7800",
       color: "#000",
       weight: 1,
       opacity: 1,
       fillOpacity: 0.8
   };    
   var latlng = [-18.919463, 47.525849];

   var barea = L.circleMarker(latlng, geojsonMarkerOptions).addTo(map);

   function bareaclick(e){
           L.marker([-18.919463, 47.525849]).addTo(map);
           barea.bindPopup("kianja barea").openPopup();
   }
   barea.on('click',bareaclick);     

   var rova = [-18.923702, 47.532119];

   L.circleMarker(rova, geojsonMarkerOptions).addTo(map);

   var anjely = [-18.915594, 47.521641];

   var other = L.circleMarker(anjely, geojsonMarkerOptions).addTo(map);

   function anjelyClick(e){
       other.bindPopup("Anjely mainty Anosy").openPopup(); 
   };
   
   other.on('click',anjelyClick);

 //polygone 
 var polygon = L.polygon([
       [-18.923119, 47.532692],
       [-18.923858, 47.532678],
       [-18.924505, 47.532399],
       [-18.924079, 47.531573],
       [-18.922995, 47.532029]
   ]).addTo(map);

   function rovaClick(e){
       polygon.bindPopup("ROVA Manjakamiadana").openPopup();
   };

   polygon.on('click',rovaClick);