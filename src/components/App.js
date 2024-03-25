import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: '',
            name2: ''
        };
        this.handlechange1 = this.handlechange1.bind(this);
        this.handlechange2 = this.handlechange2.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.clearFeild = this.clearFeild.bind(this);
    }

    handlechange1(e) {
        this.setState({ name1: e.target.value });
    }

    handlechange2(e) {
        this.setState({ name2: e.target.value });
    }

    handleClick() {
        const answerElement = document.querySelector('[data-testid="answer"]');
        const { name1, name2 } = this.state;
        
        if (name1 === '' && name2 === '') {
            answerElement.innerText = "Please Enter valid input";
            return;
        }

        let finalStr = '';
        let modifiedName2 = name2;

        for (let i = 0; i < name1.length; i++) {
            const char = name1[i];
            if (!modifiedName2.includes(char)) {
                finalStr += char;
            } else {
                modifiedName2 = modifiedName2.replace(char, '');
            }
        }
        finalStr += modifiedName2;
        console.log(finalStr);
        let sum = 0;
        for (let k = 0; k < finalStr.length; k++) {
            sum = sum + 1;
        }
        let mod = sum % 6;
        console.log(mod);


        if (mod === 1) {
            answerElement.innerText = "Friends";
        } else if (mod === 2) {
            answerElement.innerText = "Love";
        } else if (mod === 3) {
            answerElement.innerText = "Affection";
        } else if (mod === 4) {
            answerElement.innerText = "Marriage";
        } else if (mod === 5) {
            answerElement.innerText = "Enemy";
        } else if (mod === 0) {
            answerElement.innerText = "Siblings";
        }
    }

    clearFeild() {
        this.setState({ name1: '', name2: '' });
        const answerElement = document.querySelector('[data-testid="answer"]');
        answerElement.innerText = '';
    }

    render() {
        const { name1, name2 } = this.state;

        return (
            <div id="main">
                <input data-testid="input1" value={name1} onChange={this.handlechange1} placeholder="Enter first name" />
                <input data-testid="input2" value={name2} onChange={this.handlechange2} placeholder="Enter second name" />
                <button data-testid="calculate_relationship" onClick={this.handleClick}>Calculate Relationship Future</button>
                <button data-testid="clear" onClick={this.clearFeild}>Clear</button>
                <h3 data-testid="answer"></h3>
            </div>
        )
    }
}

export default App;
