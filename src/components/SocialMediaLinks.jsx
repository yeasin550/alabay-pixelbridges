import Image from 'next/image'
import socialPhoto from "@/assets/socialPhoto.png"

const SocialMediaLinks = () => {
    return (
        <div className="md:flex justify-between items-center w-11/12 mx-auto">
            <div>
                <h1 className="text-8xl text-[#FFA800] font-bold ">Social Media <br/> Links </h1>
            </div>
                <div className="md:w-1/2">
                    <Image
                    src={socialPhoto}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            
        </div>
    );
};

export default SocialMediaLinks;