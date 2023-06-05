import './App.css';
import Section1 from './modules/Section1/Section1';
import Section2 from './modules/Section2/Section2';

function App() {
	return (
		<div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
			<Section1 />
			<Section2 />
			<div>
				Section 3
			</div>
			<div>
				Section 4
			</div>
			<div>
				Section 5
			</div>
			<div>
				Section 1
			</div>
			<div>
				Section 1
			</div>
			<div>
				Section 1
			</div>
			<div>
				Section 1
			</div>
		</div>
	);
}
// const App = () => {
// 	return (
// 	  <div className="container">
// 		<header className="header">
// 		  <nav className="navbar">
// 			<div className="logo">
// 			  <img src="logo.png" alt="uni.cards" />
// 			</div>
// 			<ul className="nav-links">
// 			  <li><a href="/">Home</a></li>
// 			  <li><a href="/about">About</a></li>
// 			  <li><a href="/services">Services</a></li>
// 			  <li><a href="/contact">Contact</a></li>
// 			</ul>
// 		  </nav>
// 		</header>
  
// 		<section className="hero">
// 		  <div className="hero-content">
// 			<h1>Welcome to uni.cards</h1>
// 			<p>A platform for managing and organizing your university cards.</p>
// 			<button className="cta-button">Get Started</button>
// 		  </div>
// 		</section>
  
// 		<section className="features">
// 		  <div className="feature-card">
// 			<img src="feature1.png" alt="Feature 1" />
// 			<h3>Card Management</h3>
// 			<p>Easily manage and track all your university cards in one place.</p>
// 		  </div>
// 		  <div className="feature-card">
// 			<img src="feature2.png" alt="Feature 2" />
// 			<h3>Notifications</h3>
// 			<p>Receive important notifications and updates about your cards.</p>
// 		  </div>
// 		  <div className="feature-card">
// 			<img src="feature3.png" alt="Feature 3" />
// 			<h3>Secure and Reliable</h3>
// 			<p>Your data is kept secure and backed up regularly.</p>
// 		  </div>
// 		</section>
  
// 		<footer className="footer">
// 		  <p>&copy; 2023 uni.cards. All rights reserved.</p>
// 		</footer>
// 	  </div>
// 	);
//   };
  

export default App;
