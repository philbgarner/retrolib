export interface RandomFloatFunction {
    (min: number, max: number): number
}

let randomFloatFunction: RandomFloatFunction = (min: number, max: number) => {
    return Math.random() * (max - min) + min
}

export function useRandomFloatFn(randomFn: RandomFloatFunction) {
    randomFloatFunction = randomFn
}

export function randInt(min: number, max: number): number {
    return Math.floor(randomFloatFunction(min, max))
}

export function rand(min: number, max: number): number {
    return randomFloatFunction(min, max)
}