//Generic Function Basics

function getFirstElement<ELementType>(array: ELementType[]) {
  return array[0];
}

const numbers = [1, 2, 3]
const firstNum = getFirstElement(numbers)

const strings = ["sdf", "sdf"]
const firstString = getFirstElement(strings)

//function
const a = [1,2,3]
a.map(() => {
  return "sdf"
})

//maps and sets
//Can even nest generic values
const map  = new Map<string, Map<string, number>>()

//Generic Type Basics
/*
const response: ApiResponse<{name: string, age: number}> = {
  data: {
    name: "Kyle",
    age: 29,
  },
  isError: false
}
*/


/*type ApiResponse<Data extends object = { status : number}> = {
  data: Data
  isError: boolean
} */

//Simple Version:
type ApiResponse<Data> = {
  data: Data,
  isError: boolean
}

//type UserResponse = ApiResponse<{ name: string, age: number}>
//type BlogResponse = ApiResponse<{ title: string}>
//type StatusResponse = ApiResponse<{status: number}>

const response: ApiResponse<{ name : string}> = {
  data: {
    name: "He"
  },
  isError: false,
}
