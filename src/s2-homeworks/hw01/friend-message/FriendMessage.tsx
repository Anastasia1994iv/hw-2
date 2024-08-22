import React from 'react'
import s from './FriendMessage.module.css'
import photo from './../avatar.png'
import { MessageType } from '../HW1'

type FriendMessageProps = {
    message: MessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = ({message}: FriendMessageProps) => {
    return (
        <div
            id={'hw1-friend-message-' + message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + message.id}
                    // создаёт студент
src={photo}
alt='friend avatar'
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
{message.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
{message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
{message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
