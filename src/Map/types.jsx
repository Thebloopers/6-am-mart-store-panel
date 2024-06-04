export const DrawingActionKind = {
  SET_OVERLAY: "SET_OVERLAY",
  UPDATE_OVERLAYS: "UPDATE_OVERLAYS",
  UNDO: "UNDO",
  REDO: "REDO",
};

export function isCircle(overlay) {
  return overlay.getCenter !== undefined;
}

export function isMarker(overlay) {
  return overlay.getPosition !== undefined;
}

export function isPolygon(overlay) {
  return overlay.getPath !== undefined;
}

export function isPolyline(overlay) {
  return overlay.getPath !== undefined;
}

export function isRectangle(overlay) {
  return overlay.getBounds !== undefined;
}
