import React, { Component } from "react";

import SmartForm from "../../components/SmartForm";

class Main extends Component {
  handleSubmit(values) {
    alert(
      "validated man!! Lets send this data!! See the console for the values..."
    );
    console.log(values);
  }

  render() {
    const smartFormFields = [
      {
        type: "varchar",
        label: "name",
        name: "name",
        required: "true",
        minLength: 10
      },
      { type: "email", label: "email", name: "email", required: true },
      { type: "text", label: "texto qualquer", name: "other" }
    ];

    return (
      <SmartForm
        fields={smartFormFields}
        submitTitle="enviar"
        onSubmit={values => this.handleSubmit(values)}
      />
    );
  }
}

export default Main;
