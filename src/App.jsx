import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import Mac from './pages/Mac';
import WatchSeries9 from './pages/WatchSeries9';
import AirPodsPro2 from './pages/AirPodsPro2';

function App() {
  const MatchStore = useRouteMatch("/store");
  const MatchWatchSeries9 = useRouteMatch("/watchSeries9");
  const MatchAirPodsPro2 = useRouteMatch("/airPodsPro2");
  
  if (MatchStore) {
    document.body.style.backgroundColor = "var(--color-f57)";
  } else if (MatchWatchSeries9 || MatchAirPodsPro2) {
    document.body.style.backgroundColor = "var(--color-000)";
  } else {
    document.body.style.backgroundColor = "var(--color-fff)";
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/airPodsPro2"><AirPodsPro2 /></Route>
        <Route path="/watchSeries9"><WatchSeries9 /></Route>
        <Route path="/mac"><Mac /></Route>
        <Route path="/store"><Store /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
