<FocusContainer
  id="loginButton"
  render={({ refCallback, isFocused }) => (
    <Button
      ref={refCallback}
      isFocused={isFocused}
      onFocus={preloadLogin}
      onKeyDown={e => onKeyEnter(e, () => history.push(paths.AUTH_LOGIN))}
      hollow
    >
      <FormattedMessage {...loginToUbi.msg} />
    </Button>
  )}
/>;
