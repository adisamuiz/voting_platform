

vote1 = document.getElementById("vote1")
vote2 = document.getElementById("vote2")
vote3 = document.getElementById("vote3")
vote4 = document.getElementById("vote4")

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

function save() {
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


