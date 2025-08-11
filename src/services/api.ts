import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Donation API calls
export const donationService = {
  createDonation: async (donationData: {
    full_name: string;
    email: string;
    cause: string;
    amount: number;
    payment_method: string;
    message?: string;
  }) => {
    try {
      const response = await api.post('/donation/create/', donationData);
      return response.data;
    } catch (error) {
      console.error('Error creating donation:', error);
      throw error;
    }
  },
};

// Volunteer API calls
export const volunteerService = {
  submitApplication: async (volunteerData: {
    full_name: string;
    email: string;
    phone_number: string;
    preferred_causes: string[];
    availability: string[];
    motivation?: string;
  }) => {
    try {
      const response = await api.post('/api/volunteers/', volunteerData);
      return response.data;
    } catch (error) {
      console.error('Error submitting volunteer application:', error);
      throw error;
    }
  },
};

// Contact API calls
export const contactService = {
  sendMessage: async (contactData: {
    full_name: string;
    email: string;
    message: string;
  }) => {
    try {
      const response = await api.post('/api/contact-messages/', contactData);
      return response.data;
    } catch (error) {
      console.error('Error sending contact message:', error);
      throw error;
    }
  },
};

export default api;