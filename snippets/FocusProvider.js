const FocusProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchFocusNode = id => dispatch(focusNode(id));

  const throttledHandleKeyDown = throttle(
    event =>
      handleKeyDown(
        event,
        dispatchFocusNode,
        state.nodes,
        state.currentId,
        props.keyCodes,
        props.disablePreventDefaultStrokes
      ),
    props.throttle
  );

  useEffect(() => {
    if (!props.disableOnKeyDown)
      window.addEventListener("keydown", throttledHandleKeyDown);
    else window.removeEventListener("keydown", throttledHandleKeyDown);
    return () => window.removeEventListener("keydown", throttledHandleKeyDown);
  });

  return (
    <FocusContext.Provider
      value={{
        ...state,
        addNode: node => dispatch(addNode(node)),
        removeNode: id => dispatch(removeNode(id)),
        focusNode: dispatchFocusNode,
        focusLowerDepth: () => dispatch(focusLowerDepth())
      }}
    >
      {props.children}
    </FocusContext.Provider>
  );
};
