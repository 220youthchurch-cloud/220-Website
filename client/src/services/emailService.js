import emailjs from '@emailjs/browser'

import { clearCachedValue, getCachedValue, setCachedValue } from '../utils/cache'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const EMAIL_SEND_CACHE_KEY = 'contact:emailjs:last-send'
const EMAIL_SEND_TTL = 24 * 60 * 60 * 1000

export async function sendEmail(formElement) {
	if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
		return {
			ok: false,
			status: 'error',
			message: 'Email service is not configured yet.',
		}
	}

	const cachedSend = getCachedValue(EMAIL_SEND_CACHE_KEY)

	if (cachedSend) {
		return {
			ok: false,
			status: 'cooldown',
			message: 'You have already sent a message recently. Please wait before trying again.',
		}
	}

	try {
		await emailjs.sendForm(
			EMAILJS_SERVICE_ID,
			EMAILJS_TEMPLATE_ID,
			formElement,
			{ publicKey: EMAILJS_PUBLIC_KEY }
		)

		setCachedValue(EMAIL_SEND_CACHE_KEY, { sentAt: Date.now() }, EMAIL_SEND_TTL)

		return {
			ok: true,
			status: 'success',
			message: 'Your message has been sent successfully.',
		}
	} catch (error) {
		clearCachedValue(EMAIL_SEND_CACHE_KEY)

		return {
			ok: false,
			status: 'error',
			message: error?.text || 'Failed to send message. Please try again.',
		}
	}
}