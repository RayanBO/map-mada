class Couche {
    constructor(mapView) {
      this.mapView = mapView;
    }

    regionAnalamanga () {
        var context = this;

        let markerTANA = L.marker([-18.448462, 47.481901]).addTo(context.mapView);
            markerTANA.addEventListener("click",
            function(){
                    context.mapView.setView([-18.9156356,47.5215796],14);
                    markerTANA.remove();
        
                    var popup = L.popup()
                    .setLatLng([-18.9156356,47.5215796])
                    .setContent(' <table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220328105837-454527-25786480.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Analamanga</td></tr> </table> ')
                    .openOn(context.mapView);
                
                    setTimeout(function(){
                        popup.remove();
                    }, 2000);
            });  
    }


    regionAlaotraMangoro(){
    var context = this;

    let markerAlaotra_Mangoro = L.marker([-17.83297509933098, 48.40834703700982]).addTo(context.mapView);
        markerAlaotra_Mangoro.addEventListener("click",
        function(){
            context.mapView.setView([-17.823703, 48.4265],14);
            markerAlaotra_Mangoro.remove();

            var popup = L.popup()
            .setLatLng([-17.823703, 48.4265])
            .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330080543-433869-12552702.jpg" style="height:100px; width:145px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Alaotra-Mangoro</td></tr> </table> ')
            .openOn(context.mapView);

            setTimeout(function(){
                popup.remove();
            }, 2000);
       });
    }


    regionAmoro_i_mania(){
    var context = this;

    let markerAmoron_i_mania = L.marker([-20.583953, 46.723351]).addTo(context.mapView);
        markerAmoron_i_mania.addEventListener("click",
        function(){
            context.mapView.setView([-20.535978465549142, 47.24510706990074],14);
            
            var popup = L.popup()
            .setLatLng([-20.535978465549142, 47.24510706990074])
            .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220328103347-432043-70006004.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Amoron\'i mania</td></tr> </table> ')
            .openOn(context.mapView);
            
            setTimeout(function(){
                    popup.remove();
                }, 2000);
        });
    }

    regionAnosy(){
    var context = this;
    
    let markerAnosy = L.marker([-24.070589380897466, 46.076173713142886]).addTo(context.mapView);
        markerAnosy.addEventListener("click",
        function(){
            context.mapView.setView([-25.030873, 46.991271],14);
            
            var popup = L.popup()
            .setLatLng([-25.030873, 46.991271])
            .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330050501-407179-21181109.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Anosy</td></tr> </table> ')
            .openOn(context.mapView);
            
            setTimeout(function(){
                     popup.remove();
            }, 2000);
        });
    }

    regionAndroy(){
        var context = this;
        
        let markerAndroy = L.marker([-24.6670 , 45.4037]).addTo(context.mapView);
            markerAndroy.addEventListener("click",
            function(){
                context.mapView.setView([-25.31666, 45.486166],15);
                
                var popup = L.popup()
                .setLatLng([-25.31666, 45.486166])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330045118-508447-61066272.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Androy</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionAntsinanana(){
        var context = this;
        
        let markerAntsinanana = L.marker([-19.259409, 48.811317]).addTo(context.mapView);
            markerAntsinanana.addEventListener("click",
            function(){
                context.mapView.setView([-18.15462, 49.413981],12);
                
                var popup = L.popup()
                .setLatLng([-18.15462, 49.413981])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330060403-566312-98731442.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Antsinanana</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }
    
    regionAnalanjirofo(){
        var context = this;
        
        let markerAnalanjirofo = L.marker([-16.4128 , 49.5097]).addTo(context.mapView);
            markerAnalanjirofo.addEventListener("click",
            function(){
                context.mapView.setView([-16.167981, 49.767978],15);
                
                var popup = L.popup()
                .setLatLng([-16.167981, 49.767978])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330042957-477549-77197872.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Analanjirofo</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionAtsimo_antsinanana(){
        var context = this;
        
        let markerAtsimo_antsinanana = L.marker([-23.550154, 47.322109]).addTo(context.mapView);
            markerAtsimo_antsinanana.addEventListener("click",
            function(){
                context.mapView.setView([-22.820769, 47.829018],14);
                
                var popup = L.popup()
                .setLatLng([-22.820769, 47.829018])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330055658-653075-94114462.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Antsimo Antsinanana</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }
    
    regionAtsimo_Andrefana(){
        var context = this;
        
        let markerAtsimo_Andrefana = L.marker([-23.3991 , 44.2672]).addTo(context.mapView);
            markerAtsimo_Andrefana.addEventListener("click",
            function(){
                context.mapView.setView([-23.356125, 43.671512],13);
                
                var popup = L.popup()
                .setLatLng([-23.356125, 43.671512])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330051842-530847-91733518.jpg" style="height:100px; width:165px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Antsimo Andrefana</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }
    
    regionBetsiboka(){
        var context = this;
        
        let markerBetsiboka = L.marker([-17.324435, 47.032365]).addTo(context.mapView);
            markerBetsiboka.addEventListener("click",
            function(){
                context.mapView.setView([-16.951642, 46.827775],15);
                
                var popup = L.popup()
                .setLatLng([-16.951642, 46.827775])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330064128-426759-44114611.jpg" style="height:100px; width:165px; float:center;" scope="row"></td></tr> <tr><td>Region d\'Antsimo Andrefana</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionBoeny(){
        var context = this;
        
        let markerBoeny = L.marker([-16.2632 , 46.3639]).addTo(context.mapView);
            markerBoeny.addEventListener("click",
            function(){
                context.mapView.setView([-15.713612, 46.317328],14);
                
                var popup = L.popup()
                .setLatLng([-15.713612, 46.317328])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330064933-366089-86881666.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region de boeny</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionBongolava(){
        var context = this;
        
        let markerBongolava = L.marker([-18.549957, 46.051711]).addTo(context.mapView);
            markerBongolava.addEventListener("click",
            function(){
                context.mapView.setView([-18.770668, 46.048936],14);
                
                var popup = L.popup()
                .setLatLng([-18.770668, 46.048936])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330070111-571630-11481997.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region de bongolava</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionDiana(){
        var context = this;
        
        let markerdiana = L.marker([-13.3288 , 49.0609]).addTo(context.mapView);
            markerdiana.addEventListener("click",
            function(){
                context.mapView.setView([-12.288431, 49.293676],13);
                
                var popup = L.popup()
                .setLatLng([-12.288431, 49.293676])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220330084028-360599-28525670.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region diana</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionFitovinany(){
        var context = this;
        
        let markerfitovinany = L.marker([-22.0361 , 47.7224]).addTo(context.mapView);
            markerfitovinany.addEventListener("click",
            function(){
                context.mapView.setView([-22.145357, 48.011455],13);
                
                var popup = L.popup()
                .setLatLng([-22.145357, 48.011455])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220401043140-534267-15715231.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region fitovinany</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionIhorombe(){
        var context = this;
        
        let markerIhorombe = L.marker([-22.5151 , 46.3040]).addTo(context.mapView);
            markerIhorombe.addEventListener("click",
            function(){
                context.mapView.setView([-22.403015, 46.128887],14);
                
                var popup = L.popup()
                .setLatLng([-22.403015, 46.128887])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220331053543-528590-96101524.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region Ihorombe</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionItasy(){
        var context = this;
        
        let markerItasy = L.marker([-19.0728 , 46.7844]).addTo(context.mapView);
            markerItasy.addEventListener("click",
            function(){
                context.mapView.setView([-19.025203, 46.736864],15);
                
                var popup = L.popup()
                .setLatLng([-19.025203, 46.736864])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220331055155-431288-24025647.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region Itasy</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionMelaky(){
        var context = this;
        
        let marker = L.marker([-17.7876, 44.9646]).addTo(context.mapView);
            marker.addEventListener("click",
            function(){
                context.mapView.setView([-18.059069, 44.025114],15);
                
                var popup = L.popup()
                .setLatLng([-18.059069, 44.025114])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220331063430-354423-29027458.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region Melaky</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionMenabe(){
        var context = this;
        
        let marker = L.marker([-20.1063, 44.9502]).addTo(context.mapView);
            marker.addEventListener("click",
            function(){
                context.mapView.setView([-20.291443, 44.275761],15);
                
                var popup = L.popup()
                .setLatLng([-20.291443, 44.275761])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220331065030-402356-65263338.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region Menabe</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionMatsiatra_Ambony(){
        var context = this;
        
        let marker = L.marker([-21.4846 , 46.7367]).addTo(context.mapView);
            marker.addEventListener("click",
            function(){
                context.mapView.setView([-21.463823, 47.079235],14);
                
                var popup = L.popup()
                .setLatLng([-21.463823, 47.079235])
                .setContent('<table > <tr><td><img src="https://www.instat.mg/images/main/full_size/20220331051846-458518-62091495.jpg" style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region Matsiatra ambony</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionSofia(coordinate, townCoordonate, picture, nameRegion){
        var context = this;
        
        let marker = L.marker(coordinate).addTo(context.mapView);
            marker.addEventListener("click",
            function(){
                context.mapView.setView(townCoordonate,14);
                
                var popup = L.popup()
                .setLatLng(townCoordonate)
                .setContent('<table > <tr><td><img src='+ picture +' style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region'+ nameRegion +'</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionSava(coordinate, townCoordonate, picture, nameRegion){
        var context = this;
        
        let marker = L.marker(coordinate).addTo(context.mapView);
            marker.addEventListener("click",
            function(){
                context.mapView.setView(townCoordonate,14);
                
                var popup = L.popup()
                .setLatLng(townCoordonate)
                .setContent('<table > <tr><td><img src='+ picture +'style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region'+ nameRegion +'</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionVakinankaratra(coordinate, townCoordonate, picture, nameRegion){
        var context = this;
        
        let marker = L.marker(coordinate).addTo(context.mapView);
            marker.addEventListener("click",
            function(){
                context.mapView.setView(townCoordonate,14);
                
                var popup = L.popup()
                .setLatLng(townCoordonate)
                .setContent('<table > <tr><td><img src='+ picture +' style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region'+ nameRegion +' </td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

    regionVatovavy(coordinate, townCoordonate, picture, nameRegion){
        var context = this;
        
        let marker = L.marker(coordinate).addTo(context.mapView);
            marker.addEventListener("click",
            function(){
                context.mapView.setView(townCoordonate,14);
                
                var popup = L.popup()
                .setLatLng(townCoordonate)
                .setContent('<table > <tr><td><img src='+ picture +' style="height:100px; width:135px; float:center;" scope="row"></td></tr> <tr><td>Region '+ nameRegion +'</td></tr> </table> ')
                .openOn(context.mapView);
                
                setTimeout(function(){
                         popup.remove();
                }, 2000);
            });
    }

}

