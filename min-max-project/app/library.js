module.exports = {

	findMinMax:function (arr){
var min = Math.min.apply(null, arr);
 var max = Math.max.apply(null, arr);
if (min === max){ 
 return [min];
}
return [min, max ] ;
}
}