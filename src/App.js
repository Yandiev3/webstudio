import './App.scss';
import CookieConsent from './components/cookieConsent/CookieConsent.jsx';
import Footer from './components/footer/Footer.jsx';
import MainCont from './page/Main.jsx'
function App() {
  return (
    <>
    <div className="App">
      <MainCont />
      <Footer />
      <CookieConsent />
    </div>
    </>
  );
}

export default App;
