import { Suspense } from "react";
import ChatClient from "./ChatClient";

function ChatLoading() {
  return (
    <div className="mt-[37px] flex flex-col md:flex-row md:gap-[27px] md:px-[10%] overflow-hidden animate-pulse">
      <div className="horizontalScroll flex md:flex-col md:overflow-y-auto md:border-gray-300 gap-[10px] px-[5%] md:px-0 overflow-x-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-4 bg-gray-200 rounded mt-2"></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-1 bg-white md:relative fixed bottom-0 left-0 right-0 md:top-auto md:left-auto md:right-auto md:bottom-auto">
        <div className="p-4">
          <div className="w-full h-8 bg-gray-200 rounded mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={<ChatLoading />}>
      <ChatClient />
    </Suspense>
  );
}