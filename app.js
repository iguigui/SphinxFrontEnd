var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var fetch = require('node-fetch')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


var server = app.listen(3001, () => {
    console.log('server is listening on port', server.address().port)
})

var messages = [{name:"Andrew", message:"lol"}, {name:"Mimi", message:"oui"}]

app.get('/messages', (req,res) =>{

    fetch('http://localhost:3000/system-status')
    .then(res => {
        return res.json()
    })
    .then(json => {
        res.send(json)
    })

})    


// SECOND VERSION WITH PROMISES
app.post('/messages', (req, res) => {
    res.sendStatus(200)
    // var message = new Message(req.body)
    // message.save()
    // .then(() => {
    //     console.log('saved')
    //     return Message.findOne({message: 'badword'})
    // })
    // .then((censored) => {
    //     if(censored) {
    //         console.log('censored words found', censored)
    //         return Message.remove({_id: censored.id})
    //     }
    //     res.sendStatus(200)
    // })
    // .then(()=> {
    //     console.log('removed censored message')
    // })
    // .catch((err) => {
    //     sendStatus(500)
    //     return console.error('errors :', err)
    // })  

})