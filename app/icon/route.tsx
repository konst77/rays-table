// app/icon/route.tsx
import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, #F97316, #FDBA74)',
          borderRadius: '8px',
        }}
      />
    ),
    {
      width: size.width,
      height: size.height,
    }
  )
}
