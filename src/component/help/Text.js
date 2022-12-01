import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Text({resultPhone}){


    const [text] = useTypewriter({
        words: ['Calling Mobile . . . . . .'].concat(resultPhone),
        loop: 2,
    })

    return (
        <div className='App'>
            <span>{text}</span>
            <Cursor cursorColor='red' />
        </div>
    )
}