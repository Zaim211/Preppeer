const Feedback = require("../models/feedback.model");
const Blog = require("../models/blog.models");
const Refer = require("../models/refer.model");


class FeedbackForm {
  static async createFeedback(req, res) {
    const { firstName, lastName, email, whatsapp, referral, universities } = req.body;

    if (!firstName || !lastName || !email || !whatsapp || !referral || !universities) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    try {
      const feedback = await Feedback.create({
        firstName,
        lastName,
        email,
        whatsapp,
        referral,
        universities,
      });
      console.log("Feedback: ", feedback);
      res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
      console.error("Error creating feedback:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async createBlog(req, res) {
    const { fullName, title, content, hashtags } = req.body;

    if (!fullName || !title || !hashtags || !content) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    try {
      const blog = await Blog.create({
        fullName,
        title,
        content,
        hashtags,
      });
      console.log("Blog: ", blog);
      res.status(201).json({ message: "Blog created successfully", blog });
    } catch (error) {
      console.error("Error creating blog:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getBlogs(req, res) {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // Example endpoint to get a random blog
  static async getRandomBlog(req, res) {
  try {
    const count = await Blog.countDocuments();
    const random = Math.floor(Math.random() * count);
    const blog = await Blog.findOne().skip(random);
    res.json(blog);
  } catch (error) {
    res.status(500).send('Error fetching random blog');
  }
};

static async createRefer(req, res) {
  const {firstName,lastName,addressEmail,theirName,theirAddressEmail,selectRole} = req.body;
  if (!firstName || !lastName || !addressEmail || !theirName || !theirAddressEmail || !selectRole) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const refer = await Refer.create({
      firstName,
      lastName,
      addressEmail,
      theirName,
      theirAddressEmail,
      selectRole
    });
    console.log("Refer: ", refer);
    res.status(201).json({ message: "Blog created successfully", refer });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
} 

}

module.exports = FeedbackForm;
