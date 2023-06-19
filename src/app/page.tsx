'use client'
import { Model } from './component/model'
import { useRouter, useParams } from 'next/navigation'

export default function Home() {
  const params = useParams()
  const router = useRouter()
  const hasParams = Object.keys(params).length > 0
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>

      <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }} href="#" onClick={() => router.push('/')}>

        {hasParams ? '< back' : 'double click to enter portal'}
      </a>
    </div>
  )
}
