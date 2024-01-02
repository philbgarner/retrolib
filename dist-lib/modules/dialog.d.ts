import { Coordinates } from '../retrolib';
import Scene from './scene';
/**
 * Speech type.
 */
export type Speech = {
    speaker: string;
    text: string;
    coords: Coordinates;
};
/**
 * Dialog scene flavour: slowly display specified text and when the Rect
 * width is filled, wrap to the next line and continue. Also pause when
 * the Rect is fully filled waiting for input to continue.
 */
export declare class Dialog extends Scene {
    dialog: Speech[];
}
