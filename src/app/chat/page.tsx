import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ChatClient = dynamic(() => import('../components/ChatClient'), { ssr: false });

export default function Page() {
  return (
    <Suspense fallback={<div>Loading chat...</div>}>
      <ChatClient />
    </Suspense>
  );
}
