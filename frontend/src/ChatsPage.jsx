import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='760a9486-4738-4d5b-b11d-9665fd4ab661'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
      />
    </div>
  );
};

export default ChatsPage;