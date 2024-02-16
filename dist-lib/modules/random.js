var randomFloatFunction = function (min, max) {
    return Math.random() * (max - min) + min;
};
export function useRandomFloatFn(randomFn) {
    randomFloatFunction = randomFn;
}
export function randInt(min, max) {
    return Math.round(randomFloatFunction(min, max));
}
export function rand(min, max) {
    return randomFloatFunction(min, max);
}
//# sourceMappingURL=random.js.map