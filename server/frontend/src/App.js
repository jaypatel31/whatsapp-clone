import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider"
import TemplateProvider from "./theme/TemplateProvider";
import UserProvider from "./constants/UserProvider";

function App() {
  return (
    <div>
      <UserProvider>
        <TemplateProvider>
          <AccountProvider>
            <Messenger/>
          </AccountProvider>
        </TemplateProvider>
      </UserProvider>
    </div>
  );
}

export default App;
