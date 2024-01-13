"use client"

import { Button, clsx } from "@iftakhar/ui"
import * as React from "react"

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  src?: string
  event?: Event
}
type eventSchema = {
    name: "copy_npm_command"| "copy_usage_import_code"| "copy_usage_code"| "copy_primitive_code"| "copy_theme_code",
    properties: any
}
function trackEvent(input: eventSchema): void {
    //@ts-ignore
    const event: eventSchema  = input
    if (event) {
        console.log(event)
      //va.track(event.name, event.properties)
    }
  }
export async function copyToClipboardWithMeta(value: string, event?: eventSchema) {
  navigator.clipboard.writeText(value)
  if (event) {
    console.log(event)
    trackEvent(event)
  }
}

export function CopyButton({
  value,
  className,
  src,
  event,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  console.log(`CopyButton`)
  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return ( 
    <Button type="button"
      className={clsx(
        "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(
            //@ts-ignore
          value ? {
                name: event,
                properties: {
                  code: value,
                },
              }
            : undefined
        )
        setHasCopied(true)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        "<CheckIcon />"
      ) : (
        "<CopyIcon  />"
      )}
    </Button>
  )
}

interface CopyWithClassNamesProps {
  value: string
  classNames: string
  className?: string
}

export function CopyWithClassNames({
  value,
  classNames,
  className,
  ...props
}: CopyWithClassNamesProps) {
  console.log(`CopyWithClassNames`)
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyToClipboard = React.useCallback((value: string) => {
    copyToClipboardWithMeta(value)
    setHasCopied(true)
  }, [])

  return (
    <div>
      <div>
        <Button type="button"
          className={clsx(
            "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
            className
          )}
        >
          {hasCopied ? (
            "<CheckIcon />"
          ) : (
            "<CopyIcon />"
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </div>
      <div>
        <div onClick={() => copyToClipboard(value)}>
          Component
        </div>
        <div onClick={() => copyToClipboard(classNames)}>
          Classname
        </div>
      </div>
    </div>
  )
}
interface NpmCommands {
    __npmCommand__?: string
    __yarnCommand__?: string
    __pnpmCommand__?: string
    __bunCommand__?: string
  }
interface CopyNpmCommandButtonProps {
  commands: Required<NpmCommands>
  className: string
}

export function CopyNpmCommandButton({
  commands,
  className,
  ...props
}: CopyNpmCommandButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyCommand = React.useCallback(
    (value: string, pm: "npm" | "pnpm" | "yarn" | "bun") => {
      copyToClipboardWithMeta(value, {
        name: "copy_npm_command",
        properties: {
          command: value,
          pm,
        },
      })
      setHasCopied(true)
    },
    []
  )

  return (
    <div>
      <div>
        <Button type="button"
          className={clsx(
            "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
            className
          )}
        >
          {hasCopied ? (
            "<CheckIcon />"
          ) : (
            "<CopyIcon />"
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </div>
      <div>
        <Button type="button"
          onClick={() => copyCommand(commands.__npmCommand__, "npm")}
        >
          npm
        </Button>
        <Button type="button"
          onClick={() => copyCommand(commands.__yarnCommand__, "yarn")}
        >
          yarn
        </Button>
        <Button type="button"
          onClick={() => copyCommand(commands.__pnpmCommand__, "pnpm")}
        >
          pnpm
        </Button>
        <Button type="button"
          onClick={() => copyCommand(commands.__bunCommand__, "bun")}
        >
          bun
        </Button>
      </div>
    </div>
  )
}