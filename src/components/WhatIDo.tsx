import React from 'react';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';

interface IData {
	title: string;
	description: string;
}

interface IWhatIDoProps {
	data: IData[];
}

const WhatIDo: React.FC<IWhatIDoProps> = ({ data }) => {
	return data.map((render, index) => (
		<div key={index} className='m-2 w-11/12 md:w-1/2 lg:m-4 lg:mx-5 lg:w-1/3'>
			<div className='flex content-center text-4xl'>
				<HiOutlineComputerDesktop />
				<h3 className='ml-3 text-xl font-semibold md:place-self-center'>
					{render.title}
				</h3>
			</div>
			<p className='text-sm'>{render.description}</p>
		</div>
	));
};

export default WhatIDo;
