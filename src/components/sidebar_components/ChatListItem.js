import "./ChatListItem.css"

export default function ChatListItem(props) {

  return (
    <main className="chat-list-item-container">
      <img className="chat-list-item-user-photo" src="https://ouch-cdn2.icons8.com/HVpVN0Xu75AqsHQ0S7oIwHtbSiwb1pPSkGzQadwHuZo/rs:fit:256:256/czM6Ly9pY29uczgu/b3"/>
      <div className="chat-list-item-conversation">
        <h3>{props.firstName} {props.lastName}</h3>
        <p>You: This is a test conversation to see how a conversation would look within the ChatListItem component.</p>
        </div>
    </main>

  );

}