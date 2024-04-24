import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { LuX, LuAlignJustify } from 'react-icons/lu';
import { isOpen } from '../nanostores/store';

const BurgerMenu = () => {
	const open = useStore(isOpen);

	const toggleSide = () => {
		isOpen.set(!isOpen.value);
	};
	// console.log(isOpen.value);
	return (
		<>
			<button
				onClick={toggleSide}
				className='text-dark-white fixed right-1 top-1 z-50 flex size-10 items-center justify-center text-lg transition-all duration-500 ease-in-out lg:hidden'
			>
				{open ? <LuX /> : <LuAlignJustify />}
			</button>
		</>
	);
};

export default BurgerMenu;
