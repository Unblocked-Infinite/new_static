function simulateDelay() {
    return new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  // Function to authenticate user and generate an auth token
  async function authenticate() {
    const validPassword = 'password123';
    const enteredPassword = prompt('Enter your password:');
    
     // Simulate the delay before completing authentication
    
    if (enteredPassword === validPassword) {
      // In a real application, use a secure method to generate a token and set the expiration time.
      // For simplicity, we'll use a random string here and set the expiration time to 7 hours.
      const authToken = generateRandomToken();
      const expirationTime = Date.now() + 7 * 60 * 60 * 1000; // 7 hours in milliseconds
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('expirationTime', expirationTime.toString());
      await simulateDelay();
      window.location.href = "./home.html"
    } else {
        await simulateDelay();
        window.location.href = "./index.html"
    }
  }
  
  
  // Function to check if the authentication token is expired
function isAuthTokenExpired() {
    const expirationTime = localStorage.getItem('expirationTime');
    return expirationTime !== null && Date.now() > parseInt(expirationTime);
  }
  
  // Function to check if the user has a valid auth token
  function checkAuthToken() {
    const authToken = localStorage.getItem('authToken');
    return authToken !== null && !isAuthTokenExpired();
  }
  
  // Redirects unauthorized users to the login page
  async function redirectUnauthorized() {
    await simulateDelay();
    if (!checkAuthToken()) {
      alert('You are not logged in or your session has expired. Please log in to access this page.');
      window.location.href = "./index.html";
    }
  }
  
  // Utility function to generate a random token
  function generateRandomToken() {
    return Math.random().toString(36).substring(2);
  }
  

  redirectUnauthorized()