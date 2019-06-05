let str = '1,2,3,4,5,6,7,8'

let array = str.split(',')

//console.log(array.join(';'))

//console.log(array.reverse())

array.splice(1, 1, '11', '22')

let newArray = array.concat([1,2])
//console.log(newArray)


let objArr = [
    {name: 'Max',age:27},
    {name: 'Elena', age:18},
    {name: 'Victor', age:20}
]

console.log(objArr)

let foundPerson = objArr.find(function(person){
    return person.age === 20
})


console.log(foundPerson)


let oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i){
    return i % 2 !==0
})

console.log(oddArray)


let numArray = array.map(function(i){
    return parseInt(i * 2)
})

console.log(numArray)