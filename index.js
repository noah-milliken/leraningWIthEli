
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




