export const incrementCounter = function (playload) {
  return function ({dispatch, state}) {
    dispatch({type: 'INCREMENT', playload: playload})
  }
}

export const updateRadarBookmarks = function (playload) {
  return function ({dispatch, state}) {
    dispatch({type: 'UPDATE_RADAR_BOOKMARKS', playload: playload})
  }
}
