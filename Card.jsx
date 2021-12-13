import React from 'react';

function Card(title,author,subject,imageUrl) {
    return (
        <div className='card-container'>
        <div className='image-container'>
        <img src={imageUrl} alt=''/>
        </div>
        <div className='"card-title'>
            <h1>{title}</h1>
        </div>
        <div className='"card-author'>
        <h1>{author}</h1>
    </div>
    <div className='"card-subject'>
    <p>{subject}</p>
</div>
<div className="btn">
    <button><a>View More</a></button>
</div>
        </div>
    )
}
export default Card