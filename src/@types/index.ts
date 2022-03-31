// tags: #reutilizandoTypes# #reutilizandoInterface#

export interface GenreResponseProps {
	id: number
	name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
	title: string
}

export interface SideBarProps {
	selectedGenreId: number
	lastGenreTitle: string
	handleClickButton: (id: number, title: string) => void
}

export interface ButtonSideBarProps {
	selectedGenreId: number
	lastGenreTitle: string
	handleClickButton: (id: number, title: string) => void
	id: number
	name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
	title: string
}

export interface MovieProps {
	imdbID: string
	Title: string
	Poster: string
	Ratings: Array<{
		Source: string
		Value: string
	}>
	Runtime: string
}
