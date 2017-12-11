import React, { Component } from 'react';
import axios from 'axios';

class Song extends Component {
  state = { editing: false }

  deleteSong = (song) => {
    console.log(song)
    axios.delete(`/api/songs/${song.id}`)
      .then(res => {
        const { songs } = this.state;
      })

    // console.log('Delete song activated');
    // axios.destroy(`/api/songs/${song.id}`, song)
    //   .then(res => {
    //     const { song } = this.state;
    //     this.setState({ songs: [res.data, ...song] })
    //   })
  }


  // deleteBook(selectedBook) {
  //   const self = this

  //   axios.delete(this.apiBooks + '/' + this.selectedBook.id).then((res) => {
  //     console.log(res)
  //     // we can update the state after response...
  //     self.setState({ selectedBook: selectedBook })
  //   })
  // }
  
  render() {
    const { id, title, artist } = this.props

    if (this.state.editing) {
      return(
        <div>
          <input

          />
        </div>
      );
    } else {
      return(
        <div>
          <h2>{id} - { title }</h2>
          <h4>By - { artist }</h4>
          <button className="btn green" onClick={ this.editSong }>Edit</button>
          <button className="btn red" onClick={ () => this.deleteSong({id, title, artist}) }>Delete</button>
        </div>
      );
    }
  }
}


// const Song = ({ id, title, artist }) => (
//   <div>
//     <h2>{title}</h2>
//     <h3>By - {artist}</h3>
//     <button className="btn" onClick={ this.editSong} >Edit</button>
//     <button className="btn" onClick={ this.deleteSong }>Delete</button>
//     <hr />
//   </div>
// )

export default Song;