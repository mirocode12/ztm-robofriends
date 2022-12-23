import React from 'react';

const Card = ( { id, name, username, email } ) => {
    return(
        <div className='bg-blue-100 inline-block p-1 m-5 rounded-lg'>
            <h2 className='text-center text-lg pt-2'>{username}</h2>
            <img className='border-2 border-blue-200 rounded-lg' alt = 'robot' src = {`https://robohash.org/${id}?150x150`}/>
            <div>
                <h2 className="text-3xl font-bold text-center">{name}</h2>
                <p className='text-center text-lg'>{email}</p>
            </div>          
        </div>
    );
}

export default Card