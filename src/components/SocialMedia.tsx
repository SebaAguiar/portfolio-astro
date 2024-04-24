import React from 'react';
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTelegramPlane,
	FaWhatsapp,
} from 'react-icons/fa';
import styles from '../styles/socialMesia.module.css';

const socialOptions = [
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/in/david-sebastian-aguiar/',
		icon: <FaLinkedinIn />,
	},
	{
		name: 'github',
		href: 'https://github.com/SebaAguiar',
		icon: <FaGithub />,
	},
	{
		name: 'telegram',
		href: 'https://t.me/SebaAguiar',
		icon: <FaTelegramPlane />,
	},
	{
		name: 'whatsapp',
		href: `https://api.whatsapp.com/send?phone=+543442536874&text=Hola,%20me%20gustaría%20contactarte`,
		icon: <FaWhatsapp />,
	},
	{
		name: 'instagram',
		href: 'https://www.instagram.com/sebaaguiar._/',
		icon: <FaInstagram />,
	},
];

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const SocialMedia = () => {
	return (
		<div className='mt-4 flex flex-row justify-around'>
			{socialOptions.map((opt, index) => (
				<a
					id={styles.social}
					className='text-2xl text-white duration-300 md:text-3xl'
					key={index}
					href={opt.href}
				>
					{opt.icon}
				</a>
			))}
		</div>
	);
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default SocialMedia;
