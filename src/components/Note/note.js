import React from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';

import './note.style.css';

const Note = (props) => {
	const {
		content,
		handleContentChange,
		title,
		handleDeleteNote,
		index,
		id,
		handleTitleChange,
	} = props;

	return (
		<div className='note__container' data-testid='note-element'>
			<ContentEditable
				className={'note__title'}
				html={title}
				onChange={(event) => handleTitleChange(event, index)}
			/>
			<ContentEditable
				className={'note__content'}
				data-testid='note-content'
				html={content}
				onChange={(event) => handleContentChange(event, index)}
			/>
			<hr />
			<button className='note__btn' onClick={() => handleDeleteNote(id)}>
				Delete
			</button>
		</div>
	);
};
export default Note;
