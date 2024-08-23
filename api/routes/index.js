const { Router } = require('express');
const AppController = require('../controllers/AppController');
const AuthController = require('../controllers/AuthController');
const FilesController = require('../controllers/FileController');
const multer = require('multer');
const FeedbackForm = require('../controllers/FeedbackForm');
const AppointmentController = require('../controllers/AppointmentController');
const router = Router();

// Use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Routes for the test server
router.get("/api/preppeer", AppController.preppeer);




router.post("/api/registerConsultant", AuthController.registerConsultant);

router.get('/api/registerConsultant/:id', AuthController.getConsultantById);
router.get('/api/registerConsultant', AuthController.getAllConsultants);

// Routes for payment



router.post('/api/bookMeeting', AppointmentController.createMeetingBooking);

// Route for uploading images
router.post('/api/upload', upload.array('photos', 100), FilesController.uploadImages);

// Route for Feedback

router.post('/api/feedback', FeedbackForm.createFeedback);
router.post('/api/blog', FeedbackForm.createBlog);
router.get('/api/blog', FeedbackForm.getBlogs);
router.get('/api/blog/random', FeedbackForm.getRandomBlog);

router.post('/api/refer', FeedbackForm.createRefer)


module.exports = router;