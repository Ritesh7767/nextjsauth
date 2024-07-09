import { getServerSession } from "next-auth"
import { NEXTAUTH } from "../lib/auth"

const user = async () => {
    const session = await getServerSession(NEXTAUTH)
    return (
        <h1>Server component :- {JSON.stringify(session)}</h1>
    )
}

export default user
