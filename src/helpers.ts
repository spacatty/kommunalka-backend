export const isSelf = ctx => {
    const { req: { user }, id } = ctx
    if (!user || !user.collection) { return false }
    if (user.id === id) { return true }
}

export const isAdmin = ctx => {
    const { req: { user }, id } = ctx
    // potential escalation
    if (!user || !user.collection) { return false }
    if (user.role === 'admin') { return true }
}

export const isUser = ctx => {
    const { req: { user }, id } = ctx
    if (!user || !user.collection) { return false }
    if (user.role === 'user') { return true }
}

export const isAuth = context => isUser(context) || isAdmin(context)