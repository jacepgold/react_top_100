import React from 'react'

class SongForm extends React.Component {
  state = { title: '', artist: '' }

  handleChange = (e) => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let song = { title: this.state.title, artist: this.state.artist }
    this.props.addSong( song );
    this.setState({ title: '', artist: '' });
  }

  render() {
    return(
      <div>
      <form className="container">
        <h2>Add a New Song</h2>
        <input 
            autoFocus
            name="title"
            required
            onChange={ this.handleChange }
            value={ this.state.title }
            placeholder="Add a Song Title"
          />
          <input 
            name="artist"
            required
            onChange={ this.handleChange }
            value={ this.state.artist } 
            placeholder="Add an Artist"
          />
          <button type="submit" onClick={ this.handleSubmit } className='btn blue'>Submit</button>
        </form>
        <br />
      </div>
    )
  }
}

export default SongForm;