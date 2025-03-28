const MessageSkeleton = () => {
  // Create an array of 6 items for skeleton messages
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {skeletonMessages.map((_, idx) => (
        <div key={idx} className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}>
          {/* Avatar */}
          <div className="chat-image avatar">
            <div className="size-10 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse" />
          </div>

          {/* Chat Bubble */}
          <div className="chat-bubble bg-gray-300/50 dark:bg-gray-700/50 p-3 animate-pulse">
            {/* Header */}
            <div className="h-4 w-16 bg-gray-400 dark:bg-gray-600 rounded mb-2 animate-pulse" />

            {/* Message Content */}
            <div className="h-16 w-[200px] bg-gray-400 dark:bg-gray-600 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;