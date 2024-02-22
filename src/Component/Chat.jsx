import React from 'react'
import '../Style/Chat.css'

function Chat() {

    const [chat,setChat]  = React.useState("");
    const [chatArr, setChatArr] = React.useState([]);
    const chatfunction = () => {
        setChatArr(chat);
        alert(chatArr);
    }


    return (
        <div className='container chatbox'>
            <div className="row" >
                <div className="col chat-col">
                    <div className="chatbody">
                    </div>
                </div>
            </div>
            <div className="row input-section">
                <div className="col-md-6 offset-md-2">
                    <div className="chat-input">
                        <input type="text" className='form-control input' onChange={(e)=>setChat(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-3 btn-box">
                    <button className='btn form-control' onClick={chatfunction}>Chat</button>
                </div>
            </div>
        </div>
    )
}

export default Chat