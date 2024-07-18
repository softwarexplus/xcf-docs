import { useRouter } from "next/router"
import { useEffect } from "react"

export default () => {
    const router = useRouter()
    useEffect(() => router.push("https://discord.com/oauth2/authorize?client_id=1211535069492154398") as any, [router])
    return null
}
