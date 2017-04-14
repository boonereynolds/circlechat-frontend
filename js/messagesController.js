angular.module('circlechat')
  .controller('MessagesController', MessagesController)

MessagesController.$inject = ['$http', '$state']

function MessagesController($http){
  var self = this
  self.all = []
  self.newMessage = {}
  self.addMessage = addMessage
  self.getMessages = getMessages
//
//   function getMessages(){
//     $http
//       .get('https://circlechatapi.herokuapp.com/api/chat' + chat._id)
//       .then(function(res){
//         self.all = res.data.messages
//       })
//   }
// }

function getMessages(){
    $http
      .get('https://circlechatapi.herokuapp.com/api/messages')
      .then(function(response){
        self.all = response.data
    })
  }

function addMessage(){
    $http
      .post('https://circlechatapi.herokuapp.com/api/messages', self.newMessage)
      .then(function(response){
        getMessages()
    })
    self.newMessage = {}
  }
}


// function MessagesController($http, $state){
//   var self = this;
//   self.addMessage = addMessage;
//   self.newMessage = {};
//
//   function addMessage(){
//     $http
//       .post('https://circlechatapi.herokuapp.com/api/messages', self.newMessage)
//       .then(function(response){
//         $state.go('index')
//     });
//     self.newCriminal = {};
//   }
// }
