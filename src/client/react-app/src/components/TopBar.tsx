import React from 'react';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';

function TopBar() {
    return (
        <div className="sticky top-0 w-full p-4 bg-zinc-200 dark:bg-zinc-800 bg-opacity-95">
            <div className="flex space-y-2 justify-between items-center px-2">
                <div>
                    <p className="text-lg font-bold">
                        balasolu
                    </p>
                </div>
                <div>
                    <Bars3Icon className="w-6 h-6"/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;