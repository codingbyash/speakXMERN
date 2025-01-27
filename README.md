# QuestSearch

An Express-based application to handle various question types such as ANAGRAM, READ_ALONG, and MCQ using MongoDB.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (ensure the database service is running locally or remotely)

## Project Structure

```
project-directory
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── ...
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
└── README.md
```

## Setup Instructions

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm run dev
   ```

## API Endpoints

### Search Questions
- **GET** `/api/questions/search`
  - Query Parameters:
    - `query`: The search term
    - `type`: The type of question (e.g., ANAGRAM, MCQ, READ_ALONG)
    - `page`: The page number for pagination
    - `limit`: The number of results per page
  - Example:
    ```bash
    curl "http://localhost:5000/api/questions/search?query=word&type=ANAGRAM&page=1&limit=10"
    ```

### Error Handling

Custom middleware is used to handle errors and provide descriptive messages.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React (or any framework you intend to use)
- **Others**: dotenv, cors, mongoose

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Inspiration for the project
- Helpful resources or tutorials used
