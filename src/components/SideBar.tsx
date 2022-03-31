import { useEffect, useState } from 'react'

import { api } from '../services/api'
import { MemoSideBar } from './MemoSideBar'

import '../styles/sidebar.scss'

import { GenreResponseProps, SideBarProps } from '../@types'

export function SideBar({
	selectedGenreId,
	lastGenreTitle,
	handleClickButton,
}: SideBarProps) {
	const [genres, setGenres] = useState<GenreResponseProps[]>([])

	useEffect((): void => {
		api.get<GenreResponseProps[]>('genres').then((response) => {
			setGenres(response.data)
			return
		})
	}, [])

	//console.log(lastGenreTitle)
	return (
		<nav className='sidebar'>
			<span>
				Watch<p>Me</p>
			</span>

			<div className='buttons-container'>
				{genres.map((genre) => {
					return (
						<MemoSideBar
							key={String(genre.id)}
							selectedGenreId={selectedGenreId}
							lastGenreTitle={lastGenreTitle}
							handleClickButton={handleClickButton}
							id={genre.id}
							title={genre.title}
							name={genre.name}
						/>
					)
				})}
			</div>
		</nav>
	)
}
