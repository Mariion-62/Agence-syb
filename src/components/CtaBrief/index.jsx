import { useState } from 'react';
import SCta from './style';

export default function CtaBrief() {
  // Change state at onClick and scroll down at footer
  const [showDown, setShowDown] = useState(false);

  const toggleShow = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setShowDown(true);
    } else if (scrolled <= 0) {
      setShowDown(false);
    }
  };

  const scrollToDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleShow);
  return (
    <>
      <SCta>
        <button
          type="button"
          className="btnFooter"
          onClick={scrollToDown}
          style={{ display: showDown ? 'inline' : 'none' }}
        >
          <svg
            className="svgCtaBrief"
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height="500"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <g />
            </defs>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(183.687364, 272.85385)">
                <g>
                  <path d="M -6.125 -1.328125 L -14.59375 37.90625 L -26.859375 35.265625 C -30.160156 34.554688 -32.539062 33.113281 -34 30.9375 C -35.457031 28.757812 -35.851562 26.128906 -35.1875 23.046875 C -34.6875 20.722656 -33.734375 18.828125 -32.328125 17.359375 C -30.929688 15.890625 -29.226562 15.125 -27.21875 15.0625 L -27.1875 14.90625 C -28.582031 14.476562 -29.753906 13.707031 -30.703125 12.59375 C -31.660156 11.488281 -32.3125 10.148438 -32.65625 8.578125 C -33.007812 7.003906 -32.988281 5.300781 -32.59375 3.46875 C -31.9375 0.445312 -30.460938 -1.773438 -28.171875 -3.203125 C -25.890625 -4.628906 -23.0625 -4.976562 -19.6875 -4.25 Z M -7.625 -0.375 L -19.953125 -3.03125 C -22.835938 -3.65625 -25.316406 -3.34375 -27.390625 -2.09375 C -29.460938 -0.84375 -30.785156 1.097656 -31.359375 3.734375 C -31.742188 5.546875 -31.679688 7.238281 -31.171875 8.8125 C -30.660156 10.382812 -29.773438 11.71875 -28.515625 12.8125 C -27.265625 13.914062 -25.710938 14.664062 -23.859375 15.0625 L -11.53125 17.71875 Z M -11.796875 18.953125 L -24.125 16.296875 C -25.914062 15.910156 -27.484375 15.988281 -28.828125 16.53125 C -30.179688 17.082031 -31.289062 17.957031 -32.15625 19.15625 C -33.03125 20.351562 -33.632812 21.738281 -33.96875 23.3125 C -34.570312 26.09375 -34.207031 28.421875 -32.875 30.296875 C -31.550781 32.171875 -29.457031 33.414062 -26.59375 34.03125 L -15.5625 36.40625 Z M -11.796875 18.953125 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(153.685489, 265.988621)">
                <g>
                  <path d="M -4.796875 -2.328125 L -17.984375 24.734375 L -19.09375 24.1875 L -17 19.890625 L -17.140625 19.8125 C -18.472656 20.90625 -20.066406 21.523438 -21.921875 21.671875 C -23.785156 21.816406 -25.648438 21.429688 -27.515625 20.515625 C -28.109375 20.234375 -28.644531 19.921875 -29.125 19.578125 C -29.601562 19.234375 -30.023438 18.878906 -30.390625 18.515625 L -29.453125 17.65625 C -28.804688 18.3125 -27.976562 18.882812 -26.96875 19.375 C -25.375 20.15625 -23.785156 20.5 -22.203125 20.40625 C -20.628906 20.320312 -19.1875 19.84375 -17.875 18.96875 C -16.570312 18.09375 -15.535156 16.867188 -14.765625 15.296875 L -5.90625 -2.875 Z M -4.796875 -2.328125 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(138.138917, 258.319996)">
                <g>
                  <path d="M -4.546875 -3.0625 L -21.390625 21.890625 L -22.421875 21.1875 L -5.578125 -3.765625 Z M -24.90625 26.140625 C -24.625 26.328125 -24.445312 26.585938 -24.375 26.921875 C -24.3125 27.265625 -24.375 27.578125 -24.5625 27.859375 C -24.757812 28.148438 -25.023438 28.328125 -25.359375 28.390625 C -25.703125 28.460938 -26.015625 28.40625 -26.296875 28.21875 C -26.578125 28.019531 -26.75 27.75 -26.8125 27.40625 C -26.882812 27.070312 -26.820312 26.757812 -26.625 26.46875 C -26.4375 26.1875 -26.171875 26.007812 -25.828125 25.9375 C -25.492188 25.875 -25.1875 25.941406 -24.90625 26.140625 Z M -24.90625 26.140625 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(130.130749, 254.468425)">
                <g>
                  <path d="M -11.3125 -12.203125 C -9.457031 -10.335938 -8.316406 -8.222656 -7.890625 -5.859375 C -7.472656 -3.503906 -7.710938 -1.113281 -8.609375 1.3125 C -9.503906 3.738281 -11 5.992188 -13.09375 8.078125 C -15.175781 10.171875 -17.429688 11.660156 -19.859375 12.546875 C -22.285156 13.441406 -24.648438 13.707031 -26.953125 13.34375 C -29.265625 12.988281 -31.253906 11.972656 -32.921875 10.296875 C -34.578125 8.640625 -35.597656 6.695312 -35.984375 4.46875 C -36.378906 2.25 -36.195312 -0.00390625 -35.4375 -2.296875 C -34.675781 -4.585938 -33.375 -6.648438 -31.53125 -8.484375 L -30.640625 -9.375 L -14.015625 7.265625 C -12.171875 5.398438 -10.800781 3.367188 -9.90625 1.171875 C -9.019531 -1.023438 -8.734375 -3.207031 -9.046875 -5.375 C -9.359375 -7.550781 -10.40625 -9.535156 -12.1875 -11.328125 C -13.5 -12.628906 -14.832031 -13.492188 -16.1875 -13.921875 C -17.539062 -14.359375 -18.789062 -14.546875 -19.9375 -14.484375 C -21.082031 -14.421875 -21.992188 -14.304688 -22.671875 -14.140625 L -22.890625 -15.359375 C -22.035156 -15.585938 -20.96875 -15.710938 -19.6875 -15.734375 C -18.40625 -15.765625 -17.035156 -15.53125 -15.578125 -15.03125 C -14.117188 -14.53125 -12.695312 -13.585938 -11.3125 -12.203125 Z M -14.9375 8.109375 L -30.65625 -7.59375 C -32.375 -5.882812 -33.570312 -3.984375 -34.25 -1.890625 C -34.9375 0.191406 -35.097656 2.234375 -34.734375 4.234375 C -34.378906 6.242188 -33.476562 7.96875 -32.03125 9.40625 C -30.644531 10.800781 -28.972656 11.675781 -27.015625 12.03125 C -25.066406 12.382812 -23.035156 12.226562 -20.921875 11.5625 C -18.816406 10.894531 -16.820312 9.742188 -14.9375 8.109375 Z M -14.9375 8.109375 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(110.774135, 234.67403)">
                <g>
                  <path d="M -33.8125 2.953125 L -32.75 2.265625 L -29.25 7.75 L -4.921875 -7.734375 L -4.25 -6.6875 L -28.578125 8.796875 L -26.34375 12.3125 L -27.40625 13 L -29.640625 9.484375 L -33.34375 11.828125 C -35.132812 12.972656 -36.921875 13.300781 -38.703125 12.8125 C -40.484375 12.332031 -41.867188 11.304688 -42.859375 9.734375 C -43.109375 9.335938 -43.304688 8.957031 -43.453125 8.59375 C -43.597656 8.238281 -43.707031 7.867188 -43.78125 7.484375 L -42.59375 7.171875 C -42.5 7.515625 -42.394531 7.832031 -42.28125 8.125 C -42.175781 8.425781 -42.019531 8.738281 -41.8125 9.0625 C -41.007812 10.332031 -39.878906 11.171875 -38.421875 11.578125 C -36.960938 11.992188 -35.492188 11.726562 -34.015625 10.78125 L -30.3125 8.4375 Z M -33.8125 2.953125 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(102.065264, 223.211102)">
                <g>
                  <path d="M -5.09375 -15.84375 C -4.195312 -13.375 -4.054688 -10.976562 -4.671875 -8.65625 C -5.285156 -6.34375 -6.507812 -4.269531 -8.34375 -2.4375 C -10.1875 -0.613281 -12.492188 0.796875 -15.265625 1.796875 C -18.046875 2.816406 -20.726562 3.210938 -23.3125 2.984375 C -25.894531 2.765625 -28.148438 2.003906 -30.078125 0.703125 C -32.015625 -0.585938 -33.390625 -2.34375 -34.203125 -4.5625 C -35.003906 -6.769531 -35.109375 -8.960938 -34.515625 -11.140625 C -33.921875 -13.328125 -32.796875 -15.296875 -31.140625 -17.046875 C -29.484375 -18.804688 -27.4375 -20.128906 -25 -21.015625 L -23.8125 -21.453125 L -15.78125 0.640625 C -13.3125 -0.265625 -11.207031 -1.519531 -9.46875 -3.125 C -7.726562 -4.738281 -6.546875 -6.59375 -5.921875 -8.6875 C -5.296875 -10.789062 -5.414062 -13.03125 -6.28125 -15.40625 C -6.914062 -17.144531 -7.753906 -18.492188 -8.796875 -19.453125 C -9.835938 -20.421875 -10.890625 -21.117188 -11.953125 -21.546875 C -13.015625 -21.984375 -13.890625 -22.269531 -14.578125 -22.40625 L -14.25 -23.59375 C -13.382812 -23.425781 -12.363281 -23.085938 -11.1875 -22.578125 C -10.019531 -22.066406 -8.878906 -21.273438 -7.765625 -20.203125 C -6.648438 -19.140625 -5.757812 -17.6875 -5.09375 -15.84375 Z M -16.984375 1.046875 L -24.578125 -19.84375 C -26.847656 -19.019531 -28.734375 -17.800781 -30.234375 -16.1875 C -31.734375 -14.582031 -32.742188 -12.796875 -33.265625 -10.828125 C -33.796875 -8.867188 -33.710938 -6.925781 -33.015625 -5 C -32.335938 -3.15625 -31.1875 -1.660156 -29.5625 -0.515625 C -27.945312 0.617188 -26.046875 1.332031 -23.859375 1.625 C -21.671875 1.925781 -19.378906 1.734375 -16.984375 1.046875 Z M -16.984375 1.046875 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(92.650219, 197.588215)">
                <g>
                  <path d="M -19.78125 -17.625 L -18.53125 -17.75 L -16.96875 -2.859375 L -18.21875 -2.734375 Z M -19.78125 -17.625 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(89.629448, 177.977259)">
                <g>
                  <path d="M -19.125 -9.28125 L 0.90625 -6.515625 L 0.734375 -5.28125 L -29.09375 -9.390625 L -28.921875 -10.625 L -24.1875 -9.984375 L -24.171875 -10.140625 C -25.617188 -11.046875 -26.695312 -12.363281 -27.40625 -14.09375 C -28.125 -15.820312 -28.34375 -17.71875 -28.0625 -19.78125 C -27.789062 -21.78125 -27.113281 -23.484375 -26.03125 -24.890625 C -24.945312 -26.296875 -23.582031 -27.320312 -21.9375 -27.96875 C -20.289062 -28.625 -18.46875 -28.816406 -16.46875 -28.546875 L 3.5625 -25.78125 L 3.390625 -24.53125 L -16.640625 -27.296875 C -19.273438 -27.660156 -21.535156 -27.128906 -23.421875 -25.703125 C -25.304688 -24.273438 -26.429688 -22.242188 -26.796875 -19.609375 C -27.035156 -17.847656 -26.867188 -16.234375 -26.296875 -14.765625 C -25.734375 -13.296875 -24.828125 -12.070312 -23.578125 -11.09375 C -22.335938 -10.125 -20.851562 -9.519531 -19.125 -9.28125 Z M -19.125 -9.28125 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(92.493334, 151.743373)">
                <g>
                  <path d="M 7 -14.390625 C 6.039062 -12.222656 4.5625 -10.550781 2.5625 -9.375 C 0.5625 -8.195312 -1.734375 -7.582031 -4.328125 -7.53125 C -6.929688 -7.488281 -9.582031 -8.054688 -12.28125 -9.234375 C -15 -10.429688 -17.21875 -12 -18.9375 -13.9375 C -20.65625 -15.875 -21.765625 -17.976562 -22.265625 -20.25 C -22.765625 -22.519531 -22.535156 -24.738281 -21.578125 -26.90625 C -20.628906 -29.070312 -19.148438 -30.738281 -17.140625 -31.90625 C -15.140625 -33.070312 -12.84375 -33.6875 -10.25 -33.75 C -7.65625 -33.8125 -5 -33.25 -2.28125 -32.0625 C 0.414062 -30.882812 2.625 -29.320312 4.34375 -27.375 C 6.070312 -25.425781 7.179688 -23.316406 7.671875 -21.046875 C 8.171875 -18.773438 7.945312 -16.554688 7 -14.390625 Z M 5.84375 -14.890625 C 6.695312 -16.847656 6.890625 -18.851562 6.421875 -20.90625 C 5.953125 -22.957031 4.921875 -24.867188 3.328125 -26.640625 C 1.742188 -28.410156 -0.289062 -29.835938 -2.78125 -30.921875 C -5.28125 -32.015625 -7.71875 -32.546875 -10.09375 -32.515625 C -12.46875 -32.484375 -14.566406 -31.945312 -16.390625 -30.90625 C -18.222656 -29.863281 -19.566406 -28.363281 -20.421875 -26.40625 C -21.273438 -24.46875 -21.460938 -22.46875 -20.984375 -20.40625 C -20.515625 -18.351562 -19.488281 -16.441406 -17.90625 -14.671875 C -16.320312 -12.898438 -14.28125 -11.46875 -11.78125 -10.375 C -9.289062 -9.289062 -6.859375 -8.757812 -4.484375 -8.78125 C -2.109375 -8.8125 -0.0078125 -9.347656 1.8125 -10.390625 C 3.644531 -11.441406 4.988281 -12.941406 5.84375 -14.890625 Z M 5.84375 -14.890625 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(102.731704, 126.78077)">
                <g>
                  <path d="M 8.109375 -25.40625 L -7.515625 -38.265625 L -6.703125 -39.234375 L 16.546875 -20.09375 L 15.734375 -19.125 L 12.046875 -22.15625 L 11.953125 -22.03125 C 12.710938 -20.5 12.941406 -18.8125 12.640625 -16.96875 C 12.335938 -15.125 11.523438 -13.394531 10.203125 -11.78125 C 8.929688 -10.226562 7.46875 -9.132812 5.8125 -8.5 C 4.164062 -7.875 2.46875 -7.710938 0.71875 -8.015625 C -1.03125 -8.316406 -2.679688 -9.109375 -4.234375 -10.390625 L -19.859375 -23.25 L -19.0625 -24.21875 L -3.4375 -11.359375 C -1.375 -9.660156 0.832031 -8.925781 3.1875 -9.15625 C 5.539062 -9.394531 7.5625 -10.535156 9.25 -12.578125 C 10.382812 -13.953125 11.085938 -15.414062 11.359375 -16.96875 C 11.640625 -18.53125 11.503906 -20.046875 10.953125 -21.515625 C 10.410156 -22.992188 9.460938 -24.289062 8.109375 -25.40625 Z M 8.109375 -25.40625 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(119.418118, 105.969106)">
                <g>
                  <path d="M 4.984375 -32.9375 L 4.15625 -31.953125 C 0.851562 -34.398438 -2.457031 -34.421875 -5.78125 -32.015625 C -7.726562 -30.597656 -8.941406 -28.957031 -9.421875 -27.09375 C -9.910156 -25.238281 -9.570312 -23.5 -8.40625 -21.875 C -6.507812 -19.269531 -3.617188 -18.753906 0.265625 -20.328125 L 4.78125 -22.140625 C 6.882812 -22.992188 8.78125 -23.222656 10.46875 -22.828125 C 12.164062 -22.441406 13.554688 -21.5 14.640625 -20 C 16.085938 -18.007812 16.492188 -15.851562 15.859375 -13.53125 C 15.234375 -11.207031 13.726562 -9.179688 11.34375 -7.453125 C 9.175781 -5.890625 7.019531 -5.132812 4.875 -5.1875 C 2.738281 -5.25 0.757812 -6.097656 -1.0625 -7.734375 L -0.234375 -8.734375 C 3.078125 -5.703125 6.695312 -5.609375 10.625 -8.453125 C 12.738281 -9.992188 14.070312 -11.757812 14.625 -13.75 C 15.1875 -15.738281 14.851562 -17.578125 13.625 -19.265625 C 11.75 -21.867188 8.960938 -22.425781 5.265625 -20.9375 L 0.765625 -19.140625 C -1.441406 -18.234375 -3.414062 -17.960938 -5.15625 -18.328125 C -6.894531 -18.691406 -8.316406 -19.632812 -9.421875 -21.15625 C -10.804688 -23.070312 -11.222656 -25.128906 -10.671875 -27.328125 C -10.117188 -29.535156 -8.734375 -31.441406 -6.515625 -33.046875 C -2.710938 -35.796875 1.117188 -35.757812 4.984375 -32.9375 Z M 4.984375 -32.9375 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(148.538663, 85.933506)">
                <g>
                  <path d="M 2.171875 -13.984375 C 2.046875 -15.585938 2.507812 -17.023438 3.5625 -18.296875 C 4.625 -19.566406 6.0625 -20.398438 7.875 -20.796875 C 9.1875 -21.078125 10.367188 -21.078125 11.421875 -20.796875 C 12.472656 -20.515625 13.453125 -20.203125 14.359375 -19.859375 C 15.222656 -19.503906 16.050781 -19.21875 16.84375 -19 C 17.632812 -18.789062 18.5 -18.785156 19.4375 -18.984375 C 20.789062 -19.273438 21.867188 -19.914062 22.671875 -20.90625 C 23.484375 -21.90625 23.910156 -23.046875 23.953125 -24.328125 L 25.25 -24.296875 C 25.195312 -22.710938 24.664062 -21.3125 23.65625 -20.09375 C 22.644531 -18.882812 21.332031 -18.109375 19.71875 -17.765625 C 18.601562 -17.523438 17.570312 -17.535156 16.625 -17.796875 C 15.675781 -18.054688 14.765625 -18.351562 13.890625 -18.6875 C 12.992188 -19.039062 12.09375 -19.335938 11.1875 -19.578125 C 10.28125 -19.816406 9.265625 -19.816406 8.140625 -19.578125 C 6.617188 -19.242188 5.425781 -18.566406 4.5625 -17.546875 C 3.707031 -16.523438 3.328125 -15.378906 3.421875 -14.109375 Z M 2.171875 -13.984375 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(190.410171, 78.229798)">
                <g>
                  <path d="M 6.109375 1.375 L 14.921875 -37.78125 L 27.171875 -35.015625 C 30.460938 -34.273438 32.832031 -32.8125 34.28125 -30.625 C 35.726562 -28.445312 36.101562 -25.816406 35.40625 -22.734375 C 34.882812 -20.421875 33.914062 -18.535156 32.5 -17.078125 C 31.082031 -15.617188 29.367188 -14.859375 27.359375 -14.796875 L 27.3125 -14.640625 C 28.707031 -14.222656 29.875 -13.453125 30.8125 -12.328125 C 31.757812 -11.210938 32.398438 -9.863281 32.734375 -8.28125 C 33.066406 -6.707031 33.023438 -5.003906 32.609375 -3.171875 C 31.929688 -0.148438 30.441406 2.054688 28.140625 3.453125 C 25.847656 4.859375 23.015625 5.179688 19.640625 4.421875 Z M 7.625 0.4375 L 19.921875 3.203125 C 22.804688 3.847656 25.285156 3.554688 27.359375 2.328125 C 29.441406 1.109375 30.78125 -0.816406 31.375 -3.453125 C 31.78125 -5.265625 31.734375 -6.957031 31.234375 -8.53125 C 30.742188 -10.101562 29.875 -11.441406 28.625 -12.546875 C 27.382812 -13.660156 25.835938 -14.425781 23.984375 -14.84375 L 11.6875 -17.609375 Z M 11.96875 -18.84375 L 24.265625 -16.078125 C 26.054688 -15.671875 27.628906 -15.734375 28.984375 -16.265625 C 30.335938 -16.804688 31.453125 -17.671875 32.328125 -18.859375 C 33.210938 -20.054688 33.832031 -21.4375 34.1875 -23 C 34.8125 -25.769531 34.46875 -28.097656 33.15625 -29.984375 C 31.84375 -31.878906 29.757812 -33.144531 26.90625 -33.78125 L 15.890625 -36.265625 Z M 11.96875 -18.84375 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(220.396196, 85.363615)">
                <g>
                  <path d="M 4.765625 2.375 L 18.203125 -24.578125 L 19.328125 -24.015625 L 17.1875 -19.734375 L 17.328125 -19.671875 C 18.660156 -20.742188 20.257812 -21.34375 22.125 -21.46875 C 23.988281 -21.59375 25.847656 -21.191406 27.703125 -20.265625 C 28.285156 -19.972656 28.816406 -19.648438 29.296875 -19.296875 C 29.773438 -18.953125 30.191406 -18.601562 30.546875 -18.25 L 29.59375 -17.390625 C 28.96875 -18.046875 28.148438 -18.625 27.140625 -19.125 C 25.554688 -19.914062 23.972656 -20.273438 22.390625 -20.203125 C 20.816406 -20.128906 19.367188 -19.660156 18.046875 -18.796875 C 16.734375 -17.929688 15.6875 -16.71875 14.90625 -15.15625 L 5.890625 2.9375 Z M 4.765625 2.375 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(235.866633, 93.171111)">
                <g>
                  <path d="M 4.515625 3.109375 L 21.578125 -21.6875 L 22.609375 -20.984375 L 5.546875 3.8125 Z M 25.125 -25.90625 C 24.84375 -26.09375 24.671875 -26.359375 24.609375 -26.703125 C 24.546875 -27.046875 24.613281 -27.359375 24.8125 -27.640625 C 25.007812 -27.929688 25.273438 -28.101562 25.609375 -28.15625 C 25.953125 -28.21875 26.265625 -28.15625 26.546875 -27.96875 C 26.828125 -27.769531 27 -27.5 27.0625 -27.15625 C 27.132812 -26.820312 27.070312 -26.507812 26.875 -26.21875 C 26.675781 -25.9375 26.40625 -25.765625 26.0625 -25.703125 C 25.71875 -25.640625 25.40625 -25.707031 25.125 -25.90625 Z M 25.125 -25.90625 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(243.79688, 97.094083)">
                <g>
                  <path d="M 11.1875 12.296875 C 9.351562 10.421875 8.234375 8.300781 7.828125 5.9375 C 7.429688 3.582031 7.691406 1.191406 8.609375 -1.234375 C 9.535156 -3.660156 11.050781 -5.90625 13.15625 -7.96875 C 15.257812 -10.039062 17.53125 -11.507812 19.96875 -12.375 C 22.414062 -13.25 24.789062 -13.492188 27.09375 -13.109375 C 29.394531 -12.734375 31.375 -11.703125 33.03125 -10.015625 C 34.664062 -8.335938 35.664062 -6.378906 36.03125 -4.140625 C 36.40625 -1.910156 36.203125 0.335938 35.421875 2.609375 C 34.640625 4.890625 33.320312 6.941406 31.46875 8.765625 L 30.5625 9.640625 L 14.078125 -7.140625 C 12.210938 -5.285156 10.820312 -3.265625 9.90625 -1.078125 C 9 1.097656 8.695312 3.273438 9 5.453125 C 9.300781 7.640625 10.332031 9.628906 12.09375 11.421875 C 13.394531 12.742188 14.71875 13.625 16.0625 14.0625 C 17.414062 14.507812 18.664062 14.707031 19.8125 14.65625 C 20.957031 14.613281 21.863281 14.515625 22.53125 14.359375 L 22.75 15.5625 C 21.882812 15.78125 20.8125 15.894531 19.53125 15.90625 C 18.25 15.925781 16.878906 15.675781 15.421875 15.15625 C 13.972656 14.644531 12.5625 13.691406 11.1875 12.296875 Z M 15.015625 -7.96875 L 30.59375 7.875 C 32.320312 6.175781 33.535156 4.285156 34.234375 2.203125 C 34.941406 0.117188 35.125 -1.921875 34.78125 -3.921875 C 34.4375 -5.929688 33.550781 -7.664062 32.125 -9.125 C 30.738281 -10.53125 29.070312 -11.414062 27.125 -11.78125 C 25.1875 -12.15625 23.160156 -12.019531 21.046875 -11.375 C 18.929688 -10.726562 16.921875 -9.59375 15.015625 -7.96875 Z M 15.015625 -7.96875 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(263.011841, 117.061169)">
                <g>
                  <path d="M 33.84375 -2.640625 L 32.765625 -1.984375 L 29.328125 -7.5 L 4.859375 7.78125 L 4.1875 6.71875 L 28.65625 -8.5625 L 26.46875 -12.09375 L 27.546875 -12.75 L 29.734375 -9.21875 L 33.4375 -11.546875 C 35.238281 -12.671875 37.03125 -12.976562 38.8125 -12.46875 C 40.59375 -11.96875 41.972656 -10.929688 42.953125 -9.359375 C 43.203125 -8.960938 43.390625 -8.582031 43.515625 -8.21875 C 43.648438 -7.851562 43.757812 -7.476562 43.84375 -7.09375 L 42.65625 -6.796875 C 42.5625 -7.128906 42.460938 -7.441406 42.359375 -7.734375 C 42.253906 -8.035156 42.097656 -8.351562 41.890625 -8.6875 C 41.097656 -9.957031 39.976562 -10.804688 38.53125 -11.234375 C 37.082031 -11.660156 35.609375 -11.410156 34.109375 -10.484375 L 30.40625 -8.15625 Z M 33.84375 -2.640625 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(271.581321, 128.60148)">
                <g>
                  <path d="M 4.953125 15.875 C 4.078125 13.40625 3.957031 11.015625 4.59375 8.703125 C 5.226562 6.390625 6.472656 4.328125 8.328125 2.515625 C 10.179688 0.710938 12.5 -0.675781 15.28125 -1.65625 C 18.070312 -2.644531 20.753906 -3.015625 23.328125 -2.765625 C 25.910156 -2.523438 28.160156 -1.75 30.078125 -0.4375 C 32.003906 0.863281 33.363281 2.628906 34.15625 4.859375 C 34.9375 7.078125 35.019531 9.273438 34.40625 11.453125 C 33.800781 13.640625 32.660156 15.597656 30.984375 17.328125 C 29.316406 19.066406 27.257812 20.367188 24.8125 21.234375 L 23.625 21.65625 L 15.78125 -0.515625 C 13.300781 0.367188 11.1875 1.609375 9.4375 3.203125 C 7.6875 4.804688 6.488281 6.65625 5.84375 8.75 C 5.195312 10.851562 5.296875 13.09375 6.140625 15.46875 C 6.753906 17.21875 7.578125 18.578125 8.609375 19.546875 C 9.648438 20.515625 10.695312 21.21875 11.75 21.65625 C 12.8125 22.09375 13.679688 22.382812 14.359375 22.53125 L 14.03125 23.71875 C 13.175781 23.550781 12.160156 23.203125 10.984375 22.671875 C 9.816406 22.148438 8.679688 21.347656 7.578125 20.265625 C 6.472656 19.179688 5.597656 17.71875 4.953125 15.875 Z M 16.984375 -0.890625 L 24.390625 20.0625 C 26.671875 19.257812 28.566406 18.0625 30.078125 16.46875 C 31.597656 14.875 32.628906 13.09375 33.171875 11.125 C 33.710938 9.164062 33.644531 7.222656 32.96875 5.296875 C 32.3125 3.441406 31.175781 1.9375 29.5625 0.78125 C 27.957031 -0.375 26.0625 -1.109375 23.875 -1.421875 C 21.695312 -1.734375 19.398438 -1.554688 16.984375 -0.890625 Z M 16.984375 -0.890625 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(280.765926, 154.30762)">
                <g>
                  <path d="M 19.625 17.796875 L 18.375 17.90625 L 16.9375 3.015625 L 18.1875 2.90625 Z M 19.625 17.796875 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(283.647402, 173.945019)">
                <g>
                  <path d="M 19.046875 9.453125 L -0.953125 6.515625 L -0.78125 5.265625 L 29 9.65625 L 28.828125 10.90625 L 24.109375 10.203125 L 24.078125 10.34375 C 25.515625 11.28125 26.582031 12.613281 27.28125 14.34375 C 27.976562 16.070312 28.175781 17.960938 27.875 20.015625 C 27.582031 22.015625 26.890625 23.710938 25.796875 25.109375 C 24.710938 26.515625 23.34375 27.535156 21.6875 28.171875 C 20.03125 28.816406 18.203125 28.988281 16.203125 28.6875 L -3.796875 25.75 L -3.609375 24.5 L 16.390625 27.4375 C 19.023438 27.832031 21.289062 27.320312 23.1875 25.90625 C 25.09375 24.5 26.238281 22.472656 26.625 19.828125 C 26.882812 18.078125 26.734375 16.460938 26.171875 14.984375 C 25.617188 13.515625 24.722656 12.289062 23.484375 11.3125 C 22.253906 10.332031 20.773438 9.710938 19.046875 9.453125 Z M 19.046875 9.453125 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(280.519023, 200.15207)">
                <g>
                  <path d="M -7.109375 14.328125 C -6.140625 12.171875 -4.644531 10.515625 -2.625 9.359375 C -0.613281 8.203125 1.6875 7.609375 4.28125 7.578125 C 6.875 7.546875 9.515625 8.132812 12.203125 9.34375 C 14.910156 10.5625 17.113281 12.148438 18.8125 14.109375 C 20.519531 16.066406 21.609375 18.179688 22.078125 20.453125 C 22.554688 22.722656 22.3125 24.9375 21.34375 27.09375 C 20.375 29.25 18.878906 30.898438 16.859375 32.046875 C 14.847656 33.203125 12.539062 33.800781 9.9375 33.84375 C 7.34375 33.882812 4.695312 33.296875 2 32.078125 C -0.6875 30.867188 -2.878906 29.285156 -4.578125 27.328125 C -6.285156 25.378906 -7.375 23.265625 -7.84375 20.984375 C -8.320312 18.703125 -8.078125 16.484375 -7.109375 14.328125 Z M -5.984375 14.828125 C -6.859375 16.773438 -7.066406 18.78125 -6.609375 20.84375 C -6.160156 22.90625 -5.144531 24.820312 -3.5625 26.59375 C -1.988281 28.375 0.0351562 29.820312 2.515625 30.9375 C 4.992188 32.050781 7.421875 32.601562 9.796875 32.59375 C 12.171875 32.582031 14.273438 32.0625 16.109375 31.03125 C 17.953125 30.007812 19.3125 28.523438 20.1875 26.578125 C 21.050781 24.648438 21.253906 22.65625 20.796875 20.59375 C 20.347656 18.539062 19.335938 16.617188 17.765625 14.828125 C 16.203125 13.046875 14.179688 11.597656 11.703125 10.484375 C 9.222656 9.367188 6.789062 8.816406 4.40625 8.828125 C 2.03125 8.835938 -0.0703125 9.351562 -1.90625 10.375 C -3.75 11.40625 -5.109375 12.890625 -5.984375 14.828125 Z M -5.984375 14.828125 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(270.087185, 225.022132)">
                <g>
                  <path d="M -8.34375 25.328125 L 7.171875 38.328125 L 6.359375 39.296875 L -16.71875 19.953125 L -15.90625 18.984375 L -12.25 22.0625 L -12.15625 21.9375 C -12.894531 20.394531 -13.109375 18.703125 -12.796875 16.859375 C -12.484375 15.015625 -11.65625 13.296875 -10.3125 11.703125 C -9.019531 10.160156 -7.539062 9.078125 -5.875 8.453125 C -4.21875 7.835938 -2.519531 7.6875 -0.78125 8 C 0.957031 8.320312 2.597656 9.128906 4.140625 10.421875 L 19.65625 23.421875 L 18.859375 24.390625 L 3.34375 11.390625 C 1.300781 9.679688 -0.894531 8.925781 -3.25 9.125 C -5.613281 9.332031 -7.648438 10.457031 -9.359375 12.5 C -10.503906 13.863281 -11.222656 15.320312 -11.515625 16.875 C -11.804688 18.425781 -11.679688 19.941406 -11.140625 21.421875 C -10.609375 22.898438 -9.675781 24.203125 -8.34375 25.328125 Z M -8.34375 25.328125 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(253.187308, 245.683391)">
                <g>
                  <path d="M -5.265625 32.890625 L -4.4375 31.90625 C -1.164062 34.394531 2.140625 34.445312 5.484375 32.0625 C 7.441406 30.664062 8.671875 29.039062 9.171875 27.1875 C 9.679688 25.332031 9.359375 23.59375 8.203125 21.96875 C 6.335938 19.34375 3.453125 18.800781 -0.453125 20.34375 L -4.96875 22.09375 C -7.082031 22.9375 -8.984375 23.15625 -10.671875 22.75 C -12.367188 22.34375 -13.753906 21.382812 -14.828125 19.875 C -16.253906 17.875 -16.640625 15.710938 -15.984375 13.390625 C -15.335938 11.066406 -13.8125 9.050781 -11.40625 7.34375 C -9.226562 5.789062 -7.066406 5.054688 -4.921875 5.140625 C -2.785156 5.222656 -0.8125 6.09375 1 7.75 L 0.15625 8.75 C -3.125 5.695312 -6.738281 5.570312 -10.6875 8.375 C -12.820312 9.882812 -14.175781 11.628906 -14.75 13.609375 C -15.320312 15.597656 -15.003906 17.445312 -13.796875 19.15625 C -11.929688 21.769531 -9.144531 22.351562 -5.4375 20.90625 L -0.9375 19.125 C 1.28125 18.257812 3.253906 18.007812 4.984375 18.375 C 6.722656 18.738281 8.140625 19.691406 9.234375 21.234375 C 10.609375 23.160156 11.003906 25.222656 10.421875 27.421875 C 9.847656 29.617188 8.445312 31.507812 6.21875 33.09375 C 2.394531 35.8125 -1.429688 35.742188 -5.265625 32.890625 Z M -5.265625 32.890625 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(223.90148, 265.457462)">
                <g>
                  <path d="M -2.296875 13.953125 C -2.191406 15.566406 -2.671875 17.003906 -3.734375 18.265625 C -4.804688 19.523438 -6.25 20.34375 -8.0625 20.71875 C -9.382812 20.988281 -10.566406 20.976562 -11.609375 20.6875 C -12.660156 20.394531 -13.632812 20.070312 -14.53125 19.71875 C -15.394531 19.363281 -16.222656 19.070312 -17.015625 18.84375 C -17.804688 18.625 -18.671875 18.613281 -19.609375 18.8125 C -20.960938 19.082031 -22.046875 19.710938 -22.859375 20.703125 C -23.679688 21.691406 -24.113281 22.828125 -24.15625 24.109375 L -25.46875 24.0625 C -25.382812 22.476562 -24.832031 21.082031 -23.8125 19.875 C -22.800781 18.675781 -21.488281 17.910156 -19.875 17.578125 C -18.75 17.347656 -17.710938 17.367188 -16.765625 17.640625 C -15.828125 17.910156 -14.925781 18.21875 -14.0625 18.5625 C -13.164062 18.925781 -12.265625 19.226562 -11.359375 19.46875 C -10.453125 19.71875 -9.441406 19.726562 -8.328125 19.5 C -6.796875 19.1875 -5.59375 18.519531 -4.71875 17.5 C -3.851562 16.488281 -3.460938 15.34375 -3.546875 14.0625 Z M -2.296875 13.953125 " />
                </g>
              </g>
            </g>
          </svg>
        </button>
      </SCta>
    </>
  );
}