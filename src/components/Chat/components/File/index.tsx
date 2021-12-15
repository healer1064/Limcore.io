import { IFileInterface } from '@components/Chat/utils/types'
import React from 'react'
import styles from './styles.module.scss'

interface IFile {
  file: IFileInterface[]
}

export const File = ({ file }: IFile) => {
  const fileType = file[0].filename.split('.')[1]

  switch (fileType) {
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'webp':
    case 'svg':
    case 'gif':
      return (
        <div className={styles.imgContainer}>
          <img src={file[0].file} className={styles.file} />
        </div>
      )

    case 'mp3':
    case 'mp4':
      return (
        <audio controls src={file[0].file} className={styles.file}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      )

    case 'avi':
    case 'mkv':
    case 'mov':
    case 'flv':
    case 'vob':
      return (
        <video className={styles.file}>
          <source src={file[0].file} />
        </video>
      )
    default:
      return (
        <a className={styles.file} href={file[0].file} download target='_blank' rel='noreferrer'>
          {file[0].filename}
        </a>
      )
  }
}
