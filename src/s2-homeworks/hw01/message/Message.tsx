import React from 'react'
import s from './Message.module.css'
import {message0, MessageType} from "../HW1";
import {futimes} from "fs";
import message from "./Message";

// нужно создать правильный тип вмсто any
export type MessagePropsType = {
    message: {
        id: number
    }

}

    // нужно отобразить приходящие данные

const Message = (props: MessagePropsType) => {
    // @ts-ignore
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                   src={message0.user.avatar}
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент

                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {message0.user.name}

                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {message0.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {message0.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default Message
