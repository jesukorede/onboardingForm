# Flowva Onboarding

A modern, multi-step onboarding flow built with React that helps users set up their digital library.

## Features

- Multi-step form with progress tracking
- Interactive tool selection
- Location-based personalization
- Goal setting interface
- Form validation and error handling
- Responsive design
- Completion state handling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── steps/
│   │   ├── WelcomeStep.jsx
│   │   ├── AboutStep.jsx
│   │   ├── LocationStep.jsx
│   │   ├── ToolStackStep.jsx
│   │   ├── GoalsStep.jsx
│   │   └── CompletionStep.jsx
│   ├── ProgressBar.jsx
│   └── CompletionPopup.jsx
├── context/
│   └── OnboardingContext.jsx
├── styles/
│   ├── GlobalStyles.js
│   └── StyledComponents.js
├── App.jsx
└── index.js
```

## Technologies Used

- React
- Styled Components
- Context API for state management

## Usage

The onboarding process consists of 6 steps:
1. Welcome
2. About You
3. Location
4. Tool Stack
5. Goals
6. Completion

Each step includes validation and error handling where necessary.

## Customization

You can customize the appearance by modifying the variables in `GlobalStyles.js`:
- Colors
- Border radius
- Box shadows
- Typography

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.
```

Would you like me to add any additional sections to the README?
