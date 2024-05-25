import express from 'express';
// //import cors from 'cors';
// import { routes } from './routes';

const app = express();

// //app.use(cors());
// app.use(express.json());
// app.use(routes);

app.post('/feedbacks', (req, res) => {
    return res.send('Agora vai')
})

app.listen(3333, () => {
    console.log('HTTP server running')
});