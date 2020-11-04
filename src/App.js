import './App.css';
import './assets/main.scss';
import RightColumn from './components/RightColumn';
import LeftColumn from './components/LeftColumn';

const App = () => {
  return (
    <>
      <div className="main-wrapper">
        <LeftColumn />
        <RightColumn />
      </div>
    </>
  );
};

export default App;
