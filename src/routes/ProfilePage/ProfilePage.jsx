import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Profile Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src="https://imgs.search.brave.com/GNIFWqfPKKf_ORRCV58z1gW89zw2_PdDxQod3tSF4lM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80MDQt/NDA0MjcxMF9jaXJj/bGUtcHJvZmlsZS1w/aWN0dXJlLXBuZy10/cmFuc3BhcmVudC1w/bmcucG5n"
                alt=""
              />
            </span>
            <span>
              Username: <b> Jhon Doe </b>
            </span>
            <span>
              E-mail: <b> Jhon@gmail.com </b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
