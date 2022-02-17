import { IFileInterface } from '@components/Chat/utils/types'
import React from 'react'
import styles from './styles.module.scss'
import downloadIcon from '@icons/download.svg'

interface IFile {
  file: IFileInterface[]
}

export const File = ({ file }: IFile) => {
  const fileType = file[0].filename.split('.')[1]
  const stopPropagation = (event: React.SyntheticEvent) => event.stopPropagation()

  switch (fileType) {
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'webp':
    case 'svg':
    case 'gif':
      return (
        <div className={styles.сontainer}>
          <img src={file[0].file} className={styles.file} onClick={stopPropagation} />
        </div>
      )

    case 'mp3':
      return (
        <div className={styles.сontainer}>
          <audio controls src={file[0].file} className={styles.file} onClick={stopPropagation}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
      )

    case 'avi':
    case 'mkv':
    case 'mov':
    case 'flv':
    case 'vob':
    case 'mp4':
    case 'webm':
      return (
        <div className={styles.сontainer}>
          <video className={styles.file} controls onClick={stopPropagation}>
            <source src={file[0].file} />
          </video>
        </div>
      )
    default:
      return (
        <div className={styles.download}>
          <img src={downloadIcon} className={styles.download_icon} />
          <a
            className={styles.file}
            href={file[0].file}
            download
            target='_blank'
            rel='noreferrer'
            onClick={stopPropagation}
          >
            {file[0].filename}
          </a>
        </div>
      )
  }
}
