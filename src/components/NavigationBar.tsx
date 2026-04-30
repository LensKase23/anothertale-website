import { useLocale } from "@/contexts/LocaleContext";
import { Locale } from "@/locales";
import {
    ExpandLessRounded,
    ExpandMoreRounded,
    LanguageRounded,
    MenuRounded
} from "@mui/icons-material";
import {
    Button,
    Collapse,
    Container,
    Divider,
    Drawer,
    IconButton,
    Popover,
    Typography
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const ExternalLinks = [
    {
        name: "Discord",
        path: "https://stegripe.org/discord"
    },
    {
        name: "GitHub",
        path: "https://github.com/stegripe/rawon"
    },
    {
        name: "Stegripe",
        path: "https://stegripe.org"
    }
];

export const NavigationBar = () => {
    const router = useRouter();
    const { t, locale, setLocale, localeNames } = useLocale();
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isLinksOpen, setLinksOpen] = useState(false);
    const [isDocsOpen, setDocsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [docsAnchorEl, setDocsAnchorEl] = useState<HTMLButtonElement | null>(
        null
    );
    const [langAnchorEl, setLangAnchorEl] = useState<HTMLButtonElement | null>(
        null
    );

    const NavigationItems = [
        {
            name: t.nav.home,
            path: "/"
        },
        {
            name: t.nav.permissionCalculator,
            path: "/permission-calculator"
        }
    ];

    const DocsItems = [
        {
            name: t.nav.gettingStarted,
            path: "/docs/getting-started"
        },
        {
            name: t.nav.configuration,
            path: "/docs/configuration"
        },
        {
            name: t.nav.cookiesSetup,
            path: "/docs/cookies-setup"
        },
        {
            name: t.nav.disclaimers,
            path: "/docs/disclaimers"
        }
    ];

    const open = Boolean(anchorEl);
    const docsOpen = Boolean(docsAnchorEl);
    const langOpen = Boolean(langAnchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDocsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setDocsAnchorEl(event.currentTarget);
    };

    const handleDocsClose = () => {
        setDocsAnchorEl(null);
    };

    const handleLangClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLangAnchorEl(event.currentTarget);
    };

    const handleLangClose = () => {
        setLangAnchorEl(null);
    };

    const ToggleDrawer = () => {
        setDrawerOpen(open => !open);
    };

    const ToggleLinks = () => {
        setLinksOpen(open => !open);
    };

    const ToggleDocs = () => {
        setDocsOpen(open => !open);
    };

    return (
        <>
            <Container></Container>
        </>
    );
};
