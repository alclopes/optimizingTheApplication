import { memo } from 'react'

import { Button } from './Button'

import '../styles/sidebar.scss'

import { ButtonSideBarProps } from '../@types'

export function ButtonComponent({
	selectedGenreId,
	lastGenreTitle,
	handleClickButton,
	id,
	title,
	name,
}: ButtonSideBarProps) {
	return (
		<Button
			title={title}
			iconName={name}
			onClick={() => handleClickButton(id, title)}
			selected={selectedGenreId === id}
		/>
	)
}

export const MemoSideBar = memo(ButtonComponent, (prevProps, nextProps) => {
	// console.log(prevProps.title)
	// console.log(prevProps.lastGenreTitle)
	// console.log(nextProps.lastGenreTitle)
	if (Object.is(prevProps.title, prevProps.lastGenreTitle)) {
		return false
	}
	if (Object.is(prevProps.title, nextProps.lastGenreTitle)) {
		return false
	}
	return true
})
