mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ4b25zIiwiYSI6ImNrdWs4bXdrdzByaGIyb3J2d3F5cm12eTEifQ.SQAzLoLz2wj1pLn9F4nyUg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [2.3364, 48.86091], // starting position [lng, lat]
    zoom: 16, // starting zoom     
});

const marker1 = new mapboxgl.Marker({ color: 'black' })
    .setLngLat([2.3364, 48.86091])
    .addTo(map);


const marker2 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3333, 48.8602])
    .addTo(map);

const marker3 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3397, 48.8607])
    .addTo(map);

const marker4 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3330, 48.8619])
    .addTo(map);

const marker5 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3365, 48.8625])
    .addTo(map);

map.addControl(new mapboxgl.NavigationControl());
