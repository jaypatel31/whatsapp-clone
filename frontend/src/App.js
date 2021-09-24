import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider"

function App() {
  return (
    <div>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </div>
  );
}

export default App;
