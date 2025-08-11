

# Green Heart Collective

A full-stack web application for a non-profit organization focused on environmental and social causes. The application allows users to make donations, apply as volunteers, and send contact messages.

## Features

### Donation System
- Donation form with cause selection (Education for All, Green Plantation, Slum Development, General Fund)
- Multiple payment method options (UPI, Credit/Debit Card, Bank Transfer)
- Optional message field for donors
- Backend storage and administration of donation records

### Volunteer Application
- Comprehensive volunteer application form
- Fields for personal information, preferred causes, and availability
- Motivation statement option
- Backend storage and administration of volunteer applications

### Contact Form
- Simple contact form for general inquiries
- Backend storage and administration of contact messages

### Admin Panel
- Django admin interface for managing donations, volunteer applications, and contact messages
- Filtering and search capabilities for all models

## Technology Stack

### Frontend
- **React**: UI library for building the user interface
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **React Router**: For client-side routing
- **Axios**: For API requests
- **React Hook Form**: For form handling and validation
- **Zod**: For schema validation
- **shadcn/ui**: Component library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Backend
- **Django**: Python web framework
- **Django REST Framework**: For building RESTful APIs
- **SQLite**: Database (for development)
- **django-cors-headers**: For handling Cross-Origin Resource Sharing

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Python (v3.8+)
- pip

### Frontend Setup

```sh
# Clone the repository
git clone <repository-url>
cd green-heart-collective-web-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at http://localhost:8080/

### Backend Setup

```sh
# Navigate to the backend directory
cd backend

# Create a virtual environment (optional but recommended)
python -m venv env

# Activate the virtual environment
# On Windows
env\Scripts\activate
# On macOS/Linux
source env/bin/activate

# Install dependencies
pip install -r requirements.txt
# Or install individually
pip install django djangorestframework django-cors-headers

# Apply migrations
python manage.py migrate

# Create a superuser for admin access
python manage.py createsuperuser

# Start the development server
python manage.py runserver
```

The backend will be available at http://127.0.0.1:8000/

The admin panel can be accessed at http://127.0.0.1:8000/admin/

## API Endpoints

### Donation
- `POST /donation/create/`: Create a new donation

### Volunteer
- `POST /api/volunteers/`: Submit a volunteer application

### Contact
- `POST /api/contact-messages/`: Send a contact message

## Development

### Frontend Commands

```sh
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Backend Commands

```sh
# Make migrations after model changes
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.




