import React, { Component } from 'react';

function widthNormalisation(width) {
    if (width < 5) {
        return 5;
    } else if (width > 995) {
        return 995;
    } else {
        return width;
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 500, change: false };
        this.handleChange = this.handleChange.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        var x = e.clientX;
        if (this.state.change) {
            this.setState({ x: x });
        }
    }

    mouseDown(e) {
        this.setState({ change: true });
    }

    mouseUp(e) {
        this.setState({ change: false });
    }

    render() {

        var width = widthNormalisation(this.state.x);
        var divStyle1Width = width - 5;
        var divStyle2Width = Math.abs(1000 - width) -5;

        var divStyle1 = {
            width: divStyle1Width + 'px',
            background: 'gray',
            height: '300px',
            float: 'left'
        };

        var divStyle2 = {
            width: divStyle2Width + 'px',
            background: 'gray',
            height: '300px',
            float: 'left'
        };

        var drag = {
            width: '10px',
            background: 'black',
            height: '300px',
            float: 'left',
        };

        return (
            <div className="App">
              <div onMouseMove={this.handleChange}>
                <div style={divStyle1}></div>
                  <div style={drag} onMouseUp={this.mouseUp} onMouseDown={this.mouseDown}></div>
                <div style={divStyle2}></div>
              </div>
            </div>
        );
    }
}

export default App;