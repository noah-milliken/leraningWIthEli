
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




// function century(year) {
//     return Math.ceil(year)
     
//    }century(1301)


//    function spongeMeme(sentence) {
//     for(i = 0; i< sentence.length; i+=2){
//       sentence.charAt(i).toUppercase
//       console.log(sentence) 
      
//     }
//   }spongeMeme('The banana is green')

//   let item = 'banana'
//   function everyOther(word){
//     for(i = 0; i<= item.length; i+=2){
//         word.charAt(i).toUppercase
//         console.log(word) 
//     }
//   }everyOther(item)


//   function firstLetterToUppercase(input) {
//     let res = ""
//     for(i=0; i< input.length; i++){
//         res += i %2 == 0 ? input.charAt(i).toUppercase : input.charAt(i)
//     }
//     return res;
    
//   }
//   let test = 'I eat ice cream'
//   console.log(firstLetterToUppercase('bob'));


//   function firstLetterUppercase (input) {
//     var res = "";
//     for (i=0; i < input.length; i++) {
//        res += i % 2 == 0 ? input.charAt(i).toUpperCase() : input.charAt(i);
//     }
//     return res;  
//   }
  
  
//   console.log(firstLetterUppercase(test));