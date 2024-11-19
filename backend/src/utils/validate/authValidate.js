const xss = require('xss');
const { z } = require('zod');
const newXss = new xss.FilterXSS();

const createAccountSchema = z.object({
    firstName: z.string().min(3).max(50),
    lastName: z.string().min(3).max(50),
    dob: z.string(),
    email: z.string().email(),
    password: z.string().min(6).max(50),
})
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(50),
})

exports.createAccountValidate = (data) => {
    const finalData = {}

    const result = createAccountSchema.safeParse({
        firstName: newXss.process(data.firstName),
        lastName: newXss.process(data.lastName),
        dob: newXss.process(data.dob),
        email: newXss.process(data.email),
        password: newXss.process(data.password),
    })
    if (!result.success) {
        return {
            status: false,
            message: result.error.errors[0].message,
        }
    } else {
        finalData.firstName = result.data.firstName;
        finalData.lastName = result.data.lastName;
        finalData.dob = result.data.dob;
        finalData.email = result.data.email;
        finalData.password = result.data.password;
    }
    return {
        status: true,
        data: finalData,
    }
};

exports.loginValidate = (data) => {
    const finalData = {}

    const result = loginSchema.safeParse({
        email: newXss.process(data.email),
        password: newXss.process(data.password),
    })
    if (!result.success) {
        return {
            status: false,
            message: result.error.errors[0].message,
        }
    } else {
        finalData.email = result.data.email;
        finalData.password = result.data.password;
    }
    return {
        status: true,
        data: finalData,
    }
}