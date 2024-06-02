/**
 * A Layer type
 */
export interface Layer {
  /**
   * The element holding all the pixels
   */
  canvas: HTMLCanvasElement;
  /** 
   * Can it be modified
  */
  disabled: boolean;
  /**
   * User facing name of the layer.
   */
  name: string;
}