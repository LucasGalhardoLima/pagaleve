import "./App.css";
import { TextField } from "@material-ui/core";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </header>
    </div>
  );
}

export default App;
