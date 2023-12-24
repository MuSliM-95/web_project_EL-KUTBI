import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./providers/router/AppRouter";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
