# Note Taker

## Description

The Note Taker application is a web-based tool designed to help users write, save, and manage their notes. It utilizes an Express.js backend to handle note storage and retrieval from a JSON file, providing a seamless way for users to keep track of their thoughts and tasks.

## User Story

As a small business owner, you want to be able to write and save notes so you can organize your thoughts and track tasks you need to complete.

## Features

- **Landing Page**: A starting page with a link to access the notes page.
- **Notes Page**: Displays existing notes and provides fields to create new notes.
- **Save and Clear Notes**: Options to save new notes and clear the input form.
- **View and Edit Notes**: Ability to view existing notes and edit them.

## Technologies Used

- **Backend**: Express.js
- **Storage**: JSON file for note data
- **Frontend**: HTML, CSS (pre-built, not modified)
- **Deployment**: Render for hosting

## Installation

Follow these steps to set up the Note Taker application locally:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:schneibley/homework-11-ExpressNotes.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd homework-11-ExpressNotes
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Open your browser and visit** `http://localhost:3000` **to see the application in action.**

## Usage

![Screenshot 2024-07-26 150119](https://github.com/user-attachments/assets/416453e7-6afc-4af5-b016-5f9a7ad266bf)

1. **Open the application** in your browser.
2. **Navigate to the notes page** via the link on the landing page.

![Screenshot 2024-07-26 150135](https://github.com/user-attachments/assets/9f8b5fc1-0d9e-434c-bfcc-0b9772644288)

4. **Create a new note** by entering a title and text, then click "Save Note."
5. **View and edit existing notes** by clicking on them in the left-hand column.
6. **Clear the form** to start a new note by clicking the "Clear Form" button.

## Configuration

There are no additional configuration steps needed for this application. The backend uses a `db.json` file to store note data. Ensure this file exists in the root directory of the project.

## Deployment

The application is deployed and hosted on Render. You can access the live application at [https://note-taker-render-app.onrender.com](https://note-taker-render-app.onrender.com).

## License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/) for the backend framework.
- [Render](https://render.com/) for hosting the application.

---

Feel free to replace placeholder URLs and contact information with your actual details.
