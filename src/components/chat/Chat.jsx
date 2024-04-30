import React, { useState } from 'react'
import "./chat.scss"

function Chat() {

    const [chat, setChat] = useState(true)

  return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        </div>
        {chat && <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                    <span>John Doe</span>
                </div>
                <span className='close' onClick={() => setChat(null)}>x</span>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>1 hr ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>1 hr ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>1 hr ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>1 hr ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>1 hr ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>1 hr ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>1 hr ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>1 hr ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>1 hr ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>}
    </div>
  )
}

export default Chat