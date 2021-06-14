import  React from 'react';
import image from '../Assets/images/brimage.jpg'

export default function Home() {
    return (
        <main>
            <img src={image} alt="Galaxy Backround" className='absolute object-cover w-full h-full'/>
            <section className='relative flex justify center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1>Hello I am Kyle Euman</h1>
        </section>
        </main>
    )
    
    
}