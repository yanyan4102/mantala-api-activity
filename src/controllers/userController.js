
const createUser = async (req, res) => {
    try {
        const newUser = await Transaction.create(req.body);
        res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
    module.exports = {
        createUser,
    }