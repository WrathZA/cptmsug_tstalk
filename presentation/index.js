// https://github.com/basarat/typescript-book/blob/master/docs/types/discriminated-unions.md
// https://toddmotto.com/classes-vs-interfaces-in-typescript

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
// require("../assets/xonokai.css");
require("../assets/atomdark.css");

const images = {
  son: require("../assets/sonof.png"),
  js: require("../assets/js.png"),
  ts: require("../assets/ts.png"),
  anders: require("../assets/anders.png"),
  cptmsug: require("../assets/ctmsug.jpg"),
  tsgraph: require("../assets/tsgraph.png"),
  ta: require("../assets/ta.png"),
  class: require("../assets/class.png"),
  classGenerics: require("../assets/classGenerics.png"),
  duck: require("../assets/duck.jpg"),
  guard: require("../assets/guard.png"),
  enum: require("../assets/enum.png"),
  union: require("../assets/union.png"),
  done: require("../assets/done.gif"),
  ctjs: require("../assets/ctjs.png"),
  eventloop: require("../assets/EventLoopRepeat.gif"),
  eventloopstatic: require("../assets/eventloopstatic.png"),
  TC39: require("../assets/TC39.png"),
  ctfeds: require("../assets/ctfeds.png"),
  attypes: require("../assets/attypes.png"),
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
          <Image src={images.ctfeds.replace("/", "")} margin="0px auto 100px" height="400px" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            TypeScript BASICS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            CTFEDS - October 2018
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
                <ListItem textSize={56}>J++</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize={56}>C#</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize={56}>TypeScript</ListItem>
              </Appear>
            </List>
          </div>
          <Notes>
            <ul>
              <li>original author of Turbo Pascal </li>
              <li>chief architect of Delphi.</li>
              <li>lead architect of C#</li>
              <li>Million Dollar Signing Bonus to MS in 1996!</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.js.replace("/", "")} margin="0px auto 50px" height="700px" />
          <Notes>
            <ul>
              <li>Can't talk about TS with JS</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>Explain the Event Loop?</li>
              <li>Message loop in Microsoft Windows GUI apps</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.eventloopstatic.replace("/", "")} height="900px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.eventloop.replace("/", "")} height="900px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>JavaScript Types</Heading>
          <Text textSize="46" textColor="primary" bold>
            <dl>
              <dt>Boolean</dt>
              <dt>Number</dt>
              <dt>String</dt>
              <dt>Null</dt>
              <dt>Undefined</dt>
              <dt>Symbol</dt>
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
          <Notes>
            JavaScript has six primitives types
            functions are first-class objects, they can have properties and methods just like any other object.
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image margin="50px auto" src={images.ts.replace("/", "")} margin="0px auto 50px" height="700px" />
          <Notes>
            JS that scales
          </Notes>
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
        
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fill lineHeight={1} textColor="secondary">
            JS === TS, but TS !== JS
          </Heading>
          <Image src={images.tsgraph.replace("/", "")} margin="50px auto" height="700px" />
          <Notes>
            Typed Superset of JS that compiles to JS. European Computer Manufacturers Association. Netscape Story.
          </Notes>
        </Slide>

         <Slide>
          <Image src={images.TC39.replace("/", "")} margin="50px auto" height="500px" />
          <Text margin="30px auto" textSize="66" textColor="secondary" bold>
            https://github.com/tc39
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>TRANSPILER EXAMPLE</Heading>
        </Slide>

        {/* <Slide>
          <Heading size={2} textColor="secondary" caps>BEFORE ASYNC/AWAIT</Heading>
          <CodePane textSize={40}
            lang="js"
            source={require("raw-loader!../assets/timeoutPromise.code")}
            margin="20px auto"
            theme="external"
          />
        </Slide> */}

        <Slide>
          <Heading size={2} textColor="secondary" caps>ASYNC</Heading>
          <CodePane textSize={40}
            lang="js"
            source={require("raw-loader!../assets/asynctimeout.code")}
            margin="20px auto"
            theme="external"
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
            theme="external"
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
            theme="external"
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
            theme="external"
          />
          <Appear>
            <Image src={images.ta.replace("/", "")} margin="50px auto" height="210px" />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">destroyallsoftware.com/talks/wat</Heading>
        </Slide>

         <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="tertiary" caps>Definitely Typed</Heading>
          <Text textSize="70" margin="20px 0 0" textColor="primary" bold fill>
            npm install @types/~PACKAGENAME~ -D
          </Text>
        </Slide>

         <Slide>
          <Image src={images.attypes.replace("/", "")} margin="50px auto" height="700px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>CLASSES</Heading>
          <Text margin="30px auto" textSize="66" textColor="tertiary" bold>
            Classes in TS (or > JS ES6) are object factories.
          </Text>
          <Notes>
            new Keyword is out of scope for this chat. See Crockford etc.
          </Notes>
        </Slide>

        <Slide>
          <CodePane textSize={34}
            lang="js"
            source={require("raw-loader!../assets/class.code")}
            margin="20px auto"
            theme="external"
          />
        </Slide>

        <Slide>
          <CodePane textSize={34}
            lang="js"
            source={require("raw-loader!../assets/class.1.code")}
            margin="20px auto"
            theme="external"
          />
        </Slide>

         <Slide>
          <Image src={images.duck.replace("/", "")} margin="50px auto" height="800px" />
        </Slide>

        <Slide>
          <Image src={images.class.replace("/", "")} margin="50px auto" height="800px" />
        </Slide>

        <Slide>
          <Image src={images.classGenerics.replace("/", "")} margin="50px auto" height="750px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>INTERFACES</Heading>
          <Text margin="30px auto" textSize="66" textColor="tertiary" bold>
            Only exists within the context of TypeScript used solely for Type Checking
          </Text>
        </Slide>

        <Slide>
          <CodePane textSize={34}
            lang="js"
            source={require("raw-loader!../assets/interface.code")}
            margin="20px auto"
            theme="external"
          />
        </Slide>
        <Slide>
          <CodePane textSize={34}
            lang="js"
            source={require("raw-loader!../assets/interface.1.code")}
            margin="20px auto"
            theme="external"
          />
        </Slide>
        <Slide>
          <CodePane textSize={34}
            lang="js"
            source={require("raw-loader!../assets/interface.2.code")}
            margin="20px auto"
            theme="external"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>TYPE | GUARDS</Heading>
        </Slide>

        <Slide>
          <Image src={images.guard.replace("/", "")} margin="50px auto" height="550px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>ENUMS</Heading>
        </Slide>

        <Slide>
          <Image src={images.enum.replace("/", "")} margin="50px auto" height="900px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>discriminated unions & literal types</Heading>
        </Slide>

        <Slide>
          <CodePane textSize={34}
            lang="js"
            source={require("raw-loader!../assets/union.code")}
            margin="20px auto"
            theme="external"
          />
        </Slide>

       

        <Slide>
          <Image src={images.union.replace("/", "")} margin="50px auto" height="500px" />
        </Slide>

        <Slide>
          <Image src={images.done.replace("/", "")} margin="50px auto" height="700px" />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill lineHeight={1} textColor="secondary">
            THANKS
          </Heading>
          <Text textSize="70" margin="20px 0 0" textColor="tertiary" bold fill>
            Complaints to @WrathZA
          </Text>
          <Text textSize="50" margin="20px 0 0" textColor="secondary" bold fill caps>
            https://github.com/basarat/typescript-book
          </Text>
          <Image src={images.ctjs.replace("/", "")} margin="50px auto" height="300px" />
          <Text textSize="70" margin="20px 0 0" textColor="secondary" bold fill>
            Next Meetup: November?
          </Text>
        </Slide>

      </Deck>
    );
  }
}
{/* https://github.com/basarat/typescript-book */ }
