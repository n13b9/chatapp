import React,{useState} from 'react'
import {useChatContext} from 'stream-chat-react';

import {UserList} from './';
import {CloseCreateChannel} from '../assets/CloseCreateChannel';

const ChannelNameInput = ({channelName='',setChannelName}) =>{

  const handleChange = (event)=>{
    event.preventDefault();

    setChannelName(event.target.value);
  }

  return (
    <div className='channel-name-input__wrapper'>
      <p> Name </p>
      <input value={channelName} onChange={handleChange} placeholder='' type="text" />
      <p></p>
    </div>
  )
}

const CreateChannel = ({createType,setIsCreating}) => {
  const [channelName, setChannelName] = useState('')

  return (
    <div className='create-channel__container'>
      <div className='create-channel__header'>
          <p>{createType==='team' ? 'Create a new Channel':'Send a direct message'}</p>
          <CloseCreateChannel setIsCreating={setIsCreating}/>
      </div>
      {createType==='team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName}/>}
    </div>
  )
}

export default CreateChannel