'use client';

import { Button } from './components/ui/button';
import { Drawer } from './components/ui/drawer';

export function Example() {
  return (
    <Drawer>
      <Drawer.Trigger>
        <Button>Open</Button>
        <Drawer.Content>I am drawer content</Drawer.Content>
      </Drawer.Trigger>
    </Drawer>
  );
}
