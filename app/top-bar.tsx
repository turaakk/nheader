import Image from "next/image";

const TopBar = () => {
  return (
    <div className="fixed h-[50px] z-10 top-0 py-3 bg-white max-w-5xl w-full min-w-full items-center justify-between lg:flex select-none">
      <div className="fixed text-[#9DA3AE] flex w-full gap-2 justify-start items-center lg:static invisible sm:visible">
        <div className="flex justify-center items-center cursor-pointer hover:rounded-md hover:bg-slate-200 p-2 ml-2 mr-5">
          <Image
            src="/chevrons-right.svg"
            alt="Chevron"
            className="dark:invert w-[14px] h-[14px]"
            width={14}
            height={14}
          />
        </div>
        <Image
          src="/library.svg"
          alt="Library"
          className="dark:invert w-[18px] h-[18px]"
          width={14}
          height={14}
        />
        <div className="cursor-pointer hover:rounded-md hover:bg-slate-200 p-2 py-[2px]">
          <span className="border-b-[2px]">
            Main
          </span>
        </div>
        /
        <span className="cursor-pointer hover:rounded-md hover:bg-slate-200 p-2 py-[2px] text-ellipsis line-clamp-1 lg:w-auto w-[70px]">
          Getting Started
        </span>
        /
        <span className="cursor-pointer hover:rounded-md hover:bg-slate-200 p-2 py-[2px] text-ellipsis line-clamp-1 lg:w-auto w-[70px]">
          Front-end developer test project
        </span>
      </div>
      <div className="fixed bg-white bottom-0 left-0 px-3 flex gap-5 h-10 w-full items-center justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div className="flex justify-center items-center gap-3 cursor-pointer hover:rounded-md hover:bg-slate-200 px-2 py-[2px]" >
          <Image
            src="/unlock.svg"
            alt="Unlock"
            className="dark:invert w-[18px] h-[18px]"
            width={14}
            height={14}
          />
          <p className="text-[15px]">Editing</p>
        </div>
        <div className="h-[22px] w-[1.7px] bg-[#E5E7EB]" />
        <div className="flex justify-center items-center gap-3 cursor-pointer hover:rounded-md hover:bg-slate-200 p-2 py-[2px] w-[150px]" >
          <p className="font-bold text-[15px] text-[#3565A9] text-ellipsis line-clamp-1 w-[150px]">Publish Space</p>
          <Image
            src="/drop-down.svg"
            alt="Drop Down"
            className="dark:invert w-[14px] h-[14px]"
            width={14}
            height={14}
          />
        </div>
      </div>
    </div>
  )
}

export default TopBar