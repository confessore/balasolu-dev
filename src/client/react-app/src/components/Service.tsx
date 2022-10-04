import React, { Component } from 'react';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';

interface IProps {
    icon: JSX.Element,
    title: string,
    highlight: string,
    description: string
}

interface IState {
    echo: string
}

export default class Service extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            echo: ""
        }
    }

    componentWillMount() {

    }

    render() {
        const { icon, title, highlight, description } = this.props;
        return (
            <div className="sm:w-[32rem] md:flex bg-zinc-200 rounded-xl items-center m-1 p-8 md:p-0 dark:bg-zinc-800 bg-opacity-90">
                <div className="md:pl-6 text-center space-y-4">
                    <span>
                        <div className="w-24 h-24 md:w-28 md:h-auto md:rounded-none rounded-full mx-auto">{icon}</div>
                    </span>
                </div>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <div>
                        <p className="text-lg font-medium">
                            {title}
                        </p>
                    </div>
                    <div className="font-medium">
                        <div className="text-emerald-500 dark:text-emerald-400">
                            {highlight}
                        </div>
                        <div className="text-zinc-700 dark:text-zinc-500">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
