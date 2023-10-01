import { CollectionConfig } from 'payload/types';
import { isAuth, isSelf, isAdmin } from '../helpers';

export const UserHomes: CollectionConfig = {
  slug: 'user_homes',
  access: {
    read: (ctx) => isAuth(ctx),
    create: (ctx) => isAuth(ctx),
    update: (ctx) => isSelf(ctx) || isAdmin(ctx),
    delete: (ctx) => isAdmin(ctx),
},
  fields: [
    { name: "user", type: "relationship", relationTo: "users", required: false },
    { name: "home", type: "relationship", relationTo: "homes", required: false },
  ],
};
