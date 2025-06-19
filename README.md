# Healthcare System API

This is a RESTful backend API for a simple healthcare management system built using Node.js, Express, Sequelize, and PostgreSQL.

## Features

- User registration and login (with JWT authentication)
- Add, view, update, and delete patients
- Add, view, update, and delete doctors
- Map patients to doctors
- Authenticated access to patient-related operations

---

## Project Structure

├── app.js
├── model/
├── controllers/
├── routes/
├── middleware/
├── util/
├── .env
└── README.md


---

## Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- bcrypt (for password hashing)
- JWT (for user authentication)
- dotenv

---

## Authentication

All endpoints (except register/login) are protected by JWT. Pass the token in headers:


---

## API Endpoints

### User
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login and receive token

### Patients
- `POST /api/patients/` - Create patient
- `GET /api/patients/` - Get all your patients
- `GET /api/patients/:id` - Get single patient
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

### Doctors
- `POST /api/doctors/` - Add doctor
- `GET /api/doctors/` - List doctors
- `GET /api/doctors/:id` - Doctor details
- `PUT /api/doctors/:id` - Update doctor
- `DELETE /api/doctors/:id` - Delete doctor

### Patient-Doctor Mapping
- `POST /api/mappings/` - Assign doctor to patient
- `GET /api/mappings/` - Get all mappings
- `GET /api/mappings/:patientId` - Get mappings for one patient
- `DELETE /api/mappings/:id` - Remove mapping

---

## How to Run

1. Clone the repo  
2. Install dependencies:  
3. Set up `.env` file 
4. Start the server


---

## Testing

Use Postman to test APIs. Add `auth-token` header after login to access protected routes.

---

## Author

- Sonika Deogharia  
- GitHub: [@SonikaSahana](https://github.com/SonikaSahana)

