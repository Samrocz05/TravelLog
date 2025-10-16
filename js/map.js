// Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample trip markers
const trips = [
    {lat: 28.6139, lon: 77.2090, title: 'Delhi Trip', date: '2025-01-10', desc: 'Visited India Gate'},
    {lat: 19.0760, lon: 72.8777, title: 'Mumbai Trip', date: '2025-02-15', desc: 'Gateway of India'}
];

trips.forEach(trip => {
    L.marker([trip.lat, trip.lon])
      .addTo(map)
      .bindPopup(`<b>${trip.title}</b><br>${trip.date}<br>${trip.desc}`);
});
