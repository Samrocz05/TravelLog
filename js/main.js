// =============================
// main.js - TravelLog Project
// Handles UI interactions & trips data
// =============================

// -------------------------
// Load trips.json dynamically
// -------------------------
async function loadTrips() {
    try {
        const response = await fetch('data/trips.json');
        const trips = await response.json();
        return trips;
    } catch (error) {
        console.error("Error loading trips.json:", error);
        return [];
    }
}

// -------------------------
// Login & Signup buttons
// -------------------------
const loginBtn = document.querySelector('.login-signup button:nth-child(1)');
const signupBtn = document.querySelector('.login-signup button:nth-child(2)');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        alert("Login functionality will be implemented soon!");
    });
}

if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        alert("Signup functionality will be implemented soon!");
    });
}

// -------------------------
// Dark / Light mode toggle
// -------------------------
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    // Store preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// -------------------------
// Utility function to calculate distance (optional for stats)
// -------------------------
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// -------------------------
// Example: Load trips and log titles
// -------------------------
loadTrips().then(trips => {
    console.log("Loaded Trips:", trips);
    trips.forEach(trip => {
        console.log(`Trip: ${trip.title}, Dates: ${trip.startDate} - ${trip.endDate}`);
    });
});
