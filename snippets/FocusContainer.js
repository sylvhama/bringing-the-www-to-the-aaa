import { Component } from "react";
import { connect } from "react-redux";

import { addNode, removeNode, focusNode } from "../actions/focus";

const mapStateToProps = (state, ownProps) => ({
  nodes: state.focus.nodes,
  isFocused: state.focus.currentId === ownProps.id,
  isPreviousFocus: state.focus.previousId === ownProps.id
});

const mapDispatchToProps = dispatch => ({
  addNode: node => dispatch(addNode(node)),
  removeNode: id => dispatch(removeNode(id)),
  focusNode: id => dispatch(focusNode(id))
});

const FocusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    refCallback = ref => {
      const {
        nodes,
        id,
        depth,
        toFocus,
        addNode,
        focusNode,
        customRect
      } = this.props;
      if (id in nodes) return;
      this.ref = ref;
      addNode({
        id,
        depth,
        rect: customRect || ref.getBoundingClientRect()
      });
      if (toFocus) focusNode(id);
    };

    componentWillUnmount() {
      const { removeNode, id } = this.props;
      removeNode(id);
    }

    componentDidUpdate(prevProps) {
      const { isFocused, preventScroll } = this.props;
      if (this.ref && isFocused && !prevProps.isFocused)
        this.ref.focus({ preventScroll });
    }

    render() {
      const { isPreviousFocus, isFocused } = this.props;
      return this.props.render({
        refCallback: ref => ref && this.refCallback(ref),
        isFocused,
        isPreviousFocus,
        tabIndex: isFocused ? 0 : isPreviousFocus ? -1 : null
      });
    }
  }
);

// PropTypes

export default FocusContainer;
