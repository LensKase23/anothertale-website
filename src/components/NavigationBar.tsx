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
            <Container
                fixed
                className={`${
                    router.pathname === "/"
                        ? "fixed left-[50%] -translate-x-[50%]"
                        : "sticky"
                } top-0 z-50 flex h-20 w-full items-center justify-between bg-primary px-5 pt-0`}
            >
                <Link href="/" className="no-underline">
                    <div className="flex items-center gap-1">
                        <div className="relative aspect-square h-auto w-12">
                            <Image
                                src="/icons/icon-512x512.png"
                                fill
                                alt="rawon.jpg"
                            />
                        </div>
                        <Typography className="text-center font-sans text-xl font-medium capitalize text-third">
                            rawon
                        </Typography>
                    </div>
                </Link>
                <IconButton
                    id="drawerToggleButton"
                    onClick={ToggleDrawer}
                    className="p-0 md:hidden"
                >
                    <MenuRounded className="text-4xl" />
                </IconButton>
                <div className="hidden items-center gap-1 md:flex">
                    <div className="flex gap-1">
                        {NavigationItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                className="text-inherit no-underline"
                            >
                                <Button
                                    id={item.name}
                                    color="inherit"
                                    className="justify-start p-0 px-4 py-1 font-sans text-lg capitalize text-third"
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-1">
                        <Button
                            id="docs"
                            onClick={handleDocsClick}
                            color="inherit"
                            className="justify-start p-0 px-4 py-1 font-sans text-lg capitalize text-third"
                        >
                            {t.nav.docs}
                        </Button>
                        <Popover
                            id="docsPopover"
                            open={docsOpen}
                            anchorEl={docsAnchorEl}
                            onClose={handleDocsClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                            sx={{
                                "& .MuiPopover-paper": {
                                    backgroundColor: "#FFF3D1"
                                }
                            }}
                        >
                            <div className="flex flex-col p-2">
                                {DocsItems.map((item, index) => (
                                    <Button
                                        key={index}
                                        id={item.name}
                                        onClick={() => {
                                            router.push(item.path);
                                            handleDocsClose();
                                        }}
                                        color="inherit"
                                        className={`w-full justify-start p-0 px-4 py-1 font-sans capitalize text-third`}
                                    >
                                        {item.name}
                                    </Button>
                                ))}
                            </div>
                        </Popover>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Button
                            id="links"
                            onClick={handleClick}
                            color="inherit"
                            className="justify-start p-0 px-4 py-1 font-sans text-lg capitalize text-third"
                        >
                            {t.nav.links}
                        </Button>
                        <Popover
                            id="linksPopover"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                            sx={{
                                "& .MuiPopover-paper": {
                                    backgroundColor: "#FFF3D1"
                                }
                            }}
                        >
                            <div className="flex flex-col p-2">
                                {ExternalLinks.map((item, index) => (
                                    <Button
                                        key={index}
                                        id={item.name}
                                        onClick={() => {
                                            window.open(item.path, "_blank", "noopener,noreferrer");
                                            handleClose();
                                        }}
                                        color="inherit"
                                        className={`w-full justify-start p-0 px-4 py-1 font-sans capitalize text-third`}
                                    >
                                        {item.name}
                                    </Button>
                                ))}
                            </div>
                        </Popover>
                    </div>
                    <div className="flex flex-col gap-1">
                        <IconButton
                            id="language"
                            onClick={handleLangClick}
                            color="inherit"
                            className="p-1"
                        >
                            <LanguageRounded className="text-2xl text-third" />
                        </IconButton>
                        <Popover
                            id="langPopover"
                            open={langOpen}
                            anchorEl={langAnchorEl}
                            onClose={handleLangClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                            sx={{
                                "& .MuiPopover-paper": {
                                    backgroundColor: "#FFF3D1"
                                }
                            }}
                        >
                            <div className="flex flex-col p-2">
                                {(Object.keys(localeNames) as Locale[]).map(
                                    key => (
                                        <Button
                                            key={key}
                                            id={key}
                                            onClick={() => {
                                                setLocale(key);
                                                handleLangClose();
                                            }}
                                            color="inherit"
                                            className={`w-full justify-start p-0 px-4 py-1 font-sans capitalize text-third ${
                                                locale === key
                                                    ? "font-bold"
                                                    : ""
                                            }`}
                                        >
                                            {localeNames[key]}
                                        </Button>
                                    )
                                )}
                            </div>
                        </Popover>
                    </div>
                </div>
            </Container>
        </>
    );
};
