import Image from "next/image";

const Options = () => {
  return (
    <div className="h-[45px] w-full px-1 border bottom-2 rounded-lg flex sm:justify-between justify-center items-center">
      <div className="flex justify-center items-center gap-4">
        <div className="p-[4px] px-2 bg-[#D9F9E6] rounded-md cursor-pointer select-none sm:visible invisible">
          <p className="text-[18px] text-[#347659] font-bold">
            P
          </p>
        </div>
        <div className="h-[20px] w-[2px] bg-[#E5E7EB] sm:visible invisible" />
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/clock.svg"
            alt="Clock"
            className="dark:invert w-[20px] h-[20px]"
            width={14}
            height={14}
          />
          <p className="text-[15px]">0min</p>
        </div>
        <div className="h-[20px] w-[2px] bg-[#E5E7EB]" />
        <Image
          src="/bunny.png"
          alt="Bunny"
          className="dark:invert w-auto h-auto"
          width={25}
          height={25}
        />
        <div className="h-[20px] w-[2px] bg-[#E5E7EB]" />
        <div className="flex justify-center items-center gap-2" >
          <Image
            src="/arrow-down-left.svg"
            alt="Down left arrow"
            className="dark:invert w-auto h-auto"
            width={18}
            height={18}
          />
          <p className="text-[15px]">0</p>
        </div>
      </div>
      <div className="flex px-3 justify-center items-center invisible sm:visible">
        <Image
          src="/check-circle.svg"
          alt="Check circle"
          className="dark:invert w-[20px] h-[20px] select-none"
          width={18}
          height={18}
        />
        <div className="w-[20px]" />
        <Image
          src="/cloud.svg"
          alt="Cloud"
          className="dark:invert w-[22px] h-[22px] select-none"
          width={18}
          height={18}
        />
        <div className="w-[20px]" />
        <Image
          src="/more-vertical.svg"
          alt="More"
          className="dark:invert w-[18px] h-[18px] select-none"
          width={3}
          height={3}
        />
      </div>
    </div>
  )
}

export default Options