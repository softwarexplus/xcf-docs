import React from "react"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"
import { useRouter } from "next/router"

const BASE_URL = "https://github.com/softwarexplus/AltCtrl-Docs"
const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
}

const getTitleAndPath = () => {
    const { frontMatter, title } = useConfig()
    const { asPath } = useRouter()

    let ogTitle = `${title} – Alt Ctrl`

    if (asPath === "/") {
        ogTitle = title
    }

    return { ogTitle, asPath }
}

const useNextSeoProps = (asPath) => {
    if (asPath !== "/") {
        return {
            titleTemplate: "%s – Alt Ctrl"
        }
    }
}

const gitTimestamp = ({ timestamp }) => {
    const { locale, asPath } = useRouter()

    if (asPath !== "/") {
        return (
            <>
                Last updated on:{" "}
                <time dateTime={timestamp.toISOString()}>{timestamp.toLocaleDateString(locale, dateOptions)}</time>
            </>
        )
    }
}

const config: DocsThemeConfig = {
    logo: <span>Alt Ctrl Docs</span>,
    project: {
        link: `${BASE_URL}`
    },
    chat: {
        link: "https://discord.gg/7WtsbUsypB"
    },
    docsRepositoryBase: `${BASE_URL}/tree/main`,
    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{" "}
                <a href={`${BASE_URL}`} target="_blank" rel="noopener noreferrer">
                    Alt Ctrl
                </a>
                .
            </span>
        )
    },
    useNextSeoProps,
    head: () => {
        const { ogTitle, asPath } = getTitleAndPath()
        const { frontMatter, title } = useConfig()
        const ogDescription = frontMatter.description || ""

        return (
            <>
                <meta content={ogTitle} property="og:title" />
                <meta content={ogDescription} property="og:description" />
                <meta content={asPath} property="og:url" />
                <meta content="/favicon.png" property="og:image" />
                <meta content="#5865f2" data-react-helmet="true" name="theme-color" />
            </>
        )
    },
    gitTimestamp
}

export default config
