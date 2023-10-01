import { CollectionConfig } from 'payload/types';
import { isAuth, isSelf, isAdmin } from '../helpers';

export const Tasks: CollectionConfig = {
    slug: 'tasks',
    access: {
        read: (ctx) => isAuth(ctx),
        create: (ctx) => isAuth(ctx),
        update: (ctx) => isAuth(ctx),
        delete: (ctx) => isAdmin(ctx),
    },
    fields: [
        { name: "title", type: "text", required: true },
        { name: "deadline", type: "date", required: true },
        {
            name: 'repetition_period',
            type: 'select',
            options: [
                { label: 'Ежедневно', value: '1D' },
                { label: 'Еженедельно', value: '1W' },
                { label: 'Ежемесячно', value: '1M' },
            ],
            required: false,
        },
        { name: "done", type: "checkbox", required: false, defaultValue: false },
        { name: "scheduled_day", type: "checkbox", required: false, defaultValue: false },
        { name: "scheduled_hour", type: "checkbox", required: false, defaultValue: false },
        { name: "category", type: "relationship", relationTo: "task_category", required: true },
        { name: "home", type: "relationship", relationTo: "homes", required: true },
        { name: "creator", type: "relationship", relationTo: "users", required: true, defaultValue: ({ user }) => user.id },
        { name: "responsible", type: "relationship", relationTo: "users", required: true },
    ],
};
