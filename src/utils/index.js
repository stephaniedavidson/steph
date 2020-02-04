export const isPic = fileType => {
  if (
    fileType === "image/jpeg" ||
    fileType === "image/png" ||
    fileType === "image/gif"
  ) {
    return true
  }
}

export const isVid = fileType => {
  if (fileType === "video/mp4") {
    return true
  }
}
