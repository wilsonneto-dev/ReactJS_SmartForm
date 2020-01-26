import React, { Component } from "react";

class GeneralInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "", message: "" };
  }

  componentDidMount() {
    if (this.props.value) this.setState({ value: this.props.value });
  }

  validate() {
    const { minLength, required } = this.props;

    if (required) {
      if (required === true) {
        if (this.state.value.trim() === "") {
          this.setState({ message: "This field is required" });
          return false;
        }
      }
    }

    if (minLength) {
      if (this.state.value.length < minLength) {
        this.setState({
          message: `The min length for this field is ${minLength}`
        });
        return false;
      }
    }

    // passed all
    this.setState({ message: "" });
    return true;
  }

  getValueObject() {
    let obj = {};
    obj[this.props.name] = this.state.value;
    return obj;
  }

  render() {
    const { label } = this.props;

    return (
      <>
        <div className="input-block">
          <label>{label}</label>
          {this.state.message.length > 0 && (
            <span className="error-message">{this.state.message}</span>
          )}
          <input
            type="text"
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          />
        </div>
      </>
    );
  }
}

export default GeneralInput;
