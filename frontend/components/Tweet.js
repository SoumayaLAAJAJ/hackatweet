import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan} from '@fortawesome/free-solid-svg-icons';



function Tweet(props) {
    

    return (
    <div>
        <span >{props.firstname}</span>
        <span>{props.username}</span>
        <p>{props.message}</p>
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        

    </div>
    ) 
}

export default Tweet