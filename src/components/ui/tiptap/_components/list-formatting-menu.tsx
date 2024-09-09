import { Menu, MenuItem, MenuTrigger } from '../../menu';
import { Popover } from '../../popover';
import { type Key } from 'react-aria-components';
import { type Editor } from '@tiptap/react';
import React from 'react';
import { ToolbarButton } from './toolbar-button';

export type ListFormattingMenuProps = {
  editor: Editor;
};

export const ListFormattingMenu = ({ editor }: ListFormattingMenuProps) => {
  const onAction = async (action: Key) => {
    if (!editor) {
      return null;
    }

    switch (action) {
      case 'number-list':
        editor.chain().focus().toggleOrderedList().run();
        break;
      case 'bullet-list':
        editor.chain().focus().toggleBulletList().run();
        break;
    }
  };

  return (
    <MenuTrigger>
      <ToolbarButton icon='dots' label='List formatting' />
      <Menu onAction={onAction}>
        <MenuItem
          icon='list'
          id='bullet-list'
          textValue='Bulleted list'
          isSelected={editor.isActive('bulletList')}
        >
          Bulleted list
        </MenuItem>
        <MenuItem
          icon='list-numbers'
          id='number-list'
          textValue='Numbered list'
          isSelected={editor.isActive('orderedList')}
        >
          Numbered list
        </MenuItem>
      </Menu>
    </MenuTrigger>
  );
};
