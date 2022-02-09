import React from 'react'

interface ITwitter {
  className?: string
}

export const Twitter = ({ className }: ITwitter) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='38'
      height='32'
      viewBox='0 0 38 32'
      fill='none'
      className={className}
    >
      <path
        d='M36.8541 4.40224C36.2758 4.65875 35.6812 4.87524 35.0737 5.05099C35.793 4.23753 36.3414 3.28037 36.6761 2.23297C36.7512 1.99819 36.6734 1.74121 36.4804 1.58766C36.2877 1.43399 36.0199 1.41559 35.8077 1.54135C34.5174 2.3066 33.1254 2.85654 31.6658 3.17813C30.1955 1.74145 28.1986 0.923828 26.1341 0.923828C21.7765 0.923828 18.2312 4.46898 18.2312 8.82652C18.2312 9.16972 18.2529 9.51102 18.2959 9.84757C12.8885 9.37279 7.86129 6.71497 4.40913 2.48033C4.2861 2.3294 4.09657 2.24805 3.90252 2.26361C3.70836 2.27881 3.53391 2.3883 3.43582 2.55657C2.73565 3.758 2.36549 5.1321 2.36549 6.53019C2.36549 8.4344 3.04536 10.2411 4.24631 11.6529C3.88115 11.5264 3.52679 11.3683 3.18858 11.1806C3.007 11.0795 2.78541 11.0811 2.60502 11.1845C2.42452 11.2879 2.31134 11.4782 2.30659 11.6861C2.30576 11.7211 2.30576 11.7562 2.30576 11.7917C2.30576 14.6341 3.83555 17.1931 6.1744 18.5878C5.97347 18.5678 5.77265 18.5387 5.57315 18.5005C5.36747 18.4612 5.15597 18.5333 5.01726 18.6902C4.87832 18.847 4.83236 19.0655 4.89637 19.265C5.76208 21.9678 7.99097 23.9559 10.6855 24.562C8.45067 25.9617 5.89497 26.6949 3.21209 26.6949C2.65228 26.6949 2.08927 26.662 1.53826 26.5968C1.26453 26.5643 1.0028 26.7259 0.909576 26.9862C0.816354 27.2466 0.915157 27.537 1.14803 27.6863C4.59462 29.8961 8.57987 31.0642 12.6727 31.0642C20.7187 31.0642 25.7521 27.27 28.5577 24.0871C32.0561 20.1182 34.0626 14.8649 34.0626 9.67431C34.0626 9.45746 34.0593 9.23848 34.0526 9.02021C35.4329 7.98029 36.6213 6.72174 37.5883 5.2752C37.7352 5.0555 37.7193 4.76515 37.5491 4.56291C37.3792 4.36056 37.0959 4.29512 36.8541 4.40224Z'
        fill='#3AA7B7'
      />
    </svg>
  )
}