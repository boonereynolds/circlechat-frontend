angular.module('circlechat')
  .controller('ChatsController', ChatsController)
  .controller('ChatsNewController', ChatsNewController)

ChatsController.$inject = ['$http']

function ChatsController($http){
  var self = this
  self.all = [
    {name: "Boone's Chat", messages: [{content: "hello"}, {content:"is it working?"}]},
    {name: "Kate's Chat", message: 'hellllooooo'}
  ]

  self.addChat = addChat
  self.newChat = {}
  self.selectedChat = {}

  function addChat(){
    self.all.push(self.newChat)
    self.newChat = {}
  }

  function setChat(chat){
    self.selectedChat = chat
  }
}

// send chat id & message data
// 
