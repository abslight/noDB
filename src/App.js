import React, { Component } from 'react';
import './App.css';
import './reset.css';
import axios from 'axios';
import Artist from './Components/Artist'

class App extends Component {
  constructor() {
    super();
    this.state = {
      plists: [],
      playlist: [],
      plistInput: '',
      artistInput: '',
      songInput: '',
      plistEdit: '',
    }
    this.deleteSong = this.deleteSong.bind(this);
    this.editSong = this.editSong.bind(this);
  }
  addPlist() {
    axios.post('/api/addPlist', { plistName: this.state.plistInput }).then(res => {
      this.setState({ plists: res.data, plistInput: '' })
    })
  }
  deletePlist(id) {
    axios.delete(`/api/deletePlist/${id}`).then(res => {
      this.setState({ plists: res.data })
    })
  }
  componentDidMount() {
    axios.get('/api/getSong').then(res => {
      this.setState({ playlist: res.data })
    })
  }
  addSong() {
    axios.post('/api/addSong', { artist: this.state.artistInput, song: this.state.songInput }).then(res => {
      this.setState({ playlist: res.data, artistInput: '', songInput: '' })
    })
  }
  deleteSong(id) {
    axios.delete(`/api/deleteSong/${id}`).then(res => {
      this.setState({ playlist: res.data })
    })
  }
  editSong(id, artist, song) {
    axios.put(`/api/editSong/${id}`, { artist: artist, song: song }).then(res => {
      console.log(res.data)
      this.setState({ playlist: res.data })
    })
  }


  render() {
    console.log(this.state)
    let mappedSongs = this.state.playlist.map((x, i) => {
      return (
        <Artist
          key={i + x.artist}
          x={x}
          editSong={this.editSong}
          deleteSong={this.deleteSong}
        />
      )
    })
    let mappedPlists = this.state.plists.map((x, i) => {
      return (
        <div key={i + x.plistName}>
          <h3 id="artist"> {x.plistName}</h3>
          <button>Edit</button>
          {/* <button onClick={() => this.deletePlist(x.id)}>Delete</button> */}
        </div>
      )
    })
    return (
      <div>
        <div>
          <div className="App">
            <header id="header">
              <img id="tc" src={require("./music note1.png")} alt="Treble Clef" />
              <h1 id="comp">Slight Sound</h1>
            </header>
            <section>
              <div className="parent">
                <ul id="sidenav">
                  <li id="nav">Navigation</li>
                  <br />
                  <br />
                  <li>Playlists:</li>
                  {mappedPlists}
                  <br />
                  <br />
                  <li>Create new Playlist</li>
                  <br />
                  <br />
                  <li>Songs:</li>
                  {mappedSongs}
                </ul>
              </div>
            </section>
            <main>
              <div className="info">
                <div>
                  <h1>Add New Playlist:</h1>
                  <br />

                  <h3>Playlist Name:</h3>
                  <input value={this.state.plistInput} onChange={e => this.setState({ plistInput: e.target.value })} />
                  <br />
                  <button onClick={() => this.addPlist()}>Create</button>
                  <br />
                  <br />
                  <div className="res1">
                    {mappedPlists}
                  </div>
                </div>
                <div>
                  <h1>Add Songs:</h1>
                  <br />
                  <div className="input">
                    <p>Artist:</p>
                    <input value={this.state.artistInput} onChange={e => this.setState({ artistInput: e.target.value })} />
                  </div>
                  <br />
                  <div className="input">
                    <p>Song Name:</p>
                    <input value={this.state.songInput} onChange={e => this.setState({ songInput: e.target.value })} />
                    <br />
                    <div className="">
                      <button onClick={() => this.addSong()}>Add</button>
                    </div>
                  </div>
                  <br />
                  <div className="res2">
                    {mappedSongs}
                  </div>
                </div>
                <div> <hr /></div>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
