import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Spain', duration: '6:05' },
    { title: 'Tumba', duration: '7:25' },
    { title: 'Down D', duration: '4:42' },
    { title: 'Island of Magic', duration: '3:23' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
