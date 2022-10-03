import React from 'react';

function Contact() {
    return (
        <div className="md:flex bg-zinc-200 rounded-xl m-1 p-8 md:p-0 dark:bg-zinc-800 bg-opacity-90">
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <div>
                    <p className="text-lg font-medium">
                        If you have questions about what programs we have available to you, feel free to give us a call
                    </p>
                </div>
                <div className="grid grid-cols-2 font-medium justify-around items-center">
                    <div>
                        <div className="text-sky-500 dark:text-sky-400">
                            <p>1515 E Silver Springs Blvd., Ste. 137</p>
                            <p>Ocala, Florida 34470</p>
                        </div>
                        <div className="text-zinc-700 dark:text-zinc-500">
                            "We are inside the Cascades"
                        </div>
                    </div>
                    <div>
                        <div className="text-sky-500 dark:text-sky-400">
                            <a href="tel:18334227562"><strong>+1 (833) 4-CCS-JOB</strong></a>
                        </div>
                        <div className="text-zinc-700 dark:text-zinc-500">
                            <a href="tel:18334227562"><strong>+1 (833) 422-7562</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;