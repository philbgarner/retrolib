import Rect from "./Rect";
export type CodeData = {
    codenumber: number;
    symbol: string;
    rect: Rect;
    description: string;
};
declare const codePage: CodeData[];
export default codePage;
