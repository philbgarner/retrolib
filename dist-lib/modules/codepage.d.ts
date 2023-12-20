import Rect from "./rect";
export type CodeData = {
    codenumber: number;
    symbol: string;
    rect: Rect;
    description: string;
};
declare const codePage: CodeData[];
export default codePage;
