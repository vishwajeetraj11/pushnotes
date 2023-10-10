"use client";

import * as React from "react";

import { Button } from "@/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/label";
import { useField } from "react-final-form";
import { statusLabels, statuses, valueType } from "@/constants/tasks";

export function StatusPopover() {
  const [open, setOpen] = React.useState(false);
  //   const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
  //     null
  //   );
  const field = useField<valueType>("status");

  return (
    <div className="flex flex-col">
      <Label className="mb-4">Status</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {field.input.value ? (
              <>{statusLabels[field.input.value]}</>
            ) : (
              <>+ Set status</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    onSelect={(value) => {
                      //   setSelectedStatus(
                      //     statuses.find((priority) => priority.value === value) ||
                      //       null
                      //   );
                      field.input.onChange(value);
                      setOpen(false);
                    }}
                  >
                    {status.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
