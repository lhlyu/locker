import { defineMongooseModel } from '#nuxt/mongoose'

export const UserSchema = defineMongooseModel({
    name: 'User',
    schema: {
        // 账号
        account: {
            type: 'string',
            required: true,
            unique: true,
        },
        // 密码
        password: {
            type: 'string',
            required: true,
        },
        // 状态: 1 - 申请; 2 - 可用; 3 - 拉黑
        state: {
            type: 'number',
            default: 1,
        },
        // 别名
        alias: {
            type: 'string',
            default: '',
        },
        // 角色: 1 - 黑户; 2 - 公民; 3 - 管理
        role: {
            type: 'number',
            default: 1,
        },
        // 创建时间
        created: {
            type: 'number',
            required: true,
        },
        // 更新时间
        updated: {
            type: 'number',
            required: true,
        }
    },
})