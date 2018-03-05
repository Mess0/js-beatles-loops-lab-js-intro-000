var theBeatlesPlay = (musicians, instruments) => {
  let arr = [];
  for(let i = 0; i < musicians.length; i++ ){
     var inner = arr[musicians[i]]
    for(let j = 0; j < instruments.length; j++ ){
      var outer = arr[instruments[i]];
    }
  }
  return arr.concat(inner + " plays " + outer)
}

// return musicians.map(function(subMus){
//   return instruments.map(function(subInst){
//       return subMus + " plays " + subInst;
//   });
// });
