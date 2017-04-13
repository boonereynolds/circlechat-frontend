angular
  .module('circlechat', ['ui.router'])
  .config(MainRouter)

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider']
function MainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('chat', {
      url: '/chat',
      templateUrl: 'chat.html'
    })
    .state('signin', {
      url: '/signin',
      templateUrl: 'signin.html'
    })

    $urlRouterProvider.otherwise('/')
}
