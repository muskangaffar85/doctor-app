function skipContent() {
    // For example, skip to a different section of the page
    window.location.href = "https://www.google.co.uk/";  // Replace with the link to skip to
}



    // Front-end form validation
    function validateForm() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Basic validation checks
        if (!email || !password) {
            alert("Please fill in both fields.");
            return false;
        }
        // Simulate successful authentication
        alert("Successfully logged in!");
        // Normally, you would submit the form data to the back-end for validation
        return false;  // Prevent actual form submission for demo purposes
    }

    // Simulate social sign-in
    function socialSignIn(provider) {
        alert('Sign in with ' + provider);
    }

    // Import Firebase libraries
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
    
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCNfe6t6KpR1DdZc-dLObuhE2BG0q3n2M",
    authDomain: "web-app-project-bb6e8.firebaseapp.com",
    projectId: "web-app-project-bb6e8",
    storageBucket: "web-app-project-bb6e8.firebasestorage.app",
    messagingSenderId: "995424022140",
    appId: "1:995424022140:web:06e32105de5453973223f9",
    measurementId: "G-J6KGXDDV6Q"
  };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

