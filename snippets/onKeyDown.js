onKeyDown = throttle(e => {
  const {
    focusedNode: { depth, rect },
    navigate,
    nodes,
    showExitModal
  } = this.props;

  switch (e.keyCode) {
    case 27: // PS: ◯ button ; PC: Esc
    case 196: // XBOX: B button
      this.goBackOrShowExitModal();
      break;
    case 112: // PS: △ button
    case 198: // XBOX: Y button
      showExitModal();
      break;
    case 37: // PS: DPAD and LEFT ANALOG left ; PC: ←
    case 214: // XBOX: LEFT STICK left
    case 205: // XBOX: DPAD left
      navigate(nodes, depth, rect, "left");
      break;
    case 38: // PS: DPAD and LEFT ANALOG up ; PC: ↑
    case 211: // XBOX: LEFT STICK up
    case 203: // XBOX: DPAD up
      navigate(nodes, depth, rect, "up");
      break;
    case 39: // PS: DPAD and LEFT ANALOG right ; PC: →
    case 213: // XBOX: LEFT STICK right
    case 206: // XBOX: DPAD right
      navigate(nodes, depth, rect, "right");
      break;
    case 40: // PS: DPAD and LEFT ANALOG down ; PC: ↓
    case 212: // XBOX: LEFT STICK down
    case 204: // XBOX: DPAD down
      navigate(nodes, depth, rect, "down");
      break;
    default:
      break;
  }
}, 250);
