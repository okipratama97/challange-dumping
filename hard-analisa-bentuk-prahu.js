// 1 > 2 > 3 > 4
// 1 > 3 > 5 > 7
// 1 > 4 > 8 > 
//        1   2   3    4 
//        3x1 3x3  3x5 3x7
// core > 3 > 9 > 15 > 21

var nput = 5
var nput2 = nput*2
var nput3 = (3 * ((nput*2)-1))
var nput4 = Math.floor(nput3/2)
var prnt = ""
var tmpo = 0

for ( let i = 1; i <= nput2; i++){
    //console.log("*")
    if ( i <= nput ){ 
        for ( let j = 1; j <= nput4 - i + 1; j++ ){
            prnt += " "
        }
        for ( let j = 1; j <= ((i*2)-1); j++ ){  
            prnt += "*"
        }
    }else{
        tmpo = (i-nput-1) * 2 
        for ( let j = 1; j <= tmpo; j++ ){
            prnt += " "
        }
        for ( let j = 1; j <= nput3 - (tmpo * 2); j++ ){
            prnt += "*"
        }
    }
    console.log(prnt)
    var prnt = ""
}


