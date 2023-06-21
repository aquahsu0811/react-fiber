'use client'
import { Model } from './component/model'
import { useRouter, useParams } from 'next/navigation'

export default function Home() {
  const params = useParams()
  const router = useRouter()
  const hasParams = Object.keys(params).length > 0
  return (
    <>
      <Model />
      <div >

        <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }} href="#" onClick={() => router.push('/')}>

          {hasParams ? '< back' : 'double click to enter portal'}
        </a>
      </div>
    </>
  )
}
