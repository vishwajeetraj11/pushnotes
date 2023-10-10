"use client";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Textarea } from "@/components/textarea";
import React from "react";
import { Form, Field } from "react-final-form";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn, defaultMutators } from "@/lib/utils";
import { Button } from "@/components/button";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { StatusPopover } from "@/components/pages/create/status";
import AssigneeSelect from "@/components/pages/create/assignee";
import { statusLabels } from "@/constants/tasks";
import { validateCreateTaskForm } from "@/lib/form";

const CreateTask = () => {
  const onSubmit = (values: Record<string, any>) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className="p-4 lg:p-10">
      <Form
        initialValues={{
          title: "Test",
          description: "Test",
          from: null,
          to: null,
          assignee: [],
          status: "todo",
        }}
        validate={validateCreateTaskForm}
        mutators={defaultMutators}
        onSubmit={onSubmit}
        render={({ handleSubmit, form, values }) => (
          <form className="w-[50%]" onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label className="mb-2 block" htmlFor="input-title">
                Title
              </Label>
              <Field
                name="title"
                render={({ input }) => (
                  <Input
                    {...input}
                    placeholder="Enter a title"
                    id="input-title"
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Label className="mb-2 block" htmlFor="input-description">
                Description
              </Label>
              <Field
                name="description"
                render={({ input }) => (
                  <Textarea
                    {...input}
                    placeholder="Enter a description"
                    id="input-description"
                  />
                )}
              />
            </div>
            <div className="mb-4 flex flex-col">
              <Label className="mb-2 block">Timeline</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !values.to || (!values.from && "text-muted-foreground")
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {values?.from ? (
                      values.to ? (
                        <>
                          {format(values.from, "LLL dd, y")} -{" "}
                          {format(values.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(values.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={values?.from}
                    selected={{ from: values.from, to: values.to }}
                    onSelect={(range) => {
                      form.mutators.setValue("from", range?.from);
                      form.mutators.setValue("to", range?.to);
                    }}
                    disabled={(date) => date < new Date()}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="mb-4">
              <Field name="status" render={() => <StatusPopover />}></Field>
            </div>
            <div className="mb-4">
              <Field name="assignee" render={() => <AssigneeSelect />}></Field>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        )}
      />
    </div>
  );
};

export default CreateTask;
