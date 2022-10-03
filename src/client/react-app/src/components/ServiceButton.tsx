import React from 'react';

interface Model {
    title: string;
}

function ServiceButton(props: Model) {
    return (
        <button className="px-4 py-1 m-1 text-sm text-indigo-500 
            font-semibold rounded-full border border-indigo-400 
            hover:text-white hover:bg-indigo-500 hover:border-transparent 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                {props.title}</button>
    );
}

export default ServiceButton;   