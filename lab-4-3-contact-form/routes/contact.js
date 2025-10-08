const express = require('express');
const router = express.Router();
const { validateContact } = require('../middleware/validation');
const { appendToJsonFile, readJsonFile } = require('../middleware/fileManager');

const CONTACT_FILE = 'contacts.json';

// POST /api/contact save contact form
router.post('/', validateContact, async (req, res) => {
    try {
        const saved = await appendToJsonFile(CONTACT_FILE, req.body);
        if (!saved) throw new Error('Cannot save contact');

        res.json({
            success: true,
            message: 'Contact submitted successfully',
            data: saved
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error saving contact'
        });
    }
});

// GET /api/contact   get all contact submissions
router.get('/', async (req, res) => {
    try {
        const contacts = await readJsonFile(CONTACT_FILE);

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const start = (page - 1) * limit;
        const end = start + limit;

        res.json({
            success: true,
            total: contacts.length,
            page,
            limit,
            data: contacts.slice(start, end)
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts'
        });
    }
});

module.exports = router;
