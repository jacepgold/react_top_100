import React from 'react'
import Song from './Song';

const SongList = ({ songs }) => (
  <div>
    {songs.map(s => {
      return (
        <Song key={s.id} {...s} />
      );
    })}
  </div>
)

export default SongList;