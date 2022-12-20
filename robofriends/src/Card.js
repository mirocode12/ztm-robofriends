import React from 'react';

const Card = () => {
    return(
        <div className='bg-sky-500 inline-block p-4 m-5 rounded-lg'>
            <img alt = 'robot' src = 'https://robohash.org/test?200x200'/>
            <div>
                <h2 className="text-3xl font-bold underline">Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>          
        </div>
    );
}

export default Card