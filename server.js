const express = require('express');
const PORT = process.env.PORT || 5000;

// allows us to use tensorflow node on the server
// const tfnode = require('@tensorflow/tfjs-node');
// const mobilenet = require('@tensorflow-models/mobilenet');

//Multer allows us to use the file that is uploaded
// const multer = require('multer');
// const upload = multer({ storage: multer.memoryStorage() })

const app = express();

// Serve static files
app.use(express.static('public'));

// let mobilenetModel;

// const loadMobilenetModel = async () => {
//     mobilenetModel = await mobilenet.load();
//     console.log('TensorFlow model loaded!');
    
// }

// loadMobilenetModel();

// app.post('/tensorflow', upload.single('photo'), async (req, res) => {
//     // process the photo
//     const tfimage = await tfnode.node.decodeImage(req.file.buffer);
//     const predictions = await mobilenetModel.classify(tfimage)
//     console.log( predictions );

//     // respond to the client
//     res.send(predictions)
// })

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
