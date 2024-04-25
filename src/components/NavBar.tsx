import React from 'react';
import { LuHome, LuUser, LuFileText, LuMail } from 'react-icons/lu';
import styles from '../styles/navbar.module.css';

interface INavBarProps {
	lang: string;
	path: string;
}

const NavBar: React.FC<INavBarProps> = ({ lang, path }) => {
	const pages = [
		{
			name: {
				es: 'Inicio',
				en: 'Home',
			},
			path: `/${lang}/`,
			icon: <LuHome />,
		},
		{
			name: {
				es: 'Sobre Mi',
				en: 'About Me',
			},
			path: `/${lang}/about`,
			icon: <LuUser />,
		},
		{
			name: {
				es: 'Currículum',
				en: 'Resume',
			},
			path: `/${lang}/resume`,
			icon: <LuFileText />,
		},
		{
			name: {
				es: 'Contacto',
				en: 'Contact',
			},
			path: `/${lang}/contact`,
			icon: <LuMail />,
		},
	];
	return (
		<>
			<nav className='h-full w-2/12 border-r border-side-gray bg-black'>
				<div className='h-60 w-full'>
					{pages.map((page) => (
						<>
							<a
								id={`/${lang}${path}` === page.path ? styles.navActive : ''}
								className={`flex h-1/4 w-full items-center justify-center border-b border-b-side-gray text-4xl duration-300`}
								href={page.path}
							>
								{page.icon}
							</a>
						</>
					))}
				</div>
			</nav>
		</>
	);
};

export default NavBar;
