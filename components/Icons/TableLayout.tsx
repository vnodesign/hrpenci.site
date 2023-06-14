function TableLayout({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M448 64c17.7 0 32 14.3 32 32v64L32 160l0-64c0-17.7 14.3-32 32-32l384 0zM32 416l0-224 128 0 0 256H64c-17.7 0-32-14.3-32-32zm160 32l0-256 288 0 0 224c0 17.7-14.3 32-32 32H192zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </svg>
  )
}

export default TableLayout