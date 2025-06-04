// src/models/contact.js
export function validateContactData(data) {
  const { name, email, message } = data;

  if (!name || typeof name !== 'string') return { valid: false, error: 'Invalid name' };
  if (!email || typeof email !== 'string' || !email.includes('@')) return { valid: false, error: 'Invalid email' };
  if (!message || typeof message !== 'string' || message.length < 5) return { valid: false, error: 'Message too short' };

  return { valid: true };
}
