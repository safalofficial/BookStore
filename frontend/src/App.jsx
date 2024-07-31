import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/books/create" Component={CreateBook} />
      <Route path="//books/edit/:id" Component={EditBook} />
      <Route path="/books/details/:id" Component={ShowBook} />
      <Route path="//books/delete/:id" Component={DeleteBook} />
    </Routes>
  );
};

export default App;
