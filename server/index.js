const express = require('express');
const bodyParser = require('body-parser')
ctrl = require('./controller');

const app = express();
app.use(bodyParser.json());

app.post('/api/addPlist', ctrl.plistAdder);
app.delete('/api/deletePlist/:id', ctrl.plistDeleter);
// app.put('/api/editPlist/:id', ctrl.plistEditor)

app.get('/api/getSong', ctrl.songGetter);
app.post('/api/addSong', ctrl.songAdder);
app.put('/api/editSong/:id', ctrl.songEditor);
app.delete('/api/deleteSong/:id', ctrl.songRemover);

const port = 3005;
app.listen(port, () => {
    console.log("listening on port: " + port)
})