It seems that you're trying to style your README to include code blocks with a clean and modern touch, similar to the interface in the screenshot you uploaded. Here's how you can structure your `README.md` file to display code in a neat, organized manner using markdown formatting:

### Adding Code Blocks

1. **Code Blocks**: You can format code sections by enclosing them with triple backticks (\`\`\`) or using a specific language identifier to enable syntax highlighting (e.g., `bash` for terminal commands, `ini` for configuration files, etc.).

Here’s an example based on the content you showed in your image:

````markdown
# SAB-IO

SAB-IO is a robust and scalable Node.js application built using Express, MongoDB, and EJS. It provides a powerful backend infrastructure that can handle various tasks such as data processing, API integration, and real-time communication, ideal for building modern web applications.

## 🚀 Features

- **Built with Node.js**: Server-side JavaScript environment for fast and scalable network applications.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database, known for its flexibility and scalability.
- **EJS**: Embedded JavaScript templating engine to build dynamic web pages.
- **API Ready**: Easily extendable for RESTful APIs.
- **Authentication**: User authentication with robust session management.
- **Real-Time Communication**: Real-time features such as notifications or chat can be easily added.

## 🛠️ Technologies

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing structured and unstructured data.
- **EJS**: Templating engine for rendering views.
- **Passport.js**: Middleware for handling authentication.

## ⚡ Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (locally or use MongoDB Atlas for a cloud instance)

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/shaifsab/sab-io.git
````

Navigate to the project directory:

```bash
cd sab-io
```

Install the required dependencies:

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory of the project and set the necessary environment variables:

```ini
MONGO_URI=<your_mongodb_connection_string>
SESSION_SECRET=<your_session_secret>
PORT=3000
```

### Running the Application

To start the application locally, use the following command:

```bash
npm start
```

The application will run on `http://localhost:3000`.

## 🔧 Development

For development purposes, you can run the application with auto-reloading by using:

```bash
npm run dev
```

This will start the app and watch for changes in the source code.

## 📦 Deployment

For deployment, you can use cloud services like:

* **Heroku**
* **AWS EC2**
* **DigitalOcean**

Ensure your production environment variables are set up correctly, particularly the database connection string and session secret.

## 🌐 Live Link

Check out the live version of this application: [www.shorturl.io](http://www.shorturl.io)

## 🤝 Contributing

We welcome contributions! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Here’s how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📄 Documentation

For further documentation on setting up, extending, and maintaining the application, please refer to the Wiki section of this repository or the inline comments within the codebase.

---

Thank you for using SAB-IO! 🚀

```

### Key Enhancements:
1. **Code Blocks**: The code blocks in the README file are now enclosed in triple backticks with language tags (`bash`, `ini`, etc.) for better syntax highlighting.
2. **Copy Buttons**: The copy button is part of GitHub’s markdown rendering, and the code blocks will allow users to copy commands or configurations directly.

This will display the code sections in a cleaner and more structured way, as shown in the image you uploaded.
```
