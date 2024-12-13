import Link from "next/link";
import { InfoCard } from "./_components/card";

const getData = async () => {
  try {
    const res = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api', {
      method: 'GET',
      headers:{
        Authorization:'Token 97848e8babeb149f26a044838f1fcb6f52d60e7b'
      }
    })
    const result = await res.json()
    return result
  } catch (error) {
    console.log("err", error)
  }
}

export default async function Home() {
  const data = await getData()
  return (
    <>
      <div className="grid grid-cols-1 mx-4 my-20 gap-2 md:grid-cols-2">
        {
          data?.map((article=>{
            return   <Link href={`/details/${article.id}`}>
            <InfoCard bgImage={article.image_url} heading={article.prompt} title={article.short_description} p />
          </Link>
          }))
        }
        {/* <Link href='/23424'>
          <InfoCard />
        </Link> */}
      </div>
    </>
  );
}
