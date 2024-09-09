'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import { fieldWrapperBaseStyles } from '../form';
import { clsx } from '@/utils';
import { Group } from 'react-aria-components';
import { borderStyles, focusRing } from '../focus-ring';
import { Separator } from '../separator';
import { FormattingMenu } from './_components/formatting-menu';
import { ToolbarButton } from './_components/toolbar-button';
import TextAlign from '@tiptap/extension-text-align';
import { AlignmentMenu } from './_components/alignment-menu';
import { ListFormattingMenu } from './_components/list-formatting-menu';
const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

// const MenuBar = () => {
//   const { editor } = useCurrentEditor();

//   if (!editor) {
//     return null;
//   }

//   return (
//     <>
//       <button
//         onPress={() => editor.chain().focus().toggleBold().run()}
//         disabled={!editor.can().chain().focus().toggleBold().run()}
//         className={editor.isActive('bold') ? 'is-active' : ''}
//       >
//         bold
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleItalic().run()}
//         disabled={!editor.can().chain().focus().toggleItalic().run()}
//         className={editor.isActive('italic') ? 'is-active' : ''}
//       >
//         italic
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleStrike().run()}
//         disabled={!editor.can().chain().focus().toggleStrike().run()}
//         className={editor.isActive('strike') ? 'is-active' : ''}
//       >
//         strike
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleCode().run()}
//         disabled={!editor.can().chain().focus().toggleCode().run()}
//         className={editor.isActive('code') ? 'is-active' : ''}
//       >
//         code
//       </button>
//       <button onPress={() => editor.chain().focus().unsetAllMarks().run()}>clear marks</button>
//       <button onPress={() => editor.chain().focus().clearNodes().run()}>clear nodes</button>
//       <button
//         onPress={() => editor.chain().focus().setParagraph().run()}
//         className={editor.isActive('paragraph') ? 'is-active' : ''}
//       >
//         paragraph
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//         className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
//       >
//         h1
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//         className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
//       >
//         h2
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//         className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
//       >
//         h3
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
//         className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
//       >
//         h4
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
//         className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
//       >
//         h5
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
//         className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
//       >
//         h6
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleBulletList().run()}
//         className={editor.isActive('bulletList') ? 'is-active' : ''}
//       >
//         bullet list
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleOrderedList().run()}
//         className={editor.isActive('orderedList') ? 'is-active' : ''}
//       >
//         ordered list
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleCodeBlock().run()}
//         className={editor.isActive('codeBlock') ? 'is-active' : ''}
//       >
//         code block
//       </button>
//       <button
//         onPress={() => editor.chain().focus().toggleBlockquote().run()}
//         className={editor.isActive('blockquote') ? 'is-active' : ''}
//       >
//         blockquote
//       </button>
//       <button onPress={() => editor.chain().focus().setHorizontalRule().run()}>
//         horizontal rule
//       </button>
//       <button onPress={() => editor.chain().focus().setHardBreak().run()}>hard break</button>
//       <button
//         onPress={() => editor.chain().focus().undo().run()}
//         disabled={!editor.can().chain().focus().undo().run()}
//       >
//         undo
//       </button>
//       <button
//         onPress={() => editor.chain().focus().redo().run()}
//         disabled={!editor.can().chain().focus().redo().run()}
//       >
//         redo
//       </button>
//     </>
//   );
// };

export const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm lg:prose-base p-4 scrollbar-thin scrollbar-track-neutral-400 scrollbar-thumb-neutral-200 focus:outline-none max-h-96 overflow-auto w-full max-w-full',
      },
    },
  });

  return (
    <Group
      className={clsx(
        'relative flex flex-col overflow-hidden rounded-input outline-none',
        fieldWrapperBaseStyles(),
        borderStyles({ isFocusWithin: true }),
        focusRing({ isFocusWithin: true })
      )}
    >
      {editor && (
        <div className='flex w-full items-center bg-neutral-50 p-1.5'>
          <FormattingMenu editor={editor} />
          <Separator orientation='vertical' className='mx-2' />
          <AlignmentMenu editor={editor} />
          <Separator orientation='vertical' className='mx-2' />
          <div className='space-x-1'>
            <ToolbarButton
              label='Bold'
              icon='bold'
              onPress={() => editor.chain().focus().toggleBold().run()}
            />
            <ToolbarButton
              icon='italic'
              label='Italic'
              onPress={() => editor.chain().focus().toggleItalic().run()}
            />
            <ToolbarButton
              icon='strikethrough'
              label='Strike'
              onPress={() => editor.chain().focus().toggleStrike().run()}
            />
          </div>
          <Separator orientation='vertical' className='mx-2' />
          <ListFormattingMenu editor={editor} />
        </div>
      )}

      <EditorContent editor={editor} />
    </Group>
  );
};
