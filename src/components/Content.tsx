import { useEffect, useState } from 'react'

import { api } from '../services/api'

import { MemoContent } from './MemoContent'

import { MovieProps, GenreResponseProps } from '../@types'

import '../styles/content.scss'

interface Props {
	selectedGenreId: number
}

export function Content({ selectedGenreId }: Props) {
	const [movies, setMovies] = useState<MovieProps[]>([])
	const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
		{} as GenreResponseProps
	)

	function handleGenreResponseProps() {
		api
			.get<GenreResponseProps>(`genres/${selectedGenreId}`)
			.then((response) => {
				setSelectedGenre(response.data)
			})
	}

	useEffect(() => {
		handleGenreResponseProps()
	}, [selectedGenreId])

	function handleMovieProps() {
		// let i = 0
		// while (i < 200000) i++
		api
			.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
			.then((response) => {
				setMovies(response.data)
			})
	}

	//const t1 = performance.now()
	useEffect(() => {
		handleMovieProps()
	}, [selectedGenreId])
	//console.log('semMemo:', performance.now() - t1)

	return (
		<div className='container'>
			<header>
				<span className='category'>Categoria: {selectedGenre.title}</span>
			</header>
			<main>
				<div className='movies-list'>
					{movies.map((movie) => (
						<MemoContent
							key={movie.imdbID}
							imdbID={movie.imdbID}
							Title={movie.Title}
							Poster={movie.Poster}
							Ratings={movie.Ratings}
							Runtime={movie.Runtime}
						/>
					))}
				</div>
			</main>
		</div>
	)
}
