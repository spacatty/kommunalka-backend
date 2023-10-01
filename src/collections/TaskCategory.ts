import { CollectionConfig } from 'payload/types';
import { isAuth, isSelf, isAdmin } from '../helpers';

export const TaskCategory: CollectionConfig = {
    slug: 'task_category',
    access: {
        read: (ctx) => isAuth(ctx),
        create: (ctx) => isAuth(ctx),
        update: (ctx) => isSelf(ctx) || isAdmin(ctx),
        delete: (ctx) => isSelf(ctx) || isAdmin(ctx),
    },
    fields: [
        { name: "title", type: "text", required: true },
        { name: "color", type: "text", required: true },
        { name: "home", type: "relationship", relationTo: "homes", required: true },
        { name: "creator", type: "relationship", relationTo: "users", required: true, defaultValue: ({ user }) => user.id },
        { name: "responsible", type: "relationship", relationTo: "users", required: false },
    ],
};
