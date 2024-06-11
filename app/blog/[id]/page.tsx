"use client";
import { WhatsAppLogo } from "@/components/icons";
import { blogPosts } from "@/config/blogPost";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
interface BlogParams {
    id: string;
}

export default function BlogPage({ params }: { params: BlogParams }) {
    const foundBlog = blogPosts.find((blog) => blog.slug === params.id);
    if (!foundBlog) {
        return (
            <section className="flex flex-col justify-center items-center w-full">
                <h2
                    className={
                        " text-9xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                    }
                >
                    ERROR 404
                </h2>
                <h2 className=" pt-8 text-3xl font-bold text-center text-black dark:text-white">
                    Entrada de blog no encontrada.
                </h2>
            </section>
        );
    }
    const { titulo, description, imageBlog, content, conclusion } = foundBlog;

    return (
        <section className="flex flex-col md:flex-row gap-5 p-5 w-full h-full max-w-6xl  rounded-lg shadow-xl">
            <header className="relative flex flex-col md:w-1/3 justify-between items-center md:items-start">
                <div className="text-center md:text-left md:w-96 md:fixed md:px-4">
                    <h1 className="text-4xl font-bold text-secondary">
                        {titulo}
                    </h1>
                    <h2 className="text-lg font-normal mt-4 text-white text-pretty">
                        {description}
                    </h2>
                    <Button
                        className="mt-5 font-semibold"
                        as={Link}
                        href="https://wa.me/+56987060388?text=Hola!%20Me%20gustaria%20hacer%20una%20reserva.%20Tenes%20alguna%20reservacion%20disponible?%20Muchas%20gracias!😊"
                        color="secondary"
                        variant="shadow"
                        endContent={<WhatsAppLogo />}
                    >
                        Reservar
                    </Button>
                </div>
            </header>

            <article className="md:w-2/3 text-lg md:text-left indent-5 text-white">
                <figure className="flex flex-wrap justify-center gap-5 items-start">
                    <Image
                        alt={titulo}
                        className="object-cover rounded-xl my-5"
                        src={imageBlog}
                        width={900}
                        height={300}
                    />
                </figure>
                {content.map((item, index) => (
                    <div key={index} className="my-5">
                        <h3 className="text-2xl text-center font-bold text-primary md:text-left">{item.title}</h3>
                        <p className="text-lg text-center text-pretty md:text-left">{item.text}</p>
                    </div>
                ))}
                <div className="my-5">
                    <h4 className="text-2xl text-center font-bold pb-2 text-secondary md:text-left">Conclusion</h4>
                    <p className="text-lg text-center text-pretty md:text-left">{conclusion}</p>
                </div>
            </article>
        </section>
    );
}