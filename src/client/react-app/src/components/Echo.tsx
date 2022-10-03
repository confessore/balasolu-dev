import React, { Component } from 'react';
import logo from '../logo.svg';
import axios from 'axios';

interface IProperties {

}

interface IState {
    echo: string
}

export default class Echo extends Component<IProperties, IState> {
    constructor(properties: IProperties) {
        super(properties);
        this.state = {
            echo: ""
        }
    }

    componentWillMount() {
        axios.post('https://api.localhost/echo', "hello from actix!")
        .then((response) => {
            this.setState({ echo: response.data });
        }, (error) => {
            console.log(error);
        });
    }

    render() {
        const { echo } = this.state;
        return (
            <>
            <div className="flex mx-auto px-auto justify-center items-center text-center">
                {echo}
            </div>
            </>
        );
    }
}
