import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import axios from 'axios'

class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    fetch('/api/songs')
      .then(res => res.json())
      .then(songs => this.setState({ songs }))
  }

  addSong = (newSong) => {
    axios.post('/api/songs', newSong)
      .then(res => {
        const { songs } = this.state;
        this.setState({ songs: [res.data, ...songs] })
      })
  }

  render() {
    return (
      <div>
        <header className="purple lighten-1">
          <nav className="purple lighten-1">
            <a href="index.html" className="brand-logo center">React Rails - Billboard Top 100</a>
          </nav>
        </header>
        <main className="container">
          <SongForm addSong={ this.addSong } />
          <SongList songs={this.state.songs} />
          <hr />
        </main>

        <footer className="page-footer purple lighten-1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">
                  The Most Amazing React and Rails Billboard Top 100 Chart... Ever!!!
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2017 Copyright <a href="http://www.JaceGold.com/">Jace P. Gold</a>
              <a className="grey-text text-lighten-4 right" href="https://github.com/jacepgold">Jace's GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;