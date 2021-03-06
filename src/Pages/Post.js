import  React, {useState, } from 'react';
import {Link} from "react-router-dom";


export default function Post() {
 const [postData, ] = useState(null);
    

    return (
        <main className="bg-white min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl text-blue-600 font-impact flex justify-center">Blog Posts Page</h1>
                <h2 classname="text-3xl text-blue-600 font-impact flex justify-center mb-12">Welcome to my page of blog posts</h2>
                <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={postData.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-blue-600 border-l-8 border-white" key={index}
                        >
                            <img 
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt}
                            className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-white text=lg font-blog px-3 py-4 bg-blue-600 text-blue-100 bg-opcacity-75 rounded">{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                   ))}
                </div>
            </section>
        </main>
    )
}