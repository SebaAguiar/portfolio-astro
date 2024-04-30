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
		<>
			<div>ContactForm</div>
		</>
	);
};

export default ContactForm;
