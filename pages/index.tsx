import React from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons';
import {
  AppShell,
  Navbar,
  Header,
  Group,
  ActionIcon,
  useMantineColorScheme,
  Footer,
} from '@mantine/core';
import { MainLinks } from './_mainLinks';
import { User } from './_user';
import { Logo } from './_logo';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { AppComponent } from '../components/AppComponent/AppComponent';

export default function HomePage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding="xl"
      fixed={false}
      navbar={
        <Navbar width={{ base: 300 }} height={875} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Logo colorScheme={colorScheme} />
            <Group>
              <ConnectButton />
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
              </ActionIcon>
            </Group>
          </Group>
        </Header>
      }
      footer={
        <Footer height={60} p="md" fixed={true}>
          Application footer
        </Footer>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <AppComponent />
    </AppShell>
  );
}
