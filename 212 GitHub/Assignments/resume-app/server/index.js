
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

// Sample data
const overview = {
  name: "Jayraj Parmar",
  title: "Software Developer",
  description: "Passionate about building web applications and learning new technologies."
};

const education = [
  {
    institution: "Seneca College",
    degree: "Advanced Diploma in Computer Programming and Analysis",
    year: "2023 - 2026"
  },
  {
    institution: "Gujarat Technological University",
    degree: "B.E. in Mechanical Engineering",
    year: "2017 - 2021"
  }
];

const projects = [
  {
    title: "Book Finder App",
    highlight: "A mobile app to search and track books.",
    details: [
      "Search books using Google Books API.",
      "Add books to your personal reading list.",
      "Mark books as To-Read, Reading, or Finished."
    ],
    images: [
      "https://via.placeholder.com/600x300.png?text=Book+Finder+1",
      "https://via.placeholder.com/600x300.png?text=Book+Finder+2",
      "https://via.placeholder.com/600x300.png?text=Book+Finder+3"
    ]
  },
  {
    title: "Online Resume",
    highlight: "An interactive web-based resume using React.",
    details: [
      "Built with React, Express, and Bootstrap.",
      "Dynamic data fetching from backend.",
      "Clean, responsive design with sections for skills, education, and projects."
    ],
    images: [
      "https://via.placeholder.com/600x300.png?text=Resume+1",
      "https://via.placeholder.com/600x300.png?text=Resume+2"
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
