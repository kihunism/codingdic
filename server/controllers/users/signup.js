const { user } = require('../../models')

module.exports = async (req, res) => {
    const { email, password, password_check, nickname } = req.body

    res.status(201).send({
        data: {
            email,
            password,
            password_check,
            nickname
        },
        message: 'signup OK'
    })
}