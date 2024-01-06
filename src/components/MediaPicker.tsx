'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker () {
  const [preview, setPreview] = useState<string | null>('')

  function onFileSelect(event: ChangeEvent<HTMLInputElement>) {
    const {files} = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input onChange={onFileSelect} name="coverURL"  type="file" id="media" accept="image/*" className="invisible w-0" />

      {preview &&
       // eslint-disable-next-line @next/next/no-img-element
       <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover" />
       }
    </>

    //tag video control=off
  )
}