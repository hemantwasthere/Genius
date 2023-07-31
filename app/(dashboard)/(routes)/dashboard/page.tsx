import { UserButton } from "@clerk/nextjs"
import { NextPage } from "next"

const DashboardPage: NextPage = () => {
    return (
        <div>
            DashboardPage: (Protechted)
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default DashboardPage