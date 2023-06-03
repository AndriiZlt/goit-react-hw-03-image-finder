import React from 'react';
class Button extends React.Component {
  render() {
    return (
      <button
        className="button"
        type="text"
        onClick={this.props.btnClickHandler}
      >
        Load more
      </button>
    );
  }
}
export default Button;
