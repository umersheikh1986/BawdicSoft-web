import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../nodemailer/route";
type Data = {
    name: string,
    email: string,
    phoneNo: string,
    message: string,
    file: string,
}

const data: Data[] = []

// the following function is running on next 13

// GET
export const GET = (req: NextRequest, res: NextRequest) => {
    return NextResponse.json({ users: data });
}
// POST
export const POST = async (req: NextRequest, res: NextRequest) => {
    const {name, email, phoneNo, message, file} = await req.json();
    console.log(name, email, phoneNo, message,file)
    data.push({ name, email, phoneNo, message, file })
    try{
        await transporter.sendMail({
        from:email,
        to:"ashrafalikakozai9876@gmail.com",
        subject:name,
        text: "this is some text",
        html:`<h1>Hello ashraf</h1><p>my name is ${name} from karachi so i will meet with you tomorrow</p><p>~${message}</p><p>~${phoneNo}</p>`
        })
        return NextResponse.json({ users: data });
    
    }catch(err){
         return NextResponse.json(err)
    }
}
