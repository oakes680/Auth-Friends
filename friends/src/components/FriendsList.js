import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import FriendsCard from './FriendsCard'

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    
    useEffect(() => {
        Axios          
            .get('http://localhost:5000/api/friends',  
            { 'headers': { 'Authorization': localStorage.getItem('token')}})
            .then(res => {    
                console.log('friends list', res.data)
                setFriends(res.data)
            })
    }, [])

    return (

        <div >
            <h1>Friends Cast</h1>
            <div className='border1'>
            {friends.map(data => {
                return <FriendsCard key={data.id} data={data}/>
            })}
            </div>
        </div>
    )
}

export default FriendsList
