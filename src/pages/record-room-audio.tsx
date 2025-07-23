import { useState } from 'react';
import { Button } from '@/components/ui/button';

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function';

export function RecordRoomAudio() {
  const [isRecording, setIsRecording] = useState(false);

  async function stopRecording() {
    setIsRecording(false);
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('Your browser does not support recording!');
      return;
    }

    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    const recorder = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    });

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        // biome-ignore lint/suspicious/noConsole: log for debugging
        console.log(event.data);
      }
    };

    recorder.onstart = () => {
      // biome-ignore lint/suspicious/noConsole: log for debugging
      console.log('Record Started');
    };

    recorder.onstop = () => {
      // biome-ignore lint/suspicious/noConsole: log for debugging
      console.log('Record paused/finished');
    };
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Stop recording</Button>
      ) : (
        <Button onClick={startRecording}>Record audio</Button>
      )}
      {isRecording ? <p>Recording...</p> : <p>Paused</p>}
    </div>
  );
}
