import { Badge } from '@/app/_components/ui/badge'
import React from 'react'



const getData = async (id) => {
  try {
    const res = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api', {
      method: 'GET',
      headers:{
        Authorization:'Token 97848e8babeb149f26a044838f1fcb6f52d60e7b'
      }
    })
    const result = await res.json()
    const singleData = result?.find((article=> article.id === +id))
    return singleData
  } catch (error) {
    console.log("err", error)
  }
}



export default async function HomePage({params}) {
  const slug = (await params).id
  const result= await getData(slug)
  return (
    <div className='h-[500px]'>
      <img
        src={result.image_url}
        className='w-full h-[500px] object-contain'
      />
      <div className='max-w-[1000px] mx-auto my-2 px-4'>
        <div className='flex flex-col gap-7 my-20'>
          <div>
            <Badge variant="black" className='text-base' >{result.prompt}</Badge>
          </div>
          <p className='text-2xl font-semibold space-x-2'>
            {result.title}
          </p>
          <p className='text-xl font-[500] space-x-2 mt-2'>
          {result.short_description}
          </p>
        </div>
      </div>
    </div>
  )
}

