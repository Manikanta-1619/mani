import React from 'react';
import ReactDOM from 'react-dom';

// Header Component
const Header = () => {
  return (
    <header>
      <h1>Welcome to Header component!</h1>
    </header>
  );
};

// Content Component
const Content = () => {
  return (
    <main>
      <p>This is the Content component. Here's where your main logic goes.</p>
    </main>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <p>© 2025 Your App. All rights reserved.</p>
    </footer>
  );
};

// App Component combining all
const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

// Render to DOM
ReactDOM.render(<App />, document.getElementById('root'));
