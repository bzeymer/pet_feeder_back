import animal from "./animal";
import racao from "./racao";

export default (mongoose) => { 
    
    const Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId;
    
    return new Schema({
        animal: {type: ObjectId, ref: "animal"},
        racao: {type: ObjectId, ref: "racao"},
        descricao: String,
        hora: Date
    }, {
        collection: 'refeicoes'
    })
}