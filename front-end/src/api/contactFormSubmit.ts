interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormResponse {
  success?: boolean;
  error?: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function contactFormSubmit(data: ContactFormData): Promise<ContactFormResponse> {
    const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result: ContactFormResponse = await response.json();

     if (!response.ok) {
    throw new Error(result.error || 'Failed to submit form');
  }

    return result;
}