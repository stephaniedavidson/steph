import React from "react"

export function printPicOrVid(myUrl) {
  let fileExt =
    myUrl.substring(myUrl.lastIndexOf(".") + 1, myUrl.length) || myUrl
  if (fileExt === "jpg" || fileExt === "png" || fileExt === "gif") {
    return <img src={"https:" + myUrl} alt="artwork" />
  } else if (fileExt === "mp4") {
    return (
      <video
        width="100%"
        src={"https:" + myUrl}
        loop
        autoPlay
        muted
        playsInline
      ></video>
    )
  } else {
    return "invalid hero image"
  }
}
