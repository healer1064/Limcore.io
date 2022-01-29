export const handleInputHeight = (e, ref) => {
  e.target.value.length !== 0
    ? (ref.current.style.height = e.target.scrollHeight + 'px')
    : (ref.current.style.height = '40px')
}
