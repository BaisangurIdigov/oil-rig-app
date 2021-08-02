import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./headers/Header";
import HeaderAdmin from "./headers/HeaderAdmin";
import Main from "./body/main/Main";
import Search from "./body/Search";
import MainAdmin from "./body/main/MainAdmin";
import Status from "./body/status/Status";
import Notes from "./body/notes/Notes";

function App() {
  const [input, setInput] = useState("");

  return (
    <Switch>
      <Route path="/" exact>
        <Header setInput={setInput}/>
        <Search setInput={setInput} />
        <Main input={input} />
      </Route>
      <Route path="/admin">
        <HeaderAdmin setInput={setInput}/>
        <MainAdmin input={input} />
      </Route>
      <Route path="/status">
        <HeaderAdmin />
        <Status />
      </Route>
      <Route path="/rig/:id/notes">
        <Header />
        <Notes />
      </Route>
      <Route path="/about_us">
        <Header />
      </Route>
    </Switch>
  );
}

export default App;
