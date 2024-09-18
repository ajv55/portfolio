import {
    Body,
    Container,
    Head,
    Html,
    Img,
    Preview,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface KoalaWelcomeEmailProps {
    name: string;
    message?: string;
    email?: string
  }
  
  export const WelcomeEmail = ({
    name,
    message, 
    email

  }: KoalaWelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`/quickui.jpeg`}
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>Message from: {name},</Text>
          <Text style={paragraph}>
            {message}
          </Text>
          <Text style={paragraph}>
            Email,
            <br />
            {email}
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default WelcomeEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  