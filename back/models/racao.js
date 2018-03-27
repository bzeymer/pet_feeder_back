import tabela from "./tabela";

export default (mongoose) => { 
    
    const Schema = mongoose.Schema;
    
    return new Schema({
        marca: String,
        modelo: String,
        senioridade: String,
        especial: String,
        tabela: [tabela]
    }, {
        collection: 'racoes'
    })
}