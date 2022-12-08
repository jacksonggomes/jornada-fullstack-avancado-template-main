const { default: mongoose } = require("mongoose");

const databaseUrl = "mongodb://localhost:27017/jornada-fullstack-avancado";

const connectToDatabase = () => {
    return mongoose
        .connect(databaseUrl)
        .then(() => console.log("Banco de dados conectado com sucesso!"))
        .catch((error) =>
            console.log("Erro de conexão com o banco de dados.\n", error)
    );
};

const isObjectIdValid = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

module.exports = {
    connectToDatabase,
    isObjectIdValid,
};