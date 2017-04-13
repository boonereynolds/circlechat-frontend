angular.module('circlechat')
  .controller('ChatsController', ChatsController)

function ChatsController(){
  var self = this
  self.all = [
    {name: "Boone's Chat", messages: [{content: "hello"}, {content:"is it working?"}]},
    {name: "Kate's Chat", message: 'hellllooooo'}
  ]

  self.addChat = addChat
  self.newChat = {}

  function addChat(){
    self.all.push(self.newChat)
    self.newChat = {}
  }
}
