export interface RandomFloatFunction {
    (min: number, max: number): number;
}
export declare function useRandomFloatFn(randomFn: RandomFloatFunction): void;
export declare function randInt(min: number, max: number): number;
export declare function rand(min: number, max: number): number;
