import React, { useState, useRef, useEffect, ChangeEvent } from 'react'
import styles from './styles.module.scss'
import clip from '@icons/clip.svg'
import send from '@icons/sendIcon.svg'
import close from '@icons/close.svg'
import { useChat } from '@components/Chat/utils/useChat'
import { useAppSelector } from '@app/redux/hooks'
import { setUploadedFile, uploadFile } from '@components/Chat/redux/chatSlice'
import { useDispatch } from 'react-redux'
import { Spinner } from '@components/Spinner'
import { handleInputHeight } from '../../../../lib/utils/handleInputHeight'

export const Textarea = () => {
  const dispatch = useDispatch()
  const { sendGroupMessage, sendDialogueMessage } = useChat()

  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const currentDialogueMember = useAppSelector((state) => state.chat.currentDialogueMember)
  const _slug = useAppSelector((state) => state.chat.currentSlug)
  let slug = _slug

  const IS_GENERAL_CHAT = slug === 'general_chat'
  const IS_SUPPORT = slug.includes('support')

  if (currentDialogueMember?.id) {
    slug = String(currentDialogueMember.id)
  }

  if (IS_SUPPORT) {
    slug = _slug
  }

  const handleSendIconVisibility = (e) => {
    e.target.value.length < 1 ? setIsButtonVisible(false) : setIsButtonVisible(true)
  }

  const handleInputChange = (e) => {
    handleInputHeight(inputRef)
    setInputValue(e.target.value)
    handleSendIconVisibility(e)
  }

  const handleSubmit = () => {
    if (inputValue.trim() === '' && uploadFile?.length === 0) {
      return
    }

    IS_GENERAL_CHAT || IS_SUPPORT
      ? sendGroupMessage(slug, inputValue.trim())
      : sendDialogueMessage(slug, inputValue.trim())

    // Reset states
    setInputValue('')
    setFile(null)
    dispatch(setUploadedFile([]))
    setIsButtonVisible(false)
    inputRef.current.style.height = '40px'
  }

  const handleSetFile = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files[0])
  }

  const upload = async () => {
    const data = new FormData()
    data.append('file', file)

    const response = await dispatch(uploadFile(data))

    if (!response.error) {
      dispatch(setUploadedFile([response.payload.id]))
      setIsLoading(false)
      setIsButtonVisible(true)
    } else {
      console.log('uploadError')
    }
  }

  useEffect(() => {
    if (file) {
      setIsLoading(true)
      upload()
    }
  }, [file])

  return (
    <>
      {file && (
        <div className={styles.file}>
          <img src={clip} alt='clip' className={styles.file_clip} />
          <p className={styles.file_title}>{file.name}</p>
          <img src={close} alt='delete file' className={styles.file_delete} onClick={() => setFile(null)} />
        </div>
      )}

      <div className={styles.inputContainer}>
        <label className={styles.button}>
          <img alt='Clip' src={clip} className={styles.clip} />
          <input type='file' onChange={handleSetFile} />
        </label>
        <textarea
          ref={inputRef}
          value={inputValue}
          className={styles.inputText}
          placeholder='??????????????????'
          onChange={handleInputChange}
          onCut={handleInputChange}
          onPaste={handleInputChange}
          onInput={handleInputChange}
        />
        <button className={styles.button} type='button' onClick={handleSubmit}>
          {isLoading ? <Spinner /> : isButtonVisible && <img alt='' src={send} className={styles.sendIcon} />}
        </button>
      </div>
    </>
  )
}
