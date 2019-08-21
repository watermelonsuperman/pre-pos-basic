'use strict';

function find(collection, element) {
  for(var i = 0;i<collection.length;i++){
    if(collection[i] === element){
      return element;
    }
  }
}
