// index.js
const express = require('express');
const multer = require('multer');
const cors = require('cors')
const bodyParser = require('body-parser');
const fs = require('fs');

// Initialize Express
const app = express();

// Set up body-parser for JSON parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Appends the file original name with timestamp
    },
});

const upload = multer({ storage: storage });

// Middleware to log form data
app.post('/upload', upload.fields([
    { name: 'customerData[avatar]', maxCount: 1 },
    { name: 'documentsData[AadharCard][file]', maxCount: 1 },
    { name: 'documentsData[PANCard][file]', maxCount: 1 },
    { name: 'documentsData[VoterID][file]', maxCount: 1 },
    { name: 'documentsData[DrivingLicense][file]', maxCount: 1 },
    { name: 'documentsData[Passport][file]', maxCount: 1 },
    { name: 'documentsData[ITRNo][file]', maxCount: 1 },
    { name: 'employmentStatusData[salarySlip]', maxCount: 1 }
]), (req, res) => {
    // Optional: Log to a file
    fs.writeFileSync('formdata.log', JSON.stringify({
        body: req.body,
        files: req.files
    }, null, 2));

    res.status(201).json({
        status: 201,
        message: "Customer register successful"
    })
});

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
