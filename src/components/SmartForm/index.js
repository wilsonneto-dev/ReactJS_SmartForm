import React, { Component } from "react";

import Input from "./inputs/InputFactory";

class SmartForm extends Component {
  constructor(props) {
    super(props);

    this.refFields = [];
  }

  validate() {
    let validated = true;
    this.refFields.forEach(refField => {
      const fieldValidated = refField.current.validate();
      validated = validated && fieldValidated;
    });
    console.log(validated);
    return validated;
  }

  getValuesObject() {
    let obj = {};
    this.refFields.forEach(refField => {
      obj = { ...obj, ...refField.current.getValueObject() };
    });
    return obj;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      const values = this.getValuesObject();
      if (this.props.onSubmit) this.props.onSubmit(values);
    }
  }

  render() {
    const { fields } = this.props;
    return (
      <section>
        <div className="form-wrapper">
          <form>
            {fields.map((field, index) => {
              return (
                <Input
                  getRef={newRef => this.refFields.push(newRef)}
                  key={index}
                  {...field}
                />
              );
            })}

            <button className="btn-submit" onClick={e => this.handleSubmit(e)}>
              { this.props.submitTitle || "Ok" }
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default SmartForm;
