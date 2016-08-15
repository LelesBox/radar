export default {
  INCREMENT: function (state, mutation) {
    state.count = state.count + mutation.playload
  },
  UPDATE_RADAR_BOOKMARKS: function (state, mutation) {
    state.radarBookmarks[0].push(mutation.playload)
  }
}
