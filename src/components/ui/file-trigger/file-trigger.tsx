'use client';
import {
  type FileTriggerProps as RACFileTriggerProps,
  FileTrigger as RACFileTrigger,
} from 'react-aria-components';

export type FileTriggerProps = RACFileTriggerProps;

export const FileTrigger = (props: FileTriggerProps) => {
  return <RACFileTrigger {...props} />;
};
