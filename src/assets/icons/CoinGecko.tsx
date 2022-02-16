import React from 'react'

interface ICoinGecko {
  className?: string
  width: number
  height: number
}

export const CoinGecko = ({ className, width, height }: ICoinGecko) => {
  return (
    <a href='#' className={className}>
      <svg
        width={width}
        height={height}
        className={className}
        viewBox='0 0 146 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M56.4714 15.7094C56.0604 14.105 55.0241 12.9311 52.998 12.9311C50.008 12.9311 48.7576 15.5717 48.7576 18.2514C48.7576 20.9311 50.008 23.5731 52.998 23.5731C55.1689 23.5731 56.3585 21.9499 56.5524 19.9151H58.936C58.7407 23.2601 56.3773 25.5673 53.0023 25.5673C48.8213 25.5673 46.3204 22.2412 46.3204 18.2499C46.3204 14.2586 48.8126 10.9268 52.9937 10.9268C56.1385 10.9456 58.6191 12.6876 58.9129 15.7007L56.4714 15.7094Z'
          fill='white'
        />
        <path
          d='M60.379 20.1616C60.379 17.0703 62.2343 14.8413 65.4776 14.8413C68.7209 14.8413 70.5762 17.0703 70.5762 20.1616C70.5762 23.2529 68.7209 25.5036 65.4776 25.5036C62.2343 25.5036 60.379 23.2732 60.379 20.1616ZM68.3489 20.1616C68.3489 18.4225 67.4705 16.6022 65.4776 16.6022C63.4848 16.6022 62.6063 18.421 62.6063 20.1616C62.6063 21.9022 63.4848 23.7427 65.4776 23.7427C67.4705 23.7427 68.3489 21.9224 68.3489 20.1616Z'
          fill='white'
        />
        <path
          d='M72.4909 11.2603H74.7182V13.3733H72.4909V11.2603ZM72.4909 15.1153H74.7182V25.2298H72.4909V15.1153Z'
          fill='white'
        />
        <path
          d='M77.1409 15.1148H79.251V16.6017L79.2901 16.6408C79.61 16.09 80.0694 15.6335 80.6218 15.3172C81.1741 15.0009 81.8001 14.8361 82.4364 14.8394C84.6246 14.8394 86.0111 16.0133 86.0111 18.2814V25.2278H83.7838V18.8698C83.7447 17.2858 83.1195 16.6017 81.8112 16.6017C80.3263 16.6017 79.3682 17.7742 79.3682 19.2611V25.2292H77.1409V15.1148Z'
          fill='white'
        />
        <path
          d='M100.839 25.2296H99.2765L98.906 23.5861C97.6035 25.0731 96.4051 25.5615 94.709 25.5615C90.5308 25.5644 88.0242 22.2311 88.0242 18.2441C88.0242 14.2572 90.5308 10.9268 94.7061 10.9268C97.7453 10.9268 100.313 12.5499 100.683 15.7007H98.2996C98.0651 13.8615 96.4645 12.9224 94.7061 12.9224C91.7161 12.9224 90.4657 15.563 90.4657 18.2427C90.4657 20.9224 91.7161 23.5644 94.7061 23.5644C97.2055 23.6035 98.5731 22.0977 98.6136 19.7296H94.9015V17.8731H100.835L100.839 25.2296Z'
          fill='white'
        />
        <path
          d='M104.923 20.7485C104.923 22.334 105.783 23.7427 107.638 23.7427C108.928 23.7427 109.709 23.1746 110.099 22.0601H112.21C111.723 24.2703 109.847 25.5036 107.638 25.5036C104.475 25.5036 102.696 23.292 102.696 20.1819C102.696 17.3051 104.578 14.8413 107.581 14.8413C110.765 14.8413 112.718 17.7167 112.348 20.7485H104.923ZM110.121 19.2819C110.042 17.8732 109.084 16.6022 107.581 16.6022C106.036 16.6022 104.983 17.7746 104.923 19.2819H110.121Z'
          fill='white'
        />
        <path
          d='M120.866 18.4993C120.69 17.2659 119.791 16.6022 118.561 16.6022C117.403 16.6022 115.787 17.208 115.787 20.279C115.787 21.9616 116.529 23.7427 118.463 23.7427C119.752 23.7427 120.651 22.8819 120.866 21.434H123.094C122.683 24.0558 121.068 25.5036 118.463 25.5036C115.297 25.5036 113.559 23.2529 113.559 20.279C113.559 17.2268 115.221 14.8413 118.541 14.8413C120.885 14.8413 122.882 16.0152 123.094 18.4993H120.866Z'
          fill='white'
        />
        <path
          d='M124.975 11.2603H127.202V19.2037L131.227 15.1153H133.962L130.094 18.8312L134.333 25.2298H131.612L128.525 20.3182L127.197 21.6095V25.2327H124.975V11.2603Z'
          fill='white'
        />
        <path
          d='M134.934 20.1616C134.934 17.0703 136.789 14.8413 140.032 14.8413C143.275 14.8413 145.132 17.0703 145.132 20.1616C145.132 23.2529 143.275 25.5036 140.032 25.5036C136.789 25.5036 134.934 23.2732 134.934 20.1616ZM142.905 20.1616C142.905 18.4225 142.025 16.6022 140.032 16.6022C138.039 16.6022 137.161 18.421 137.161 20.1616C137.161 21.9022 138.039 23.7427 140.032 23.7427C142.025 23.7427 142.905 21.9224 142.905 20.1616Z'
          fill='white'
        />
        <path
          d='M36.9465 19.9205C36.9622 23.4806 35.9233 26.9654 33.9612 29.9342C31.9991 32.9029 29.202 35.2224 25.9235 36.5993C22.645 37.9761 19.0325 38.3485 15.5427 37.6693C12.0529 36.9901 8.84256 35.2898 6.31772 32.7835C3.79288 30.2772 2.06692 27.0774 1.3581 23.5888C0.649275 20.1002 0.989427 16.4794 2.33554 13.1844C3.68165 9.88939 5.97326 7.0681 8.92057 5.07732C11.8679 3.08654 15.3385 2.01568 18.8936 2.00017C23.6606 1.97937 28.2406 3.85569 31.6261 7.21638C35.0117 10.5771 36.9255 15.1469 36.9465 19.9205Z'
          fill='#8DC63F'
        />
        <path
          d='M35.5983 19.9273C35.6132 23.2198 34.6528 26.4429 32.8385 29.1888C31.0242 31.9347 28.4375 34.0802 25.4055 35.354C22.3736 36.6277 19.0325 36.9725 15.8049 36.3447C12.5772 35.717 9.60794 34.1448 7.27255 31.8271C4.93716 29.5095 3.34054 26.5503 2.68459 23.3239C2.02864 20.0976 2.34283 16.7488 3.58742 13.7013C4.83202 10.6537 6.95112 8.04416 9.67674 6.20265C12.4024 4.36114 15.6121 3.37037 18.9 3.35563C23.3087 3.33621 27.5445 5.07113 30.6759 8.17882C33.8074 11.2865 35.5779 15.5125 35.5983 19.9273Z'
          fill='#F9E988'
        />
        <path
          d='M19.2778 4.43433C20.3346 4.2465 21.4161 4.2465 22.4729 4.43433C23.5399 4.60352 24.5713 4.94956 25.5247 5.45824C26.4729 5.97998 27.2922 6.68824 28.1076 7.35215C28.9229 8.01606 29.7344 8.69562 30.5068 9.4391C31.2953 10.171 31.9833 11.0043 32.553 11.9174C33.1396 12.8231 33.6204 13.7934 33.9858 14.8091C34.6801 16.8517 34.921 19.0521 34.5746 21.1508H34.4717C34.1239 19.0704 33.6524 17.0878 32.9086 15.2017C32.5595 14.2519 32.1488 13.326 31.6791 12.43C31.1889 11.5337 30.6488 10.6658 30.0613 9.8304C29.4639 8.98581 28.7316 8.24548 27.8939 7.6391C27.0499 7.0365 26.0795 6.6465 25.1404 6.27607C24.2013 5.90563 23.27 5.52216 22.2905 5.24042C21.311 4.95868 20.3159 4.74738 19.2765 4.54259L19.2778 4.43433Z'
          fill='white'
        />
        <path
          d='M27.4041 14.0515C26.198 13.7019 24.9476 13.2063 23.6815 12.7054C23.6086 12.3871 23.3272 11.9906 22.758 11.5067C21.9309 10.788 20.377 10.8063 19.0341 11.1245C17.5519 10.775 16.0878 10.6511 14.6824 10.9941C3.18771 14.165 9.70551 21.901 5.48535 29.6775C6.08581 30.9532 12.558 38.3957 21.9231 36.3988C21.9231 36.3988 18.7202 28.6914 25.9479 24.9923C31.8105 21.9806 36.0463 16.4084 27.4041 14.0515Z'
          fill='#8BC53F'
        />
        <path
          d='M28.824 19.1129C28.8248 19.2509 28.7846 19.386 28.7087 19.5012C28.6328 19.6164 28.5244 19.7064 28.3974 19.76C28.2704 19.8135 28.1304 19.8281 27.995 19.8019C27.8597 19.7758 27.7352 19.71 27.6372 19.613C27.5392 19.5159 27.4721 19.3919 27.4445 19.2567C27.4168 19.1215 27.4298 18.9811 27.4819 18.8533C27.5339 18.7255 27.6226 18.6161 27.7367 18.5387C27.8509 18.4614 27.9854 18.4197 28.1232 18.419C28.3079 18.4183 28.4854 18.4909 28.6167 18.621C28.7481 18.751 28.8226 18.9279 28.824 19.1129Z'
          fill='white'
        />
        <path
          d='M19.0342 11.1194C19.8717 11.1794 22.9001 12.1628 23.6816 12.7002C23.0303 10.8089 20.8382 10.5572 19.0342 11.1194Z'
          fill='#009345'
        />
        <path
          d='M19.8313 15.9019C19.8316 16.5386 19.6433 17.1611 19.2902 17.6907C18.9371 18.2202 18.4352 18.6331 17.8478 18.8769C17.2604 19.1207 16.614 19.1847 15.9904 19.0606C15.3667 18.9366 14.7938 18.6301 14.3441 18.1799C13.8944 17.7298 13.5881 17.1562 13.464 16.5317C13.3398 15.9072 13.4034 15.2599 13.6467 14.6716C13.8899 14.0833 14.302 13.5805 14.8306 13.2267C15.3593 12.8729 15.9809 12.6841 16.6167 12.6841C17.0388 12.6839 17.4568 12.767 17.8468 12.9286C18.2368 13.0903 18.5912 13.3273 18.8897 13.6261C19.1882 13.9249 19.425 14.2797 19.5866 14.6702C19.7482 15.0607 19.8313 15.4792 19.8313 15.9019Z'
          fill='white'
        />
        <path
          d='M18.8779 15.9308C18.8779 16.3787 18.7453 16.8165 18.4969 17.1888C18.2484 17.5612 17.8952 17.8514 17.4821 18.0228C17.0689 18.1942 16.6143 18.239 16.1756 18.1517C15.737 18.0643 15.3341 17.8486 15.0179 17.532C14.7016 17.2153 14.4863 16.8118 14.399 16.3726C14.3118 15.9334 14.3566 15.4781 14.5277 15.0643C14.6989 14.6506 14.9887 14.2969 15.3605 14.0481C15.7324 13.7993 16.1695 13.6665 16.6168 13.6665C17.2165 13.6665 17.7916 13.9051 18.2157 14.3297C18.6397 14.7544 18.8779 15.3303 18.8779 15.9308Z'
          fill='#58595B'
        />
        <path
          d='M31.4276 20.5329C28.8226 22.3707 25.8607 23.7651 21.6588 23.7651C19.692 23.7651 19.2934 21.6781 17.9935 22.6981C17.3227 23.2277 14.9573 24.412 13.0804 24.322C11.2035 24.232 8.1608 23.1298 7.31286 19.1177C6.97681 23.1298 6.80488 26.0855 5.30048 29.4729C8.29626 34.2768 15.4393 37.9824 21.9232 36.3859C21.2263 31.5142 25.4778 26.7429 27.8731 24.3011C28.7848 23.3764 30.5172 21.8672 31.4276 20.5303V20.5329Z'
          fill='#8BC53F'
        />
        <path
          d='M31.3261 20.6523C30.5172 21.3905 29.5547 21.937 28.5752 22.4196C27.5837 22.891 26.5502 23.2679 25.4882 23.5453C24.4253 23.8205 23.3169 24.0279 22.1941 23.9262C21.0714 23.8244 19.9239 23.4422 19.1801 22.5996L19.2153 22.5592C20.127 23.1514 21.1795 23.3601 22.2267 23.3901C23.2882 23.4224 24.3499 23.3349 25.3918 23.1292C26.4443 22.9086 27.4739 22.5898 28.4671 22.177C29.4609 21.7662 30.4443 21.2901 31.2909 20.6118L31.3261 20.6523Z'
          fill='#58595B'
        />
      </svg>
    </a>
  )
}
