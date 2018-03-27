import db from '../db';

export default (app) => {
    
    app.get('/animais', (req, res) => {
        const animais = db.mongoose.model('animais', db.models.animais, 'animais');
        animais.find({}).lean().exec(
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