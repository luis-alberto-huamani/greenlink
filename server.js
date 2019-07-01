const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const NewUser = require('./utils/new-user');
const uuidv1 = require('uuid/v1');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UserSchema = require('./models/user');
dotenv.config();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json({ limit: "16mb", extended: true }));
    server.use(bodyParser.urlencoded({ limit: "16mb", extended: true }));

    const mongoDB = process.env.URI_DB;
    mongoose.connect(mongoDB, { useFindAndModify: false });
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error la conexion a la base de datos fallo'));

    server.post('/api/registro', async (req, res) => {
      const user = req.body;
      const newUser = UserSchema(user);
      const isRegistred = await UserSchema.findOne({ mail: user.mail });
      if (isRegistred) {
        res.status(501).send(user.mail);
      } else {
        const userDone = await newUser.save();
        const data = {
          mail: userDone.mail,
          id: userDone.id
        };
        res.status(200).json(data);
      }
    });

    server.post('/api/postregister', async (req, res) => {
      const { id, img } = req.body;
      const isOk = await UserSchema.findByIdAndUpdate(id, { perfilImg: img });
      if (isOk) {
        res.status(200).send(id);
      } else {
        res.status(501).send(id);
      }
    });

    server.post('/api/newpost', async (req, res) => {
      const reqId = req.body.id;
      const reqAuthor = req.body.author;
      const reqDate = req.body.date;
      const reqImg = req.body.imgUrl;
      const reqhistory = req.body.history;
      const newPost = {
        author: reqAuthor,
        date: reqDate,
        imgUrl:  reqImg,
        history: reqhistory,
      };
    
      const resp = await UserSchema.findByIdAndUpdate(reqId, { $push: { posts: newPost } });
      if (resp) {
        res.status(200).send("todo bien");
      } else {
        res.status(501).send("todo mal");
      }
    });

    server.post('/api/perfil', async (req, res) => {
      const id = req.body.reqid;
      const data = await UserSchema.findById(id);
      res.status(200).json(data);
    });

    server.post('/api/login', async (req, res) => {
      const user = req.body;
      const validateUser = await UserSchema.findOne({ mail: user.mail, pass: user.pass });
      if (validateUser) {
        res.status(200).send(validateUser.id);
      } else {
        res.status(501).send();
      }
    });
    
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });