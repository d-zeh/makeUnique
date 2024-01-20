// Write your solution below:
let makeUnique = (word) => {
    let array = "";
    for (let i = 0; i < word.length; i++) {
        // console.log(word[i])
        if (!array.includes(word[i])) {
            array = array + word[i]
            // array.push(word[i])
        }

    }
    console.log(array)
}

makeUnique("wordodoyy")