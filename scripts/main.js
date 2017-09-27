//
// Description:
//   Test script
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   badger make hubot to respond we don't need it
//   hubot hello - respond with Hello
//
// Author:
//   Juan Ramino
//
// URLS:
//   /hubot/chatsecrets/:room - display the secret
//

module.exports = (robot) => {

    robot.hear(/badger/i, (res) => {
      res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS")
    })

    robot.respond(/hello/i, (res) => {
      res.send('Hello')
    })

    robot.router.post('/hubot/chatsecrets/:room', (req, res) => {
      let room   = req.params.room
      
      let data = req.body.payload ? JSON.parse(req.body.payload) : req.body

      let secret = data.secret

      robot.messageRoom(room, `I have a secret: ${secret}`)

      res.send('OK')
  })
}