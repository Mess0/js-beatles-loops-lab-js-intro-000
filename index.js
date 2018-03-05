var theBeatlesPlay = (musicians, instruments) => {
  for(let i = 0; i < musicians.length; i++ ){
    var inner = musicians[i];
    for(let j = 0; j < instruments.length; j++ ){
      var outer = instruments[i];
    }
  }
  return inner  + " plays " + outer
}

// return musicians.map(function(subMus){
//   return instruments.map(function(subInst){
//       return subMus + " plays " + subInst;
//   });
// });
