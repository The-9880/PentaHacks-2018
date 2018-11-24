const express = require('express');
const spawn = require('child_process').spawn;

var app = express();
const port = 8081;

app.get('/api', (req, res) => {
    console.log('GET all customers');

    // var pyProcess = spawn('python', ["./python-scripts//CustomerInfoTable//SearchForAllCustomersInfo.py"]);
    // pyProcess.stdout.on('data', (data) =>{
    //     console.log(data);
    // });

    var pyProcess = spawn('python', ["./python-scripts/CustomerInfoTable/SearchForAllCustomersInfo.py"]);
    pyProcess.stdout.on('data', (data) => res.send(data.toString('utf-8'))); 
});

app.get('/api/assets', (req, res) => {
    console.log('GET all assets');
    var pyProcess = spawn('python', ["./python-scripts/AssetInfoTable/SearchForAllAssetInfo.py"]);
    pyProcess.stdout.on('data', (data) => {res.send(data.toString('utf-8'))}); 
});

app.get('/api/customers/:id', (req, res) => {
    var id = req.params.id;
    console.log('GET specific client details.');

    var pyProcess = spawn('python', ["./python-scripts/CustomerInfoTable/SearchForCustomer-ID.py", id]);
    pyProcess.stdout.on('data', (data) => res.send(data.toString('utf-8')));
});


app.listen(8081, ()=>{
    console.log('Server listening on ' + port);
});