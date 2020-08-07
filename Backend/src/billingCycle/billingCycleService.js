const BillingCycle = require('./billingCycle')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({
    new: true,
    runValidators: true
})

module.exports = BillingCycle