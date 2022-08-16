import React from 'react';
import dynamic from 'next/dynamic';
import { IconSun, IconMoonStars } from '@tabler/icons';
import {
  AppShell,
  Navbar,
  Header,
  Group,
  ActionIcon,
  useMantineColorScheme,
  ScrollArea,
  Footer,
  Text,
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
        <Navbar fixed={false} width={{ base: 250 }} height={880} p="sm">
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
          <Group sx={{ height: '100%' }} px={20} position="center">
            Made in the UAE with <span sx={{ color: '#FF5252' }}>❤</span> by Abu Usama
          </Group>
        </Footer>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <div suppressHydrationWarning>
        <AppComponent />
      </div>
    </AppShell>
  );
}
