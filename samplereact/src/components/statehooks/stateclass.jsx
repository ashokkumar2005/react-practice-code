import React from "react";

class Showroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Model: "RX100", color: "black" };
  }

  render() {
    return (
      <>
        <h2>
          Bike model is {this.state.Model} and color is {this.state.color}
        </h2>
        <button
          onClick={() => {
            this.setState((previousState) => ({
              ...previousState,
              Model: "R15",
            }));
          }}
        >
          Update Model
        </button>
      </>
    );
  }
}

export default Showroom;