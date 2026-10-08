import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <div className="brand">
          <span>IMMA'S</span>
          <small>KITCHEN</small>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#menu" className="nav-button">
          View Menu
        </a>
      </nav>


      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="eyebrow">WELCOME TO</p>

          <h1>
            Good food.
            <br />
            <span>Good moments.</span>
          </h1>

          <p className="hero-text">
            Delicious, homemade meals prepared with love
            and served with warmth.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="primary-button">
              Explore Our Menu
            </a>

            <a href="#contact" className="secondary-button">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-logo">
          <div className="logo-circle">
            <img src="/imma-logo.png" alt="Imma's Kitchen logo" />
          </div>
        </div>

      </section>


      {/* Menu Section */}
<section className="menu-section" id="menu">

  <div className="section-heading">
    <p className="eyebrow">OUR MENU</p>
    <h2>Made with love.</h2>
    <p>
      Delicious meals, snacks and drinks prepared fresh for you.
    </p>
  </div>

  <div className="menu-grid">

    {/* Main Meals */}
    <div className="menu-card">
      <h3>Main Meals</h3>

      <div className="menu-item">
        <span>Chicken Choma</span>
        <span>KSh 1,000</span>
      </div>

      <div className="menu-item">
        <span>Mbuzi Choma</span>
        <span>KSh 1,200</span>
      </div>

      <div className="menu-item">
        <span>Whole Fish + Ugali / Wedges / Fries</span>
        <span>KSh 450</span>
      </div>

      <div className="menu-item">
        <span>Beans + Chapo / Rice / Ugali</span>
        <span>KSh 180</span>
      </div>

      <div className="menu-item">
        <span>Beef Pilau</span>
        <span>KSh 150</span>
      </div>

      <div className="menu-item">
        <span>Beef + Chapati / Rice / Ugali</span>
        <span>KSh 300</span>
      </div>

      <div className="menu-item">
        <span>Kamande + Chapati / Rice</span>
        <span>KSh 200</span>
      </div>
    </div>


    {/* Chicken */}
    <div className="menu-card">
      <h3>Fried Chicken</h3>

      <div className="menu-item">
        <span>Full Fried Chicken</span>
        <span>KSh 1,000</span>
      </div>

      <div className="menu-item">
        <span>Half Fried Chicken</span>
        <span>KSh 500</span>
      </div>
    </div>


    {/* Snacks */}
    <div className="menu-card">
      <h3>Snacks</h3>

      <div className="menu-item">
        <span>Smokies</span>
        <span>KSh 40</span>
      </div>

      <div className="menu-item">
        <span>Samosas</span>
        <span>KSh 50</span>
      </div>

      <div className="menu-item">
        <span>Sausages</span>
        <span>KSh 50</span>
      </div>
    </div>


    {/* Sides & Drinks */}
    <div className="menu-card">
      <h3>Sides & Drinks</h3>

      <div className="menu-item">
        <span>Fries</span>
        <span>KSh 130</span>
      </div>

      <div className="menu-item">
        <span>Chapati</span>
        <span>KSh 30</span>
      </div>

      <div className="menu-item">
        <span>Tea</span>
        <span>KSh 50</span>
      </div>

      <div className="menu-item">
        <span>Soda</span>
        <span>KSh 60</span>
      </div>

      <div className="menu-item">
        <span>Water</span>
        <span>KSh 40</span>
      </div>
    </div>

  </div>

</section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">

       <div className="contact-info">
  <p>
    📞 <strong>Phone:</strong>{" "}
    <a href="tel:0719586316">0719 586 316</a>
  </p>

  <p>
    💬 <strong>WhatsApp:</strong>{" "}
    <a
      href="https://wa.me/254725444942"
      target="_blank"
      rel="noopener noreferrer"
    >
      0725 444 942
    </a>
  </p>

  <p>
    📍 <strong>Location:</strong>{" "}
    <a
      href="https://www.google.com/maps/search/?api=1&query=2nd+Sunrise+Avenue"
      target="_blank"
      rel="noopener noreferrer"
    >
      2nd Sunrise Avenue
    </a>
  </p>

  <p>
    🕐 <strong>Opening Hours:</strong> 8:00 AM – 10:00 PM
  </p>
</div>

      </section>


      {/* Footer */}
      <footer>
        <p>© 2026 Imma's Kitchen. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;