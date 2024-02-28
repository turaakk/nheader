"use client"

import Image from "next/image";
import { ChangeEvent, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import TopBar from "./top-bar";
import Options from "./options";
import { Texts } from "./models";

export default function Home() {

  const [openCtxtMenu, setOpenCtxtMenu] = useState<boolean>(false)

  const [activeInputIndex, setActiveInputIndex] = useState<number>(0)

  const [filters, setFilters] = useState<number>(0)

  const [textsList, setTextsList] =
    useState<Texts[]>([{
      id: 0,
      text: "",
      header: false
    }])

  let textArea: HTMLTextAreaElement | null

  const menuItemSelected = () => {
    const textArea: HTMLTextAreaElement | null =
      document.querySelector(`#textArea${activeInputIndex}`)

    textArea!.value = ""
    textArea!.style.height = 'auto'
    textArea!.style.height = '50px'
    textArea!.placeholder = "Heading 1"

    const newList = [...textsList]
    newList[activeInputIndex] = { ...newList[activeInputIndex], header: true, }
    setTextsList(newList)
  }

  const textAreaIsFocused = ({ index }: { index: number }) => {
    setActiveInputIndex(index)

    const textArea: HTMLTextAreaElement | null = document.querySelector(`#textArea${index}`)

    window.HTMLElement.prototype.scrollIntoView = function() {}
    textArea!.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "center"
    })
  }

  const enterPressed = (event: any) => {

    if (event.key === 'Enter') {

      const updatedList = [
        ...textsList.slice(0, activeInputIndex + 1),
        { id: textsList.length, text: "", header: false },
        ...textsList.slice(activeInputIndex + 1)
      ]

      setTextsList(updatedList)
      setActiveInputIndex(activeInputIndex + 1)

    }
  }

  const onTextChange = (value: any) => {

    textArea = document.querySelector(`#textArea${activeInputIndex}`)

    textArea!.style.height = 'auto'
    textArea!.style.height = textArea!.scrollHeight + 'px'

    textArea!.value = value.target.value.replaceAll("\n", "")

    const newList = [...textsList]
    newList[activeInputIndex] = {
      ...newList[activeInputIndex],
      text: value.target.value
    }
    setTextsList(newList)

    if (value.target.value == "/") {
      setOpenCtxtMenu(true)
    } else if (value.target.value == "/1") {
      setOpenCtxtMenu(true)
      setFilters(1)
      const h1Menu: HTMLDivElement | null = document.querySelector("#h1-menu")
      h1Menu!.focus()
    } else {
      setOpenCtxtMenu(false)
    }

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-3">
      <TopBar />
      <div className="relative h-auto sm:w-9/12 lg:w-7/12 w-11/12 flex flex-col items-start place-items-center pt-20">
        <Options />
        <h1 className="text-[25px] py-5 lg:text-[35px] font-bold">
          Front-end developer test project
        </h1>
        <div className="w-full h-[1px] bg-[#E5E7EB]" />
        <p className="w-full py-5 text-[#4D5562] mb-4">
          Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter.
        </p>
        <div className="relative w-full flex flex-col gap-3">
          {
            Object.values(textsList!).map((value, index, txtlist) => {
              return (
                <div key={value.id} className="group/item flex justify-center items-start gap-4">
                  <Image
                    src="/menu.svg"
                    alt="Menu"
                    width={20}
                    height={20}
                    className="dark:invert w-[20px] h-[20px] group-hover/item:visible invisible cursor-pointer pt-2"
                  />
                  <textarea
                    rows={1}
                    autoFocus
                    draggable={false}
                    onKeyDown={enterPressed}
                    onBlur={e => {
                      if (e.relatedTarget != null) {
                        if (e.relatedTarget!.getAttribute("id") === "dropdown-cont") {
                          e.target.focus();
                        }
                      }
                    }}
                    id={`textArea${index}`}
                    onChange={onTextChange}
                    onFocus={() => textAreaIsFocused({ index: index })}
                    className={`
                      w-full h-min ${value.header ? 'text-[30px] font-bold' : ''}
                      outline-none overflow-hidden resize-none m-0 p-0
                    `}
                    placeholder={
                      `${activeInputIndex == index ?
                        'Type / for blocks, @ to link docs or people' : ''
                      }`
                    }
                  >
                  </textarea>
                  {
                    activeInputIndex == index ?
                      <DropdownMenu
                        open={openCtxtMenu}
                        onOpenChange={(value) => setOpenCtxtMenu(value)}
                      >
                        <DropdownMenuTrigger asChild id="dropdown" className={`absolute left-0 `} >
                          <div />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          side="right"
                          align="start"
                          className="h-80 w-80"
                          id="dropdown-cont"
                          avoidCollisions={false}
                          alignOffset={
                            textsList[index].header ? 50 : 30
                          }
                        >
                          <DropdownMenuLabel className="font-bold text-[18px]">
                            Add blocks
                          </DropdownMenuLabel>
                          <DropdownMenuLabel className="text-[16px] text-[#9DA3AE] font-normal">
                            Keep trying to filter, or escape to exit
                          </DropdownMenuLabel>
                          <DropdownMenuLabel className="text-[16px] text-[#6C727F] font-normal flex gap-2">
                            Filtering keyword
                            <span className="py-[2px] px-[4px] bg-[#3565A9] text-white rounded-md">
                              {filters}
                            </span>
                          </DropdownMenuLabel>
                          <DropdownMenuGroup>
                            <DropdownMenuItem
                              id="h1-menu"
                              onSelect={menuItemSelected}
                              className={`
                                flex gap-3 ${filters == 1 ? 'bg-accent' : ''}
                              `}
                            >
                              <Image
                                src="/text.svg"
                                alt="Text"
                                width={24}
                                height={24}
                              />
                              <div className="flex flex-col gap-2">
                                <h1 className="font-bold text-[18px]">Heading 1</h1>
                                <p className="text-[#9EA4AF]">Shortcut: type # + space</p>
                              </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-3">
                              <Image
                                src="/text.svg"
                                alt="Text"
                                width={24}
                                height={24}
                              />
                              <div className="flex flex-col gap-2">
                                <h1 className="font-bold text-[18px]">Expandable Heading 1</h1>
                                <p className="text-[#9EA4AF]">{"Shortcut: type >># + space"}</p>
                              </div>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu> : <></>}
                </div>
              )
            })
          }
          <div className="h-96" />
        </div>
      </div>
      <div className="fixed bottom-11 lg:bottom-3 right-3 invisible sm:visible">
        <div className="h-[35px] w-[35px] cursor-pointer bg-[#edf1f8] flex justify-center items-center rounded-md ">
          <Image
            src="/help-circle.svg"
            alt="Help Circle"
            className="dark:invert w-auto h-auto"
            width={20}
            height={20}
          />
        </div>
      </div>
    </main>
  );
}
