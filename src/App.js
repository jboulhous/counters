import Header from'./components/Header.js';
import Content from'./components/Content.js';
import Footer from'./components/Footer.js';
import db from './db.js';

window.db = db;

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <Content />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
