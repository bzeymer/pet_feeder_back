import db from '../db';

export default (app) => {
    
    app.get('/refeicoes', (req, res) => {
        const refeicoes = db.mongoose.model('refeicoes', db.models.refeicoes, 'refeicoes');
        refeicoes.find({}).lean().exec(
            function (error, result) {
                if (!error) {
                    res.send(result);
                } else {
                    res.send(error);
                }    
            }
        );
    });
}