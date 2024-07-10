const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure this points to your views directory

// Static folder for CSS, images, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('index'); // This renders views/index.ejs
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
