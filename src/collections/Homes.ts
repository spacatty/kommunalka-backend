import { CollectionConfig } from 'payload/types';
import { isAuth, isSelf, isAdmin } from '../helpers';

export const Homes: CollectionConfig = {
  slug: 'homes',
  access: {
    read: (ctx) => isAuth(ctx),
    create: (ctx) => isAuth(ctx),
    update: (ctx) => isAuth(ctx),
    delete: (ctx) => isSelf(ctx) || isAdmin(ctx),
  },
  fields: [
    {
      name: 'home_hash',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'address',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'password',
      type: 'text',
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
      defaultValue: () => "65141b7a081402326776ad3b"
    },
    { name: "owner", type: "relationship", relationTo: "users", required: true, defaultValue: ({ user }) => user.id },
    { name: "neighbors", type: "relationship", relationTo: "users", required: false, hasMany: true },
  ],
};
