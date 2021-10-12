import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import DragDrop from './DragDrop/index.jsx';
import SaveTo from './SaveTo/index.jsx';
import ReplaceTileset from './ReplaceTileset/index.jsx';


const App = () => {
	return (
		<div className='app'>
			<ChakraProvider>
				<DragDrop />
				<ReplaceTileset />
				<SaveTo />
			</ChakraProvider>
		</div>
	)
}

export default App
