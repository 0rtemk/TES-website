import express from 'express';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';
import { registerValidation } from './validations/auth.js';
import UserModel from './models/User.js';

mongoose
    .connect('mongodb+srv://admin:wwwwww@stp.oktmasz.mongodb.net/School_Tech_Ent?retryWrites=true&w=majority')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB error', err))

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello 123!");

});
app.post('/auth/register',registerValidation, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const doc = new UserModel({
        login: req.body.login,
        password: req.body.password,
        fullname: req.body.fullname,
        date_birth: req.body.date_birth,
        phone: req.body.phone,
        email: req.body.email,
        role_in_project: req.body.role_in_project,
        role_on_site: req.body.role_on_site

    
    });
    const user = doc.save();

    res.json(user);
}); 

app.listen(4444, (err) => {
    if (err) {
         return console.log(err);
    }

    console.log('Server OK');
});

