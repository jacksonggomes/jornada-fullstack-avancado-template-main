const Item = require("./item.model");
const ObjectId = require("mongoose").Types.objectId;

const findAll = () => {
    return Item.find().select("_id name imageUrl");
};

const findById = (id) => {
    const objectId = new ObjectId(id);
    return Item.findById(objectId);
};

const update = (id, item) => {
    const objectId = new ObjectId(id);
    return Item.findByIdAndUpdate(objectId, item);
};

const create = (item) => {
    return Item.create(item);
};

const deleteById = (id) => {
    const objectId = new ObjectId(id);
    return Item.findByIdAndDelete(objectId);
}

module.exports = {
    findAll,
    findById,
    create,
    deleteById,
    update,
};