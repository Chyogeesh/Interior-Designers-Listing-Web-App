# Interior-Designers-Listing-Web-App
It is a internship assignment
/interior-designers-app
  /backend
    app.py
    requirements.txt
    Dockerfile
    /data
      designers.json
  /frontend
    index.html
    styles.css
    script.js
    /assets
      (icons from Figma)
    Dockerfile
  docker-compose.yml
  README.md
# EmptyCup Interior Designers Listing

A full-stack web application for listing interior designers with shortlisting functionality.

## Features

- Mobile-responsive design matching Figma specifications
- Toggle shortlisting of designers
- Filter to show only shortlisted designers
- Backend API serving designer data
- Dockerized deployment

## Technologies Used

- Frontend: HTML5, CSS3, JavaScript
- Backend: Python, Flask
- Deployment: Docker, Docker Compose

## Setup Instructions

### Prerequisites

- Docker
- Docker Compose

### Running the Application

1. Clone the repository
2. Navigate to the project directory
3. Run: `docker-compose up --build`
4. Open `http://localhost` in your browser

The backend API will be available at `http://localhost:5000/api/designers`

## Deployment

The application is configured for deployment using Docker. For production:

1. Build the images: `docker-compose build`
2. Run in detached mode: `docker-compose up -d`

To deploy to a cloud provider:

1. Set up a cloud VM with Docker installed
2. Push your Docker images to a container registry
3. Deploy using your cloud provider's container service

## Project Structure

- `/frontend`: Contains all frontend code (HTML, CSS, JS)
- `/backend`: Contains Flask API and designer data
- `docker-compose.yml`: Orchestrates the multi-container application
