export let coordonne = {
    "tana" : [-18.9156356,47.5215796],
    "Alaotra_Mangoro" : [-17.83297509933098, 48.40834703700982],
    "Amoron_i_mania" : [-20.583953, 46.723351],
    "anosy" : [-24.070589380897466, 46.076173713142886],
    "antsinanana" : [-18.6671, 48.9098],
    "Androy" : [-24.6670 , 45.4037],
    "Analanjirofo" : [-16.4128 , 49.5097],
    "Atsimo_Atsinanana" : [-23.1718 , 47.4501],
    "Atsimo_Andrefana" : [-23.3991 , 44.2672],
    "Betsiboka" : [-17.1596 , 47.3864],
    "Boeny" : [-16.2632 , 46.3639],
    "Bongolava" : [-18.4875 , 46.2929],
    "diana" : [-13.3288 , 49.0609],
    "Fitovinany" : [-22.0361 , 47.7224],
    "Ihorombe" : [-22.5151 , 46.3040],
    "Itasy" : [-19.0728 , 46.7844],
    "Melaky" : [-17.7876, 44.9646],
    "Menabe" : [-20.1063, 44.9502],
    "Matsiatra_Ambony" : [-21.4846 , 46.7367],
    "Sofia" : [-15.1569 , 48.3613],
    "sava" : [-14.5708, 49.8657],
    "Vakinankaratra" : [-19.7923, 46.9468],
    "Vatovavy" : [-21.1894 , 48.1790]
};

//point Map
export let point = {
    radius: 5,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

export function getColor(d) {
    return d == 'tres urgent' ? '#F80606' :
           d == 'urgent'  ? '#EE9A4D' :
           d == 'null'  ? '#FD8D3C' :
                          '#FFEDA0';
}

export class Test{
    highlightFeature(e) {
        var layer = e.target;
    
        layer.setStyle({
            weight: 5,
            color: '#ADD8E6',
            dashArray: '',
            fillOpacity: 0
        });
    
        layer.bringToFront();
    }
}