import React from 'react';
import { render } from 'react-dom';

export default class CreateCode extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    this.setState({ random: result });
  }

  render() {
    return (
      <div className='row'>
        <div className='col-12'>
          <h3 className='text-center'>React Random Number Generator</h3>
          <p>
            Simple example for this question in Stackoverflow:{' '}
            <a
              href='https://stackoverflow.com/questions/45175836/random-number-using-react-js'
              target='_blank'
            >
              https://stackoverflow.com/questions/45175836/random-number-using-react-js
            </a>
          </p>
          <button
            className='btn btn-primary'
            onClick={this.handleClick.bind(this)}
          >
            Click
          </button>
          <div className='card' style={{ marginTop: '10px' }}>
            <div className='card-block'>The number is: {this.state.random}</div>
          </div>
        </div>
      </div>
    );
  }
}

render(<Button />, document.getElementById('container'));
