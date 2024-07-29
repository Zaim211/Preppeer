
class AppController {
  // Test the connection
   static async preppeer(req, res) {
    return res.json({ message: 'Server is running' });
  }
}

module.exports = AppController;