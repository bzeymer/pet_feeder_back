import mongoose from 'mongoose';

import animalSchema from './models/animal';
import racaoSchema from './models/racao';
import refeicaoSchema from './models/refeicao';
import rouboSchema from './models/roubo';

mongoose.connect('mongodb://localhost:27017/app_db');
const models = {};

models.animais = animalSchema(mongoose);
models.racoes = racaoSchema(mongoose);
models.refeicoes = refeicaoSchema(mongoose);
models.roubos = rouboSchema(mongoose);

export default {mongoose, models};