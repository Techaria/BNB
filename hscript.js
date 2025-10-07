 <script>
    // Smooth scroll effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Booking form handler
    document.getElementById("bookingForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Booking submitted successfully!");
      this.reset();
    });
  </script>
