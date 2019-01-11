import { Component } from 'react';
import { connect } from 'react-redux';

import { addNode, removeNode, focusNode } from '../actions/focus';

const mapStateToProps = (state, ownProps) => ({
  nodes: state.focus.nodes,
  isFocused: state.focus.currentId === ownProps.id,
  isPreviousFocus: state.focus.previousId === ownProps.id,
  currentRef: state.focus.currentId
    ? state.focus.nodes[state.focus.currentId].ref
    : null
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
      addNode({
        id,
        ref,
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
      const { isFocused, currentRef, preventScroll } = this.props;
      if (currentRef && isFocused && !prevProps.isFocused) {
        currentRef.focus({ preventScroll });
      }
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
