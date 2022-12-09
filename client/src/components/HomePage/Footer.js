import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";
import GppGoodIcon from "@mui/icons-material/GppGood";
import PhoneIcon from "@mui/icons-material/Phone";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SellIcon from "@mui/icons-material/Sell";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import { useAuth } from "../Utils/auth";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.js";
import CurrenctWebService from "./CurrencyWebService.js";
import ChatIcon from "./ChatIcon";

const Footer = () => {
  const auth = useAuth();

  return (
    <footer>
      <Box>
        <Container>
          <Row>
            <Column>
              <FooterLink href="/aboutus">
                <Heading style={{ fontSize: "35px", fontFamily: "monospace" }}>
                  ABOUT US{" "}
                </Heading>
              </FooterLink>
              <FooterLink style={{ fontSize: "20px", fontFamily: "monospace" }}>
                Onecklace (Cutting Edge Jewellery LTD) is an international
                jewelry manufacturer, our main office is based in Israel, that
                deals exclusively with customized name necklaces.
              </FooterLink>
            </Column>
            <Column style={{ padding: "15px", fontFamily: "monospace" }}>
              <Row>
                <FooterLink>
                  <FacebookShareButton
                    url={
                      "https://www.facebook.com/profile.php?id=100083280215522&notif_id=1660661579838743&notif_t=profile_plus_admin_invite&ref=notif"
                    }
                    quote={"Onecklace jewelry"}
                    hashtag={"#Onecklace"}
                    description={"jewelry"}
                    className="Demo__some-network__share-button"
                  >
                    <FacebookIcon size={40} />
                  </FacebookShareButton>
                </FooterLink>
                <FooterLink href="#">
                  <PhoneIcon
                    sx={{ fontSize: "40px", color: "black" }}
                  ></PhoneIcon>
                </FooterLink>

                <FooterLink href="#">
                  <EmailIcon
                    sx={{ fontSize: "40px", color: "black" }}
                  ></EmailIcon>
                </FooterLink>
                {JSON.parse(auth.getUser()) != null &&
                JSON.parse(auth.getUser()).role == "client" ? (
                  <FooterLink>
                    <ChatIcon></ChatIcon>
                  </FooterLink>
                ) : (
                  ""
                )}
              </Row>
              <CurrenctWebService></CurrenctWebService>
            </Column>
            <Column style={{ fontFamily: "monospace" }}>
              <FooterLink>
                <GppGoodIcon
                  sx={{ fontSize: "35px", color: "black" }}
                ></GppGoodIcon>
                SECURE PAYMENT
              </FooterLink>
              <FooterLink>
                <FlightTakeoffIcon
                  sx={{ fontSize: "35px", color: "black" }}
                ></FlightTakeoffIcon>
                FREE SHIPPING ALL ORDERS
              </FooterLink>
              <FooterLink>
                <SellIcon sx={{ fontSize: "35px", color: "black" }}></SellIcon>
                BEST PRICES
              </FooterLink>
              <FooterLink>
                <AssignmentReturnIcon
                  sx={{ fontSize: "35px", color: "black" }}
                ></AssignmentReturnIcon>
                SECURE PAYMENT
              </FooterLink>
            </Column>
          </Row>
        </Container>
        <Container>
          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              color: "white",
              background: "black",
            }}
          >
            Onecklace &copy;2022
          </div>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
