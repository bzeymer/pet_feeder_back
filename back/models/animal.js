export default (mongoose) => { 
    
    const Schema = mongoose.Schema;

    return new Schema({
        especie: String,
        nome: String,
        idade: Number,
        raca: String,
        peso: Number,
        porte: String,
        descricao: String
    }, {
        collection: 'animais'
    })
}