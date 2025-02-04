import CardModel from './card-model'
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Badge,
  Link,
  Text
} from 'theme-ui'
import { Fade } from 'react-reveal'
import Buttons from './button'

/** @jsxImportSource theme-ui */

export default function Bank({ data }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CardModel
        color="white"
        sx={{
          backgroundColor: 'dark',
          minHeight: ['300px', '400px', '380px'],
          backgroundColor: 'darkless',
          backgroundImage: `url('https://icons.hackclub.com/api/icons/0x29282C/glyph:bank-account.svg')`,
          backgroundSize: '40px 40px',
          backgroundRepeat: 'repeat',
          backgroundPosition: '10% 10%',
          color: 'snow'
        }}
        badge
        text={data[0]}
      >
        <Text variant="title" sx={{ color: 'red', fontSize: ['36px', 4, 5] }}>
          Hack Club Bank
        </Text>
        <Grid columns={[1, '1.3fr 1fr', 2]}>
          <Box>
            <Text as="p" variant="subtitle">
              Become a 501(c)3 nonprofit and join 700+ teams using Hack Club
              Bank to run world-class events.
            </Text>
            <Text as="p" variant="subtitle">
              This platform is built and maintained by the Hack Club team.
            </Text>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                display: [null, 'none', 'none'],
                mb: '-50px',
                mt: 3
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '250px',
                  position: 'relative',
                  display: 'block',
                  textAlign: 'center',
                  '&:before': {
                    content: '""',
                    backgroundImage: 'url(/home/bank-computer.webp)',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    marginX: 'auto',
                    display: 'block'
                  }
                }}
              >
                <Box
                  sx={{
                    backgroundImage: 'url(/home/bank-screen.webp)',
                    zIndex: 2,
                    position: 'absolute',
                    margin: 'auto',
                    top: '8px',
                    left: '35px',
                    width: '75%',
                    height: '70%',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></Box>
              </Box>
            </Box>
            <Buttons
              id="27"
              icon="bank-account"
              link="/bank"
              primary="red"
              sx={{ mt: [0, 3, 4] }}
            >
              Start banking!
            </Buttons>
          </Box>
        </Grid>
      </CardModel>
      <Box
        sx={{
          position: 'absolute',
          right: [0, '-120px', '-30px'],
          bottom: [0, '-30px', '-60px'],
          display: ['none', 'block', 'block'],
          zIndex: 3
        }}
      >
        {' '}
        <Box
          sx={{
            width: ['250px', '500px'],
            height: ['180px', '360px'],
            position: 'relative',
            display: 'block',
            textAlign: 'center',
            '&:before': {
              content: '""',
              backgroundImage: 'url(/home/bank-computer.webp)',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              marginX: 'auto',
              display: 'block'
            }
          }}
        >
          <Box
            sx={{
              backgroundImage: 'url(/home/bank-screen.webp)',
              zIndex: 2,
              position: 'absolute',
              margin: 'auto',
              top: '13px',
              left: '70px',
              width: '75%',
              height: '80%',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat'
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  )
}
