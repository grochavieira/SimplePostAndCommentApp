import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import CreatePosts from "./pages/CreatePosts";
import ListPosts from "./pages/ListPosts";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={CreatePosts} />
      <Route path="/list" component={ListPosts} />
    </BrowserRouter>
  );
};

export default Routes;
