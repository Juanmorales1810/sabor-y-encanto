import Image from "next/image";

interface propsInterface {
    srcImg: string,
    Name: string,
    Quote: string
}

export default function CardComent(props: propsInterface) {
    const { srcImg, Name, Quote } = props
    return (
        <article className="flex flex-col bg-zinc-800 rounded-2xl shadow-lg w-56 h-72 z-30">
            <header className="basis-1/4 relative flex flex-col justify-center items-center py-2">
                <div className="relative rounded-full border-3 border-zinc-800 overflow-hidden w-[75px] h-[75px] -top-12">
                    <Image src={srcImg} alt="Logo Sabor y encanto" width={75} height={75} />
                </div>
                <h3 className="absolute text-pretty text-xl font-bold text-primary ">{Name}</h3>
            </header>
            <main className="basis-1/2">
                <p className="text-pretty text-md text-center px-2 text-zinc-300 font-medium">&quot;{Quote}&quot;</p>
                <p className="text-2xl font-bold bg-gradient-to-bl from-yellow-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">★★★★★</p>
            </main>
            <footer className="basis-1/4">
                <p className="text-pretty text-lg text-center font-bold text-secondary uppercase">Sabor y Encanto</p>
            </footer>
        </article>
    )
}