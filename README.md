# City-Explorer-Api

**Author**: Anthony Sinitsa

**Front-End-Repo**: [city-explorer](https://github.com/AnthonySinitsa/city-explorer)

**Website Link**: [City Explorer](https://luxury-youtiao-8b8f69.netlify.app)

## Overview

This repository contains the backend code for the City Explorer API project. It utilizes two API's: one for retrieving the location and weather of a city, and another for fetching movies related to that city.

## Project Structure

- src/: Contains the source code for the backend application.

  - controllers/: Contains the controller modules that handle the business logic of the API endpoints.

    - moviesController.js: Handles the logic for fetching movies related to a city.

    - weatherController.js: Handles the logic for fetching the location and weather of a city.

  - models/: Contains the model modules that define the data schemas for the database.

    - moviesModel.js: Defines the schema for storing movie data.

    - weatherModel.js: Defines the schema for storing weather data.

  - routes/: Contains the route modules that define the API endpoints.

    - moviesRoutes.js: Defines the /movies endpoint for fetching movies.

    - weatherRoutes.js: Defines the /weather endpoint for fetching location and weather data.

  - app.js: The main entry point of the application.

- package.json: Defines the project dependencies and scripts.

## Development

```,
npm start
```
