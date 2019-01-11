export const FOCUS_ADD_NODE = "FOCUS_ADD_NODE";
export const FOCUS_REMOVE_NODE = "FOCUS_REMOVE_NODE";
export const FOCUS_NODE = "FOCUS_NODE";
export const FOCUS_LOWER_DEPTH = "FOCUS_LOWER_DEPTH";

export const addNode = node => ({
  type: FOCUS_ADD_NODE,
  node
});

export const removeNode = id => ({
  type: FOCUS_REMOVE_NODE,
  id
});

export const focusNode = id => ({
  type: FOCUS_NODE,
  id
});

export const focusLowerDepth = () => ({
  type: FOCUS_LOWER_DEPTH
});
