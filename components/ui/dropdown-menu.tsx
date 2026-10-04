import * as React from "react";
import { Menu } from "@base-ui/react/menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const DropdownMenu = Menu.Root;

const DropdownMenuTrigger = Menu.Trigger;

const DropdownMenuGroup = Menu.Group;

const DropdownMenuPortal = Menu.Portal;

const DropdownMenuSub = Menu.SubmenuRoot;

const DropdownMenuRadioGroup = Menu.RadioGroup;

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ref,
  ...props
}: React.ComponentProps<typeof Menu.SubmenuTrigger> & {
  inset?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Menu.SubmenuTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-popup-open:bg-accent",
        inset && "pl-8",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </Menu.SubmenuTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  sideOffset = 0,
  ref,
  ...props
}: React.ComponentProps<typeof Menu.Popup> & {
  sideOffset?: number;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Menu.Portal>
      <Menu.Positioner sideOffset={sideOffset} className="z-[130]">
        <Menu.Popup
          ref={ref}
          className={cn(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
          )}
          {...props}
        />
      </Menu.Positioner>
    </Menu.Portal>
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  align = "center",
  ref,
  ...props
}: React.ComponentProps<typeof Menu.Popup> & {
  sideOffset?: number;
  align?: "start" | "center" | "end";
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Menu.Portal>
      <Menu.Positioner
        sideOffset={sideOffset}
        align={align}
        className="z-[130]"
      >
        <Menu.Popup
          ref={ref}
          className={cn(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
          )}
          {...props}
        />
      </Menu.Positioner>
    </Menu.Portal>
  );
}

function DropdownMenuItem({
  className,
  inset,
  ref,
  ...props
}: React.ComponentProps<typeof Menu.Item> & {
  inset?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Menu.Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
        inset && "pl-8",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ref,
  ...props
}: React.ComponentProps<typeof Menu.CheckboxItem> & {
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Menu.CheckboxItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Menu.CheckboxItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </Menu.CheckboxItemIndicator>
      </span>
      {children}
    </Menu.CheckboxItem>
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ref,
  ...props
}: React.ComponentProps<typeof Menu.RadioItem> & {
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Menu.RadioItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Menu.RadioItemIndicator>
          <DotFilledIcon className="h-4 w-4 fill-current" />
        </Menu.RadioItemIndicator>
      </span>
      {children}
    </Menu.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ref,
  ...props
}: React.ComponentProps<typeof Menu.GroupLabel> & {
  inset?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Menu.GroupLabel
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof Menu.Separator> & {
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Menu.Separator
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
