import { useState } from 'react';
import SBtnUp from './style';

export default function BtnUp() {
  // Change state at onClick and scroll up at header
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <SBtnUp>
        <button
          type="button"
          className="btnUp"
          onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height="50"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <clipPath id="id1">
                <path
                  d="M 12.929688 10.738281 L 363.929688 10.738281 L 363.929688 361.738281 L 12.929688 361.738281 Z M 12.929688 10.738281 "
                  clipRule="nonzero"
                />
              </clipPath>
              <clipPath id="id2">
                <path
                  d="M 132.746094 74.214844 L 242.246094 74.214844 L 242.246094 322.464844 L 132.746094 322.464844 Z M 132.746094 74.214844 "
                  clipRule="nonzero"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#id1)">
              <path
                d="M 188.429688 361.738281 C 91.691406 361.738281 12.929688 282.980469 12.929688 186.238281 C 12.929688 89.496094 91.691406 10.738281 188.429688 10.738281 C 285.171875 10.738281 363.929688 89.496094 363.929688 186.238281 C 363.929688 282.980469 285.171875 361.738281 188.429688 361.738281 Z M 188.429688 13.332031 C 93.074219 13.332031 15.523438 90.878906 15.523438 186.238281 C 15.523438 281.597656 93.074219 359.144531 188.429688 359.144531 C 283.789062 359.144531 361.335938 281.597656 361.335938 186.238281 C 361.335938 90.878906 283.789062 13.332031 188.429688 13.332031 Z M 188.429688 13.332031 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>

            <g clipPath="url(#id2)">
              <path
                className="arrowUp"
                d="M 242.246094 129.34375 L 187.4375 74.628906 L 132.746094 129.34375 L 139.308594 135.910156 L 182.832031 92.253906 L 182.832031 322.046875 L 192.046875 322.046875 L 192.046875 92.253906 L 235.683594 135.910156 Z M 242.246094 129.34375 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </button>
      </SBtnUp>
    </>
  );
}
