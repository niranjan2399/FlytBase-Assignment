
# FlytBase Simulator

This project used React's UI capabilities and Google Maps to create an simulation tool that visualizes drone motion in real time based on data proviede by user.

**Deployed link:** https://flytbase-simulator.netlify.app/

**Sample Data File:** I have also added a sample data file in this repo on root level. The name of the file is dummyPathData.json.



## Features

- The app displays a world map using Google Maps, showing the background for the simulation.
- Users can input multiple sets of latitude and longitude coordinates in time series format.
- Users can also upload a JSON file containing the time series data.
- The data is sorted according to the time, so no worry if data is not sorted.
- Upon clicking the 'Simulate' button, the app animates a drone marker on the map, representing the drone's motion based on the input coordinates and timestamps.
- Users can pause and resume the simulation at any point using a button toggle.
- A seek bar allows users to jump to any specific time during the simulation, dynamically updating the marker to reflect the selected position in the timeline.


## Technologies Used

**React.js:** Framework used for building the user interface and managing the application state.

**SCSS:** Used for styling the application.

**Google Maps API:** Used for map display and map-related features like markers and polylines.

**Moment.js:** It handles time manipulation and comparison, crucial for sorting and animating the drone path based on timestamps.

**FileReader API:** Reads and processes the uploaded JSON file.


## Run Locally

Clone the project

```bash
  git clone https://github.com/niranjan2399/FlytBase-Assignment.git
```

Go to the project directory

```bash
  cd FlytBase-Assignment
```

Install dependencies

```bash
  npm install
```

Also add .env file with google maps api key as its value

```bash
REACT_APP_GOOGLE_MAPS_API_KEY
```

Start the server

```bash
  npm run start
```

**Sample Data File:** I have also added a sample data file in this repo on root level. The name of the file is dummyPathData.json.

