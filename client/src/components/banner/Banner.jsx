
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://i.postimg.cc/WbYXTMrF/pexels-yugantar-sambhangphe-4034203.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    font-family: Georgia, serif;
  
    color:#fcdfbd;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    Background:#fcdfbd;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BlogSnap</Heading>
            <SubHeading>Discover, Create, and Connect through Blogging</SubHeading>
        </Image>
    )
}

export default Banner;