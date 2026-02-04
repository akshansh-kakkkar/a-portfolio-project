import './App.css';
import PortfolioCard from './Components/PortfolioCard';
import WelcomeMessage from './WelcomeMessage'
function App() {
  const studentName = "Alice";
  const favoriteColor = "Blue";
  const age = 25;
  return (
    <div className='App'>
      <PortfolioCard/>
    </div>
  );
}

export default App;
