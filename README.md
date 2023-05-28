# Test Coding

This repository contains a single-page web application created as a solution to the given criteria. The application is built using HTML, CSS, JavaScript, and the Tailwind CSS framework. It consists of a header, a footer, and a panel with three tabs. Below are the details of the website:

## Criteria
- Single Page: The website is designed to have only one page.
- Header and Footer: The header displays the name of the developer, and the footer shows the date of completion.
- Tab Panel: The panel consists of three tabs with the following functionality:
  - Tab 1: Users are required to input a number between 1 and 100,000. Upon clicking a button, they will be redirected to Tab 2, and Tab 1 will be disabled. This input number is referred to as "A."
  - Tab 2: Users will see another button. When this button is clicked, a table will appear containing "A" random integers ranging from -1,000,000 to 1,000,000. Users can click the button multiple times to generate new random numbers until satisfied.
  - Tab 3: Users will see another button. When this button is clicked, a number will appear. This number, referred to as "B," is the largest positive integer that is smaller than all the positive integers in the table from Tab 2.

# Test Essay

This document provides detailed answers to the essay questions:

## 1. Difference between cookies and local storage and when to use them

Cookies:
- Cookies are small pieces of data stored in the user's web browser.
- They are used to store information that persists across multiple requests and sessions.
- Commonly used for session management, user preferences, tracking, and authentication purposes.
- Limitations: limited storage capacity (usually up to 4KB), sent with every request.

Local Storage:
- Local storage is a web storage mechanism that allows storing larger amounts of data (up to 5MB) in the user's browser.
- Commonly used for client-side caching, offline data persistence, and storing non-sensitive information.
- Data is not automatically sent with every request, reducing unnecessary overhead.

When to use cookies:
- Storing small amounts of data (e.g., session IDs, user preferences).
- Tracking user behavior and analytics.
- Implementing authentication mechanisms.

When to use local storage:
- Storing larger amounts of data (e.g., cached content, offline data).
- Storing non-sensitive information.
- Implementing client-side functionalities that don't require sending data with every request.

## 2. Securing the GUI from cyber attacks and considerations

Securing the GUI (Graphical User Interface) from cyber attacks involves implementing various security measures. Some important considerations include:

- Input Validation: Validate and sanitize user input to prevent injection attacks, such as cross-site scripting (XSS) and SQL injection.
- Cross-Site Scripting (XSS) Prevention: Implement measures, such as output encoding and content security policies, to mitigate XSS vulnerabilities.
- Cross-Site Request Forgery (CSRF) Protection: Implement CSRF tokens and techniques like same-origin policy to prevent unauthorized actions by tricking users.
- Session Management: Properly handle session management, including secure session storage, session expiration, and session ID handling.
- Authentication and Authorization: Implement secure authentication mechanisms, such as password hashing, multi-factor authentication, and role-based access control.
- Secure Communication: Use HTTPS (SSL/TLS) to encrypt data transmission between the client and server.
- Error Handling: Implement appropriate error handling to avoid leaking sensitive information to attackers.
- Regular Updates and Patching: Keep the GUI framework, libraries, and dependencies up to date with security patches and updates.

## 3. Can a front-end web application be converted into a desktop/mobile application?

Yes, a front-end web application can be converted into a desktop or mobile application using various technologies and frameworks. The conversion process depends on the specific requirements and target platform. Here are some approaches:

- Desktop Applications: Front-end web applications can be converted into desktop applications using frameworks like Electron or NW.js. These frameworks package the web application into an executable file that can be installed and run on desktop operating systems like Windows, macOS, or Linux.

- Mobile Applications: Front-end web applications can be converted into mobile applications using frameworks like React Native, Ionic, or Flutter. These frameworks allow developers to build mobile apps using web technologies (HTML, CSS, JavaScript) and provide access to native device features and APIs.

The conversion process usually involves rewriting or adapting certain parts of the code to fit the platform-specific requirements and user experience guidelines. Additionally, some functionality that relies on web-specific features (like cookies or local storage) might need to be replaced or modified to work within the constraints of the target platform.

## 4. Placing a smaller div (A) in the center of a larger div (B) vertically

To place a smaller div (A) in the center of a larger div (B) vertically, you can use the following CSS properties and techniques:

#divB {
  display: flex;
  align-items: center; /* Vertically center align items */
}

<div id="divB">
  <div id="divA">
    <!-- Content of div A -->
  </div>
</div>

The outer div (B) is set to display: flex, which creates a flex container.
By setting align-items: center on the flex container, the items (div A) will be vertically centered within the container.
The inner div (A) is placed inside div B, and its content can be added accordingly.

## 5.Sebutkan sebuah framework UI yang kamu sangat sukai, jelaskan mengapa kamu menyukainya.

- Utility-First Approach: Tailwind CSS follows a utility-first approach, which means it provides a wide range of pre-defined utility classes that can be directly applied to HTML elements. This approach offers great flexibility and speeds up the development process by eliminating the need to write custom CSS for many common styles.

- Highly Customizable: Tailwind CSS allows extensive customization through configuration files. Developers can modify or extend the default theme, define custom utility classes, and override any aspect of the framework's styles to match their specific design requirements.

- Responsive Design: Tailwind CSS provides built-in responsive design classes that make it easy to create responsive layouts. The framework includes breakpoints and responsive utility classes, allowing developers to design interfaces that adapt to different screen sizes and devices.

- Developer Experience: Tailwind CSS has excellent developer experience. The utility classes are intuitive and expressive, making it easy to understand the purpose and functionality of each class. The framework's documentation is comprehensive, well-structured, and provides examples and explanations for each feature.

- Active Community and Ecosystem: Tailwind CSS has a vibrant and supportive community. There are numerous resources available, including tutorials, articles, starter templates, and plugins/extensions created by the community. This ecosystem enhances productivity and provides solutions to common design and development challenges.

Overall, Tailwind CSS offers a powerful, customizable, and efficient way to build user interfaces. Its utility-first approach, flexibility, and excellent developer experience make it a preferred choice for many front-end developers.