import type { DrawingContext } from '../models/drawing-context';
import type { Layer } from '../models/layer';
import { PENCIL } from '../tools/all';
import { DEFAULT_COLORS, DEFAULT_PALETTE } from './colors';

const DEFAULT_LAYERS: Map<string, Layer> = new Map();
DEFAULT_LAYERS.set('layer_1231241', {canvas: document.createElement('canvas'), disabled: false, name: 'First layer'});

export const DRAWING_CONTEXT: DrawingContext = {
  lineWidth: 1,
  activeLayerID: null,
  layers: DEFAULT_LAYERS,
  colors: { ...DEFAULT_COLORS },
  palette: [...DEFAULT_PALETTE],
  previewColor: null,
  drawOpaque: true,
  eraserSize: 8,
  magnifierSize: 1,
  previousMagnifierSize: 4,
  brush: {
    type: 'circle',
    size: 4,
  },
  airbrushSize: 9,
  fillStyle: {
    stroke: true,
    fill: false,
  },
  tool: PENCIL,
  previousEditingTool: PENCIL,
  selection: null,
  view: {
    statusBar: true,
    colorBox: true,
    toolBox: true,
    textToolbar: false,
  },
  document: {
    title: 'untitled',
    dirty: false,
  },
  text: {
    active: false,
    font: 'Arial',
    size: 12,
    showToolbar: true,
    bold: false,
    italic: false,
    underline: false,
  },
  element: null,
  previewCanvas: null,
  previewContext: null,
  canvas: null,
  context: null,
  history: null,
};
