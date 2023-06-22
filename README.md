# Data Management Tool

This data management tool is built using React, Bootstrap, Apollo GraphQL, and Mongoose MongoDB technologies. It provides an interface for an admin user to efficiently manage client information and generate simple profiles.

The tool offers the following features:

## Features

1. **Client Information Input:** Admin users can easily input client information, including personal details and relevant data.
2. **Profile Generation:** The tool generates simple profiles based on the client information entered, providing a comprehensive overview.
3. **Dashboard:** The main dashboard page displays a list of clients and their corresponding profiles, enabling admin users to view, update, or delete entries.
4. **Create New Clients and Profiles:** Admin users have the ability to create new client entries and associated profiles effortlessly.
5. **Cascade Delete:** In case a client is deleted, the tool ensures a cascade delete functionality, automatically removing all associated profiles.

## Technologies Used

- React: JavaScript library for building user interfaces
- Bootstrap: CSS framework for responsive and mobile-first web development
- Apollo GraphQL: Implements GraphQL API and provides a powerful data management layer
- Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment

## Installation

1. Clone the repository: `git clone https://github.com/EM-T-Shells/DataManagementTool.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Access the application at `http://localhost:3000`

## Usage

1. Access the tool through the provided URL.
2. Login with admin credentials to access the dashboard and manage client information.
3. Add new clients, create profiles, and perform various CRUD operations as needed.
4. Utilize the cascade delete functionality to remove clients and their associated profiles simultaneously.

## Future Enhancements

- Implement user authentication and role-based access control for improved security.
- Enhance the dashboard with additional sorting and filtering options.
- Add search functionality to easily locate specific clients or profiles.
- Provide data visualization features to present client information in an intuitive manner.

## Contributing

Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).
