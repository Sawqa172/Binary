import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//mainLayout
import { MainLayout } from "components/Layouts/MainLayout";

//Content
import { MainContent } from "content/MainContent";
// import { History } from "components/History";

//fonts
import "style/fonts.css";

//global styles
import { GlobalStyle } from "style/GlobalStyles";
import { Header } from "./components/Header";

//toastify
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path={["/", "/history"]} exact>
          <MainLayout>
            <Switch>
              <Route path="/" component={MainContent} exact />
              {/*<Route path="/history" component={History} exact />*/}
            </Switch>
          </MainLayout>
        </Route>
        <GlobalStyle />
      </div>
    </BrowserRouter>
  );
}

export default App;
