import {findUser} from "../../data/model"

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const username = searchParams.get('username')
    const password = searchParams.get('password')
    const user = await findUser(username)
    return Response.json({ message: "JFJFJ" });
}
