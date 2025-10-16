const trips = [
    {title: 'Delhi Trip', date: '2025-01-10', desc: 'Visited India Gate'},
    {title: 'Mumbai Trip', date: '2025-02-15', desc: 'Gateway of India'}
];

const historyList = document.getElementById('historyList');

trips.forEach(trip => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${trip.title}</b> - ${trip.date}<br>${trip.desc}`;
    historyList.appendChild(li);
});
