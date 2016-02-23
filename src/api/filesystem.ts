import {fileSystemActions} from "../action"
import {frameBufferToImageURL} from "../util"

export function createFileTree(tree: FileSystemInfo.FileTree) {
    console.log(tree)
    fileSystemActions.updateFileTree(tree)
}

export function downloadFile(file: FileSystemInfo.FileDownload) {
    let url = frameBufferToImageURL(file.fileBytes)
    
    let a = document.createElement("a")
    a.href = url
    let as = (a as any)
    as.download = file.fileName
    document.body.appendChild(a)
    a.style.display = "none"
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    //you didn't see anything
    //please forget this ever happened
}