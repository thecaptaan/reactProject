import { z } from "zod";
import MailProvider from "@/data/mailProvider";


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const loginSchema = z.object({
    email: z
        .string({
            message: "Email must be a string",
        })
        .email({
            message: "Email must be a valid email address",
        }),
    password: z
        .string({ message: "Password must be a string" })
        .min(8, { message: "Password must be at least 8 character(s) long" })
        .max(20, { message: "Password must be at most 20 character(s) long" })
        .regex(passwordRegex, {
            message: "Password must contain A-Z, a-z, 0-9, and @$!%*?&",
        }),
});



function matchEmailDomain(email) {
    for (const domain of MailProvider) {
        const regex = new RegExp(`${domain.replace(".", "\\.")}$`, "i");
        if (regex.test(email)) {
            return false;
        }
    }
    return true;
}

export { loginSchema, matchEmailDomain };