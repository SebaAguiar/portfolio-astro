import React from 'react';
import styles from '../styles/downloadCv.module.css';

interface IDownloadCvProps {
	text: string;
}

const DownloadCv: React.FC<IDownloadCvProps> = ({ text }) => {
	return (
		<>
			<button
				id={styles.download}
				className='h-9 w-7/12 rounded-full border-2 border-white font-semibold text-white duration-300'
				// onClick={handleClick}
			>
				<a
					href='/(EN)David-Sebastian-Aguiar--Backend-Developer.pdf'
					target='_blank'
					rel='noopener noreferrer'
					download='Sebastian-Aguiar-Backend-Developer.pdf'
				>
					{text}
				</a>
			</button>
		</>
	);
};

export default DownloadCv;
