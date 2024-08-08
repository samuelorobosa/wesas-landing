import './App.css';
import LandingPage from './modules/landing-page/LandingPage';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  return (
    <>
      <TawkMessengerReact
        propertyId={import.meta.env.VITE_TAWK_TO_PROPERTY_ID}
        widgetId={import.meta.env.VITE_TAWKTO_WIDGET_ID}
      />
      <LandingPage />;
    </>
  );
}

export default App;
