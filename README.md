# SAB-IO: URL Shortening Service

![SAB-IO Banner](https://i.ibb.co/vvDDkmZm/Untitled-1.jpg)  
*A modern, efficient, and scalable URL shortening service built with Node.js, Express, MongoDB, and EJS.*

---

## 📖 Overview

SAB-IO is a robust URL shortening service designed to create, manage, and track shortened URLs with ease. Built with modern web technologies, it offers a scalable backend infrastructure, seamless user experience, and extensibility for RESTful APIs. Whether you're building a personal project or a large-scale application, SAB-IO provides a lightweight yet powerful solution for URL management.

---

## 🌐 Live Demo

[Live Link](#) *(To be added later)*

---

## ✨ Features

- **URL Shortening**: Generate concise, shareable URLs with a single click.
- **Scalable Architecture**: Powered by Node.js and Express for high performance.
- **MongoDB Integration**: Flexible NoSQL database for storing and retrieving URL data.
- **Dynamic UI**: Built with EJS for rendering clean, dynamic web pages.
- **API Support**: RESTful API-ready for easy integration with other services.
- **User Authentication**: Secure session management with Passport.js and JWT.
- **Extensible**: Easily add real-time features like analytics or notifications.
- **Responsive Design**: Optimized for both desktop and mobile users.

---

## 🛠️ Technologies

- **Node.js**: JavaScript runtime for scalable server-side applications.
- **Express.js**: Minimalist web framework for building robust APIs.
- **MongoDB**: NoSQL database for efficient data storage.
- **EJS**: Embedded JavaScript templating for dynamic views.
- **Passport.js**: Authentication middleware for secure user sessions.
- **JWT**: JSON Web Tokens for secure authentication.
- **JavaScript (ES6+)**: Modern JavaScript for clean and maintainable code.

---

## ⚙️ Installation

Follow these steps to set up SAB-IO locally:

### Prerequisites
- **Node.js**: Version 14 or higher.
- **MongoDB**: Local installation or a cloud instance (e.g., MongoDB Atlas).
- **Git**: For cloning the repository.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shaifsab/sab-io.git
   cd sab-io
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:
   - Create a `.env` file in the root directory.
   - Add the following environment variables based on your setup:
     ```env
     MONGO_URL=mongodb://localhost:27017/url
     MONGO_USER=your_mongodb_username
     MONGO_PASSWORD=your_mongodb_password
     MONGO_CLUSTER=your_mongodb_cluster
     # MONGO_DB=url
     BASE_URL=http://localhost:5000
     BASE_API=/api
     BASE_PORT=5000
     JWT_TOKEN=your_jwt_secret
     ```
   - Replace `MONGO_USER`, `MONGO_PASSWORD`, `MONGO_CLUSTER`, and `JWT_TOKEN` with your own values. Uncomment and set `MONGO_DB` if needed, or update `BASE_URL` for production (e.g., `https://url-sab-io.onrender.com`).

4. **Run the Application**:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:5000` (or your configured `BASE_URL`).

5. **Run in Development Mode**:
   ```bash
   npm run dev
   ```
   Uses `nodemon` for automatic server restarts during development.

---

## 🚀 Usage

1. **Shorten a URL**:
   - Navigate to the homepage (`BASE_URL`).
   - Enter a valid URL and submit to receive a shortened link.
2. **Access Shortened URLs**:
   - Use the shortened URL to redirect to the original link.
3. **Manage URLs**:
   - Authenticated users can view and manage their shortened URLs via the dashboard.

---

## 📡 API Endpoints

SAB-IO provides a RESTful API for programmatic access. Key endpoints include:

- **POST /api/shorten**: Create a new shortened URL.
  - Body: `{ "url": "https://example.com" }`
  - Response: `{ "shortUrl": "http://localhost:5000/abc123" }`
- **GET /:shortId**: Redirect to the original URL.
- **GET /api/urls**: Retrieve a list of shortened URLs (authenticated users only, requires JWT).

*Note*: Full API documentation is available in the `/docs` directory.

---

## 🧪 Testing

Run tests to ensure the application is working as expected:

```bash
npm test
```

Tests are written using [Jest](https://jestjs.io/) and cover core functionality, including URL shortening and redirection.

---

## 📂 Project Structure

```plaintext
sab-io/
├── /public/           # Static assets (CSS, JS, images)
├── /views/            # EJS templates
├── /routes/           # Express route handlers
├── /models/           # MongoDB schemas
├── /controllers/      # Business logic
├── /middleware/       # Custom middleware (e.g., authentication)
├── /docs/             # API documentation
├── .env               # Environment variables
├── app.js             # Main application file
├── package.json       # Project metadata and dependencies
└── README.md          # This file
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) and ensure your code adheres to the project's style guidelines.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📞 Contact

For questions or feedback, reach out to the project maintainer:

- **GitHub**: [shaifsab](https://github.com/shaifsab)
- **Email**: shaifsab@example.com

---

## 🌟 Acknowledgments

- [Node.js](https://nodejs.org/) for the runtime environment.
- [Express.js](https://expressjs.com/) for the web framework.
- [MongoDB](https://www.mongodb.com/) for the database.
- [EJS](https://ejs.co/) for templating.
- [Passport.js](http://www.passportjs.org/) for authentication.

---

*Built with ❤️ by [shaifsab](https://github.com/shaifsab)*
