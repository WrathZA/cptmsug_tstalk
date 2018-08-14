// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Image,
  Appear
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("../assets/override.css");

const images = {
  son: require("../assets/sonof.png"),
  js: require("../assets/js.png"),
  ts: require("../assets/ts.png"),
  anders: require("../assets/anders.png"),
  cptmsug: require("../assets/ctmsug.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck controls={false} transition={["zoom", "slide"]} transitionDuration={500} theme={theme} contentWidth={1800} contentHeight={1000} progress="none">

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.cptmsug.replace("/", "")} margin="0px auto 10px" height="600px" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            TypeScript Concepts
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Cape Town JS - September 2017
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill caps lineHeight={1} textColor="secondary">
            HELLO!
          </Heading>
          <Image margin="50px auto" src={images.son.replace("/", "")} margin="0px auto 50px" height="700px" />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image margin="50px auto" src={images.ts.replace("/", "")} margin="0px auto 50px" height="700px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading margin={"0px auto 20px"} size={1} fill caps lineHeight={1} textColor="tertiary">
            Who am I?
          </Heading>
          <div style={{ width: '50%', float: 'left' }}>
            <Image margin="50px auto" src={images.anders.replace("/", "")} margin="0px auto 50px" height="700px" />
          </div>
          <div style={{ width: '50%', float: 'right' }}>
            <List >
              <Appear>
                <ListItem textSize={56}>Turbo Pascal</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize={56}>Delphi</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize={56}>C#</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize={56}>TypeScript</ListItem>
              </Appear>
            </List>
          </div>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image margin="50px auto" src={images.js.replace("/", "")} margin="0px auto 50px" height="700px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading margin={"0px auto 20px"} size={1} fill caps lineHeight={1} textColor="tertiary">
            JS in 3 mins
          </Heading>
          <BlockQuote>
            JS is a high-level, interpreted programming language. It's dynamic, weakly typed, prototype-based and multi-paradigm
          </BlockQuote>
          <Appear>
            <BlockQuote>
              JavaScript is an event-driven and supports BOTH functional AND imperative (including object-oriented and prototype-based) programming styles
          </BlockQuote>
          </Appear>
        </Slide>

      </Deck>
    );
  }
}
