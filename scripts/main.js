module.exports = (robot) => {
    robot.hear(/badger/i, (res) => {
      res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS")
    })

    robot.router.post('/hubot/chatsecrets/:room', (req, res) => {
      let room   = req.params.room
      
      let data = req.body.payload ? JSON.parse(req.body.payload) : req.body

      let secret = data.secret

      robot.messageRoom(room, `I have a secret: ${secret}`)

      res.send('OK')
  })
}