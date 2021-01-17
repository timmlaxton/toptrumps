import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Card
      id={1}
      name="Alisson"
      type="Keeper"
      skills={80}
      />
      </div>
      
  )
}

export default App;
