import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="p-6">
      <RegistrationForm />
      <hr className="my-6" />
      <FormikForm />
    </div>
  );
}

export default App;
