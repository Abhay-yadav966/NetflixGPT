# NetflixGPT
🎬 Welcome to Netflix GPT, a Netflix clone that provides users with a familiar interface to browse movies. The application is integrated with TMDB to fetch movie details and with Node.js, Express.js for Backend and JWT Token for authentication. Users can watch trailers on YouTube by clicking on a movie. Additionally, there's a section for specialized movie suggestions, where users can enter their OpenAI key to get personalized movie recommendations.

## Features
Netflix GPT offers a seamless movie browsing experience with the following features:
1. **TMDB Integration**: Fetches movie details from The Movie Database (TMDB).
2. **YouTube Trailers**: Watch movie trailers on YouTube with a single click.
3. **OpenAI Movie Recommendations**: Enter your OpenAI key for personalized movie suggestions.
4. **User Authentication**: NetflixGPT provides secure user registration and authentication using JWT (JSON Web Tokens). Users can sign up, log in, and manage their profiles with ease.

## Technologies Used
- Frontend: ReactJS, TailwindCSS
- Backend: ExpressJS, NodeJS, MongoDB
- Frontend Hosting: Vercel
- Backend Hosting: Render
- TMDB: Movie database for fetching movie details.
- OpenAI: Movie recommendation engine.

## Installation
1. Clone the repository to your local machine.
```
    git clone https://github.com/Abhay-yadav966/NetflixGPT.git
```
2. Install the required packages.
```
    npm install

    cd server
    npm install
```
3. Set up the environment variables:
Create a .env file in the root directory and /server Add the required environment variables, such as database connection details, JWT secret, and any other necessary configurations.
4. Start the development server.
```
    npm run dev
```
5. Open the project in your browser at [http://localhost:3000](http://localhost:3000) to view your project.

You can add your own tailwind.config.js file to customize your Tailwind setup.

## Contributions
Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.