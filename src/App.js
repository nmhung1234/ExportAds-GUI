import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import DragDrop from './components/DragDrop/index.jsx';
import ButtonSave from './components/SaveTo/index.jsx';


const App = () => {
	return (
		<div className='app'>
			<ChakraProvider>
				<DragDrop />
				<ButtonSave />
			</ChakraProvider>
		</div>
	)
}

export default App
