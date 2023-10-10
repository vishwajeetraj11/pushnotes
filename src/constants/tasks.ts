type Status = {
    value: string;
    label: string;
};

export const statuses = [
    {
        value: "backlog",
        label: "Backlog",
    },
    {
        value: "todo",
        label: "Todo",
    },
    {
        value: "in progress",
        label: "In Progress",
    },
    {
        value: "done",
        label: "Done",
    },
    {
        value: "canceled",
        label: "Canceled",
    },
] as const;

export type labelType = typeof statuses[number]["label"];
export type valueType = typeof statuses[number]["value"];

type StatusLabels = {
    [key in valueType]: string;
};

export const statusLabels: StatusLabels = statuses.reduce((acc: StatusLabels, status) => {
    acc[status.value] = status.label;
    return acc;
}, {} as StatusLabels);

