import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import axios from 'axios';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      data : []
    };
  }
   componentDidMount() {
    axios.get(`https://rallycoding.herokuapp.com/api/music_albums`)
      .then(res => {
        console.log(res);
        this.setState({data: res.data});
        // console.log('setState', this.state.data);
        // if(res.data && res.data.data){

        // return {
        //   data: res.data.data
        // }
        // }
      })
  }

  render() {
    return (
      <div>
        // <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        {this.state.data.length > 0 && <Hello data={this.state.data} />}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
