const xss = require('xss')
const { z } = require('zod')
const url = require('node:url')

const startupSchema = z.object({
    startupName: z.string(),
    startupWebsite: z.string().url(),
    startupEmail: z.string().email()
}).superRefine(
    (data, ctx) => {
        const startupDomain = url.parse(data.startupWebsite).hostname.replace('www.', '')
        const emailDomain = data.startupEmail.split('@')[1]
        if (startupDomain === emailDomain) {
            return true
        }
        ctx.addIssue({
            code: "INVALID_EMAIL",
            path: ["startupEmail"],
            message: "Email domain must match the startup website",
        })

    }
)

const result = startupSchema.safeParse({
    startupName: xss("Startup Name"),
    startupWebsite: xss("https://xorblin.com"),
    startupEmail: xss("hello@xorblin.com"),
})