/** @jsxImportSource theme-ui */

import { FC } from "react";
import { ThemeProvider, Box, Paragraph, Heading, Container } from "theme-ui";
import DucklingSuckler from "./DucklingSuckler";
import theme from "./theme";
import Three from "./Three";
import duckling from "../../assets/duckling-2.png";
import { Global } from "@emotion/react";
import HotReloadTester from "./HotReloadTester";
import BackendChecker from "./BackendChecker";

const Welcome: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={() => ({
          "*": {
            boxSizing: "border-box"
          }
        })}
      />
      <Box as="main">
        <Container
          p={2}
          sx={{
            textAlign: "center"
          }}
        >
          <Heading as="h1" mt={3} mb={3} variant="headings.cute">
            💖Welcome to Pekkis&apos; Hardcore React Training💖
          </Heading>

          <Box>
            This is a two day workshop for professional developers, devsigners
            and people who fancy suckling on ducklings.
          </Box>
        </Container>

        <Box
          my={5}
          sx={{
            display: ["block", "grid"],
            gridTemplateColumns: "1fr 1fr 1fr",
            width: "100%",
            gap: 3,
            alignItems: "stretch",
            height: ["auto", "auto"],
            backgroundColor: "hotpink"
          }}
        >
          <Box
            p={[4, 4]}
            sx={{
              alignSelf: "center"
            }}
          >
            <Heading as="h2">A Grand Welcome</Heading>

            <DucklingSuckler name="Pekkis" />
          </Box>

          <Box p={[0, 2]}>
            <Three />
          </Box>

          <Box my={2} p={2}>
            <img
              src={duckling}
              alt="A succulent duckling"
              sx={{
                maxWidth: "100%",
                display: "block",
                mb: [-4, -4],
                mt: [0, -4]
              }}
            />
          </Box>
        </Box>

        <Container my={5} p={2}>
          <Heading as="h2" my={3} mb={3}>
            Attention!
          </Heading>
          <BackendChecker />

          <Heading as="h2" my={3} mb={3}>
            More Attention!
          </Heading>

          <Paragraph>
            I might do some late surprise changes so you should{" "}
            <code>git pull</code> and <code>npm install</code> come the first
            training day&apos;s morning.
          </Paragraph>

          <Heading as="h2" my={3} mb={3}>
            Even More Attention!
          </Heading>

          <Paragraph>
            Open{" "}
            <code
              sx={{
                wordBreak: "break-all"
              }}
            >
              src/components/welcome/HotReloadTester.tsx
            </code>
            , do a text change there and save the file. The next paragraph
            should update without a hard reload (look at the next paragraph).
          </Paragraph>

          <Paragraph>
            <HotReloadTester />
          </Paragraph>

          <Paragraph>
            If you are using Linux and it doesn not work or stops working, you
            might have to google for solutions for number of watchers. Sorry
            about that, but Linux people are smart people and you can solve
            anything!
          </Paragraph>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Welcome;
