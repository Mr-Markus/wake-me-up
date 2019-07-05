const express = require('express');
const router = express.Router();
const wol = require('wake_on_lan');

const checkAuth = require('../middleware/check-auth');

router.get('/:mac', checkAuth, (req, res, next) => {
    wol.wake(req.params.mac, function (error) {
        if (error) {
            // handle error
            res.status(500).json({
                error: error
            });
        } else {
            // done sending packets
            res.status(200).json({
                message: 'Packet successfully sent'
            });
        }
    });
});