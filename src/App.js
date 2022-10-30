
import './App.css';
import Sidebar from './commponents/sidebar/Sidebar';
import Timeline from './commponents/timeline/Timeline';
import Widgets from './commponents/widget/Widgets';


function App() {
  return (
    <div className="app">
      <Sidebar />
      
      <Timeline />

      <Widgets />
      
    </div>
  );
}

export default App;
