import { ImageResponse } from 'next/og'

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <defs>
          <linearGradient id="warmGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" fill="url(#warmGradient)" rx="6" />
      </svg>
    ),
    {
      width: 32,
      height: 32,
    }
  )
}