###📚 Books - Show
A responsive Reading List web application built with React and Bulma CSS, featuring full CRUD operations with data persisted in a local JSON database via the REST Client (VS Code extension).

##🚀 Features

📖 View all books in a card-based grid layout
➕ Add new books using the "Add a Book" form
✏️ Edit existing book titles
🗑️ Delete books from the reading list
🖼️ Book cards display cover images fetched dynamically
💾 Data stored and persisted in db.json via JSON Server (REST Client)


##🛠️ Tech Stack
Technology        Purpose
- React           UI component library       
- Bulma CSS       Responsive CSS framework
- JSON Server     Mock REST API / local database
- REST Client     VS Code extension for testing API endpoints
- Vite            Frontend build tool & dev server

##🗄️ Database — db.json
Books are stored locally in db.json and served by JSON Server as a mock REST API:
json{
  "Books": [
    { "title": "hello world", "id": 2 },
    { "title": "build", "id": 5 },
    { "title": "content", "id": 6 },
    { "title": "career", "id": 7 } 
    ]
}

##⚙️ Getting Started
Prerequisites

- Node.js (v16 or higher)
- npm
- VS Code with REST Client extension (optional, for API testing)

##🧪 Testing API with REST Client

Create an api.http file in the root and use the VS Code REST Client extension to test endpoints:
http### Get all books
GET http://localhost:3001/Books

## Add a new book
POST http://localhost:3001/Books
Content-Type: application/json

{
  "title": "Clean Code",
  "id": 99
}

## Update a book
PUT http://localhost:3001/Books/99
Content-Type: application/json

{
  "title": "Clean Code (Updated)",
  "id": 99
}

## Delete a book
DELETE http://localhost:3001/Books/99

##🤝 Contributing

- Fork the project
- Create your feature branch: git checkout -b feature/my-feature
- Commit your changes: git commit -m 'Add my feature'
- Push to the branch: git push origin feature/my-feature
- Open a Pull Request

##📄 License

This project is open source and available under the MIT License.

##👨‍💻 Author

Krishnaraj R

React Developer | Full Stack Developer | AI Enthusiastist 🚀
