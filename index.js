
var theBeatlesPlay = (musicians, instruments) =>{
    return musicians.map(function (subMus){
      return instruments.map(function (subInst){
        return subMus + " plays " + subInst
      }
    }
}

// arr.concat(musicians, instruments)
// return arr.reduce(function(musicians,instruments){
//   musicians + ' plays ' + instruments
// })
