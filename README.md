# 🍋 Little Lemon - Restaurant Reservation App

A modern, responsive web application for Little Lemon restaurant featuring online table reservations, dynamic booking management, and a seamless user experience.

## ✨ Features

- 🍽️ **Online Table Reservations** - Easy booking system for restaurant tables
- 📅 **Dynamic Booking Times** - Available time slots based on date selection
- 👥 **Guest Management** - Select number of guests and special occasions
- ✅ **Form Validation** - Robust client-side validation for booking details
- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🔄 **Booking Confirmation** - Instant confirmation after successful reservation
- 🧪 **Comprehensive Testing** - Unit tests with React Testing Library
- 🎨 **Modern UI** - Clean and user-friendly interface

##  Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jwafaDev/Restaurant-Little-Lemon.git

# Navigate to the project folder
cd Restaurant-Little-Lemon

# Install dependencies
npm install
```

### Running the Application

```bash
# Start the development server
npm start

# The application will automatically open at http://localhost:3000
```

The app is now ready to use! You can start making table reservations.

##  Build for Production

```bash
# Create an optimized production build
npm run build

# This creates a `build` folder optimized for production deployment
```

##  Testing

```bash
# Run the test suite
npm test

# Run tests in watch mode
npm test -- --watch
```

##  Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^19.2.7 | UI library and component framework |
| React Router | ^7.18.0 | Client-side routing and navigation |
| React Testing Library | ^16.3.2 | Component testing utilities |
| Jest | - | Test runner (included with React Scripts) |
| JavaScript (ES6+) | - | Programming language |
| HTML5 | - | Markup language |
| CSS3 | - | Styling and responsive design |

##  Language Composition

- JavaScript: Primary language
- HTML5: Markup
- CSS3: Styling

##  Project Structure

```
Restaurant-Little-Lemon/
├── public/                      # Static files
│   └── index.html              # Main HTML file
├── src/                         # Source code
│   ├── components/             # React components
│   │   ├── Header.js           # Header navigation
│   │   ├── Nav.js              # Navigation bar
│   │   ├── Footer.js           # Footer section
│   │   ├── BookingForm.js      # Reservation form
│   │   ├── BookingPage.js      # Booking page
│   │   ├── ConfirmedBooking.js # Confirmation page
│   │   └── ...
│   ├── styles/                 # CSS files
│   ├── App.js                  # Main App component
│   ├── App.test.js             # App tests
│   └── index.js                # React entry point
├── package.json                # Project dependencies
├── package-lock.json           # Dependency lock file
└── README.md                   # Project documentation
```

##  How to Use

### Making a Reservation

1. Navigate to the **Reservations** or **Booking** section
2. Select your desired **date** and **time**
3. Specify the **number of guests**
4. Choose an **occasion** (if applicable)
5. Enter your **personal details**
6. Submit the form
7. Receive a **booking confirmation**

### Form Validation

The booking form includes validation for:
- Valid date selection (no past dates)
- Available time slots
- Guest count (typically 1-10)
- Required personal information

##  Core Components

### BookingForm Component
Handles user input for reservation details with validation and error handling.

### BookingPage Component
Main page for managing reservations with date/time selection.

### ConfirmedBooking Component
Displays confirmation details after successful booking.

### Navigation & Routing
Uses React Router for smooth navigation between different pages.

##  Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Start | `npm start` | Runs the app in development mode on port 3000 |
| Build | `npm run build` | Creates an optimized production build |
| Test | `npm test` | Launches the test runner in interactive mode |
| Eject | `npm run eject` | Ejects configuration (irreversible) |

**Note:** `npm run eject` is a one-way operation. Once you eject, you can't go back!

##  Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

##  Responsive Design

The application is built with a mobile-first approach ensuring:
- Optimal viewing on mobile devices (320px+)
- Tablet-friendly layouts (768px+)
- Desktop optimization (1024px+)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Write or update tests as needed
5. Commit your changes (`git commit -m 'Add YourFeature'`)
6. Push to the branch (`git push origin feature/YourFeature`)
7. Open a Pull Request

### Development Guidelines

- Follow React best practices and hooks patterns
- Write meaningful commit messages
- Test your changes with `npm test`
- Ensure responsive design works on all screen sizes
- Keep components small and focused

##  Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
PORT=3001 npm start
```

### Dependency Issues
If you encounter dependency conflicts:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tests Not Running
Make sure Jest is properly configured:
```bash
npm test -- --clearCache
npm test
```

##  License

This project is licensed under the MIT License. See the LICENSE file for details.

##  Project Context

This project was developed as part of the **Meta Front-End Developer Capstone Project**, demonstrating proficiency in:
- React development
- Component-based architecture
- Client-side routing
- Form handling and validation
- Responsive web design
- Testing and quality assurance

##  Future Enhancements

Potential features for future versions:
- Backend integration for persistent data
- User authentication and accounts
- Email confirmation notifications
- Admin panel for managing reservations
- Payment integration
- Advanced filtering and search
- Cancellation and modification options

## 👨‍💻 Author

**jwafaDev** - [Visit Profile](https://github.com/jwafaDev)

---

## 📞 Support

For questions, issues, or suggestions, feel free to:
- Open an issue on the [GitHub repository](https://github.com/jwafaDev/Restaurant-Little-Lemon/issues)
- Contact via GitHub

---

**Created with ❤️ using React**

Enjoy using Little Lemon Restaurant Reservation App! 🍋
