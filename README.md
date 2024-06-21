
## About

### Vectopix Platform

**Vectopix** is a comprehensive e-learning platform designed to provide an excellent online education experience. The platform consists of both user and admin interfaces, allowing for seamless interaction between students and administrators. Built using React, the platform integrates with Firebase to handle data storage, authentication, and file management, ensuring a robust and scalable solution.

### Features

#### User Interface

- **User Dashboard**: Personalized dashboard for users to view their courses, assignments, and notifications.
- **Course Enrollment**: Browse and enroll in a wide range of courses covering various subjects.
- **Assignments and Quizzes**: Access and submit assignments and quizzes, track progress and performance.
- **Profile Management**: Users can view and update their profile information.
- **Notifications**: Receive updates on new assignments, course updates, and other important information.

#### Admin Interface

- **User Management**: View, add, edit, and delete users with comprehensive user list and profile management.
- **Course Management**: Manage course details, including adding new courses with illustrations, editing existing ones, and viewing the list of available courses.
- **Notifications**: Create and manage notifications to keep users informed about important updates.
- **Settings**: Customize various settings to tailor the dashboard according to the admin's needs.
- **Responsive Design**: Optimized for various screen sizes, ensuring a great user experience on both desktop and mobile devices.

### Technology Stack

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: For authentication, Firestore database, and storage solutions.
- **React Router**: For navigation and routing within the app.
- **CSS Modules**: For styling components and ensuring modular and maintainable CSS.

### Hosting

The Vectopix platform is hosted using Netlify and can be accessed at [https://vectopix.netlify.app/](https://vectopix.netlify.app/).

### Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/your-username/vectopix.git
    cd vectopix
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Create a Firebase project**
    - Go to [Firebase Console](https://console.firebase.google.com/)
    - Create a new project
    - Add a web app to the project and obtain your Firebase configuration

4. **Add Firebase configuration**
    - Create a file named `Firebase.js` inside the `src/Config` folder
    - Add your Firebase configuration as follows:
    ```javascript
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getFirestore } from 'firebase/firestore';
    import { getStorage } from 'firebase/storage';
    import { getAuth } from 'firebase/auth';

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const storage = getStorage(app);
    const auth = getAuth(app);

    export { db, storage, auth };
    ```

5. **Start the development server**
    ```sh
    npm start
    ```

### Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to open an issue or create a pull request. Follow these steps to contribute:

1. **Fork the repository**
2. **Create a new branch**
    ```sh
    git checkout -b feature/YourFeatureName
    ```
3. **Make your changes**
4. **Commit your changes**
    ```sh
    git commit -m 'Add some feature'
    ```
5. **Push to the branch**
    ```sh
    git push origin feature/YourFeatureName
    ```
6. **Open a pull request**

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

