import React from 'react';

function Header() {
    return (
        <div className="md:flex bg-slate-200 rounded-xl m-1 p-8 md:p-0 dark:bg-slate-800 bg-opacity-90">
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <div>
                    <p className="text-lg font-medium">
                        Welcome to Community and Career Solutions
                    </p>
                </div>
                <div className="font-medium">
                    <div className="text-emerald-500 dark:text-emerald-400">
                        We exist to encourage and enhance opportunities for every person willing to work and promote inclusion and diversity through employment
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Feel free to contact us for additional information and check back often for our latest updates
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;