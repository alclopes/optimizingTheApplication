import { memo } from 'react'
import { MovieCard } from './MovieCard'
import { MovieProps } from '../@types'

interface Props {
	selectedGenreId: number
}

function MovieCardComponent({
	imdbID,
	Title,
	Poster,
	Runtime,
	Ratings,
}: MovieProps) {
	return (
		<MovieCard
			title={Title}
			poster={Poster}
			runtime={Runtime}
			rating={Ratings[0].Value}
		/>
	)
}

export const MemoContent = memo(MovieCardComponent, (prevProps, nextProps) => {
	console.log(prevProps.Title)
	console.log(nextProps.Title)
	return Object.is(prevProps.Title, nextProps.Title)
})
