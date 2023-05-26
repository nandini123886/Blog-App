
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
//http://mrtaba.ir/image/bg2.jpg



const Banner = styled(Box)`
    background-image: url(https://i.ibb.co/XsRy86P/img2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;
const Heading = styled(Typography)`
    font-size: 45px;
    font-family: Georgia, serif;
  
    
    line-height: 1
`;

const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Heading>
                {/* <Typography variant="h4"> */}
                    Connecting with us is effortless!!Your valuable suggestions are warmly welcomed and greatly appreciated. Please don't hesitate to email me and connect me at your convenience.
                    {/* </Typography>  */}
                </Heading>    
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://www.instagram.com/its_me_nandini20/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:nandinipandey379@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;