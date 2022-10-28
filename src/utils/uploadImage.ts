import axios from 'axios'
import {FileKind} from '../@types/FileKind'
import getFiles from '../api/files/getFiles'
import postFile from '../api/files/postFile'

const uploadImage = async (file: File, kind: FileKind, onProgress?: (event: {percent: number}) => void) => {
  if (typeof file === 'string') return file

  const res = await getFiles({type: 'image', mimeType: file.type})

  await axios.put(res.url, file, {
    headers: {'Content-Type': file.type},
    onUploadProgress(progressEvent) {
      const percentCompleted = Math.round(progressEvent.loaded * 100)
      if (onProgress) onProgress({percent: percentCompleted})
    }
  })

  const {url} = await postFile({type: 'image', kind, path: res.path})

  return url
}

export default uploadImage
