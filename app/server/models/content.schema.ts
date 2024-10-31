import { defineMongooseModel } from '#nuxt/mongoose'

export const ContentSchema = defineMongooseModel({
    name: 'Content',
    schema: {
        // 账号
        account: {
            type: 'string',
            required: true,
        },
        // 短链码
        uri: {
            type: 'string',
            required: true,
            unique: true,
        },
        // 取件码
        code: {
            type: 'string',
            default: '',
        },
        // 数据
        data: {
            type: 'string',
            required: true,
        },
        // 数据类型: 1 - 链接; 2 - 文本
        kind: {
            type: 'number',
            default: 1,
        },
        // 描述
        desc: {
            type: 'string',
            default: '',
        },
        // 状态: 1 - 正常; 2 - 锁定
        state: {
            type: 'number',
            default: 1,
        },
        // 访问次数
        count: {
            type: 'number',
            default: 999999999,
        },
        // 到期时间
        expiration: {
            type: 'number',
            required: true,
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