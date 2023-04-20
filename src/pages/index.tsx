import Image from 'next/image'
import { scroller } from "react-scroll";
import {
    Box,
    Button,
    CardContent,
    Avatar,
    Card,
    CardMedia,
    Container,
    Grid,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Link,
    List,
    ListItem,
    ListItemText,
    Drawer,
    Divider,
    Stack,
} from '@mui/material';
import header from '../../public/header.png'
import MenuIcon from '@mui/icons-material/Menu';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import React from "react";
import ContactForm from "@/contact-form";
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: 'rgb(247,226,168)'
        },
        secondary: {
            main: 'rgb(192,164,156)'
        },
        text: {
            primary: 'rgb(192,164,156)'
        }
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgb(247,226,168)'
        },
        secondary: {
            main: 'rgb(192,164,156)'
        },
        text: {
            primary: '#FFFFFF'
        }
    }
});

export default function Home() {
    const [amountRaised, setAmountRaised] = React.useState('150/500,000');
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [theme, setTheme] = React.useState(lightTheme);

    React.useEffect(() => {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const toggleTheme = () => {
            if (darkModeQuery.matches) {
                setTheme(darkTheme);
            } else {
                setTheme(lightTheme);
            }
        };
        darkModeQuery.addListener(toggleTheme);
        toggleTheme();
        return () => darkModeQuery.removeListener(toggleTheme);
    }, []);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleScroll = (id: string) => {
        scroller.scrollTo(id, {
            smooth: true,
            duration: 500
        });
    };
    const handleLinkClick = (id: string) => {
        toggleMenu();
        handleScroll(id);
    };
    const menuItems = [
        { id: 'about', label: 'About Us' },
        { id: 'our-people', label: 'Our People' },
        { id: 'rewards', label: 'Rewards' },
        { id: 'contact', label: 'Contact Us' }
    ];

    const people = [
        {
            name: 'Jake Ngatchu',
            role: 'Founder & CEO',
            photoUrl: '/images/jake.jpeg'
        },
        {
            name: 'Sam Goldrick',
            role: 'Founder & CTO',
            photoUrl: '/images/sam.jpeg'
        },
        {
            name: 'Tom Hasson',
            role: 'Founder & Master Grower',
            photoUrl: '/images/tom.png'
        }
    ];
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                background: 'linear-gradient(to right, rgb(18,18,18), rgb(49,49,49))',
                minHeight: '100vh',
            }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Image src="/logo.png" alt="Logo" width={50} height={50} />
                            <Typography variant="body1" sx={{ color: 'text.primary', ml: 2 }}>
                                Noble Botanics
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
                    <List sx={{ width: 250 }} onClick={toggleMenu}>
                        <ListItem>
                            <Link href="#" color="inherit" underline="none">
                                <ListItemText primary="Home" />
                            </Link>
                        </ListItem>
                        <Divider />
                        {menuItems.map((item) => (
                            <ListItem key={item.id} onClick={() => handleLinkClick(item.id)}>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}


                    </List>
                </Drawer>
                <Container maxWidth="md" sx={{mt: 4}}>
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Image src={header} alt="Logo" width={647} height={423.5}/>
                    </Box>
                    <Link href={'https://paypal.me/NobleBotanics?country.x=GB&locale.x=en_GB'}>
                        <Button variant="contained" color="primary" sx={{mx: 'auto', display: 'block'}}>
                            Support Us
                        </Button>
                    </Link>
                    <Typography variant="h3" align="center" color="primary" sx={{mt: 4}}>
                        Total amount raised: £{amountRaised}
                    </Typography>
                </Container>
            </Box>
            <Box sx={{mt: 8}}>
                <Container sx={{display: 'flex', justifyContent: 'center', px: 5}} id={'about'}>
                    <Box sx={{maxWidth: '800px'}}>
                        <Toolbar />
                        <Typography variant="h3" color="secondary" sx={{mb: 2}} >
                            About Us
                        </Typography>
                        <Typography variant="body1" color="textSecondary" sx={{mb: 4, p:2}}>
                            Welcome to Noble Botanics, Our mission is to be <b>the most customer focused cannabis
                            company in the world</b>. We are a forward-thinking, sustainable cannabis company with a
                            mission to revolutionize the industry by integrating cutting-edge technology, eco-friendly
                            practices, and premium quality products.
                            <br/>
                            <br/>
                            Our journey begins with Phase 1, where we will offer a range of cannabis accessories,
                            including rolling papers, grinders, rolling trays, ashtrays, lighters, and storage
                            containers. We will collaborate with existing brands to create unique, customer-focused
                            accessories. Additionally, we will establish a Cannabis Social Club in barcelona, where our
                            products will be available for purchase in-store as well as refine our proprietary AI
                            hydroponics system.
                            <br/>
                            <br/>
                            As we move into Phase 2, our focus will shift to AI-driven hydroponic units and processing
                            plants. These hydroponic units, made from converted shipping containers, will be available
                            for sale to businesses internationally. Our processing plants will produce oils, extracts,
                            and cannabutter for use in edibles and medicinal products. Our proprietary AI system will be
                            cloud-hosted to ensure seamless operations.
                            <br/>
                            <br/>
                            Beyond these initial phases, we have exciting plans to expand our offerings and services,
                            delving deeper into innovative, sustainable solutions that will reshape the cannabis
                            industry.
                            <br/>
                            <br/>
                            By supporting our crowdfunding campaign, you become an integral part of our vision to shape
                            the future of the cannabis industry. With your help, we can turn Noble Botanics into a
                            global leader that sets new standards for sustainability, innovation, and quality in the
                            cannabis market.
                            <br/>
                            <br/>
                            Join us today and be a part of the Noble Botanics revolution! Contribute now and help us
                            redefine the cannabis industry for a greener, brighter future.
                        </Typography>
                        <Typography variant="h2" color="textSecondary" sx={{mb: 4, p:5}}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We're Bringing A Higher Standard To The Global Cannabis industry
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box sx={{
                background: 'linear-gradient(to right, rgb(18,18,18), rgb(49,49,49))',
                minHeight: '100vh',
                py: 8,
                color: 'text.primary'
            }}
                 id={'our-people'}
            >
                <Container maxWidth="md" sx={{mt: 4}} >
                    <Typography variant="h2" align="center" color="primary" sx={{mb: 4}}>
                        Our People
                    </Typography>
                    <Grid container spacing={4}>
                        {people.map(person => (
                            <Grid item xs={12} md={4} key={person.name}>
                                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <Avatar
                                        alt={person.name}
                                        src={person.photoUrl}
                                        sx={{width: 120, height: 120, mb: 2}}
                                    />
                                    <Typography variant="h5" align="center" color="primary" sx={{mb: 1}}>
                                        {person.name}
                                    </Typography>
                                    <Typography variant="subtitle1" align="center" sx={{mb: 2}}>
                                        {person.role}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Box sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} id={'rewards'}>
                <Typography variant={'h2'} sx={{textAlign: 'center'}}>
                    Rewards
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', my: 3}}>
                    <Grid sx={{width: '100vw', display: 'flex', justifyContent: 'center',}} container>
                        <Grid md={4} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Card sx={{maxWidth: 345}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height={'210'}
                                    image="/grinder.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        £60
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        Noble Botanics Promotional Grinder
                                    </Typography>
                                    <br/>
                                    <Typography variant="body1" color="text.secondary">
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        With an investment of £60 or more you'll receive a Noble Botanics Grinder so you
                                        can grind your herbs in style.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid md={4} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Card sx={{maxWidth: 345}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height={'210'}
                                    sx={{objectFit: 'scale'}}
                                    image="/backer-tee.jpeg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        £1,000
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        Backer T-shirt
                                    </Typography>
                                    <br/>
                                    <Typography variant="body1" color="text.secondary">
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        With an investment of £1,000 or more you'll receive a Noble Botanics Grinder + a
                                        backer T-shirt so you can show off your commitment to your friends.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid md={4} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Card sx={{maxWidth: 345}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height={'210'}
                                    image="/vip.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        £10,000
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        VIP ticket to the opening of our first social club
                                    </Typography>
                                    <br/>
                                    <Typography variant="body1" color="text.secondary">
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        With an investment of £10,000 or more you'll receive all of the previous items +
                                        a VIP invite to the opening of our cannabis social club in barcelona.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Link href={'https://paypal.me/NobleBotanics?country.x=GB&locale.x=en_GB'}>
                    <Button variant="contained" color="primary" sx={{mx: 'auto', display: 'block', my:8}}>
                        Get Your Reward Today
                    </Button>
                </Link>
            </Box>
            <ContactForm/>
            <Box sx={{bgcolor: '#333', py: 4}}>
                <Container maxWidth="md">
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="body1" sx={{color: 'white'}}>
                            © 2023 Noble Botanics. All rights reserved.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Link href="#" color="inherit" underline="none">
                                <Typography variant="body1" sx={{color: 'white'}}>
                                    Privacy Policy
                                </Typography>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                                <Typography variant="body1" sx={{color: 'white'}}>
                                    Terms of Service
                                </Typography>
                            </Link>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
