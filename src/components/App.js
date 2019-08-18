import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Layout from "../components/Layout";
import NotFound from "./NotFound";
import Home from "./Home";
import RickMorty from "./../pages/RickMorty";
import BadgeEdit from "./../pages/badgeEdit";
import BadgeDetails from "./../pages/badgeDetailsContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route eaxct path="/badges/new" component={BadgeNew} />
          <Route eaxct path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route eaxct path="/badges/:badgeId" component={BadgeDetails} />
          <Route eaxct path="/ricknmorty" component={RickMorty} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
