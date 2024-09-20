"use client";
import {Button} from "@/components/ui/button";
import {CheckIcon, CopyIcon} from "lucide-react";
import {useState} from "react";
import {setConfig} from "next/config";



export function PipButton() {

  const [copied, setCopied] = useState<boolean>(false)

  return (
    <Button className={"cursor-default font-mono flex gap-3"} onClick={() => { navigator.clipboard.writeText("pip install casebased"); setCopied(true);}}>
      <div>
        $ pip install casebased
      </div>
      {!copied && <CopyIcon className={"w-4 cursor-pointer"} onClick={() => { navigator.clipboard.writeText("pip install casebased"); setCopied(true);}} />}
      {copied && <CheckIcon className={"w-4 cursor-default"} />}
    </Button>
  )
}
