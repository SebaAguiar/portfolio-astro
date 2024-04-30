import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { useTranslations } from '../utils/utils';
import {
	PUBLIC_EMAIL_JS_SERVICE_ID,
	PUBLIC_EMAIL_JS_TEMPLATE_ID,
	PUBLIC_EMAIL_JS_PUBLIC_KEY,
} from '../constants';
interface IContactFormProps {
	lang: 'es' | 'en';
}

const ContactForm: React.FC<IContactFormProps> = ({ lang }) => {
	const t = useTranslations(lang);
	const form = useRef<HTMLFormElement | null>(null);

	const sendForm = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (form.current !== null) {
				await emailjs.sendForm(
					PUBLIC_EMAIL_JS_SERVICE_ID,
					PUBLIC_EMAIL_JS_TEMPLATE_ID,
					form.current,
					{
						publicKey: PUBLIC_EMAIL_JS_PUBLIC_KEY,
					},
				);
				Swal.fire({
					title: 'Good Job!',
					text: t('contact.message.success'),
					icon: 'success',
				});
				form.current.reset();
			}
		} catch (error) {
			console.log('ERROR at ContactForm.tsx: ', error);
			Swal.fire({
				title: 'Oops',
				text: t('error.message'),
				icon: 'error',
			});
		}
	};

	return (
		<section className='flex w-full flex-col items-center justify-center md:w-2/3'>
			<h2 className='mt-1 text-2xl font-semibold text-green'>
				{t('form.title')}
			</h2>
			<form
				className='text-dark-white flex w-full flex-col items-center justify-center font-light'
				ref={form}
				onSubmit={sendForm}
			>
				<div className='flex w-2/3 flex-col-reverse'>
					<input
						// id={styles.contactInput}
						className='bg-dark-black border-dark-white focus:border-dark-white mb-2 mt-2 rounded-md border-2'
						name='user_email'
						type='email'
						required
					/>
					<label htmlFor='user_email'>Email:</label>
				</div>
				<div className='flex w-2/3 flex-col-reverse'>
					<input
						// id={styles.contactInput}
						className='bg-dark-black border-dark-white focus:border-dark-white mb-2 mt-2 rounded-md border-2'
						name='user_fullname'
						type='text'
						required
					/>
					<label htmlFor='fullname'>Full Name:</label>
				</div>
				<div className='flex w-2/3 flex-col-reverse'>
					<input
						// id={styles.contactInput}
						className='bg-dark-black border-dark-white focus:border-dark-white mb-2 mt-2 rounded-md border-2'
						name='user_subject'
						type='text'
						required
					/>
					<label htmlFor='user_subject'>Subject:</label>
				</div>
				<div className='flex w-2/3 flex-col-reverse'>
					<textarea
						// id={styles.contactInput}
						className='bg-dark-black border-dark-white focus:border-dark-white mb-2 mt-2 rounded-md border-2'
						style={{ resize: 'vertical', maxHeight: '150px' }}
						name='user_message'
						required
					/>
					<label htmlFor='user_message'>Message:</label>
				</div>
			</form>
		</section>
	);
};

export default ContactForm;
