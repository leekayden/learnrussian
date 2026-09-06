"use client";

import { useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function speakFallback(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ru-RU";
  utter.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

export function AudioButton({
  text,
  audioUrl,
  size = "icon-sm",
}: {
  text: string;
  audioUrl?: string | null;
  size?: "icon-xs" | "icon-sm" | "icon" | "icon-lg";
}) {
  const [failed, setFailed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function onClick() {
    const src = !failed && audioUrl ? audioUrl : null;
    if (src) {
      if (!audioRef.current) {
        audioRef.current = new Audio();
        audioRef.current.onerror = () => {
          setFailed(true);
          speakFallback(text);
        };
      }
      audioRef.current.src = src;
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch(() => {
          setFailed(true);
          speakFallback(text);
        })
        .finally(() => {
          // TTS fallback already triggered by onerror when needed.
        });
    } else {
      speakFallback(text);
    }
  }

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={onClick}
      title={`Listen: ${text}`}
      className="text-muted-foreground hover:text-foreground"
    >
      <Volume2 className="size-4" />
    </Button>
  );
}
