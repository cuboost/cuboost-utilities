import React from 'react';
import UtilityCard from './UtilityCard';
import { utilities } from './utilities';

export default function NewUtilities() {
    return (
        <div>
            <h2>New</h2>

            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                {utilities.slice(0, 10).map(utility => (
                    <UtilityCard key={utility.id} name={utility.name} icon={utility.icon} link={utility.link} />
                ))}
            </div>
        </div>
    );
}
