
//votes
vote1 = document.getElementById("vote1")
vote2 = document.getElementById("vote2")
vote3 = document.getElementById("vote3")
vote4 = document.getElementById("vote4")

//results
res1 = document.getElementById("res1")
res2 = document.getElementById("res2")
res3 = document.getElementById("res3")
res4 = document.getElementById("res4")

//winner
winner = document.getElementById("winner")

let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0


function increment1() {
    count1 = count1 += 1
    console.log(count1)
    vote1.innerText = count1
}

function increment2() {
    count2 = count2 += 1
    console.log(count2)
    vote2.innerText = count2
}

function increment3() {
    count3 = count3 += 1
    console.log(count3)
    vote3.innerText = count3
}

function increment4() {
    count4 = count4 += 1
    console.log(count4)
    vote4.innerText = count4
}

function result() {
    res1.textContent = count1
    res2.textContent = count2
    res3.textContent = count3
    res4.textContent = count4

    if (count1 > count2 && count1 > count3 && count1 > count4) {
        winner.textContent = "Winner: Candidate 1"
    }
    else if (count2 > count1 && count2 > count3 && count2 > count4) {
        winner.textContent = "Winner: Candidate 2"
    }
    else if (count3 > count1 && count3 > count2 && count3 > count4) {
        winner.textContent = "Winner: Candidate 3"
    }
    else if (count4 > count1 && count4 > count2 && count4 > count3) {
        winner.textContent = "Winner: Candidate 4"
    }
    else {
        winner.textContent = "There is a Tie!"
    }
}

function reset() {

    count1 = 0
    count2 = 0
    count3 = 0
    count4 = 0

    vote1.innerText = count1
    vote2.innerText = count2
    vote3.innerText = count3
    vote4.innerText = count4

    
    console.log(count1, count2, count3, count4  )
}

function save(){
    result();
    reset();
}


