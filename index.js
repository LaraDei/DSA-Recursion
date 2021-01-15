//*************************************************** */
//*************************************************** */
//*************************************************** */
// 1. Counting Sheep

const numOfSheep = function(num) {
    // Base case
    if (num === 0) {
        return `All sheep jumped over the fence`;
    }
    let countDown = num - 1;
    console.log(`${num}: Another sheep jumps over the fence`)
    // General case
    return numOfSheep(countDown);

}
//console.log(numOfSheep(3));



//*************************************************** */
//*************************************************** */
//*************************************************** */
// 2. Power Calculator

const powerCalculator = function(base, exponent) {
    // edge case
    if (Math.sign(exponent) === -1){
        return `exponent should be >= 0`
    }
    if (exponent === 0) {
        return 1;
    }
    // Base case
    if(exponent === 1){
        return base;
    }
    // General case
    return base * powerCalculator(base, exponent-1);

}
//console.log(powerCalculator(3, 4));



//*************************************************** */
//*************************************************** */
//*************************************************** */
// 3. Reverse String

const reverseString = function(str) {
    // Base case
    if (str.length <= 1){
        return str[0]
    }

    // General case
    return str[str.length - 1] + reverseString(str.slice(0, -1));

}

//console.log(reverseString('happy'));



//*************************************************** */
//*************************************************** */
//*************************************************** */
// 4. nth Triangular Number

const triangular  = function(num) {
    // Base case
    if (num === 1){
        return num
    }

    // General case
    return num + triangular(num - 1);

}
//console.log(triangular(9));



//*************************************************** */
//*************************************************** */
//*************************************************** */
// 5. String Splitter

const splitter  = function(string, separator) {
    // Base case
    if (!separator) {
        return [string];
    }
    if(string.indexOf(separator) === -1) {
        return [string];
    }
    // General case
    return [string.slice(0, string.indexOf(separator)), ...splitter(string.slice(string.indexOf(separator) + 1), separator)]

}

//console.log(splitter('02/20/2020', '/'));



//*************************************************** */
//*************************************************** */
//*************************************************** */
// 6. Fibonacci

const fibonacci  = function(num) {
    // Base case
    if (num <= 1){
        return num
    }
    // General case
    return fibonacci(num - 1) + (fibonacci(num - 2))
}

//console.log(fibonacci(7));



//*************************************************** */
//*************************************************** */
//*************************************************** */
// 7. Factorial

const factorial  = function(num) {
    // Base case
    if (num === 1){
        return num
    }
    // General case
    return num * factorial(num-1);
}

//console.log(factorial(5));



//*************************************************** */
//*************************************************** */
//*************************************************** */
// 8. Find a way out of the maze
  
let mySmallMaze = [
    ['X', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
]

let maze = [
    ['X', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

/**
 * Start at the starting point given in fx
 * 
 */

const mazePath = function(maze){
    const completed = []
    const mazeRun = function(curtMaze, curtLocation, letters=""){
        //Check if we can go right.
        if (curtLocation[1]<curtMaze[0].length-1){
            if (curtMaze[curtLocation[0]][curtLocation[1]+1] === "e"){
                const newletters = letters + "R"
                completed.push(newletters)
                //console.log(newletters,"done")
                return newletters
            }
            if (curtMaze[curtLocation[0]][curtLocation[1]+1] === " "){
                const newletters = letters + "R"
                curtMaze[curtLocation[0]][curtLocation[1]+1]= "X"
                //console.log(newletters)
                //console.log(curtMaze)
                mazeRun([...curtMaze],[curtLocation[0],curtLocation[1]+1],newletters)
            }
        }
        //Check if we can go down.
        if(curtLocation[0]<curtMaze.length-1){
            if (curtMaze[curtLocation[0]+1][curtLocation[1]] === "e"){
                letters = letters + "D"
                //console.log(letters,"done")
                completed.push(letters)
                return letters
            }
            if (curtMaze[curtLocation[0]+1][curtLocation[1]] === " "){
                const newletters = letters + "D"
                curtMaze[curtLocation[0]+1][curtLocation[1]]= "X"
                //console.log(newletters)
                //console.log(curtMaze)
                mazeRun([...curtMaze],[curtLocation[0]+1,curtLocation[1]],newletters)
            }
        }
        //Check if we can go left.
        if(curtLocation[0]>0){
            if (curtMaze[curtLocation[0]][curtLocation[1]-1] === "e"){
                const newletters = letters + "L"
                //console.log(newletters,"done")
                completed.push(newletters)
                return newletters
            }
            if (curtMaze[curtLocation[0]][curtLocation[1]-1] === " "){
                const newletters = letters + "L"
                curtMaze[curtLocation[0]][curtLocation[1]-1]= "X"
                //console.log(newletters)
                //console.log(curtMaze)
                mazeRun([...curtMaze],[curtLocation[0],curtLocation[1]-1],newletters)
            }
        }
        //Check if we can go up.
        if (curtLocation[0]>0){
            if (curtMaze[curtLocation[0]-1][curtLocation[1]] === "e"){
                const newletters = letters + "U"
                //console.log(newletters,"done")
                completed.push(newletters)
                return newletters
            }
            if (curtMaze[curtLocation[0]-1][curtLocation[1]] === " "){
                const newletters = letters + "U"
                curtMaze[curtLocation[0]-1][curtLocation[1]]= "X"
                //console.log(newletters)
                //console.log(curtMaze)
                mazeRun([...curtMaze],[curtLocation[0]-1,curtLocation[1]],newletters)
            }
        }
    }
    
    
    var i = 0
    while (i<maze.length){
        console.log(maze[i])
        i++
    }
    mazeRun([...maze],[0,0])
    console.log(completed)
    //return a solution
    return completed[0]
}

// console.log(mazePath(mySmallMaze))
// console.log(mazePath(maze))


//*************************************************** */
//*************************************************** */
//*************************************************** */
// 9. Find ALL the ways out of the maze

const mazeAllPaths = function(maze){
    const completed = []
    const mazeRun = function(curtMaze, curtLocation, letters=""){
        //Check if we can go right.
        if (curtLocation[1]<curtMaze[0].length-1){
            if (curtMaze[curtLocation[0]][curtLocation[1]+1] === "e"){
                const newletters = letters + "R"
                completed.push(newletters)
                //console.log(newletters,"done")
                return newletters
            }
            if (curtMaze[curtLocation[0]][curtLocation[1]+1] === " "){
                const newletters = letters + "R"
                curtMaze[curtLocation[0]][curtLocation[1]+1]= "X"
                //console.log(newletters)
                //console.log(curtMaze)
                mazeRun([...curtMaze],[curtLocation[0],curtLocation[1]+1],newletters)
            }
        }
        //Check if we can go down.
        if(curtLocation[0]<curtMaze.length-1){
            if (curtMaze[curtLocation[0]+1][curtLocation[1]] === "e"){
                letters = letters + "D"
                //console.log(letters,"done")
                completed.push(letters)
                return letters
            }
            if (curtMaze[curtLocation[0]+1][curtLocation[1]] === " "){
                const newletters = letters + "D"
                curtMaze[curtLocation[0]+1][curtLocation[1]]= "X"
                //console.log(newletters)
                //console.log(curtMaze)
                mazeRun([...curtMaze],[curtLocation[0]+1,curtLocation[1]],newletters)
            }
        }
        //Check if we can go left.
        if(curtLocation[0]>0){
            if (curtMaze[curtLocation[0]][curtLocation[1]-1] === "e"){
                const newletters = letters + "L"
                //console.log(newletters,"done")
                completed.push(newletters)
                return newletters
            }
            if (curtMaze[curtLocation[0]][curtLocation[1]-1] === " "){
                const newletters = letters + "L"
                curtMaze[curtLocation[0]][curtLocation[1]-1]= "X"
                //console.log(newletters)
                //console.log(curtMaze)
                mazeRun([...curtMaze],[curtLocation[0],curtLocation[1]-1],newletters)
            }
        }
        //Check if we can go up.
        if (curtLocation[0]>0){
            if (curtMaze[curtLocation[0]-1][curtLocation[1]] === "e"){
                const newletters = letters + "U"
                //console.log(newletters,"done")
                completed.push(newletters)
                return newletters
            }
            if (curtMaze[curtLocation[0]-1][curtLocation[1]] === " "){
                const newletters = letters + "U"
                curtMaze[curtLocation[0]-1][curtLocation[1]]= "X"
                //console.log(newletters)
                //console.log(curtMaze)
                mazeRun([...curtMaze],[curtLocation[0]-1,curtLocation[1]],newletters)
            }
        }
    }
    
    
    var i = 0
    while (i<maze.length){
        console.log(maze[i])
        i++
    }
    mazeRun([...maze],[0,0])
    //console.log(completed)
    //return all solution
    return completed
}

// console.log(mazeAllPaths(mySmallMaze))
// console.log(mazeAllPaths(maze))
 


//*************************************************** */
//*************************************************** */
//*************************************************** */
// 10. Anagrams

const anagrams  = function(str) {
    // Base case
    if(str.length <2 ){
        return str;
    }
    // General case
    let results = []
    for (var i = 0; i < str.length; i++) 
      {
        var firstChar = str[i];
        var otherChar = str.substring(0, i) + str.substring(i + 1);
        var otherPermutations = anagrams(otherChar);
        
        for (var j = 0; j < otherPermutations.length; j++) {
          results.push(firstChar + otherPermutations[j]);
        }
      }
      return results;
    }

//console.log(anagrams('east'));



//*************************************************** */
//*************************************************** */
//*************************************************** */
// 11. Organization Chart
const chartData =[
    {id: 'Zuckerberg', boss: null},
    {id: 'Schroepfer', boss: 'Zuckerberg'},
    {id: 'Schrage', boss: 'Zuckerberg'},
    {id: 'Sandberg', boss: 'Zuckerberg'},
    {id: 'Bosworth', boss:'Schroepfer' },
    {id: 'Zhao', boss:'Schroepfer' },
    {id: 'Steve', boss:'Bosworth' },
    {id: 'Kyle', boss:'Bosworth' },
    {id: 'Andra', boss:'Bosworth' },
    {id: 'Richie', boss: 'Zhao'},
    {id: 'Sofia', boss: 'Zhao'},
    {id: 'Jen', boss: 'Zhao'},
    {id: 'VanDyck', boss:'Schrage' },
    {id: 'Swain', boss:'Schrage' },
    {id: 'Sabrina', boss:'VanDyck' },
    {id: 'Michelle', boss:'VanDyck' },
    {id: 'Josh', boss:'VanDyck' },
    {id: 'Blanch', boss:'Swain' },
    {id: 'Tom', boss:'Swain' },
    {id: 'Joe', boss:'Swain' },
    {id: 'Goler', boss:'Sandberg' },
    {id: 'Hernandez', boss:'Sandberg' },
    {id: 'Moissinac', boss:'Sandberg' },
    {id: 'Kelley', boss:'Sandberg' },
    {id: 'Eddie', boss:'Goler' },
    {id: 'Julie', boss:'Goler' },
    {id: 'Annie', boss:'Goler' },
    {id: 'Rowi', boss:'Hernandez'},
    {id: 'Inga', boss:'Hernandez'},
    {id: 'Morgan', boss:'Hernandez'},
    {id: 'Amy', boss:'Moissinac'},
    {id: 'Chuck', boss:'Moissinac'},
    {id: 'Vinni', boss:'Moissinac'},
    {id: 'Eric', boss:'Kelley'},
    {id: 'Ana', boss:'Kelley'},
    {id: 'Wes', boss:'Kelley'},
  ];

  const hierarchy  = function(arr, boss) {
      let result = {};
    // Base case
    if(arr.length <= 1){
        result = arr.map(i => {
            i.id
        })
    }
    // General case
    arr 
        .filter(i => i.boss === boss)
        .forEach(i => result[i.id] = hierarchy(arr, i.id))
    return result
}

console.log(hierarchy(chartData, null));

//*************************************************** */
//12. Binary Representation

const binary  = function(num) {
    // Base case
    if(num === 0){
        return num
    }
    // General case
    return num.toString(2)
}

//console.log(binary(3));