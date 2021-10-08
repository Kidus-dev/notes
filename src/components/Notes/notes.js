import React from 'react';
import Note from '../Note/note';
import './notes.style.css'
export default function Notes(props) {
	const [allNotes, setAllNotes] = React.useState([]);

	return (
		<div className='notes__container'>
			{props.notes.map((note, i) => (
				<Note
					key={i}
					handleContentChange={props.handleContentChange}
					handleTitleChange={props.handleTitleChange}
					handleDeleteNote={props.handleDeleteNote}
					title={note.title}
					index={i}
					content={note.content}
					id={note.id}
				/>
			))}
		</div>
	);
}
