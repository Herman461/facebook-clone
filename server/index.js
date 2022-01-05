const express = require('express');
const app = express();
const jsonParser = express.json();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
    preflightContinue: false,
    credentials: true
}));



const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server has been started on port ' + PORT)
})

app.post('/api/users', jsonParser, (req, res) => {
    const { username, password } = req.body;

    const user = {
        username: "Herman",
        password: "123"
    }
    if (user.username === username && user.password === password) {
        res.send({
            resultCode: 0
        })
    } else {
        res.send({
            resultCode: 1
        })
    }
});

app.post('/api/auth/verify-username', jsonParser, (req, res) => {
    const { username } = req.body;

    const issues = [];

    if (username.length < 1) {
        issues.push('Username is too short');
    }
    if (username.length > 20) {
        issues.push('Username is too long');
    }
    if (username === "Herman") {
        issues.push('Username is busy');
    }
    res.send({
        resultCode: 0,
        issues
    })
});
