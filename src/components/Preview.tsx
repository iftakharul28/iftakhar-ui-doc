import * as React from "react"
import { CopyButton, CopyWithClassNames } from "./copy-button"
import { Tab,Label, Input, clsx } from '@iftakhar/ui';
import { Index } from "../registry";
interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  extractClassname?: boolean
  extractedClassNames?: string
  align?: "center" | "start" | "end"
  src?: string
  name: string
  children?: React.ReactElement
}

export default function Preview({
  className,extractClassname,extractedClassNames,children,name,
  align = "center",
  ...props
}: ComponentExampleProps) {




  const Preview = React.useMemo(() => {
    const Component = Index[name]?.component
    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name])
  const codeString = React.useMemo(() => {
    console.log(Preview)
    if (
      typeof Preview?.props["data-rehype-pretty-code-fragment"] !== "undefined"
    ) {
      const [, Button] = React.Children.toArray(
        Preview.props.children
      ) as React.ReactElement[]
      console.log(Button)
      return Button?.props?.value || Button?.props?.__rawString__ || null
    }
  }, [Preview])
  return (
    <div
    className={clsx("group relative my-4 flex flex-col space-y-2", className)}
    {...props}
  >
      
      {extractedClassNames ? (
            <CopyWithClassNames
              value={codeString}
              classNames={extractedClassNames}
              className="absolute right-4 top-20"
            />
          ) : (
            codeString && (
              <CopyButton
                value={codeString}
                className="absolute right-4 top-20"
              />
            )
          )}
          <Tab defaultValue="preview" className="relative mr-auto w-full">
            <div className="flex items-center justify-between pb-3">
              <Tab.List className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <Tab.Trigger
                  value="preview"
                  className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Preview
                </Tab.Trigger>
                <Tab.Trigger
                  value="code"
                  className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Code
                </Tab.Trigger>
              </Tab.List>
            </div>
            <Tab.Content value="preview" className="rounded-md border">
              <div
                className={clsx("flex min-h-[350px] justify-center p-10", {
                  "items-center": align === "center",
                  "items-start": align === "start",
                  "items-end": align === "end",
                })}
              >
                {Preview}
              </div>
            </Tab.Content>
            <Tab.Content value="code">
              <div className="flex flex-col space-y-4">
                <div className="w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                  {children}
                </div>
              </div>
            </Tab.Content>
          </Tab>
    </div>
  )
}