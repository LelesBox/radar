export const incrementCounter = function (playload) {
  return function ({dispatch, state}) {
    dispatch({type: 'INCREMENT', playload: playload})
  }
}
