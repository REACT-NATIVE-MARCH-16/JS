// Dizideki en uzun elemanı bul

const theArray = [14, 5, 200, 100];

var maxTall = theArray[0]

console.log("first max: ", maxTall)

for (let counter = 0; counter < theArray.length; counter++) {
    if (maxTall < theArray[counter]) {
        maxTall = theArray[counter]
        console.log("new max: ", maxTall)
    }
}

console.log("final max: ", maxTall)

