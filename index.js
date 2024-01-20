const driversName = [ "Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers(){
    const first2 =  [...driversName]
    first2.pop()
    first2.pop()
    return first2 
}
function returnLastTwoDrivers(){
    const last2 = [...driversName]
    last2.shift()
    last2.shift()
    return last2
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(tickets){
    return function (fare){
        return tickets * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, fn){
    return fn(driversName)
    
}
