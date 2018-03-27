import express from 'express';

import rotaAnimais from './routes/animais';
import rotaRacoes from './routes/racoes';
import rotaRefeicoes from './routes/refeicoes';
import rotaRoubos from './routes/roubos';

let app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

rotaAnimais(app);
rotaRacoes(app);
rotaRefeicoes(app);
rotaRoubos(app);

app.listen(3000, () => {
    console.log('Express running');
});