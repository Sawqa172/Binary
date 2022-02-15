import React from "react";
import { MainContent } from "components/MainContent";
import { GlobalStyle } from "style/GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//mainLayout
import { MainLayout } from "components/Layouts/MainLayout";

//fonts
import "style/fonts.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Route path={["/", "/history"]} exact>
          <MainLayout>
            <Switch>
              <Route path="/" component={MainContent} exact />
              <Route path="/" component={History} exact />
            </Switch>
          </MainLayout>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
