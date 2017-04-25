import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <article className="note-view">
        <nav>
          <button className="note-view__actions__trash"></button>
          <span></span>
        </nav>
        <input value={this.props.note.title} onChange={this.props.updateNote} name="title" className="note-view__title"></input>
        <textarea value={this.props.note.body} onChange={this.props.updateNote} name="body" className="note-view__body"></textarea>
      </article>
    );
  }
}