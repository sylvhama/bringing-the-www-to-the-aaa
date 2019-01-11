import React from "react";

import useFocus from "../hooks/useFocus";

export default () => {
  const elt1Focus = useFocus({ id: "elt1", toFocus: true });
  const elt2Focus = useFocus({ id: "elt2" });

  return (
    <>
      <div
        ref={elt1Focus.refCallback}
        style={{ color: elt1Focus.isFocused ? "tomato" : "black" }}
        tabIndex={elt1Focus.tabIndex}
        role="button"
      >
        Elt1
      </div>

      <div
        ref={elt2Focus.refCallback}
        style={{ color: elt1Focus.isFocused ? "tomato" : "black" }}
        tabIndex={elt2Focus.tabIndex}
        role="button"
      >
        Elt2
      </div>
    </>
  );
};
