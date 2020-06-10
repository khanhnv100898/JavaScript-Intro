const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const server = express();
server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


server.get('/', (req, res) => {
    fs.readFile('./data.json', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error!');
        }

        const questions = JSON.parse(data);
        const randomIndex = Math.floor(Math.random() * (questions.length));
        const randomQuestion = questions[randomIndex];
        console.log(randomIndex,randomQuestion);

        res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>${randomQuestion.content}</h2>

        <div>
            <form method = 'get' action = '/vote/${randomQuestion.id}/yes'>
                <input type = 'submit' value='yes' />
            </form>
            <form method = 'get' action = '/vote/${randomQuestion.id}/no'>
                <input type = 'submit' value='no' />
            </form>
        </div>

        <div>
            <button id = 'question-result'>Ressult</button>
            <button id = 'other-question'>Other question</button>
        </div>
        <script src = './public/index.js'></script>
    </body>
    </html>
    `);
    });
});

server.get('/create-question', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname + '/public/create-question.html'));
    // res.status(200).sendFile(path.resolve(__dirname, './public/create-question.html'));
});

server.post('/create-question', (req, res) => {
    fs.readFile('./data.json', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error!');
        }

        const questions = JSON.parse(data);
        console.log(typeof questions);
        questions.push({
            id: questions.length,
            content: req.body.content,
            yes: 0,
            no: 0,
            createdAt: new Date().toLocaleString(),
        });

        fs.writeFile('./data.json', JSON.stringify(questions), (err) => {
            if (err) {
                res.status(500).send('Internal server error!');
            }
            res.status(201).end('Sucess!');
        });
    });
});

server.get('/vote/:questionId/:vote', async (req, res) => {
    const { questionId, vote } = req.params;
    console.log(questionId, vote);

    fs.readFile('./data.json', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error!');
        }

        const questions = JSON.parse(data);
        let updateQuestion;
        for (let item of questions) {
            if (item.id === Number(questionId)) {
                vote === 'yes' ? item.yes += 1 : item.no += 1;
                break;
            }
        }

        fs.writeFile('./data.json', JSON.stringify(questions), (err, data) => {
            if (err) {
                res.status(500).send('Internal server error!');
            }

            res.status(200).send('Update question sucess!');
        });
    });
});

server.get('/result/:questionId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname + '/public/vote-result.html'));
});

server.get('/get-question-by-id', (req, res) => {
    console.log(req.query);
    const questionId = req.query.questionId;

    fs.readFile('./data.json', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error!');
        }

        const questions = JSON.parse(data);
        let selectQuestion;
        for (let item of questions) {
            if (item.id === Number(questionId)) {
                selectQuestion = item;
                break;
            }
        }

        if (selectQuestion) {
            res.status(200).json(selectQuestion);
        } else {
            res.status(200).json({ message: 'Question not found!' });   
        }
    });
});

server.get('/random-question', (req,res) => {
    fs.readFile('./data.json', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error!');
        }

        const questions = JSON.parse(data);
        const randomIndex = Math.floor(Math.random() * (questions.length));
        const randomQuestion = questions[randomIndex];
        res.status(200).json(randomQuestion);    
    });
});

server.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Server listen on port 3000..');
});