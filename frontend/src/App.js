import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider"
import TemplateProvider from "./theme/TemplateProvider";

function App() {
  return (
    <div>
      <TemplateProvider>
        <AccountProvider>
          <Messenger/>
        </AccountProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
