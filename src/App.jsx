import CustomThemeProvider from "./providers/CustomThemeProvider";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import UserProvider from "./users/providers/UserProvider";
import SnackbarProvider from "./providers/SnackbarProvider";

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <UserProvider>
          <SnackbarProvider>
            <Layout>
              <Router />
            </Layout>
          </SnackbarProvider>
        </UserProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
