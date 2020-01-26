import React, { Component, createRef } from "react";

import GeneralInput from "../GeneralInput";

class InputFactory extends Component {
  render() {
    const { type } = this.props;
    let InputComponent;

    switch (type) {
      /* case "text":
        InputComponent = GeneralInput;
        break; */
      default:
        InputComponent = GeneralInput;
        break;
    }

    const ref = createRef();
    if (this.props.getRef) this.props.getRef(ref);

    return <InputComponent ref={ref} {...this.props} />;
  }
}

export default InputFactory;
