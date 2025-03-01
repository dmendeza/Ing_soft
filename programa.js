var map = L.map('map').setView([4.7370587445576025, -74.0525967882], 16);

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

let btnTrees= document.getElementById("btnTrees");
btnTrees.addEventListener('click', async function()) {

    try{

        let response=await fetch("arboles.geojson");
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