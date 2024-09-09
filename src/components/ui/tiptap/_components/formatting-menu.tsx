import { Tooltip } from '../../tooltip';
import { Button } from '../../button';
import { Popover } from '../../popover';
import { Select, type Key } from 'react-aria-components';
import { type Editor } from '@tiptap/react';
import React from 'react';
import { ListBox, ListBoxItem } from '../../list-box';

export type FormattingMenuProps = {
  editor: Editor;
};

export const FormattingMenu = ({ editor }: FormattingMenuProps) => {
  const onAction = (action: Key) => {
    if (!editor) {
      return null;
    }

    switch (action) {
      case 'paragraph':
        editor.chain().focus().setParagraph().run();
        break;
      case 'heading-one':
        editor.chain().focus().setHeading({ level: 1 }).run();
        break;
      case 'heading-two':
        editor.chain().focus().setHeading({ level: 2 }).run();
        break;
      case 'heading-three':
        editor.chain().focus().setHeading({ level: 3 }).run();
        break;
      case 'heading-four':
        editor.chain().focus().setHeading({ level: 4 }).run();
        break;
      case 'heading-five':
        editor.chain().focus().setHeading({ level: 5 }).run();
        break;
      case 'heading-six':
        editor.chain().focus().setHeading({ level: 6 }).run();
        break;
    }
  };

  const [selectedFormatting, setSelectedFormatting] = React.useState<Key>('paragraph');

  return (
    <Select
      selectedKey={selectedFormatting}
      onSelectionChange={(selected) => {
        setSelectedFormatting(selected);
        onAction(selected);
      }}
    >
      <Tooltip>
        <Button
          variant='ghost'
          color='neutral'
          rightIcon='chevron-down'
          className='min-w-20'
          size='sm'
        >
          <div className='capitalize'>{selectedFormatting}</div>
        </Button>
        <Tooltip.Content>Formatting</Tooltip.Content>
      </Tooltip>
      <Popover showArrow>
        <div className='flex max-h-full flex-col p-2'>
          <ListBox onAction={onAction} selectionMode='single'>
            <ListBoxItem
              id='paragraph'
              textValue='Paragraph'
              isSelected={editor.isActive('paragraph')}
            >
              <div className='text-sm'>Paragraph</div>
            </ListBoxItem>
            <ListBoxItem
              id='heading-one'
              textValue='Heading 1'
              isSelected={editor.isActive('heading', { level: 1 })}
            >
              <div className='font-heading text-3xl'>Heading 1</div>
            </ListBoxItem>
            <ListBoxItem
              id='heading-two'
              textValue='Heading 2'
              isSelected={editor.isActive('heading', { level: 2 })}
            >
              <div className='font-heading text-2xl'>Heading 2</div>
            </ListBoxItem>
            <ListBoxItem
              id='heading-three'
              textValue='Heading 3'
              isSelected={editor.isActive('heading', { level: 3 })}
            >
              <div className='font-heading text-xl'>Heading 3</div>
            </ListBoxItem>
            <ListBoxItem
              id='heading-four'
              textValue='Heading 4'
              isSelected={editor.isActive('heading', { level: 4 })}
            >
              <div className='font-heading text-lg'>Heading 4</div>
            </ListBoxItem>
            <ListBoxItem
              id='heading-five'
              textValue='Heading 5'
              isSelected={editor.isActive('heading', { level: 5 })}
            >
              <div className='font-heading text-base'>Heading 5</div>
            </ListBoxItem>
            <ListBoxItem
              id='heading-six'
              textValue='Heading 6'
              isSelected={editor.isActive('heading', { level: 6 })}
            >
              <div className='font-heading text-sm'>Heading 6</div>
            </ListBoxItem>
          </ListBox>
        </div>
      </Popover>
    </Select>
  );
};
