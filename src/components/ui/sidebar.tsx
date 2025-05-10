import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { SidebarContext } from "./sidebar-context"
import { Button } from "./button"
import { Collapsible, CollapsibleContent } from "./collapsible"
import { ChevronRight, Menu } from "lucide-react"
import { Separator } from "./separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Create a context for the sidebar
const sidebarContextDefaultValues = {
  expanded: true,
  setExpanded: () => {},
  isHovered: false,
  collapsible: false,
  collapsedWidth: 0,
  collapsed: false,
  setCollapsed: () => {},
  triggerRef: { current: null } as React.RefObject<HTMLButtonElement>,
}

export type SidebarProviderProps = {
  children: React.ReactNode
  defaultExpanded?: boolean
  collapsible?: boolean
  collapsedWidth?: number
}

const SidebarProvider = ({
  children,
  defaultExpanded = true,
  collapsible = false,
  collapsedWidth = 56,
}: SidebarProviderProps) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded)
  const [collapsed, setCollapsed] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  const value = React.useMemo(
    () => ({
      expanded,
      setExpanded,
      isHovered,
      setIsHovered,
      collapsible,
      collapsedWidth,
      collapsed,
      setCollapsed,
      triggerRef,
    }),
    [
      expanded,
      setExpanded,
      isHovered,
      setIsHovered,
      collapsible,
      collapsedWidth,
      collapsed,
      setCollapsed,
      triggerRef,
    ]
  )

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}

const Sidebar = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    expanded?: boolean
    collapsible?: boolean
  }
>(({ className, collapsible, expanded, children, ...props }, ref) => {
  return (
    <aside
      ref={ref}
      className={cn(
        "flex h-full max-h-screen flex-col gap-4 overflow-hidden border-e",
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
})
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { collapsible, expanded, setExpanded, collapsed, setCollapsed } =
    useSidebar()

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between px-3 py-2",
        className
      )}
      {...props}
    >
      {collapsible && (
        <SidebarTrigger
          className="mr-2"
          aria-label="Toggle sidebar"
          onClick={() => {
            if (expanded) {
              setCollapsed(true)
            } else {
              setCollapsed(false)
            }
            setExpanded(!expanded)
          }}
        />
      )}
      <div className="flex-1" />
    </div>
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarHeaderTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { collapsed } = React.useContext(SidebarContext)

  return (
    <div
      ref={ref}
      className={cn(
        "flex-1 text-sm font-semibold tracking-tight",
        collapsed && "hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarHeaderTitle.displayName = "SidebarHeaderTitle"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 overflow-auto py-2", className)}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  React.ElementRef<typeof Collapsible>,
  React.ComponentPropsWithoutRef<typeof Collapsible>
>(({ className, ...props }, ref) => {
  return (
    <Collapsible
      ref={ref}
      className={cn("px-1", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof sidebarGroupLabelVariants>
>(({ className, inset, ...props }, ref) => {
  const { expanded } = React.useContext(SidebarContext)

  return (
    <div
      ref={ref}
      className={cn(
        sidebarGroupLabelVariants({ inset }),
        !expanded && "hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const sidebarGroupLabelVariants = cva(
  "flex items-center justify-between px-3 py-2 text-sm font-medium",
  {
    variants: {
      inset: {
        true: "pl-8",
      },
    },
    defaultVariants: {
      inset: false,
    },
  }
)

const SidebarGroupContent = React.forwardRef<
  React.ElementRef<typeof CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsibleContent>
>(({ className, ...props }, ref) => {
  return (
    <CollapsibleContent
      ref={ref}
      className={cn("overflow-hidden text-sm transition-all", className)}
      {...props}
    />
  )
})
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group/sidebar-menu my-0.5 flex min-h-6 flex-col gap-0.5 self-stretch",
        className
      )}
      {...props}
    />
  )
})
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("px-1", className)}
      {...props}
    />
  )
})
SidebarMenuItem.displayName = "SidebarMenuItem"

// Fixed SidebarMenuButton to avoid nested TooltipProvider
const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & {
    tooltipLabel?: string
    tooltipSide?: "top" | "right" | "bottom" | "left"
    asChild?: boolean
  }
>(({ tooltipLabel, tooltipSide = "right", asChild, className, ...props }, ref) => {
  const { collapsed } = React.useContext(SidebarContext)
  const Comp = asChild ? Slot : Button
  
  const button = (
    <Comp
      ref={ref}
      variant="ghost"
      className={cn(
        "h-9 w-full justify-start px-2",
        className
      )}
      {...props}
    />
  )
  
  if (tooltipLabel && collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side={tooltipSide} sideOffset={10}>
          {tooltipLabel}
        </TooltipContent>
      </Tooltip>
    )
  }
  
  return button
})
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, children, ...props }, ref) => {
  const { triggerRef } = useSidebar()

  return (
    <Button
      ref={ref}
      variant="ghost"
      className={cn(
        "h-8 w-8 p-0 data-[state=open]:bg-secondary",
        className
      )}
      {...props}
    >
      {children || <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const useSidebar = () => {
  const context = React.useContext(SidebarContext)
  
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  
  return context
}

export {
  Sidebar,
  SidebarHeader,
  SidebarHeaderTitle,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
  SidebarContext,
  type SidebarProviderProps,
}
