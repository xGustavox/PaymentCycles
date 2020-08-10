const express = require('express')

module.exports = server => {
    const router = express.Router()
    server.use('/api', router)

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
}