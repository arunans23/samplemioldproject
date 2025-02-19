import * as dmUtils from "./dm-utils";

/*
* title : "root",
* inputType : "JSON",
*/
interface Root {
    name: string
    age: number
    cars: {
        model: string
        colors: string[]
    }[]
}

/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
    fullName: string
    age: number
    cars: {
        model: string
        colors: string[]
    }[]
}



/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        fullName: input.name,
        age: input.age,
        cars: input.cars
    }
}

