var map = L.map('map').setView([51.505, -0.09], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


async function loadPolygon() {

    try{

        let response=await fetch("mazuren.geojson");
        let data = await response.json();

        L.geoJSON (data,
        {

            style:{color: "blue"}
        }
        ).addTo(map);
 
    }
    catch(error){

        console.error("can't load")
    }
    
}

loadPolygon();