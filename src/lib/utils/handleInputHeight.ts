export const handleInputHeight = (ref: React.RefObject<HTMLInputElement>) => {
  ref.current.style.height = '40px'
  ref.current.style.height = ref.current.scrollHeight + 'px'
}
