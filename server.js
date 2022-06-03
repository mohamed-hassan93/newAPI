const { request } = require('express');
const express = require('express');
const { send, sendFile } = require('express/lib/response');
const app = express();
const port = 8000;

const rappers = {
    '21 savage': {
        'birthName': '21, 21, 21, 21 Savage',
        'birthLocation': 'London, UK',
        'age': 29
    },

    'chance the rapper': {
        'birthName': 'Chancelor Bennett',
        'birthlocation': 'Chicago, Illinois',
        'age': 29
    },

    'unknown':{
        'birthName': 'unknown',
        'birthlocation': 'unknown',
        'age': 0
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = request.params.name.toLowerCase()
    console.log(rappers[rapperName].birthName)

    if (rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }

        
})

app.listen(port, ()=>{
    console.log(`the port:${port} is what we onnnnnnnn`)
})

