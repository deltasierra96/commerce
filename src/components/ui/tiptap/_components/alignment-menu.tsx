import { Menu, MenuItem, MenuTrigger } from '../../menu';
import { Popover } from '../../popover';
import { type Key } from 'react-aria-components';
import { type Editor } from '@tiptap/react';
import React from 'react';
import { ToolbarButton } from './toolbar-button';

export type AlignmentMenuProps = {
  editor: Editor;
};

export const AlignmentMenu = ({ editor }: AlignmentMenuProps) => {
  const onAction = async (action: Key) => {
    if (!editor) {
      return null;
    }

    switch (action) {
      case 'align-left':
        editor.chain().focus().setTextAlign('left').run();
        break;
      case 'align-right':
        editor.chain().focus().setTextAlign('right').run();
        break;
      case 'align-center':
        editor.chain().focus().setTextAlign('center').run();
        break;
    }
  };

  return (
    <MenuTrigger>
      <ToolbarButton icon='align-left' label='Alignment' />
      <Menu onAction={onAction}>
        <MenuItem
          icon='align-left'
          id='align-left'
          textValue='Paragraph'
          isSelected={editor.isActive({ textAlign: 'left' })}
        >
          Align left
        </MenuItem>
        <MenuItem
          icon='align-right'
          id='align-right'
          textValue='Paragraph'
          isSelected={editor.isActive({ textAlign: 'right' })}
        >
          Align right
        </MenuItem>
        <MenuItem
          icon='align-center'
          id='align-center'
          textValue='Paragraph'
          isSelected={editor.isActive({ textAlign: 'center' })}
        >
          Align center
        </MenuItem>
      </Menu>
    </MenuTrigger>
  );
};
