module.exports = {

	arithGeo:function(arr)
{
    var array_type = -1;
    if (arr.length === 0){
      return 0;
    }
    else if(arr.length <= 2) return true;

    var a = arr[1], r = a/arr[0], i;
    for (i = 2; i < arr.length; ++i) {
        if ((a *= r) == arr[i]){
            array_type = "Geometric";
        }
        else{
            array_type = -1;
            break;
        }
    }

    if (array_type == "Geometric")
        return array_type;


    a = arr[1], d = a - arr[0], i;
    for (i = 2; i < arr.length; ++i) {
        if ((a += d) == arr[i]){
            array_type = "Arithmetic";
        }
        else {
            array_type = -1;
            break;
        }
    }
    return array_type;
}
}