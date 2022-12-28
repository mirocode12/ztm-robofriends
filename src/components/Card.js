import React from 'react';

const Card = ( { id, name, username, email, onCardClick } ) => {

    const handleClick = () => {
        onCardClick(id);
    }
    return(
        <div onClick={handleClick} className='transition cursor-pointer hover:scale-105 bg-blue-100 inline-block p-1 m-5 rounded-lg shadow-xl'>
            <h2 className='text-center text-lg pt-2 text-neutral-700 username'>{username}</h2>
            <img className='border-2 border-blue-200 rounded-lg' alt = 'robot' src = {`https://robohash.org/${id}?150x150`}/>
            <div>
                <h2 className="text-3xl font-bold text-center text-[#9B7FFD]">{name}</h2>
                <p className='text-center text-lg text-[#3904FA]'>{email}</p>
            </div>          
        </div>
    );
}

export default Card