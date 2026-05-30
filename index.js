// Auto-update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    function subscribeNewsletter() {
      const email = document.getElementById('newsletter-email').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      alert('Thank you for subscribing! Welcome to the EliteRides family.');
      document.getElementById('newsletter-email').value = '';
    }