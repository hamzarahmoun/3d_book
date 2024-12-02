import { useRef } from 'react'
import { pages } from './UI'
const Page = ({ number, font, back, ...props }) => {
    const group = useRef();
    return (
        <group {...props} ref={group}>
            <mesh scale={0.1}>
                <boxGeometry />
                <meshBasicMaterial color="red" />

            </mesh>
        </group>
    )
}
export const Book = ({ ...props }) => {
    return (
        <group>
            {[...pages].map((pageData, index) => (
                
               index === 0 ? (
                <Page 
                position-x={index * 0.15}
                key={index} 
                number={index} 
                {...pageData} />
               ):null
            ))

            }
        </group>
    )
}