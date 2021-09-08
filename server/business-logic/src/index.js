import express from 'express';
import action from './action/index.js';
import auth from './auth/index.js';
import event from './event/index.js';
import graphql from './graphql/index.js';

const PORT = process.env.PORT ?? 4000;

const app = express();

app.use('/action', action);
app.use('/auth', auth);
app.use('/event', event);
app.use('/graphql', graphql);

app.listen(PORT);
