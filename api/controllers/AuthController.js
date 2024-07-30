const Student = require("../models/student.model");
const Consultant = require("../models/consultant.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);

class AuthController {

  static async getCurrentUserRole(req, res) {
    const { token } = req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) {
          return res.status(401).json({ error: "Unauthorized" });
        }
        try {
          const student = await Student.findById(userData.id);
          if (student) {
            return res.json({ role: 'student' });
          }
          const consultant = await Consultant.findById(userData.id);
          if (consultant) {
            return res.json({ role: 'consultant' });
          }
          return res.status(404).json({ error: "User not found" });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
    } else {
      res.status(401).json({ error: "No token provided" });
    }
  }

  static async registerStudent(req, res) {
    const { username, email, password } = req.body;

    try {
      const student = await Student.create({
        username,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
      });
      console.log("student", student);
      res.json({ student });
    } catch (error) {
      console.log("error in register", error);
      return res.status(400).json({ error: error.message });
    }
  }

 
  static async SignInStudent(req, res) {
    const { email, password } = req.body;
    try {
        const userDoc = await Student.findOne({ email });
        console.log("userDoc", userDoc);
        
        if (!userDoc) {
            return res.status(404).json({ message: "Email not found" });
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (!passOk) {
            return res.status(401).json({ message: "Invalid password" });
        }

        if (!jwtSecret) {
            console.error("JWT secret key is not defined.");
            return res.status(500).json({ error: "Internal server error" });
        }

        jwt.sign(
            {
                email: userDoc.email,
                id: userDoc._id,
            },
            jwtSecret,
            { expiresIn: "24h" },
            
            (err, token) => {
                if (err) {
                    console.error("JWT signing error:", err);
                    return res.status(500).json({ error: "Internal server error" });
                }
                res.cookie("token", token, { httpOnly: true }).json({ user: userDoc, token });
            }
        );
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


  static async resetPasswordStudent(req, res) {
    mongoose.connect(process.env.MONGO_URL);
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res
        .status(400)
        .json({ error: "Email and new password are required" });
    }

    try {
      const user = await Student.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const hashedPassword = bcrypt.hashSync(newPassword, 10);
      user.password = hashedPassword;
      await user.save();

      res.json({ message: "Password reset successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while resetting the password" });
    }
  }

  static async profileStudent(req, res) {
    const { token } = req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) {
          return res.status(401).json({ error: "Unauthorized" });
        }
        try {
          const student = await Student.findById(userData.id);
          if (!student) {
            return res.status(404).json({ error: "Student not found" });
          }
          const { username, email, _id } = student;
          res.json({ username, email, _id });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
    } else {
      res.status(401).json({ error: "No token provided" });
    }
  }

  static async registerConsultant(req, res) {
    const {
      name,
      email,
      password,
      major,
      price,
      country,
      language,
      universityCountry,
      addedPhotos,
      category,
      subcategories,
      availabilityStart,
      availabilityEnd,
      moreInfo,
      bio,
      admission,
    } = req.body;
    try {
      const consultant = await Consultant.create({
        name,
        email,
        major,
        password: bcrypt.hashSync(password, bcryptSalt),
        country,
        price,
        language,
        universityCountry,
        profilePicture: addedPhotos,
        admission,
        category,
        subcategories,
        bio,
        availabilityStart,
        availabilityEnd,
        moreInfo,
      });
      res.json({ consultant });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async SignInConsultant(req, res) {
    const { email, password } = req.body;
    try {
      const consultant = await Consultant.findOne({
        email,
      });
      if (!consultant) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
      const isPasswordValid = bcrypt.compareSync(password, consultant.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
      if (!jwtSecret) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const token = jwt.sign(
        {
          email: consultant.email,
          id: consultant._id,
        },
        jwtSecret,
        { expiresIn: "24h" }
      );
      res.cookie("token", token, { httpOnly: true });

      return res.json({ message: "Consultant signed in successfully" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getConsultantProfile(req, res) {
    const { token } = req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) {
          return res.status(401).json({ error: "Unauthorized" });
        }
        try {
          const consultant = await Consultant.findById(userData.id);
          if (!consultant) {
            return res.status(404).json({ error: "Consultant not found" });
          }
          const {
            name,
            email,
            _id,
            profilePicture,
            university,
            major,
            country,
            language,
            price,
            category,
            subcategories,
            universityCountry,
            admission,
            bio,
            availabilityStart,
            availabilityEnd,
            moreInfo,
          } = consultant;
          res.json({
            name,
            email,
            _id,
            profilePicture,
            university,
            major,
            country,
            price,
            language,
            universityCountry,
            category,
            bio,
            admission,
            availabilityStart,
            availabilityEnd,
            moreInfo,
            subcategories,
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
    } else {
      res.status(401).json({ error: "No token provided" });
    }
  }

  static async logoutUser(req, res) {
    res.cookie("token", "").json(true);
  }

  static async getConsultantById(req, res) {
    const { id } = req.params;
    try {
      const consultant = await Consultant.findById(id);
      res.json({ consultant });
      console.log("consultant", consultant);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getAllConsultants(req, res) {
    try {
      const consultants = await Consultant.find();
      res.json({ consultants });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async googleLogin(req, res) {
    try {
      const { username, email, photoURL } = req.body;

      let userDoc = await Student.findOne({ email });
      if (userDoc) {
        const token = jwt.sign({ id: userDoc._id }, jwtSecret);
        const { password, ...rest } = userDoc.toObject();
        res
          .status(200)
          .cookie("token", token, {
            httpOnly: true,
            sameSite: "Strict",
          })
          .json(rest);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
        const newUser = await Student.create({
          username,
          email,
          password: hashedPassword,
          profilePicture: photoURL,
        });
        const token = jwt.sign({ id: newUser._id }, jwtSecret);
        const { password, ...rest } = newUser.toObject();
        res
          .status(200)
          .cookie("token", token, {
            httpOnly: true,
            sameSite: "Strict",
          })
          .json(rest);
      }
    } catch (e) {
      console.error("Error during Google login:", e);
      res.status(422).json({ error: "Unable to process Google login" });
    }
  }
}

module.exports = AuthController;
