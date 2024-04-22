import { useEffect, useRef } from "react";
import useGetMessages from "../../hook/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

function Messages() {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="flex-1 px-4 overflow-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p>Send a message to start the conversation</p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
}

export default Messages;
