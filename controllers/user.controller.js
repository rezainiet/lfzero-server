const getAllUsers = (req, res) => {
    res.status(200).json({
        message: "Getting all users",
    });
};


const getOneUser = (req, res) => {
    res.status(200).json({
        message: "Getting one users",
    });
};


const createUser = (req, res) => {
    res.status(201).json({
        message: "User will be created",
    });
};


const updateUser = (req, res) => {
    res.status(200).json({
        message: "user is updated",
    });
};


const deleteUser = (req, res) => {
    res.status(201).json({
        message: "user is deleted",
    });
};

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };