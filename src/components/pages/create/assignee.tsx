import React from "react";

type Props = {};

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
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDown, X, XCircle } from "lucide-react";

const AssigneeSelect = (props: Props) => {
  const field = useField<string[] | []>("assignee");
  const assignee = field.input.value;

  const assignees = [
    { name: "Al", value: "1" },
    { name: "Bob", value: "2" },
    { name: "Carl", value: "3" },
  ];

  return (
    <div>
      <div className="border border-dashed border-slate-400 rounded-md px-4 py-3 mb-4">
        {assignee.length > 0 ? (
          <div className="flex gap-3">
            {assignee.map((_assignee) => (
              <span
                className="bg-slate-400 flex items-center text-sm text-white px-1.5 py-1 rounded-sm"
                key={_assignee}
              >
                {assignees.find((a) => a.value === _assignee)?.name}
                <X
                  onClick={() => {
                    field.input.onChange(
                      assignee.filter((a) => a !== _assignee)
                    );
                  }}
                  className="w-4 ml-2 cursor-pointer"
                />
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm">No Assignee Selected</p>
        )}
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-[200px] justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            Select Assignees
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandEmpty>No Assignee found.</CommandEmpty>
            <CommandGroup>
              {assignees.map((_assignee) => (
                <CommandItem
                  value={_assignee.name}
                  key={_assignee.value}
                  onSelect={() => {
                    const updatedAssignees = assignee.filter(
                      (a) => a !== _assignee.value
                    );
                    field.input.onChange(
                      [...updatedAssignees].concat(_assignee.value)
                    );
                  }}
                >
                  {_assignee.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      _assignee.value === field.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AssigneeSelect;
