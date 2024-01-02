import { Timeline, TimelineOppositeContent } from '@mui/lab';
import { styled } from 'styled-components'

export const NavbarContainer = styled.div`
    width: 100%;
    height: 20%;
    position: absolute;
    z-index: 100;
    top: 0%;
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(2,0,36,1) 75%);
`;

export const NavbarButtonContainer = styled.div`
    display: inline-block;
    padding-right: 56px;
    padding-left: 56px;
    margin-top: .75%;
`;

export const NavbarButton = styled.a`
    font-family: Noto Sans, sans-serif  ;
    display: inline-block;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 28px;
    transition: transform .3s;
    letter-spacing: 4px;
    &:hover {
        transform: scale(1.15);
        transition: transform .4s;
    }
`

export const BackgroundImage = styled.img`
    z-index: -1;
    width: 100%;
    height: 900px;
`;

export const Overlay = styled.div`
    background: linear-gradient(180deg, rgba(255,255,255,.2) 0%, rgba(2,0,18,1) 100%);
    width: 100%;
    height: 900px;
    z-index: 20;
    position: absolute;
    top: 0%;
`;

export const OverlayContainer = styled.div`
    width: 100%;
    height: 900px;
    z-index: 30;
    position: absolute;
    top: 0%;
`;

export const OverlayTextContainer = styled.div`
    width: 50%;
`;

export const OverlayTitle = styled.h1`
    margin-left: 10%;
    margin-top: 60%;
    color: #f5f5f5;
    font-size: 86px;
    letter-spacing: 8px;
    font-weight: 300;
    font-family: Noto Sans, sans-serif  ;
    text-shadow: 3px 3px 8px rgba(0,0,0,0.35);
    margin-bottom: 2%;
    text-align: left;
`;

export const OverlaySubtitle = styled.h2`
    margin-top: 0px;
    margin-left: 10%;
    font-weight: 400;
    letter-spacing: 2px;
    text-align: left;
    color: #9e9e9e;
`;

export const AboutProfileContainer = styled.div`
    background: linear-gradient(180deg, rgba(15,15,15,0) 0%, rgba(2,0,18,1) 100%);
    position: absolute;
    z-index: 30;
    width: 45%;
    height: 75%;
    top: 15%;
    left: 5%;
`;

export const AboutProfileHeader = styled.h1`
    color: #f5f5f5;
    font-size: 56px;
    letter-spacing: 4px;
    font-weight: 300;
    font-family: Noto Sans, sans-serif  ;
    text-shadow: 3px 3px 8px rgba(0,0,0,0.35);
`;

export const AboutProfileText = styled.p`
    color: #f5f5f5;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 300;
    font-family: Noto Sans, sans-serif;
    text-align: left;
    padding-left: 16px;
    padding-right: 8px;
`;

export const TimelineContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 15%;
    left: 0%;
    z-index: 30;
`;

export const CareerTimelineOppositeContent = styled(TimelineOppositeContent)`
`;

export const TimelineStyled = styled(Timeline)`
    width: 65%;
`;

export const TimelineOppositeText = styled.p`
    color: #f5f5f5;
    font-size: 20px;
    text-shadow: 3px 3px 8px rgba(0,0,0,0.5);
    font-family: Noto Sans, sans-serif;
    letter-spacing: 2px;
    font-weight: 300;
    width: 320px;
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: black;
    background: linear-gradient(90deg, rgba(15,15,15,0) 0%, rgba(15,15,15,0.4) 35%, rgba(2,0,18,0.7) 100%);
    height: 50px;
    padding: 12px 24px 0px 24px;
    border-radius: 8px;
`;

export const TimelineJobContainer = styled.div`
    background: rgba(2, 0, 18, .6);
    padding: 2px 24px 6px 24px;
    border-radius: 8px;
`

export const TimelineJobPosition = styled.h2`
    font-family: Noto Sans, sans-serif;
    letter-spacing: 3px;
    font-weight: 200;
    color: #e0e0e0;
    margin-top: 4px;
`;

export const TimelineJobCompany = styled.h1`
    font-family: Noto Sans, sans-serif;
    letter-spacing: 2px;
    font-weight: 700;
    color: #f5f5f5;
    margin-bottom: 0px;
    text-shadow: 3px 3px 8px rgba(0,0,0,0.3);

`;

export const TimelineJobDescription = styled.p`
    font-family: Noto Sans, sans-serif;
    letter-spacing: 2px;
    font-weight: 300;
    color: #e0e0e0;
`;

export const ContactsContainer = styled.div`
    z-index: 100;
    width: 100%;
    height: 25%;
    bottom: 0;
    padding-bottom: 12px;
    padding-top: 62px;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(2,0,36,1) 75%);

`


export const ContactIcon = styled.img`
    width: 75px;
    height: 75px;
    display: inline-block;
    vertical-align: middle;
`;

export const ContactText = styled.a`
    font-family: Noto Sans, sans-serif  ;
    vertical-align: middle;
    text-decoration: none;
    color: #f5f5f5;
    display: inline-block;
    font-size: 24px;
    letter-spacing: 2px;
    margin-left: 22px;
    margin-right: 122px;
    transition: transform .3s;
    &:hover {
        transform: scale(1.05);
        transition: transform .4s;
    }
`;