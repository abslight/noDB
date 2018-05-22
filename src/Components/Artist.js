import React, { Component } from 'react';

export default class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            songEdit: '',
            artistEdit: ''
        }
    }
    editClick() {
        if (!this.state.isEdit) {
            this.setState({ isEdit: !this.state.isEdit });
        } else {
            this.props.editSong(this.props.x.id, this.state.artistEdit, this.state.songEdit)
            this.setState({ isEdit: !this.state.isEdit });
        }
    }
    render() {
        console.log(this.props)
        return (
            <div >
                {
                    this.state.isEdit
                        ?
                        <div>
                            <input value={this.state.artistEdit} onChange={(e) => this.setState({ artistEdit: e.target.value })} />
                            <input value={this.state.songEdit} onChange={e => this.setState({ songEdit: e.target.value })} />
                        </div>
                        :
                        <div>
                            <h3 id="artist">{this.props.x.artist}</h3>
                            <h4>{this.props.x.song}</h4>
                        </div>
                }
                <button onClick={() => this.editClick()}>Edit</button>
                <button onClick={() => this.props.deleteSong(this.props.x.id)}>Delete</button>
            </div>
        )
    }
}