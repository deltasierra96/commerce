'use client';

import { useState } from 'react';
import { Button } from './components/ui/button';
import { Drawer } from './components/ui/drawer';

export function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <Drawer>
    //   <Button>Open</Button>
    //   <Drawer.Content>I am drawer content</Drawer.Content>
    // </Drawer>
    <>
      <Button onPress={() => setIsOpen(true)}>Open</Button>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        I am drawer content
      </Drawer>
    </>
  );
}
