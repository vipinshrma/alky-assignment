export const dynamic = 'force-static'
 
export async function GET() {
    let data = [
        {
            id: Math.random(),
            title:' In a post-apocalyptic world',
            desciption:'In a post-apocalyptic wasteland, a solitary survivor navigates desolation haunted by mutants and ruthless human scavengers. Amidst the ruins, they encounter a mysterious wanderer, forging an unlikely alliance. Together, they embark on a perilous journey, facing harrowing obstacles and betrayals. As they struggle to survive, bonds form, revealing shared scars of a shattered world. Amidst chaos and despair, glimmers of hope emerge, fueled by resilience and the unyielding human spirit. Through sacrifice and perseverance, they confront their demons, discovering that true salvation lies not in solitude, but in the bonds of companionship forged amidst the ashes of civilization.'
        },
        {
            id: Math.random(),
            title:' In a post-apocalyptic world',
            desciption:'In a post-apocalyptic wasteland, a solitary survivor navigates desolation haunted by mutants and ruthless human scavengers. Amidst the ruins, they encounter a mysterious wanderer, forging an unlikely alliance. Together, they embark on a perilous journey, facing harrowing obstacles and betrayals. As they struggle to survive, bonds form, revealing shared scars of a shattered world. Amidst chaos and despair, glimmers of hope emerge, fueled by resilience and the unyielding human spirit. Through sacrifice and perseverance, they confront their demons, discovering that true salvation lies not in solitude, but in the bonds of companionship forged amidst the ashes of civilization.'
        }
    ]
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const data = await res.json()
 
  return Response.json({ data })
}