import React, {useEffect,useState} from 'react';
import {Avatar,  useChatContext} from 'stream-chat-react';

import {InviteIcon} from '../assets/InviteIcon';

const ListContainer=({children})=>{
    return (
        <div className='user-list_container'>
            <div className='user-list__header'>
                <p>User</p>
                <p>Invite</p>
            </div>
            {children}
        </div>
    )
}

const UserItem =() => {
    return (
        <div className='user-item__wrapper'>
            <div className='user-item__name-wrapper'>
                <Avatar />
            </div>
        </div>
    )
}

const UserList = () => {
    const {client} = useChatContext();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const getUsers = async() => {
        if(loading) return;

        setLoading(true);

        try {

        }
      }
    }, [filters])
    

    return (
        <div>
            UserList
        </div>
    )
}

export default UserList