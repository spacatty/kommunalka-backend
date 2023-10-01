import { CollectionConfig } from 'payload/types';
import { isAuth, isSelf, isAdmin } from '../helpers';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    read: (ctx) => isSelf(ctx) || isAdmin(ctx),
    create: (_) => true,
    update: (ctx) => isSelf(ctx) || isAdmin(ctx),
    delete: (ctx) => isSelf(ctx) || isAdmin(ctx),
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      required: true,
      defaultValue: 'user',
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
};
