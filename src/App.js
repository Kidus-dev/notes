import './App.css';
import Notes from './components/Notes/notes';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
function App() {
	const [notes, setNotes] = React.useState([
		{ id: Math.random(), title: 'Something', content: 'Something content' },
	]);
	const [searchNotesInput, setSearchNotesInput] = React.useState('');
	const onAdd = () => {
		const newNotes = [...notes];
		newNotes.push({
			id: Math.random(),
			title: 'title here',
			content: 'content here',
		});
		setNotes(newNotes);
		//  setNotes([...notes, { title: '', content: '' }]);
	};
	const onTitleChange = (event, index) => {
		const newNotes = notes.slice();
		const newNote = newNotes[index];
		newNotes.splice(index, 1, { ...newNote, title: event.target.value });
		setNotes(newNotes);
	};
	const onContentChange = (event, index) => {
		const newNotes = notes.slice();
		const newNote = newNotes[index];
		newNotes.splice(index, 1, { ...newNote, content: event.target.value });
		setNotes(newNotes);
	};
	const onDelete = (id) => {
		// const newNotes2 = [...notes];
		// newNotes2.splice(index, 1);
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	const handleSearchNotesInput = (e) => {
		setSearchNotesInput(e.target.value);
	};
	return (
		<div className='app__container'>
			<NavBar count={notes.length} />
			<input
				className='app__note-search'
				placeholder='Search Notes'
				value={searchNotesInput}
				onChange={handleSearchNotesInput}
			/>
			<button className='btn__add-note' onClick={() => onAdd()}>
				Add Note
			</button>
			<Notes
				notes={notes
					.filter(
						(note) =>
							note.title
								.toLowerCase()
								.indexOf(searchNotesInput.toLowerCase()) !== -1
					)
					.map((note) => note)}
				handleContentChange={onContentChange}
				handleTitleChange={onTitleChange}
				handleDeleteNote={onDelete}
			/>
		</div>
	);
}

export default App;
