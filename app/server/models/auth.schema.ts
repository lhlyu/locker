import { defineMongooseModel } from '#nuxt/mongoose'

export const AuthSchema = defineMongooseModel({
    name: 'Auth',
    schema: {
        // 账号
        account: {
            type: 'string',
            required: true,
        },
        // 登录的token
        token: {
            type: 'string',
            required: true,
        },
        // 设备信息
        device: {
            type: 'string',
            required: true,
        },
        // 浏览器指纹
        fingerprint: {
            type: 'string',
            default: '',
        },
        // 创建时间
        created: {
            type: 'number',
            required: true,
        },
    },
})