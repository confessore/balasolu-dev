import React from 'react';

function About() {
    return (
        <div className="sm:w-[32rem] md:flex bg-zinc-200 rounded-xl m-1 p-8 md:p-0 dark:bg-zinc-800 bg-opacity-90">
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <div>
                    <p className="text-lg font-medium">
                        Community and Career Solutions is a nonprofit disability employment service 
                        empowering people with the knowledge, connections and confidence required to 
                        embark on a new sustainable career
                    </p>
                </div>
                <div className="font-medium">
                    <div className="text-emerald-500 dark:text-emerald-400">
                        We are partnered with The Florida Division of Vocational Rehabilitation, 
                        the Agency for Persons with Disabilities, and the American Dream Employment Network
                    </div>
                    <div className="text-zinc-700 dark:text-zinc-500">
                        Our company is structured as an all inclusive integrated service offering adult employment 
                        services, youth programs, employability trainings, paid work experience, and a variety of 
                        assessments. Our services enhance a person’s ability to successfully achieve independence by 
                        establishing a lifelong career
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;