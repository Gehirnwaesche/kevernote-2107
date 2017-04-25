import React, { Component } from 'react';
// import R from 'ramda';
import api from './api'
import Navigation from './Navigation';
import NoteList from './NoteList';
import NoteView from './NoteView';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      notes: [],
    }

    this.addNote = this.addNote.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
    this.getNote = this.getNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.updateNotes();
  }

  addNote() {
    api.notes.create({
      title: 'New note',
      body: 'Write your note here',
      created_at: Date.now(),
      status: 'Saving ...',
    });

    this.updateNotes();
  }

  updateNotes() {
    api.notes.all().then(notes => {
      this.setState({notes: notes});
    });
  }

  updateNote(event) {
    let note = this.state.note;
    note[event.target.name] = event.target.value;
    this.setState({note: note});
    api.notes.update(note.id, note).then(() => {
      this.updateNotes();
    });
  }

  getNote(id) {
    return () => {
      api.notes.get(id).then(note => {
        this.setState({note: note})
      });
    }
  }

  render() {
    return (
      <div className="app-container">
        <Navigation addNote={this.addNote} />
        <NoteList notes={this.state.notes} getNote={this.getNote} />
        <NoteView note={this.state.note} updateNote={this.updateNote}/>
      </div>
    );
  }
}
