const { Router } = require('express');
const AppController = require('../controllers/AppController');
const AuthController = require('../controllers/AuthController');
const FilesController = require('../controllers/FileController');
const multer = require('multer');
const router = Router();

// Use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Routes for the test server
router.get("/api/preppeer", AppController.preppeer);

// Routes for the authentication

router.post("/api/registerStudent", AuthController.registerStudent);
router.post("/api/SignInStudent", AuthController.SignInStudent);
router.get('/api/profileStudent', AuthController.profileStudent);
router.post('/api/google', AuthController.googleLogin);

router.post("/api/registerConsultant", AuthController.registerConsultant);
router.post("/api/SignInConsultant", AuthController.SignInConsultant);
router.get('/api/profileConsultant', AuthController.getConsultantProfile);
router.get('/api/registerConsultant/:id', AuthController.getConsultantById);
router.get('/api/registerConsultant', AuthController.getAllConsultants);



router.post('/api/logout', AuthController.logoutUser);

// Route for uploading images
router.post('/api/upload', upload.array('photos', 100), FilesController.uploadImages);


module.exports = router;