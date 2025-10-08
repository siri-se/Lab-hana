const express = require('express');
const router = express.Router();
const { validateFeedback } = require('../middleware/validation');
const { appendToJsonFile, readJsonFile } = require('../middleware/fileManager');

const FEEDBACK_FILE = 'feedback.json';

// POST /api/feedback save feedback form
router.post('/', validateFeedback, async (req, res) => {
    try {
        const saved = await appendToJsonFile(FEEDBACK_FILE, req.body);
        if (!saved) throw new Error('Cannot save feedback');

        res.json({
            success: true,
            message: 'Feedback submitted successfully',
            data: saved
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error saving feedback'
        });
    }
});

// GET /api/feedback/stats get feedback statistics
router.get('/stats', async (req, res) => {
    try {
        const feedbacks = await readJsonFile(FEEDBACK_FILE);
        const total = feedbacks.length;
        const ratingSum = feedbacks.reduce((sum, f) => sum + (f.rating || 0), 0);
        const averageRating = total ? (ratingSum / total).toFixed(2) : 0;

        res.json({
            success: true,
            total,
            averageRating
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching feedback stats'
        });
    }
});

module.exports = router;
