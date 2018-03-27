export default (mongoose) => { 
    
    const Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId;
    
    return new Schema({
        animal: {type: ObjectId, ref: "animal"},
        hora: Date,
        fimJejum: Date        
    }, {
        collection: 'roubos'
    })
}