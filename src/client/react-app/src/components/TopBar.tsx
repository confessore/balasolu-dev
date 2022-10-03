import React from 'react';
import Bars4Icon from '@heroicons/react/24/outline/Bars4Icon';

function TopBar() {
    return (
        <div className="sticky top-0 w-full p-4 bg-slate-200 dark:bg-slate-800 bg-opacity-95">
            <div className="flex space-y-2 justify-between items-center px-2">
                <div>
                    <p className="text-lg font-bold">
                        Community and Career Solutions
                    </p>
                </div>
                <div>
                    <Bars4Icon className="w-6 h-6"/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;