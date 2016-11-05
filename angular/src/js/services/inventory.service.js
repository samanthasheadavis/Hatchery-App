angular.module('hatcheryApp')

.service('InventoryService',function(EggFactory,$http){
  function addEggs(number){
    var claimedEggsArray = [];
    for(var i = 0; i < number; i++){
      var eggToPush = new EggFactory();
      claimedEggsArray.push(eggToPush);
      console.log(eggToPush);
      printEggs(claimedEggsArray);
    }
    return claimedEggsArray;
  }
  /*this function makes an API GET call and performs the callback function specified by the controller*/
  this.getJSON = function(callback){
    // $http.get('https://glacial-anchorage-56426.herokuapp.com/show').then(callback);
  };
  /*this function makes an API PUT call based on number from controller function*/
  this.sendJSON = function(object){
    // return $http.post('https://glacial-anchorage-56426.herokuapp.com/create', object);
    console.log('in sendJSON: post initial object');
  }
  /*this function makes an API PUT call based on number from controller function*/
  this.editJSON = function(object){
    // return $http.put('https://glacial-anchorage-56426.herokuapp.com/edit', object);
    console.log('in editJSON: put object');
  }
})

.factory('EggFactory', function(){
return function Egg(){
  return {
    id: Date.now(),
    image: "/images/tan-egg.png"
  }
};
});
