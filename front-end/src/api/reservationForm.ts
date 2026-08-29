interface ReservationFormData {
    fullName: string;
    date: string;
    time: string;
    partySize: number;
    phoneOrEmail: string;
    specialRequests?: string;
}

interface ReservationFormResponse {
    success?: boolean;
    error?: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'https://olivesarah.vercel.app/';

export async function reservationFormSubmit(data: ReservationFormData): Promise<ReservationFormResponse> {
    const response = await fetch(`${API_URL}/api/reservations`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    const result: ReservationFormResponse = await response.json();

    if (!response.ok) {
        throw new Error(result.error || 'Failed to submit reservation');
    }

    return result;
}   