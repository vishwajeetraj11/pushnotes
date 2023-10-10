export const validateCreateTaskForm = (values: Record<string, any>) => {
    const errors: { [key: string]: any } = {};

    // Check if the 'title' field is empty or exceeds 100 characters
    if (!values.title) {
        errors.title = 'Title is required';
    } else if (values.title.length > 100) {
        errors.title = 'Title cannot be more than 100 characters';
    }

    // Check if the 'description' field is empty
    if (!values.description) {
        errors.description = 'Description is required';
    }

    // Check if 'from' and 'to' fields are empty
    if (!values.from) {
        errors.from = 'From date is required';
    }
    if (!values.to) {
        errors.to = 'To date is required';
    }

    // Check if 'assignee' field is empty
    if (!values.assignee || values.assignee.length === 0) {
        errors.assignee = 'At least one assignee is required';
    }

    return errors;
};
