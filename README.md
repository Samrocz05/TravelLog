TravelLog 📍

TravelLog is a web application to track your journeys, visualize routes on an interactive map, log trips with notes and photos, and view travel history over time. Perfect for travel enthusiasts and anyone who wants a digital travel diary.

Features
Map Tracking

Interactive map with Leaflet.js.

Clickable markers with trip info, photos, and descriptions.

Route lines connecting visited locations.

Optional clustering for densely visited areas.

Travel History Log

Timeline of all trips sorted by date.

Each entry includes title, start & end dates, description, photos, and locations visited.

Filter trips by country, city, or date.

Trip Notes & Media

Upload photos for each trip/location.

Add diary-style notes.

Display photos in a carousel/lightbox on map or history.

Statistics & Insights

Total trips, cities, and countries visited.

Calculate distance traveled automatically.

Pie chart of continents visited or route heatmap.

User Management (Optional)

Login/Signup with email/password.

Securely save trips per user.

View your personal travel history.

Export & Share

Export travel logs as PDF or CSV.

Share map snapshots or route links on social media.

Animations & UI

Smooth fade-in and slide animations for header, map, and history list.

Interactive hover effects for nav links and buttons.

Timeline items slide in with staggered animation.

Map popup bounce animation for fun interactivity.

Fully responsive design for mobile, tablet, and desktop.

Demo / Screenshots

https://github.com/Samrocz05/TravelLog/blob/main/demo.png





(Replace with your actual screenshots)

Tech Stack

Frontend: HTML, CSS, JavaScript

Map: Leaflet.js (OpenStreetMap)

Data Storage: JSON file (trips.json) or Firebase/MongoDB for dynamic storage

Hosting: GitHub Pages / Vercel / Netlify

Folder Structure
TravelLog/
├── index.html           # Home page
├── map.html             # Interactive map page
├── history.html         # Travel history & timeline
├── css/
│   └── style.css
├── js/
│   └── main.js
│   └── map.js
│   └── history.js
├── images/              # Trip photos & screenshots
├── data/
│   └── trips.json
├── README.md
└── LICENSE

Installation / Setup

Clone the repository

git clone https://github.com/yourusername/TravelLog.git


Open the project

Open index.html in any web browser.

Ensure trips.json is in data/ folder.

Optional: Dynamic hosting

Upload to GitHub Pages, Vercel, or Netlify for online demo.

Future Enhancements

Connect Firebase / MongoDB for dynamic user trips.

Add Login/Signup functionality.

Integrate photo upload and carousel features.

Usage

Navigate to index.html → click View Map to see your trips plotted.

Navigate to history.html → view animated timeline of trips.

Hover over buttons, map markers, and links for interactive animations.

Use the optional dark mode toggle by modifying main.js and CSS.

Contributing

Contributions are welcome!

Fork the repo

Create a branch (git checkout -b feature-name)

Commit changes (git commit -m 'Add new feature')

Push branch (git push origin feature-name)

Create a Pull Request

License

This project is licensed under the MIT License - see the LICENSE
 file for details.

Credits

Leaflet.js – Open-source interactive maps

OpenStreetMap – Map tiles

Project designed and developed by Sam D

Inspired by the Vibe Code – Trace event
