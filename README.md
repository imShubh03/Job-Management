
# Job Management Application

## Overview

The Job Management Application is a full-stack web application designed to help companies post job openings and job seekers find relevant opportunities. The application consists of a Next.js frontend with Mantine UI components and a NestJS backend with PostgreSQL database.

## Features

- **Job Listings**: Browse and search for job postings
- **Filtering**: Filter jobs by title, location, job type, and salary range
- **Job Creation**: Create new job postings with detailed information
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real Company Logos**: Automatically assigns appropriate logos based on company names

## Tech Stack

### Frontend
- **Next.js**: React framework for server-side rendering and static site generation
- **Mantine UI**: Component library for building modern and accessible user interfaces
- **React Hook Form**: Form validation and handling
- **Lucide React**: Icon library
- **TypeScript**: Type-safe JavaScript

### Backend
- **NestJS**: Progressive Node.js framework for building efficient and scalable server-side applications
- **TypeORM**: ORM for TypeScript and JavaScript
- **PostgreSQL**: Relational database for storing job data
- **Swagger**: API documentation
- **Class Validator**: Input validation

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database

### Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/job-management.git
cd job-management/frontend
```

2. Install dependencies:


```shellscript
npm install
# or
yarn install
```

3. Create a `.env.local` file with the following content:


```plaintext
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Start the development server:


```shellscript
npm run dev
# or
yarn dev
```

5. The frontend will be available at [http://localhost:3000](http://localhost:3000)


### Backend Setup

1. Navigate to the backend directory:


```shellscript
cd ../backend
```

2. Install dependencies:


```shellscript
npm install
# or
yarn install
```

3. Create a `.env` file with the following content:


```plaintext
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=job_management

# Application Configuration
PORT=3001
NODE_ENV=development
```

4. Create the PostgreSQL database:


```shellscript
psql -U postgres
CREATE DATABASE job_management;
\q
```

5. Start the development server:


```shellscript
npm run start:dev
# or
yarn start:dev
```

6. The backend API will be available at [http://localhost:3001](http://localhost:3001)
7. Swagger API documentation will be available at [http://localhost:3001/api](http://localhost:3001/api)

## UI Components

### Job Listing Page

- Header with navigation and "Create Jobs" button
- Search filters (title, location, job type, salary range)
- Grid of job cards (3 per row on desktop)


### Job Card

- Company logo (automatically assigned based on company name)
- "24h Ago" tag
- Job title
- Job details (experience, location, salary)
- Job description bullet points
- "Apply Now" button


### Create Job Modal

- Form with fields for job details
- Validation for required fields
- "Save Draft" and "Publish" buttons
- Additional fields for requirements and responsibilities


## Database Schema

### Job Entity

- `id`: Primary key
- `title`: Job title
- `companyName`: Company name
- `location`: Job location
- `jobType`: Type of employment (Full-time, Part-time, Contract, Internship)
- `salaryMin`: Minimum salary
- `salaryMax`: Maximum salary
- `description`: Job description
- `requirements`: Job requirements
- `responsibilities`: Job responsibilities
- `applicationDeadline`: Application deadline
- `logo`: Company logo URL (automatically assigned)
- `createdAt`: Creation date
- `updatedAt`: Last update date

## Troubleshooting

### Common Issues

1. **Database Connection Error**:

1. Check your PostgreSQL credentials in the `.env` file
2. Ensure PostgreSQL service is running
3. Verify that the database exists



2. **CORS Issues**:

1. Verify that CORS is properly configured in the backend
2. Check that the frontend is using the correct API URL
3. Ensure that the origin is properly set in the CORS configuration



3. **Build Errors**:

1. Clear the `.next` directory and node_modules, then reinstall dependencies
2. Check for TypeScript errors with `npm run tsc`
3. Ensure all required dependencies are installed



4. **Logo Display Issues**:

1. Check that the logo URLs are accessible
2. Verify that the image dimensions are appropriate
3. Ensure the image container has proper styling



## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request
