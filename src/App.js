import React from 'react';
import { DragDrop } from './components/DragDrop/index.jsx';
import ButtonSave from './components/SaveTo/index.jsx';


const App = () => {
	const handleFileInput = (data) => { }

	return (
		<div className='app'>
			<DragDrop handleFileInput={handleFileInput} />
			<ButtonSave/>
		</div>
	)
}

export default App
