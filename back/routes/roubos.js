import db from '../db';

export default (app) => {
    
    app.get('/roubos', (req, res) => {
        const roubos = db.mongoose.model('roubos', db.models.roubos, 'roubos');
        roubos.find({}).lean().exec(
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