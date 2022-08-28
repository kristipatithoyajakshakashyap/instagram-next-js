const suggestions = [
    {
        id: '1',
        username:'Jenny',
        avatar:'https://tinyurl.com/2oqv9587',
        company:'Apple'
    },
    {
        id: '2',
        username:'Denwar',
        avatar:'https://tinyurl.com/2qf76z33',
        company:"Google"
    },
    {
        id: '3',
        username:'Julian',
        avatar:'https://tinyurl.com/2pgwqy55',
        company:"Microsoft"
    },
    {
        id: '4',
        username:'Aiony',
        avatar:'https://tinyurl.com/2jo5k2tb',
        company:"Delloite"
    },
    {
        id: '2',
        username:'Paul',
        avatar:'https://tinyurl.com/2q42g2gc',
        company:"TCS"
    }
]
function Suggestions() {
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {
        suggestions.map(profile => (
            <div key={profile.id} className='flex items-center justify-between mt-3'>
                <img className="w-10 h-10 rounded-full border p-[2px]" src={profile.avatar} alt="" />
                <div className="flex-1 ml-4">
                    <h2 className="font-semibold text-sm ">{profile.username}</h2>
                    <h3 className="text-xs text-gray-400">Works at {profile.company}</h3>
                </div>
                <button className="text-blue-400 text-sm font-bold">Follow</button>
            </div>
        ))
      }
    </div>
  )
}

export default Suggestions
