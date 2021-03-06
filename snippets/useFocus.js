import { useEffect } from "react";

import useFocusContext from "./useFocusContext";

const refCallback = ({
  ref,
  nodes,
  id,
  depth,
  toFocus,
  addNode,
  focusNode,
  customRect
}) => {
  if (id in nodes) return;
  addNode({
    id,
    depth,
    rect: customRect || ref.getBoundingClientRect()
  });
  if (toFocus) focusNode(id);
};

export default ({
  id,
  customRect,
  depth = 0,
  toFocus = false,
  preventScroll = true
}) => {
  if (!id) throw new Error("You must specify an unique id (string).");

  const focus = useFocusContext();

  const isFocused = id === focus.currentId;
  const isPreviousFocus = id === focus.previousId;

  let focusRef;

  useEffect(
    () => (isFocused && focusRef ? focusRef.focus({ preventScroll }) : undefined),
    [isFocused]
  );

  useEffect(() => () => focus.removeNode(id), []);

  return {
    refCallback: ref => {
      if (ref) {
        focusRef = ref;
        refCallback({
          ref,
          id,
          depth,
          toFocus,
          customRect,
          nodes: focus.nodes,
          addNode: focus.addNode,
          focusNode: focus.focusNode
        });
      }
    },
    isFocused,
    isPreviousFocus,
    tabIndex: isFocused ? 0 : isPreviousFocus ? -1 : null
  };
};
