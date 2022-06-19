
function calculateSpread(firstTeam = 'team 1', secondTeam = 'team 2', firstScore = 10, secondScore = 7, spread = 2 , ChoseFirstTeam = true){
    // team1 score 20 spread 6.5 team2 score 35
    let spreadResult = firstScore - secondScore
    if(spreadResult >= spread && ChoseFirstTeam){
        return `You chose ${firstTeam} and they beat the spread by ${spreadResult}!`
    }
        return `You chose ${firstTeam} and they got beat by a spread of ${spreadResult}!`


}

console.log(calculateSpread('Detroit','Green Bay', 15, 12, 1, true))


console.log(calculateSpread('miami', 'buffalo', 56, 23, 6.5, false))

console.log(calculateSpread())

function calculateMileage(miles = 0, rate = 0){
    let cost = miles * rate
    return cost
}
console.log(calculateMileage(68, 0.56))

function gpaCalc(gpa = 0, ){

}

function multiply(a,b){
    console.log(a*b)
}
multiply(599,44)

function calcBMI(height, weight){
    let BMI = weight * (height^2)
    console.log(BMI)

}calcBMI(188, 210)


const array = [78,56,232,412,228]
array1 = array.sort((a,b)=> a-b)
console.log(array1)


let banana = 'banana '

banana= banana.repeat(3)

console.log(banana)

let arr1 = [1,2,3]
let arr2 = [2,4,6]

console.log(...arr1)


function pushElement(arr){
    var el=4;
    //push el to arr
    console.log(arr.push(el))
  }
  pushElement([1,2,3,])



  const circle = {
    radius: 1,
    location:{
        x:1,
        y: 1
    },
    draw: function(){
        console.log(draw);
    }
  }

  circle.draw();

