const User = require('../models/User');

// Log meditation session
exports.logMeditation = async (req, res) => {
  const { userId, breathsTaken } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.meditationLogs.push({ date: new Date(), breathsTaken });
    await user.save();

    res.status(200).json({ success: true, message: 'Meditation logged' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get meditation logs
exports.getMeditationLogs = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, logs: user.meditationLogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
