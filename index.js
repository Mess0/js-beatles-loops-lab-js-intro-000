
var theBeatlesPlay = (musicians, instruments) =>{
  var arr = [].concat(musicians, instruments)
  return arr.reduce(function(musicians,instruments){
    musicians + ' plays ' + instruments
  })
}
