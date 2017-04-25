import React, { Component } from 'react';

export default class NoteList extends Component {
  render() {
    return (
      <aside className="note-list">
        <h2 className="note-list__title">Notes</h2>
        <div></div>
        <ul className="note-list__container">
          {this.props.notes.map(note => <li className="note-preview" key={note.id}><a className="note-preview__link" onClick={this.props.getNote(note.id)}><span className="note-preview__time">{note.created_at}</span><h2 className="note-preview__title">{note.title}</h2><p className="note-preview__body">{note.body}</p></a></li>)}
        </ul>
      </aside>
    );
  }
}
