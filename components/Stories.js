import Story from "./Story";
import { useSession } from 'next-auth/react';

function Stories() {
    const {data:session} = useSession();   
    return (
    <div className="flex space-x-4 p-3  bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black  ">
        {session && (
            <Story img={session.user.image} username={session.user.username} /> 
        )}
        <Story 
            img="https://tinyurl.com/2qo6ejun"
            username="Kashyap"
        />
        <Story 
            img=" https://tinyurl.com/2elw563t"
            username="Jessi"
        />
        <Story 
            img="https://tinyurl.com/2ngtsq4g"
            username="John"
        />
        <Story
            img="https://tinyurl.com/2zcdtecc"
            username="David"
        />
        <Story 
            img="https://tinyurl.com/2qo6ejun"
            username="Kashyap"
        />
        <Story 
            img=" https://tinyurl.com/2elw563t"
            username="Jessi"
        />
        <Story 
            img="https://tinyurl.com/2ngtsq4g"
            username="John"
        />
        <Story
            img="https://tinyurl.com/2zcdtecc"
            username="David"
        />
        <Story 
            img="https://tinyurl.com/2qo6ejun"
            username="Kashyap"
        />
        <Story 
            img=" https://tinyurl.com/2elw563t"
            username="Jessi"
        />
        <Story 
            img="https://tinyurl.com/2ngtsq4g"
            username="John"
        />
        <Story
            img="https://tinyurl.com/2zcdtecc"
            username="David"
        />
        <Story 
            img="https://tinyurl.com/2qo6ejun"
            username="Kashyap"
        />
        <Story 
            img=" https://tinyurl.com/2elw563t"
            username="Jessi"
        />
        <Story 
            img="https://tinyurl.com/2ngtsq4g"
            username="John"
        />
        <Story
            img="https://tinyurl.com/2zcdtecc"
            username="David"
        />
        <Story 
            img="https://tinyurl.com/2qo6ejun"
            username="Kashyap"
        />
        <Story 
            img=" https://tinyurl.com/2elw563t"
            username="Jessi"
        />
        <Story 
            img="https://tinyurl.com/2ngtsq4g"
            username="John"
        />
        <Story
            img="https://tinyurl.com/2zcdtecc"
            username="David"
        />
    </div>
  )
}

export default Stories