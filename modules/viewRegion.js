import * as main from '../main.js';

export function regionAnalamanga(){
    main.markerTANA.remove();

    var popup = L.popup()
    .setLatLng([-18.9156356,47.5215796])
    .setContent(' <table > <tr><td><img src="Pictures/region analamanga.jpeg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Analamanga</td></tr> </table> ')
    .openOn(main.map);

    setTimeout(function(){
        popup.remove();
    }, 2500);
}

export function regionAlaotraMangoro(){
    main.markerAlaotra_Mangoro.remove();

    var popup = L.popup()
    .setLatLng([-17.823703, 48.4265])
    .setContent('<table > <tr><td><img src="Pictures/alaotramangoro-batiment-region.jpg" style="height:100px; width:145px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Alaotra-Mangoro</td></tr> </table> ')
    .openOn(main.map);

    setTimeout(function(){
        popup.remove();
    }, 2500);
}

export function regionAmoro_i_mania(){
    main.markerAmoron_i_mania.remove();

    var popup = L.popup()
    .setLatLng([-20.535978465549142, 47.24510706990074])
    .setContent('<table > <tr><td><img src="Pictures/region amoron\'i mania.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Amoron\'i mania</td></tr> </table> ')
    .openOn(main.map);

    setTimeout(function(){
        popup.remove();
    }, 2500);
}

export function regionAnosy(){
    main.markerAnosy.remove();

    var popup = L.popup()
    .setLatLng([-25.030873, 46.991271])
    .setContent('<table > <tr><td><img src="Pictures/region anosy.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Anosy</td></tr> </table> ')
    .openOn(main.map);

    setTimeout(function(){
        popup.remove();
    }, 2500);
}
