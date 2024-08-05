const { Router } = require('express');
const AppController = require('../controllers/AppController');
const AuthController = require('../controllers/AuthController');
const FilesController = require('../controllers/FileController');
const PaymentController = require('../controllers/PaymentController');
const multer = require('multer');
const express = require('express');
const FeedbackForm = require('../controllers/FeedbackForm');
const AppointmentController = require('../controllers/AppointmentController');
const router = Router();

// Use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Routes for the test server
router.get("/api/preppeer", AppController.preppeer);

// Routes for the authentication
router.get('/api/currentUserRole', AuthController.getCurrentUserRole);
router.post("/api/registerStudent", AuthController.registerStudent);
router.post("/api/SignInStudent", AuthController.SignInStudent);
router.get('/api/profileStudent', AuthController.profileStudent);
router.post("/api/reset-password-student", AuthController.resetPasswordStudent);
router.post('/api/google', AuthController.googleLogin);

router.post("/api/registerConsultant", AuthController.registerConsultant);
router.post("/api/SignInConsultant", AuthController.SignInConsultant);
router.get('/api/profileConsultant', AuthController.getConsultantProfile);
router.get('/api/registerConsultant/:id', AuthController.getConsultantById);
router.get('/api/registerConsultant', AuthController.getAllConsultants);

// Routes for payment
router.post('/api/payment/createIntent', PaymentController.createPaymentIntent);
router.post('/api/payment/webhook',express.raw({type: 'application/json'}), PaymentController.receivePaymentWebhook);

router.get('/api/consultant/:id/available-slots',AppointmentController.getAvailableSlotsForConsultant);
router.post('/api/consultant/:id/schedule',AppointmentController.createConsultantSchedule);


router.post('/api/logout', AuthController.logoutUser);

// Route for uploading images
router.post('/api/upload', upload.array('photos', 100), FilesController.uploadImages);

// Route for Feedback

router.post('/api/feedback', FeedbackForm.createFeedback);


module.exports = router;