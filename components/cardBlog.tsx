import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

interface propsInterface {
    srcImg: string,
    title: string,
    slug: string
}

export default function CardBlog(props: propsInterface) {
    const { srcImg, title, slug } = props
    return (
        <article className="flex flex-col bg-zinc-800 rounded-2xl shadow-lg w-56 h-96 py-4 px-2">
            <header className="basis-1/2 flex flex-col justify-center items-center py-2">
                <div className="rounded-xl overflow-hidden w-[180px] h-[180px]">
                    <Image src={srcImg} alt="Logo Sabor y encanto" width={180} height={180} />
                </div>
            </header>
            <main className="basis-1/4 w-full h-auto">
                <h3 className="text-pretty text-md font-semibold text-primary">{title}</h3>
            </main>
            <footer className="basis-1/4 pt-2">
                <Button
                    className="font-semibold"
                    as={Link}
                    href={`/blog/${slug}`}
                    variant="shadow"
                    color="secondary"
                >
                    Ver blog
                </Button>
            </footer>
        </article>
    )
}