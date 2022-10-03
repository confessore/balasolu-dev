import React from 'react';
import ServiceButton from './ServiceButton';

function Services() {
    return (
        <div className="sm:w-[32rem] md:flex bg-zinc-200 rounded-xl m-1 p-8 md:p-0 dark:bg-zinc-800 bg-opacity-90">
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <div className="flex flex-wrap justify-center items-center">
                    <ServiceButton title={'Vocational Rehabilitation (VR)'}  />
                    <ServiceButton title={'Employment Services'}  />
                    <ServiceButton title={'Supported Employment Services'}  />
                    <ServiceButton title={'Adult Employment Services'}  />
                    <ServiceButton title={'Youth Employment Services'}  />
                    <ServiceButton title={'Youth Transition Program'}  />
                    <ServiceButton title={'Vocational & Psychological Evaluations'}  />
                    <ServiceButton title={'Ticket to Work and C-WIP'}  />
                </div>
            </div>
        </div>
    );
}

export default Services;