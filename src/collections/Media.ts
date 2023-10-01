import { CollectionConfig } from 'payload/types';
import { isAuth, isAdmin, isSelf } from '../helpers';

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: (ctx) => isAuth(ctx),
        create: (ctx) => isAuth(ctx),
        update: (ctx) => isSelf(ctx) || isAdmin(ctx),
        delete: (ctx) => isAdmin(ctx),
    },
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                height: undefined,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
        {
            name: 'src',
            type: 'text',
        },
    ],
};