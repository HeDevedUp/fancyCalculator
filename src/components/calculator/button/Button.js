import React from 'react';
import './Button.css';

functional
function Button({
  name, clickHandler, equals, orangee,
}) {
  const handleClick = () => {
    clickHandler(name);
  };
  const className = [
    equals ? 'equals' : '',
    orangee ? 'orangee' : '',
  ];

  return (
    <button className={className.join(' ').trim()} type="button" onClick={handleClick}>
      {name}
    </button>
  );
export default class Button extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        clickHandler: PropTypes.func,
    };

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        const className =[ 
             this.props.equals?" equals":"",
             this.props.orangee?" orangee":""

        ]
        return (

            <button className={className.join(" ").trim()} onClick={this.handleClick}>{this.props.name}</button>

        );
    }

}

export default Button;
