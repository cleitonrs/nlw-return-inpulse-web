import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export const ScreenshotButton = ({ screenshot, onScreenshotTook }: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenShot] = useState(false)


  async function handleTakeScreenshot() {
    setIsTakingScreenShot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)

    setIsTakingScreenShot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url${screenshot}`,
          backgroundPosition: 'right botton',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" className="text-zinc-600 dark:text-zinc-800 dark:hover:text-zinc-600 hover:text-zinc-400"/>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-50 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-400 rounded-md border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      
      { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 " />}
    </button>
  );
};
