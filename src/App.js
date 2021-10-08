import './App.css';
import Notes from './components/Notes/notes';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import axios from 'axios';
function App() {
	const [notes, setNotes] = React.useState([]);
	const [noteCount, setNoteCount] = React.useState(1);
	const [searchNotesInput, setSearchNotesInput] = React.useState('');
	const onAdd = () => {
		const newNotes = [...notes];
		newNotes.push({
			id: Math.random(),
			title: 'title here',
			body: 'content here',
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
		newNotes.splice(index, 1, { ...newNote, body: event.target.value });
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
	const handleNoteCountChange = (e) => {
		setNoteCount(e.target.value);
	};
	React.useEffect(() => {
		const func = async () => {
			if (noteCount > 0) {
				let res = await axios.get(
					`https://jsonplaceholder.typicode.com/posts/`
				);

				const newNotes = Array.from(notes);
				newNotes.push({
					title: res.data[noteCount].title,
					body: res.data[noteCount].body,
				});
				setNotes(newNotes);
			}
		};
		func();
	}, [noteCount]);

	return (
		<div className='app__container'>
			<NavBar count={notes.length} />
			<input
				value={noteCount}
				onChange={handleNoteCountChange}
				className='app__note-search'
			/>
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
				notes={notes}
				handleContentChange={onContentChange}
				handleTitleChange={onTitleChange}
				handleDeleteNote={onDelete}
			/>
		</div>
	);
}

export default App;
