
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
app.use(express.static('public'));


app.use(cors());

// Sample data
const overview = {
  name: "Jayraj Parmar",
  title: "Software Developer",
  description: "Passionate about building web applications and learning new technologies."
};

const education = [
  {
    institution: "Humber Polytechnic",
    degree: "Advanced Diploma in Computer Programming and Analysis",
    year: "2024 - 2026"
  }
];

const projects = [
  {
    title: "News app",
    highlight: "An interactive web-based news app using React.",
    details: [
      "a responsive news application using React.js and News API ",
      "news, filtered among multiple categories",
      "React Router for navigation and state management "
    ],
    images: [
       "http://localhost:8000/img1.png",
      "http://localhost:8000/img2.png"
    ]
  },
  {
    title: "Book Finder App",
    highlight: "A mobile app to search and track books.",
    details: [
      "Search books using Google Books API.",
      "Add books to your personal reading list.",
      "Mark books as To-Read, Reading, or Finished."
    ],
    images: [
      "http://localhost:8000/project1.1.png",
      "http://localhost:8000/project1.2.png",
      "http://localhost:8000/project1.3.png"
    ]
  }
];

// Endpoints
app.get('/getOverview', (req, res) => {
  res.json(overview);
});

app.get('/getEdu', (req, res) => {
  res.json(education);
});

app.get('/getProjects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
