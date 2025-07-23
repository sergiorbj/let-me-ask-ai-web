import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function RecordRoomAudio() {
  const [isRecording, setIsRecording] = useState(false);

  function startRecording() {
    setIsRecording(true);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <Button onClick={startRecording}>Record audio</Button>
      {isRecording ? <p>Recording...</p> : <p>Paused</p>}
    </div>
  );
}
