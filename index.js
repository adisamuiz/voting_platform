
//votes
let vote = [
    document.getElementById("vote1"),
    document.getElementById("vote2"),
    document.getElementById("vote3"),
    document.getElementById("vote4")
]

//results
let res = [
    document.getElementById("res1"),
    document.getElementById("res2"),
    document.getElementById("res3"),
    document.getElementById("res4")
]

//winner
let winner = document.getElementById("winner")

let count = [0, 0, 0, 0]

function increment1() {
    count[0]++
    console.log(count[0])
    vote[0].innerText = count[0]
}

function increment2() {
    count[1]++
    console.log(count[1])
    vote[1].innerText = count[1]
}

function increment3() {
    count[2]++
    console.log(count[2])
    vote[2].innerText = count[2]
}

function increment4() {
    count[3]++
    console.log(count[3])
    vote[3].innerText = count[3]
}

function result() {
    res[0].textContent = count[0]
    res[1].textContent = count[1]
    res[2].textContent = count[2]
    res[3].textContent = count[3]

    if (count[0] > count[1] && count[0] > count[2] && count[0] > count[3]) {
        winner.textContent = "Winner: Candidate A"
    }
    else if (count[1] > count[0] && count[1] > count[2] && count[1] > count[3]) {
        winner.textContent = "Winner: Candidate B"
    }
    else if (count[2] > count[0] && count[2] > count[1] && count[2] > count[3]) {
        winner.textContent = "Winner: Candidate C"
    }
    else if (count[3] > count[0] && count[3] > count[1] && count[3] > count[2]) {
        winner.textContent = "Winner: Candidate D"
    }
    else {
        winner.textContent = "There is a Tie!"
    }
}

function reset() {

    count = [0, 0, 0, 0]
    
    vote[0].innerText = count[0]
    vote[1].innerText = count[1]
    vote[2].innerText = count[2]
    vote[3].innerText = count[3]

    
    console.log(count)
}

function save(){
    result();  
    reset();
      
}



