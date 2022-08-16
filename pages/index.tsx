import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      {/* <ConnectButton />; */}
    </>
  );
}
