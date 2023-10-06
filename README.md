# Getting Started with Create React App




![Screenshot 2023-10-06 131522](https://github.com/Mohan-Chandra-Sharma1/Register-Login-App/assets/120721761/c6269706-e227-4d7f-b3e1-40a24c14fd47)


![Screenshot 2023-10-06 132244](https://github.com/Mohan-Chandra-Sharma1/Register-Login-App/assets/120721761/e8fcc966-b74f-4f53-963b-0a5eec80764c)





![Screenshot 2023-10-06 132328](https://github.com/Mohan-Chandra-Sharma1/Register-Login-App/assets/120721761/869e59a2-b396-4320-9336-96f25f2db4a9)






![Screenshot 2023-10-06 132228](https://github.com/Mohan-Chandra-Sharma1/Register-Login-App/assets/120721761/2d5725ef-9a1d-47d0-87a0-34fa67eeaf08)






![Screenshot 2023-10-06 132309](https://github.com/Mohan-Chandra-Sharma1/Register-Login-App/assets/120721761/b2fb1990-2430-46de-8392-710bb857c638)




![Screenshot 2023-10-06 132404](https://github.com/Mohan-Chandra-Sharma1/Register-Login-App/assets/120721761/ada22854-f272-4a16-be52-2800ebbb87f5)

![Screenshot 2023-10-06 132933](https://github.com/Mohan-Chandra-Sharma1/Register-Login-App/assets/120721761/d2cc5162-6669-4e09-be75-c062e88fa08d)





![Screenshot 2023-10-06 132810](https://github.com/Mohan-Chandra-Sharma1/Register-Login-App/assets/120721761/a1921e56-33eb-4e84-aeef-2d3596795958)




# My React Authentication App

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App.js](#appjs)
  - [SignUp.js](#signupjs)
  - [Login.js](#loginjs)
  - [Homepage.js](#homepagejs)
- [Styling](#styling)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)



# Login Component Documentation

The `Login.js` component in this React application handles user login functionality and API integration. This documentation explains the code within this component.

## Table of Contents

- [Description](#description)
- [Component Overview](#component-overview)
- [API Integration](#api-integration)
- [Form Handling](#form-handling)
- [Error Handling](#error-handling)
- [Styling](#styling)
- [Usage](#usage)

## Description

# SignUp Component Documentation

The `SignUp.js` component in this React application handles user registration and sign-up functionality, including API integration and error handling. This documentation explains the code within this component.

## Table of Contents

- [Description](#description)
- [Component Overview](#component-overview)
- [API Integration](#api-integration)
- [Form Handling](#form-handling)
- [Error Handling](#error-handling)
- [Styling](#styling)
- [Usage](#usage)

## Description

The `SignUp.js` component is responsible for allowing users to sign up for the application. It interacts with two API endpoints for user registration and displays error messages using the `react-toastify` library in case of any issues.

## Component Overview

The `SignUp.js` component consists of the following key parts:

- **Import Statements**: It imports necessary modules, including React components, CSS styles, and libraries for styling and API integration.

- **State Management**: It uses the `useState` hook to manage the state of user registration data, including fields such as `firstName`, `lastName`, `username`, `email`, and `password`.

- **handleSubmit Function**: This function is triggered when the sign-up form is submitted. It performs the following steps:
  1. Sends user registration data to `API 1` for creating a new user account.
  2. If the account is successfully created (status code 200), it sends the same data to `API 2` with additional user attributes.
  3. If both API calls are successful, it displays a success alert and redirects the user to the homepage.
  4. If any API call fails, it handles errors and displays an error message using `react-toastify`.

- **handleChange Function**: This function handles changes in input fields and updates the state accordingly.

- **Render Method**: It renders the sign-up form with input fields for `firstName`, `lastName`, `username`, `email`, and `password`. Each input field has required validation. The form submission triggers the `handleSubmit` function.

- **Toast Container**: It uses `react-toastify` to display error messages to the user in a user-friendly way.

## API Integration

The `SignUp.js` component integrates with two API endpoints for user registration and account creation. Both API calls are made using the `fetch` API. The first API (`API 1`) is used to create a user account, while the second API (`API 2`) is used to add additional attributes to the user.

## Form Handling

The component handles form input and submission. It captures changes in the input fields (e.g., `firstName`, `lastName`) and updates the state accordingly. The form submission triggers the `handleSubmit` function.

## Error Handling

Error handling is implemented to manage possible failures in API calls. If an API call fails, an error message is displayed using `react-toastify` to inform the user of the issue.





##Login.js - 
The `Login.js` component is responsible for allowing users to log in to the application. It interacts with two API endpoints for user authentication. In case of successful login, the user is redirected to the homepage. Error messages are displayed using the `react-toastify` library.

## Component Overview

The `Login.js` component consists of the following key parts:

- **Import Statements**: It imports necessary modules and CSS files for styling and API integration.

- **State Management**: It uses the `useState` hook to manage the state of login data, including the `username` and `password`.

- **handleLogin Function**: This function is triggered when the login form is submitted. It performs the following steps:
  1. Sends login data to `API 1` for authentication.
  2. If authentication is successful (status code 200), it retrieves a JWT token from the response.
  3. Sends login data, along with the retrieved token, to `API 2` for further authentication.
  4. If both API calls are successful, it displays an alert for successful login and redirects the user to the homepage.
  5. If any API call fails, it handles errors and displays an error message.

- **handleChange Function**: This function handles input field changes and updates the state accordingly.

- **Render Method**: It renders the login form with input fields for `username` and `password`. Styling classes are added for a 3D effect. The form submission triggers the `handleLogin` function.

- **Toast Container**: It uses `react-toastify` to display error messages to the user.

## API Integration

The `Login.js` component integrates with two API endpoints:
1. `API 1` for initial user authentication.
2. `API 2` for further user authentication with the retrieved JWT token.

Both API calls are made using the `fetch` API.

## Form Handling

The component handles form input and submission. It captures changes in the `username` and `password` fields and triggers the `handleLogin` function on form submission.

## Error Handling

Error handling is implemented to manage possible failures in API calls. Error messages are displayed using the `react-toastify` library, providing a user-friendly experience.


















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
