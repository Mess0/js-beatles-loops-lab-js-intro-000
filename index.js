
var theBeatlesPlay = (musicians, instruments) =>{
  var arr = []
  arr.concat(musicians, instruments)
  return arr.reduce(function(musicians,instruments){
    musicians + ' plays ' + instruments
  })
}
