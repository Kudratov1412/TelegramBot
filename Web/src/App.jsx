import React from "react";
import "./App.css";
import { getData } from "./constants/db";
import Card from "./Components/Card/card";

const courses = getData();

const App = () => {
  return (
    <>
      <h1>Furqat kurslari</h1>
      {/* Cart */}
      <div className="cards__container">
        {courses.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>
    </>
  );
};

export default App;
