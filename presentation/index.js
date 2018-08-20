// https://github.com/basarat/typescript-book/blob/master/docs/types/discriminated-unions.md

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
  Appear,
  CodePane
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
  cptmsug: require("../assets/ctmsug.jpg"),
  tsgraph: require("../assets/tsgraph.png"),
  ta: require("../assets/ta.png")
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
          <Image src={images.js.replace("/", "")} margin="0px auto 50px" height="700px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading margin={"0px auto 20px"} size={1} fill caps lineHeight={1} textColor="tertiary">
            JS in 3 mins
          </Heading>
          <BlockQuote>
            JS is a high-level, interpreted programming language. It's dynamic, weakly typed, prototype-based and multi-paradigm
          </BlockQuote>
          <BlockQuote>
            JavaScript is an event-driven and supports BOTH functional AND imperative (including object-oriented and prototype-based) programming styles
          </BlockQuote>
          <BlockQuote>
            Single threaded event loop architecture with background workers
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="tertiary" caps>JavaScript Runtime</Heading>
          <Text margin="30px auto" textSize="66" textColor="primary" bold>
            Single threaded event driven (loop) architecture with background workers (concurrent)
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>JavaScript Types</Heading>
          <Text textSize="66" textColor="primary" bold>
            <dl>
              <dt>Boolean</dt>
              <dt>Number</dt>
              <dt>String</dt>
              <dt>Null</dt>
              <dt>Undefined</dt>
              <dt>---</dt>
              <dt>Object {"{"} {"}"}</dt>
            </dl>
          </Text>
          <Appear>
            <Text textSize="80" margin="50px 0 0" textColor="tertiary" bold>
              Arrays are objects
            </Text>
          </Appear>
          <Appear>
            <Text textSize="100" margin="50px 0 0" textColor="tertiary" bold>
              *FUNCTIONS() are OBJECTS*
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image margin="50px auto" src={images.ts.replace("/", "")} margin="0px auto 50px" height="700px" />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fill lineHeight={1} textColor="secondary">
            JS === TS, but TS !== JS
          </Heading>
          <Image src={images.tsgraph.replace("/", "")} margin="50px auto" height="700px" />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill lineHeight={1} textColor="secondary">
            What is TS?
          </Heading>
          <Text textSize="70" margin="50px 0 0" textColor="tertiary" bold fill caps>
            It's development tooling.
          </Text>
          <Appear>
          <Text textSize="55" margin="50px 0 0" textColor="secondary" bold fill caps>
            Transpiler
          </Text>
          </Appear>
          <Appear>
          <Text textSize="55" margin="50px 0 0" textColor="secondary" bold fill caps>
            Optional Type checking at compile time.
          </Text>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>TRANSPILER EXAMPLE</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>ASYNC TIMEOUT</Heading>
          <CodePane textSize={40}
            lang="js"
            source={require("raw-loader!../assets/asynctimeout.code")}
            margin="20px auto"
          />
        </Slide>

         <Slide>
          <Heading size={2} textColor="secondary" caps>TIMEOUT</Heading>
          <CodePane textSize={40}
            lang="js"
            source={require("raw-loader!../assets/timeoutPromise.code")}
            margin="20px auto"
          />
        </Slide>

        
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>FEATURES!</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>Type annotations</Heading>
          <CodePane textSize={40}
            lang="js"
            source={require("raw-loader!../assets/ta.code")}
            margin="20px auto"
          />
          <Appear>
          <Text textSize="85" margin="50px 0 0" textColor="secondary" bold fill caps>
            5700
          </Text>
          </Appear>
        </Slide>
        
        <Slide>
          <Heading size={2} textColor="secondary" caps>Type annotations</Heading>
          <CodePane textSize={40}
            lang="js"
            source={require("raw-loader!../assets/ta.1.code")}
            margin="20px auto"
          />
          <Appear>
          <Text textSize="85" margin="50px 0 0" textColor="secondary" bold fill>
            NaN 
          </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>Type annotations</Heading>
          <CodePane textSize={40}
            lang="js"
            source={require("raw-loader!../assets/ta.2.code")}
            margin="20px auto"
          />
          <Appear>
          <Image src={images.ta.replace("/", "")} margin="50px auto"  height="210px"  />
          </Appear>
        </Slide>

         <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>INTERFACES</Heading>
        </Slide>
        

      </Deck>
    );
  }
}
