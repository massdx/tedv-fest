import Image from "next/image";
const SectionSponsor = () => {
    return <>
        <div className="h-screen w-11/12 mx-auto ">
            <h5 className="text-7xl">Sponsors</h5>
            <div className="flex flex-wrap gap-10 justify-start items-center py-20 ">
            <Image
            className=""
                        src="/images/tdev.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/images/tdev.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/images/tdev.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/images/tdev.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/images/tdev.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
            </div>
        </div>
    </>
}

export default SectionSponsor ;