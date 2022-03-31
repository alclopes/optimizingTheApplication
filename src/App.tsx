import { useState } from 'react'
import { Content } from './components/Content'
import { SideBar } from './components/SideBar'

import './styles/content.scss'
import './styles/global.scss'
import './styles/sidebar.scss'

export function App() {
	const [selectedGenreId, setSelectedGenreId] = useState(1)
	const [lastGenreTitle, setLastGenreTitle] = useState('Ação')

	const handleClickButton = (id: number, title: string): void => {
		setSelectedGenreId(id)
		setLastGenreTitle(title)
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<SideBar
				selectedGenreId={selectedGenreId}
				lastGenreTitle={lastGenreTitle}
				handleClickButton={handleClickButton}
			/>

			<Content selectedGenreId={selectedGenreId} />
		</div>
	)
}
