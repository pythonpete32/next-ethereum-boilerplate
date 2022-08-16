import { Title, Text, Anchor, Container, Box, Center, Grid, Stack } from '@mantine/core';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import useStyles from './AppComponent.styles';
import { showNotification } from '@mantine/notifications';
import { Blockquote } from '@mantine/core';
import { IconGrillOff } from '@tabler/icons';
import { screen } from '@testing-library/react';

const SSR = typeof window === 'undefined';

export function AppComponent() {
  const { classes } = useStyles();
  const { address, connector, isConnected } = useAccount();

  useEffect(() => {
    if (!SSR && !isConnected) {
      showNotification({
        title: 'Wallet Not Detected',
        message: 'Please connect your wallet',
        autoClose: 3000,
        radius: 'md',
      });
    }
  }, [isConnected]);

  if (isConnected) {
    return (
      <>
        <Container></Container>
      </>
    );
  } else {
    return (
      <>
        {/* // create some text centered in the middle of the screen */}
        <Center>
          <Title className={classes.title} align="center" mt={100}>
            Next JS {'\n'}
            <Text inherit variant="gradient" component="span">
              Ethereum{' '}
            </Text>
            Boilerplate
          </Title>
        </Center>

        <Stack justify={'center'}>
          {/* <Grid.Col> */}
          <Blockquote color="indigo" cite="– Non Coiner, Warren Buffet" align="center">
            They don't reproduce, they can't mail you a check, they can't do anything, and what you
            hope is that somebody else comes along and pays you more money for them later on, but
            then that person's got the problem
          </Blockquote>
          {/* </Grid.Col> */}
        </Stack>
      </>
    );
  }
}
