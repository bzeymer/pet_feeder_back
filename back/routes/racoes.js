import db from '../db';

export default (app) => {
    
    app.get('/racoes', (req, res) => {
        const racoes = db.mongoose.model('racoes', db.models.racoes, 'racoes');
        racoes.find({}).lean().exec(
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