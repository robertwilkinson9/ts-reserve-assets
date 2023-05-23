const express = require('express')

const DeskCtrl = require('../controllers/desk-ctrl')

const router = express.Router()

router.post('/desk', DeskCtrl.createDesk)
router.put('/desk/:id', DeskCtrl.updateDesk)
router.delete('/desk/:id', DeskCtrl.deleteDesk)
router.get('/desk/:id', DeskCtrl.getDeskById)
router.get('/desks', DeskCtrl.getDesks)

module.exports = router
