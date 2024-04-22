import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, SetChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://imgs.search.brave.com/GNIFWqfPKKf_ORRCV58z1gW89zw2_PdDxQod3tSF4lM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80MDQt/NDA0MjcxMF9jaXJj/bGUtcHJvZmlsZS1w/aWN0dXJlLXBuZy10/cmFuc3BhcmVudC1w/bmcucG5n"
            alt=""
          />
          <span>Jhon Doe</span>
          <p>Lorem ipsum dolor sit amet....</p>
        </div>
        <div className="message">
          <img
            src="https://imgs.search.brave.com/GNIFWqfPKKf_ORRCV58z1gW89zw2_PdDxQod3tSF4lM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80MDQt/NDA0MjcxMF9jaXJj/bGUtcHJvZmlsZS1w/aWN0dXJlLXBuZy10/cmFuc3BhcmVudC1w/bmcucG5n"
            alt=""
          />
          <span>Jhon Doe</span>
          <p>Lorem ipsum dolor sit amet....</p>
        </div>
        <div className="message">
          <img
            src="https://imgs.search.brave.com/GNIFWqfPKKf_ORRCV58z1gW89zw2_PdDxQod3tSF4lM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80MDQt/NDA0MjcxMF9jaXJj/bGUtcHJvZmlsZS1w/aWN0dXJlLXBuZy10/cmFuc3BhcmVudC1w/bmcucG5n"
            alt=""
          />
          <span>Jhon Doe</span>
          <p>Lorem ipsum dolor sit amet....</p>
        </div>
        <div className="message">
          <img
            src="https://imgs.search.brave.com/GNIFWqfPKKf_ORRCV58z1gW89zw2_PdDxQod3tSF4lM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80MDQt/NDA0MjcxMF9jaXJj/bGUtcHJvZmlsZS1w/aWN0dXJlLXBuZy10/cmFuc3BhcmVudC1w/bmcucG5n"
            alt=""
          />
          <span>Jhon Doe</span>
          <p>Lorem ipsum dolor sit amet....</p>
        </div>
        <div className="message">
          <img
            src="https://imgs.search.brave.com/GNIFWqfPKKf_ORRCV58z1gW89zw2_PdDxQod3tSF4lM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80MDQt/NDA0MjcxMF9jaXJj/bGUtcHJvZmlsZS1w/aWN0dXJlLXBuZy10/cmFuc3BhcmVudC1w/bmcucG5n"
            alt=""
          />
          <span>Jhon Doe</span>
          <p>Lorem ipsum dolor sit amet....</p>
        </div>
        <div className="message">
          <img
            src="https://imgs.search.brave.com/GNIFWqfPKKf_ORRCV58z1gW89zw2_PdDxQod3tSF4lM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80MDQt/NDA0MjcxMF9jaXJj/bGUtcHJvZmlsZS1w/aWN0dXJlLXBuZy10/cmFuc3BhcmVudC1w/bmcucG5n"
            alt=""
          />
          <span>Jhon Doe</span>
          <p>Lorem ipsum dolor sit amet....</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://imgs.search.brave.com/GNIFWqfPKKf_ORRCV58z1gW89zw2_PdDxQod3tSF4lM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80MDQt/NDA0MjcxMF9jaXJj/bGUtcHJvZmlsZS1w/aWN0dXJlLXBuZy10/cmFuc3BhcmVudC1w/bmcucG5n"
                alt=""
              />
              Jhon Doe
            </div>

            <span className="close" onClick={() => SetChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Hey how are you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>hello im good what about you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>im looking for a property</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>ohh really!!</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>can you suggest me to buy any house</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>

          <div className="bottom">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
