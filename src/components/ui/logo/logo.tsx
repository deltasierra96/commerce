'use client';
import { clsx } from '@/utils';
import { LinkProps } from 'next/link';
import { Link, type LinkProps as RACLinkProps } from 'react-aria-components';
import { borderStyles, focusRing } from '../focus-ring';

export type LogoProps = RACLinkProps & Omit<LinkProps, 'href'>;

export const Logo = ({ className, href = '/', ...props }: LogoProps) => {
  const gymSharkLogo = (
    <svg
      viewBox="0 0 31 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="logo-white" className="fill-theme" fillRule="nonzero">
          <path
            d="M0,0 L30.4,0 C30.4,0 16.4,15.5 9.4,23.2 C9.7,22.6 9.9,22.1 10.3,21.6 C10,21.6 9.6,20.3 9.3,19.7 L8.1,20.3 C7.9,20.5 7.5,20.4 7.3,20.2 C7.3,20.1 7.2,20.1 7.2,20 C7,19.6 6.9,19.2 6.7,18.7 C6.2,19 5.7,19.2 5.2,19.4 L0.3,17.3 L3.8,17.3 L5.4,18.6 C5.8,18.2 6.1,17.6 6.4,17.3 L7.3,17.3 C7.6,17.6 7.9,18.2 8.3,18.6 C8.7,18.2 9.1,17.7 9.5,17.4 L10.1,17.4 C10.4,17.7 10.8,18.2 11.1,18.5 L11.2,18.5 C11.2,18.5 11.8,17.7 12.1,17.4 L12.8,17.4 C12.8,17.4 21.8,3.9 21.8,3.8 C14.6,2.5 0,0 0,0"
            id="Path"
          ></path>
          <polygon id="Path" points="8.9 8 3.9 5.2 12.8 7.3"></polygon>
        </g>
      </g>
    </svg>
  );

  const redditLogo = (
    <svg xmlns="http://www.w3.org/2000/svg" className={clsx(className)} viewBox="0 0 49.98 17.25">
      <g id="surface1">
        <path
          className="fill-theme"
          d="M46.22,5.94c0,.61-.48,1.09-1.09,1.09s-1.09-.49-1.09-1.09,.49-1.09,1.09-1.09,1.09,.49,1.09,1.09Z"
        />
        <path
          className="fill-neutral-900"
          d="M29.58,10.59c.53,0,.84-.4,.82-.79,0-.15-.02-.3-.05-.44-.33-1.42-1.48-2.47-2.84-2.47-1.62,0-2.94,1.47-2.94,3.28s1.31,3.29,2.94,3.29c1.02,0,1.75-.37,2.27-.96,.25-.29,.2-.73-.11-.95-.25-.17-.57-.11-.81,.08-.23,.2-.66,.59-1.36,.59-.82,0-1.52-.71-1.68-1.65h3.75v.02Zm-2.09-2.46c.74,0,1.38,.57,1.61,1.37h-3.23c.24-.8,.88-1.37,1.61-1.37Zm-2.87-.6c0-.31-.23-.56-.51-.61-.89-.13-1.74,.2-2.22,.8v-.08c0-.38-.31-.62-.62-.62-.34,0-.61,.27-.62,.62v5.04c0,.33,.25,.62,.58,.64,.36,.02,.66-.26,.66-.62v-2.61c0-1.15,.86-2.1,2.05-1.96h.12c.31-.02,.55-.29,.55-.61Zm21.12,.66c0-.34-.27-.61-.61-.62-.34,0-.62,.28-.62,.62v4.52c0,.34,.28,.62,.62,.62s.61-.28,.61-.62v-4.52Zm-9.16-3.41c0-.34-.28-.62-.62-.62-.34,0-.61,.28-.62,.62v2.75c-.42-.42-.94-.63-1.57-.63-1.62,0-2.94,1.47-2.94,3.29s1.32,3.28,2.94,3.28c.63,0,1.16-.21,1.58-.64,.05,.29,.31,.5,.61,.5,.34,0,.62-.28,.62-.62V4.78Zm-2.79,7.46c-.95,0-1.71-.92-1.71-2.06s.76-2.06,1.71-2.06,1.7,.91,1.7,2.06-.77,2.06-1.7,2.06Zm9.22-7.46c0-.34-.28-.62-.62-.62-.34,0-.61,.28-.62,.62v2.75c-.42-.42-.94-.63-1.57-.63-1.62,0-2.94,1.47-2.94,3.29s1.32,3.28,2.94,3.28c.63,0,1.16-.21,1.58-.64,.05,.29,.31,.5,.61,.5,.34,0,.62-.28,.62-.62V4.78Zm-2.8,7.46c-.95,0-1.7-.92-1.7-2.06s.76-2.06,1.7-2.06,1.71,.91,1.71,2.06-.76,2.06-1.71,2.06Zm8.66,.48v-4.59h.54c.29,0,.54-.22,.57-.52,.02-.32-.24-.59-.55-.59h-.56v-.87c0-.33-.25-.62-.58-.64-.36-.02-.66,.26-.66,.62v.89h-.51c-.29,0-.55,.22-.57,.52-.02,.32,.24,.59,.54,.59h.53v4.59c0,.34,.27,.62,.61,.62,.36-.02,.63-.29,.63-.62Z"
        />
        <path
          className="fill-theme"
          d="M17.21,8.62c0,4.76-3.86,8.62-8.61,8.62S0,13.39,0,8.62,3.86,0,8.61,0s8.61,3.86,8.61,8.62Z"
        />
        <path
          className="fill-white"
          d="M14.35,8.62c0-.33-.13-.65-.37-.89-.23-.24-.55-.37-.89-.37-.34,0-.64,.13-.87,.35-.86-.62-2.04-1.02-3.36-1.07l.57-2.7,1.87,.4c.02,.49,.43,.87,.91,.86,.48-.01,.87-.41,.87-.89s-.4-.89-.89-.89c-.34,0-.65,.2-.8,.5l-2.09-.44c-.06-.01-.12,0-.16,.03-.05,.03-.08,.08-.09,.14l-.64,3.01c-1.34,.04-2.54,.44-3.41,1.07-.23-.23-.55-.35-.87-.35s-.65,.13-.89,.37c-.23,.24-.37,.55-.37,.89,0,.51,.31,.95,.74,1.14-.02,.12-.03,.25-.03,.38,0,1.93,2.25,3.51,5.02,3.51s5.02-1.56,5.02-3.51c0-.12-.01-.26-.03-.38,.45-.21,.74-.66,.74-1.15Zm-8.61,.89c0-.49,.4-.89,.89-.89s.89,.4,.89,.89-.4,.89-.89,.89c-.5,.01-.89-.4-.89-.89Zm5,2.38c-.61,.62-1.79,.66-2.12,.66s-1.52-.05-2.13-.66c-.05-.04-.07-.1-.07-.16s.02-.12,.07-.16c.04-.05,.1-.07,.16-.07s.12,.02,.16,.07c.39,.39,1.21,.52,1.8,.52s1.42-.13,1.8-.52c.04-.05,.1-.07,.16-.07s.12,.02,.16,.07c.08,.09,.08,.23,0,.33Zm-.16-1.47c-.49,0-.89-.4-.89-.89s.4-.89,.89-.89,.89,.4,.89,.89-.4,.89-.89,.89Z"
        />
      </g>
    </svg>
  );

  const mssLogo = (
    <svg className={clsx(className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.11 73.54">
      <g>
        <g>
          <path
            className="fill-neutral-950"
            d="M69.81,28.14l10,15.4,10-15.4h4.8v30.6h-5.2v-20.6l-9.6,14.5-9.6-14.5v20.5h-5.2V28.14h4.8Z"
          />
          <path
            className="fill-neutral-950"
            d="M132.41,43.44c0,9-6.5,15.8-15.5,15.8s-15.5-6.8-15.5-15.8,6.6-15.8,15.5-15.8c9,0,15.5,6.7,15.5,15.8Zm-5.3,0c0-5.9-4-10.8-10.1-10.8s-10.1,4.9-10.1,10.8,4,10.8,10.1,10.8,10.1-4.9,10.1-10.8Z"
          />
          <path
            className="fill-neutral-950"
            d="M144.31,33.14h-8.4v-5h22.1v5h-8.4v25.6h-5.2l-.1-25.6h0Z"
          />
          <path
            className="fill-neutral-950"
            d="M192.31,43.44c0,9-6.6,15.8-15.5,15.8s-15.5-6.8-15.5-15.8,6.6-15.8,15.5-15.8c8.9,0,15.5,6.7,15.5,15.8Zm-5.4,0c0-5.9-4-10.8-10.1-10.8s-10.1,4.9-10.1,10.8,4,10.8,10.1,10.8,10.1-4.9,10.1-10.8Z"
          />
          <path
            className="fill-neutral-950"
            d="M199.21,28.14h10c6.1,0,10.1,3.9,10.1,9.5,0,4.6-2.4,8.1-6.8,9.2l7.6,11.9h-6.1l-7.2-11.5h-2.4v11.5h-5.2V28.14h0Zm14.8,9.5c0-3-2.1-4.5-5.5-4.5h-4.1v9.1h4.1c3.4-.1,5.5-1.6,5.5-4.6Z"
          />
          <path
            className="fill-theme"
            d="M236.51,45.94c-4.5-1.6-9.6-4-9.6-9.7,0-4.3,3.8-8.7,10-8.7s10,4.9,10,4.9l-3.6,3.6s-2.5-3.5-6.3-3.5c-2.6,0-4.7,1.6-4.7,3.7,0,2.7,2.4,3.5,6.6,5.1,4.7,1.8,8.6,3.8,8.6,9.4s-4.9,8.5-10.7,8.5c-7.6,0-11.2-6.2-11.2-6.2l3.9-3.3s2.6,4.6,7.2,4.6c2.6,0,5.3-1,5.3-3.5,.1-2.7-1.9-3.6-5.5-4.9Z"
          />
          <path
            className="fill-theme"
            d="M255.01,28.14h10.4c6.1,0,10.1,4.2,10.1,9.8s-4.1,9.8-10.1,9.8h-5.1v11h-5.3V28.14Zm15.2,9.8c0-2.9-1.9-4.8-5.5-4.8h-4.5v9.6h4.5c3.6,0,5.5-2,5.5-4.8Z"
          />
          <path
            className="fill-theme"
            d="M311.01,43.44c0,9-6.5,15.8-15.5,15.8s-15.5-6.8-15.5-15.8,6.5-15.8,15.5-15.8c9,0,15.5,6.7,15.5,15.8Zm-5.3,0c0-5.9-4-10.8-10.1-10.8s-10.1,4.9-10.1,10.8,4,10.8,10.1,10.8,10.1-4.9,10.1-10.8Z"
          />
          <path
            className="fill-theme"
            d="M318.01,28.14h10c6.1,0,10.1,3.9,10.1,9.5,0,4.6-2.4,8.1-6.8,9.2l7.6,11.9h-6.1l-7.3-11.5h-2.4v11.5h-5.1V28.14h0Zm14.8,9.5c0-3-2.1-4.5-5.5-4.5h-4.1v9.1h4.1c3.4-.1,5.5-1.6,5.5-4.6Z"
          />
          <path
            className="fill-theme"
            d="M351.41,33.14h-8.4v-5h22.1v5h-8.4v25.6h-5.2l-.1-25.6h0Z"
          />
        </g>
        <path
          className="fill-theme"
          fillRule="evenodd"
          d="M61.61,54.04c-1.6,1.1-2.5-1.9-2.6-5.2,0-1.8-1.7-22.2-1.7-22.2,0,0-.9,5-1.2,8-.2,3,.1,14.3,.1,14.3,0,5.5-2.6,1.3-3.5-1.1-.4-1.1-2.8-8.6-3.5-12.7-.7-4.1-1.6-12.9-1.6-12.9,0,0-.5,9-.5,11.2s.1,3.5,.6,5.9c.5,2.3,2.3,9.3,2.3,9.3,1.4,4.4-.2,3.3-1.4,.4,0,0-1.2-2.6-1.6-3.8-3.1-9.9-10.7-42,9.7-32-22.5-14.7-15.3,19-11.3,32.4,.2,.7,.4,1.3,.6,2.1,.6,2.2,4.6,12.1,4.6,12.1h10.6l.4-5.8Zm5.7-28.8c-1.1-1.5-2.3-2.9-3.5-4.2-1.4-1.5-3.2-3.2-4.7-4.6-2-1.8-5.8-4.5-9.2-2.6-1.4,.8-3.2,3.4-3.2,3.4,0,0,1.2-.8,3.8,.1,4.3,1.6,8.6,6.7,11.8,10.9l.1-3.1c.1,.1,4.9,.1,4.9,.1Z"
        />
        <path
          className="fill-theme"
          fillRule="evenodd"
          d="M63.31,15.64c-3.3-3.4-12.1-12.8-17.3-12.7-6,.2-7.3,8.3-7.3,13,.1,7.6,.3,12.8,1.8,20.3-2-7.3-3-12.8-3.3-20.3-.2-5-.2-7.7,1.5-12.6-4.6,1.6-5,9.1-5,13.2,0,3.7,.5,11.3,1.3,15.7s1.9,9.8,3.2,14c1.3,4.1,4.8,13.1,4.8,13.1h-3.5c-.7-1.9-1.4-3.7-2.1-5.6-.6-.3-6.7,5-7.7,6.2,2.1-3.6,3.9-5.6,6.9-8.4-.4-1.5-.9-2.9-1.3-4.4l-4.8,3.6c1.5-1.5,3-3.1,4.5-4.6-.4-1.2-.7-2.3-1.1-3.5-2.3,.2-5.4,3.4-7.3,4.9,1.1-2.3,4.1-6.2,6.5-7.4-.3-1.1-.6-2.2-.8-3.3-2,.5-3,1.1-4.6,2.4,1-1.7,2.6-2.7,4.2-3.8-.2-.9-.4-1.8-.6-2.6-2.7,.5-6,2.9-8.5,4.8,2.2-3.1,4.8-5.3,8.3-6.9v-3.5c-1.6-.1-2.5,.6-3.8,1.5,1.2-1.4,3-2.7,4-4v-2.1c-3.5,1.2-7.8,4.4-10.4,7,1.9-4,6.8-7.1,10.5-9.2,0-1.1,.1-2.3,.1-3.5-2.2,.1-4.1,1.6-5.6,3.1,.9-1.6,4-4.3,5.6-5.3,0-1.2,.1-2.4,.2-3.6-2.8,.2-9.7,5.9-12.2,7.8,0,0,1.8-2.3,4.1-4.3,2.9-2.6,8.3-5.4,9.1-6.2,.5-.5,.7-2.4,1.2-3,.5-.7,1.2-1.2,1.2-1.2-2.1,.1-5.8,1.7-7.5,3,1.7-2.9,7.2-3.5,9.9-5,1.1-.6,1.9-1.5,4.4-2,9.3-2,16.5,8.9,21.4,15.4"
        />
        <path
          className="fill-theme"
          fillRule="evenodd"
          d="M3.31,29.54c-.3,4.6-.1,8.1,.3,11.3,.5,3.2,1.9,9.8,2.4,11.5s2.2,7,2.2,7h1.5c-.7-2.2-1.4-4.4-2.2-6.6,1.6,.4,3.1,.8,4.7,1.2-1.8-1-3.5-2-5.3-2.9-.5-1.6-.9-3.1-1.4-4.7,1.4,.3,2.9,.5,4.3,.8l-4.5-2.1c-.2-1.2-.5-2.4-.7-3.5,0,0,4,.7,6.6,2s3.9,2.3,3.9,2.3c0,0-1.7-2.5-3.5-4s-7.4-3.1-7.4-3.1c-.2-.9-.3-1.8-.4-2.7,0,0,1.8,.2,2.9,.8s2.1,1.2,2.1,1.2c0,0-1.7-1.7-2.6-2.2s-2.4-1-2.4-1c.1-1.3,.1-2.6,.2-3.9,0,0,4.4,1.2,6.2,2.3,1.7,1.1,4.2,2.7,4.2,2.7,0,0-2.9-3.3-4.9-4.5-2.2-1.3-5.4-2.4-5.4-2.4,.2-1,.4-2.1,.6-3.1,0,0,2.3,.4,3.2,1s.8,.6,.8,.6c0,0-.5-1.1-1.6-1.6s-2.2-1.1-2.2-1.1c.2-.7,.5-1.4,.7-2,2.4,.7,4.8,1.5,7.2,2.2l-7.1-4,1.2-2c1.2,.4,2,.4,3.1,1.2-.6-.8-1.9-1.5-2.8-1.9,0,0,.4-.5,.6-.9,.2-.3,.7-.9,.7-.9,1.2,.7,3,1.3,3.9,2.2-.9-1.3-2.2-2-3.5-2.6,.4-.4,.8-.9,1.2-1.3,1,.1,2,.1,2.6,1-.1-1-1.4-1.3-2.2-1.3,.6-.5,1.1-1,1.6-1.5,1.1,.4,2.1,.8,3.2,1.2-1-.6-2-1.3-3-1.9C5.41,18.24,3.91,22.64,3.31,29.54"
        />
        <path
          className="fill-theme"
          fillRule="evenodd"
          d="M18.51,7.24C-3.79,17.44-1.79,36.64,3.31,59.34c1.3,0,2.6,.1,3.9,.1C-.89,38.64-1.39,16.54,18.51,7.24"
        />
        <path
          className="fill-theme"
          fillRule="evenodd"
          d="M22.21,10.14c-.8,.2-1.7,.5-2.5,.7-10,10.4-2.2,35.8,1.2,48.1,1.7,.1,3.4,.2,5.1,.2-4.1-10.5-15.9-40.1-3.8-49"
        />
      </g>
      <g>
        <path
          className="fill-neutral-950"
          d="M261.71,70.74h-5l-1.1,2.2h-.6l4-7.7h.6l4,7.7h-.7l-1.2-2.2Zm-.2-.5l-2.2-4.5-2.2,4.5h4.4Z"
        />
        <path
          className="fill-neutral-950"
          d="M275.11,65.24v7.7h-.5l-5.9-6.7v6.7h-.6v-7.7h.5l5.8,6.7v-6.7h.7Z"
        />
        <path
          className="fill-neutral-950"
          d="M281.21,65.24h3.4c2.7,0,4.6,1.6,4.6,3.9s-1.8,3.9-4.6,3.9h-3.4v-7.8Zm3.3,7.2c2.4,0,4-1.4,4-3.3s-1.6-3.3-4-3.3h-2.7v6.7l2.7-.1h0Z"
        />
        <path
          className="fill-neutral-950"
          d="M299.71,71.94l.3-.4c.6,.6,1.7,1,2.8,1,1.7,0,2.5-.7,2.5-1.5,0-2.3-5.4-.9-5.4-3.8,0-1.1,.9-2.1,3-2.1,.9,0,1.9,.3,2.6,.7l-.2,.4c-.7-.4-1.6-.7-2.4-.7-1.7,0-2.4,.7-2.4,1.5,0,2.3,5.4,.9,5.4,3.8,0,1.1-1,2-3.1,2-1.3,.2-2.5-.3-3.1-.9Z"
        />
        <path
          className="fill-neutral-950"
          d="M317.61,67.84c0,1.6-1.3,2.6-3.5,2.6h-2.5v2.5h-.6v-7.7h3.1c2.2,0,3.5,.9,3.5,2.6Zm-.6,0c0-1.3-1-2.1-2.8-2.1h-2.5v4.2h2.5c1.8,0,2.8-.8,2.8-2.1Z"
        />
        <path
          className="fill-neutral-950"
          d="M327.71,70.74h-5l-1.1,2.2h-.7l4-7.7h.6l4,7.7h-.7l-1.1-2.2Zm-.3-.5l-2.2-4.5-2.2,4.5h4.4Z"
        />
        <path
          className="fill-neutral-950"
          d="M340.01,72.94l-2-2.6c-.3,0-.5,.1-.8,.1h-2.5v2.5h-.6v-7.7h3.1c2.2,0,3.5,1,3.5,2.6,0,1.2-.7,2.1-2,2.4l2.1,2.7h-.8Zm-2.9-3c1.8,0,2.8-.8,2.8-2.1s-1-2.1-2.8-2.1h-2.5v4.2h2.5Z"
        />
        <path
          className="fill-neutral-950"
          d="M351.91,72.44v.5h-5.9v-7.7h5.7v.5h-5.1v3h4.6v.5h-4.6v3.2h5.3Z"
        />
        <path
          className="fill-neutral-950"
          d="M356.31,71.94l.3-.4c.6,.6,1.7,1,2.8,1,1.7,0,2.5-.7,2.5-1.5,0-2.3-5.4-.9-5.4-3.8,0-1.1,.9-2.1,3-2.1,.9,0,1.9,.3,2.6,.7l-.2,.4c-.7-.4-1.6-.7-2.4-.7-1.7,0-2.4,.7-2.4,1.5,0,2.3,5.4,.9,5.4,3.8,0,1.1-1,2-3.1,2-1.2,.2-2.4-.3-3.1-.9Z"
        />
      </g>
      <line className="stroke- fill-none" x1="65.01" y1="69.94" x2="247.41" y2="69.94" />
    </svg>
  );

  const christiesLogo = (
    <svg
      className={clsx('fill-theme', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3058.89 744.81"
    >
      <path d="M1050.31,226.5v226.5h84v-87.8c0-50.6,.4-91.3,1-96.2,3.2-28.2,16-47.9,38.3-59.2,10.4-5.2,19.6-7.1,34.7-7.1,20.1-.1,32.2,3.6,45.2,13.7,6.4,5.1,14.6,16.7,17.8,25.3,4.9,13.1,5,14.5,5,108.1,0,48.3,.3,91.4,.7,96l.6,8.2,41.6-.2,41.6-.3v-104c0-103.2,0-104.1-2.2-116.2-4.7-25.6-12.4-46.1-23.6-62.8-5.3-7.9-18.6-21.6-26.3-27.1-23.9-17.1-62.8-25.7-94.7-20.9-28.6,4.3-53.3,19.5-71.5,44.2-3,3.9-6,7.4-6.8,7.7-1.2,.5-1.4-11.8-1.4-86.9V0h-84V226.5Z" />
      <path d="M1620.31,60.5v35.5h83V25h-83V60.5Z" />
      <path d="M2326.31,60.5v35.5h84V25h-84V60.5Z" />
      <path d="M2132.31,42c-21.2,5.3-39.3,10-40.3,10.5-4.4,1.9-4.7,4.4-4.7,42v35.5h-63l.2,39.2,.3,39.3,31.2,.3,31.2,.2,.4,71.3c.4,77.2,.4,78.2,6.2,98.2,9.2,31.7,29.6,55.5,61,71.3,7.1,3.5,23.7,8.9,33.5,10.7,14,2.7,38.5,2.5,55.3-.4,15.7-2.7,37.7-8.6,39.7-10.7,1.3-1.2,1.5-6.9,1.8-35.9l.3-34.5h-2.8c-1.5,0-8.9,.9-16.4,2-19.8,2.8-38.1,4.2-45.2,3.4-21.2-2.1-35.1-10.9-42.6-26.8-5.7-11.8-6.1-17.5-6.1-83.6,0-32.9,.3-61.2,.6-62.9l.7-3.1h110.7v-79h-112v-48.5c0-26.7-.3-48.5-.7-48.4-.5,.1-18.1,4.5-39.3,9.9Z" />
      <path d="M206.01,58.6c-6.7,2-163.2,70.1-169.8,74-11.4,6.7-23.6,18.8-27.7,27.4C.51,177-.09,185.6,0,285c.1,100.1,1.1,133.5,4.3,143.5,1.6,5,3.3,8,6,10.7,3.3,3.3,4.3,3.8,8.6,3.8,2.8,0,6.5-.9,9-2.1,6.1-2.9,14.5-11.6,18.4-19.1,1.8-3.5,24.6-45,50.5-92.3,53.6-97.7,68.3-124.8,95.7-177,33.4-63.5,35.6-67.9,36.8-72.7,1.8-7,.6-13.2-3.5-17.6-3.2-3.5-3.6-3.7-10.7-3.9-4-.1-8.1,.1-9.1,.3Z" />
      <path d="M336.61,59.9c-4.5,2.8-6.5,7.2-6.4,14.4,0,7.4,.1,7.6,30.1,64.7,34.9,66.5,55.6,104.7,129.4,238.8,11.9,21.6,22.8,41.6,24.2,44.4,5.6,11,17.9,20.8,26.2,20.8s12.9-4.4,16.2-17.4c1.7-6.6,2-13.5,3-53.8,2-91,.9-178.9-2.5-195.3-4.2-20.4-15.3-34.2-36.8-45.9-4.5-2.5-43.5-19.6-86.7-38.2-76.6-33-78.7-33.8-86-34.1-6.2-.3-8.1-.1-10.7,1.6Z" />
      <path d="M1861.01,121c-24.9,2.3-52.7,11.9-72.5,25-19.6,13-32.5,33.5-36.8,58.4-2.2,12.3-1.4,34.8,1.5,46.1,6.4,24.4,22.4,43,46.4,54,9.6,4.3,27.4,10.1,64.7,21,31.7,9.3,43.5,14,49.4,20,13.5,13.5,9.3,33.7-9.1,43.7-20.3,11.1-55.7,8.6-84.8-6-13.4-6.7-25.7-15.3-41.3-28.9l-6-5.3-18.1,29c-9.9,16-18.1,29.4-18.1,29.9,0,1.8,13.7,13.5,23.9,20.3,23.9,16,48.6,25.4,81.1,31,17.1,3,56.4,3.3,71,.5,11.3-2.1,30.2-8.3,39.1-12.7,23.7-11.9,41.1-30,48.6-50.9,7.7-21.1,8.2-48.7,1.2-69.6-8.3-24.9-25.5-41.3-55.9-53.3-9.3-3.7-35.4-11.7-56-17.2-19.3-5.2-33.3-9.7-38.3-12.2-4.9-2.4-11.4-8.4-13.3-12-7.1-13.6,.2-32.5,15.1-39.4,6.6-3,22.1-4.8,34.6-4.1,14,.9,26.5,5.3,54.3,19.3,12.5,6.3,22.9,11.4,23.1,11.2,.8-1,33.6-54.9,34-56,.5-1.4-.6-2.1-28-16.3-19.7-10.2-32-15.1-48.9-19.6-19.9-5.2-43.5-7.5-60.9-5.9Z" />
      <path d="M864.91,122.1c-31.1,2.6-60.8,12.9-86.6,30-12.9,8.6-33.5,29.1-41.9,41.9-46.9,71.2-35.1,171.7,26.4,225.3,26.4,23,61.5,37.9,98.4,41.6,50.4,5.2,102.6-9.8,137.6-39.5,6.9-5.8,19.8-20.2,19.3-21.5-.2-.4-14.1-11.7-30.9-25.2l-30.5-24.4-5,4c-22.1,17.9-49.5,28.7-73,28.7-21.1,0-43-8.9-58.7-23.8-38.2-36.4-36.4-104.8,3.7-138.4,8-6.6,23.8-14.9,33.2-17.2,34.5-8.8,67.9,0,94.1,24.7,3.4,3.2,5.6,4.6,6.5,4.1,.7-.4,14.7-11.6,31-24.7,20.6-16.6,29.5-24.3,29-25.2-1.9-3.5-12.3-15.1-17.3-19.5-26.9-23.4-63.2-37.7-104.3-41-14.2-1.1-16.5-1.1-31,.1Z" />
      <path d="M1559.81,122.1c-31.9,4.1-55.4,19-73.1,46.4l-3.9,6-.3-22.3-.2-22.2h-83V453h84l.1-73.8c0-80.9,.9-115.7,3.3-124,8.1-28.9,31.8-48.8,62.5-52.4,9.5-1.1,15.5-.6,36.4,2.8l3.7,.7V121l-11.2,.1c-6.2,.1-14.4,.6-18.3,1Z" />
      <path d="M2589.31,122c-58.5,8.1-103.1,38.9-127,87.5-14,28.6-19.9,56.3-18.7,88.5,1.4,37.5,12.5,70.9,32.5,98,7.5,10.2,23.9,26.2,34.7,33.9,18,12.7,43.6,23.4,68.5,28.6,15.5,3.3,44.4,4.5,61,2.6,44.4-5.1,84.7-25.1,110.7-54.9l6.4-7.4-5.8-6.1c-3.2-3.4-14-14.7-24.1-25.1l-18.3-19-4.2,4.1c-6.7,6.6-22.1,17.6-32.2,23.3-18.7,10.3-36.9,15.2-56.5,15.3-13.6,0-24.4-2-35.9-6.7-27.7-11.2-50.1-40.7-50.1-65.8v-5.8h247v-18.6c0-21.1-1.5-34-6.1-51.2-9.6-36.6-30.9-68.5-60.4-90.5-17.3-12.9-42-23.8-65-28.7-11.3-2.4-44.8-3.6-56.5-2Zm48,72.9c25.9,8.8,44.1,27.1,51.9,52.5,1.1,3.7,2.1,7.9,2.1,9.2v2.4h-161.3l.6-6c1.9-17.4,14.1-35.5,32.1-47.5,17.3-11.5,28.4-14.6,50.1-14.2,13.8,.3,15.8,.6,24.5,3.6Z" />
      <path d="M2908.31,121.7c-7.2,.8-23.2,4.3-30.7,6.8-33.7,11.2-57.4,31.2-67.6,56.7-5.3,13-6.2,18.8-6.1,38.8,0,15.8,.4,19.7,2.2,26.5,6.1,22.3,20.6,40.5,40.8,51.1,11.7,6.2,22.8,10,64.9,22.4,20.9,6.2,41.2,12.6,45,14.4,11.6,5.3,16.4,11.5,17.3,22.1,1,12.6-5.8,24.7-16.5,29.3-14.1,6.1-39.8,7.5-57.3,3.2-11.3-2.7-19.5-5.7-29.3-10.6-12.8-6.5-30.8-19.6-40.2-29.3-2.1-2.3-4.2-4.1-4.6-4.1s-3.8,5.1-7.5,11.2c-3.7,6.2-11.3,18.3-16.8,26.8-8.9,13.6-10.1,15.9-10.1,19.8,0,4.2,.4,4.8,5.9,9.8,11.8,10.7,33.7,23.7,52.1,30.8,19.9,7.6,44,12.8,69.1,14.6,37.3,2.8,72.3-5.4,99.8-23.3,20.3-13.3,33.1-31.7,38.4-55.4,2.6-11.8,2.3-39.9-.6-50.8-4.9-18.3-16-34.5-30.6-45-13.6-9.6-26-14.4-74.6-28.5-29.8-8.7-37.7-11.3-45.6-15-11.5-5.5-17.7-14.3-17.7-25.1s7.1-20,20.4-26.4c13.6-6.5,25.2-6.7,48.4-.9,18.7,4.8,29.8,10,53.6,25.4,3.4,2.2,6.3,3.9,6.4,3.8,2.5-3.7,34.5-56.8,34.5-57.2,0-1.6-22.9-15.6-36-22-21.2-10.4-39.5-15.9-64-19.2-9.5-1.2-34.1-1.7-43-.7Z" />
      <path d="M1619.31,291.5v161.5h84V130h-84v161.5Z" />
      <path d="M2327.01,130.7c-.4,.3-.7,73-.7,161.5v160.8h84V130h-41.3c-22.8,0-41.7,.3-42,.7Z" />
      <path d="M185.91,331.1c-8.5,1.3-14.5,4.4-16.3,8.6-1.7,4.3-1.1,7.9,2.9,15.4,3.6,6.8,3.4,6.6,53,62.2,35.3,39.5,40.2,44.6,44.7,46.5,8.7,3.8,18.9,2.4,25.7-3.5,2.2-1.9,74-81.8,83.2-92.6,6.1-7.1,12.2-18.6,12.2-22.9,0-7.5-5.5-11.7-18-13.7-7.9-1.3-178.6-1.3-187.4,0Z" />
      <path d="M2234.31,638v74h25l-.2-73.8-.3-73.7-12.2-.3-12.3-.3v74.1Z" />
      <path d="M2294.31,638v74h25l-.2-73.8-.3-73.7-12.2-.3-12.3-.3v74.1Z" />
      <path d="M1355.31,577.5v11.5h27v-23h-27v11.5Z" />
      <path d="M704.51,569.1c-13.8,2.3-26.9,8.8-37.2,18.5-16.2,15.3-23.9,35.2-22.7,58.4,.7,12.8,2.5,19.9,7.9,31,3.3,6.9,5.7,10.1,12.7,17,9.6,9.6,17.8,14.3,31.6,18.2,11.1,3.1,31.2,3.1,43-.1,9.8-2.6,24.1-9.4,31.8-15.1l5.7-4.3v-59.7h-61v22h36v26.9l-4.5,2.7c-10.3,6-27.9,8.9-39.6,6.5-24.2-5-39.7-27.3-37.6-54.1,1.1-13.8,6.2-24.5,16.2-33.9,16.6-15.7,43.7-15.9,64.5-.6l4.8,3.5,7.6-8.9c4.2-4.9,7.6-9.3,7.6-9.8-.1-1-6.9-6-13.1-9.6-13.5-7.9-36.1-11.5-53.7-8.6Z" />
      <path d="M241.31,641.5v70.5h25v-44.8l20.8-.5c14.9-.4,22.4-1,26.7-2.2,24.3-6.8,37.5-23.3,37.5-46.8,0-17.8-9.3-33.3-24.3-40.6-11.7-5.7-14.8-6.1-51.9-6.1h-33.8v70.5Zm69.8-45.6c10.2,4.6,16.3,15.1,14.8,25.7-1.1,8.6-5.9,15-14.6,19.5-4.2,2.3-5.7,2.4-24.7,2.7l-20.3,.3v-51.3l19.8,.4c18,.4,20.2,.6,25,2.7Z" />
      <path d="M1746.31,641.5v70.5h106v-22h-81v-38h71v-22h-71v-37h80v-22h-105v70.5Z" />
      <path d="M504.31,590.5v14.5h-13v21h12.9l.3,33.2c.3,28.5,.6,33.9,2.1,37.7,2.6,6.7,6.2,10.8,12,13.8,4.4,2.2,6.8,2.7,15.2,3,8.5,.3,11,0,16.5-1.9l6.5-2.3,.3-10.3c.1-5.6,.1-10.2,0-10.2-.2,0-2.1,.7-4.3,1.5s-6.8,1.4-10.2,1.5c-5.5,0-6.6-.3-9.5-2.9l-3.3-2.9-.3-30.1-.3-30.1h29.2l-.3-10.3-.3-10.2-14.2-.3-14.3-.3v-28.9h-25v14.5Z" />
      <path d="M413.31,603.7c-4.1,.7-12.2,3.4-16.5,5.6-5.9,3-16.2,13.4-20.1,20.3-7.1,12.8-9.2,30-5.4,44.8,4.7,18.3,16.3,31,34.2,37.4,10,3.5,25.9,3.7,36.3,.5,7.9-2.5,17.3-8.2,22.5-13.8l3.5-3.7-7-6.3-7-6.4-3,2.5c-16.2,13.2-36.8,13.5-48.6,.7-4.3-4.7-7.8-11.4-7.9-15.1v-2.2h78v-9.3c0-22.8-10.6-42.1-27.4-50.1-9.9-4.8-21.6-6.6-31.6-4.9Zm19.9,22.2c7,3.6,13,12.3,14.6,21.3l.7,3.8h-55l1-4.2c2.3-10.2,10.1-19.5,18.8-22.3,5.7-1.9,14.7-1.2,19.9,1.4Z" />
      <path d="M861.61,604c-10.7,2.2-21.6,10.6-25.8,20l-2,4.5-.5-11.5-.5-11.5-12.2-.3-12.3-.3v107.1h25v-24.8c0-18.8,.4-26.2,1.5-30.5,4.2-16.3,14.3-25.2,30.8-27.2l5.8-.7-.3-12.7-.3-12.6-2.5-.2c-1.4,0-4.4,.3-6.7,.7Z" />
      <path d="M929.41,604.5c-26.7,6-44.4,28-44.4,55,0,16.2,5.4,28.6,17.2,39.8,8.3,7.8,16.3,11.9,28,14.2,28.8,5.9,56.4-9.9,65.8-37.4,4.8-14,2.3-34.6-5.6-47-3.9-6-13.1-14.9-19.1-18.3-11.4-6.6-29-9.3-41.9-6.3Zm22.8,22c13.9,4.9,22.8,19.2,21.8,35.1-.7,12.3-6.8,22.3-16.9,28-4.8,2.6-6.2,2.9-14.8,2.9-7.9,0-10.3-.4-14.2-2.3-10.7-5.3-17.8-16.2-18.6-28.6-1-15.8,7.4-30.5,20.2-35,5.4-1.9,17.3-2,22.5-.1Z" />
      <path d="M1064.41,604.5c-11,2.5-20.5,7.7-28,15.2-11.3,11.5-16.1,23.4-16.1,40.1,0,24.2,14.2,43.7,37.7,51.9,9.8,3.4,25.2,3.8,34.7,.9,15.5-4.6,27.7-14.3,34.4-27.4,5-9.8,6.7-16.5,6.6-27.2-.2-15-5.3-27.6-15.6-37.9-10.4-10.6-22.5-15.8-38.1-16.6-6-.3-11.4,0-15.6,1Zm26.3,23.4c6.6,3.2,11.7,8.5,15.2,15.7,2.6,5.4,2.9,6.8,2.8,15.9,0,11.5-1.8,16.6-8,23.5-5.6,6.2-12.3,9.2-21.5,9.8-11.2,.7-16.7-1.5-24.6-9.3-5.3-5.3-6.4-7.1-8.4-13.4-5.2-17.4,1.4-34.6,16.4-42.1,5.7-2.9,6.8-3.1,14.7-2.8,6.5,.2,9.7,.9,13.4,2.7Z" />
      <path d="M1208.21,604.4c-6.7,1.8-13,5.9-18.3,11.7l-4.6,5.1v-16.3l-12.2,.3-12.3,.3-.3,53.2-.2,53.3h25v-32.3c0-34.5,.4-38.3,5.1-45.1,9.3-13.6,30.4-11.6,37.3,3.4,2,4.2,2.1,6.5,2.4,39.2l.3,34.8h23.9v-31.5c0-18.4,.4-33.5,1.1-36.4,2.5-11.9,10.6-18.5,22.5-18.4,9,.1,14.3,3.3,18.1,11l2.8,5.8,.3,34.7,.3,34.8h24l-.3-40.8c-.3-39.7-.4-40.8-2.6-46.3-4.6-11.5-14-18.8-27-21.1-14.1-2.4-27.9,2-38,12l-5.5,5.6-1.6-2.4c-5.3-8-11.7-12.5-21-14.6-6.9-1.7-13.1-1.7-19.2,0Z" />
      <path d="M1464.01,604c-6.7,1.7-14,6.1-19.4,11.8l-5.3,5.5v-16.3h-24v107h23.9l.3-33.8,.3-33.7,2.9-5.8c3.4-7,8.6-11.1,16-12.7,10.1-2.1,19.6,1.8,24.4,9.8l2.7,4.7,.3,35.7,.3,35.8h24.9v-36.4c0-20-.4-38.7-1-41.6-2.6-13.5-10.6-23.8-21.8-28-6.4-2.5-18.7-3.4-24.5-2Z" />
      <path d="M1576.81,604c-18.1,3.7-31.2,15.4-37.1,33-2.8,8.1-2.5,26.3,.4,34.4,3.2,8.7,6.3,13.5,12.6,19.4,10.5,9.9,26.6,14.8,40.8,12.4,9.4-1.6,16.7-5.3,24-12l6.1-5.7-.5,9.5c-.4,7.7-.9,10.5-3.1,14.6-5.1,10.1-13.2,14.5-27.7,15.2-12,.5-21.8-1.5-32.6-6.7l-8.1-3.9-4.4,9c-5.1,10.5-5.5,9.7,7,14.9,12.6,5.3,24.3,7.2,40.1,6.6,19.8-.8,31.2-4.9,40.6-14.8,5.6-6.1,8.5-11.4,11.1-20.9,1.6-5.8,1.8-11.5,1.8-55v-48.5l-12.2-.3-12.3-.3v15.7l-5.1-4.8c-10.9-10.3-26.8-14.8-41.4-11.8Zm30.9,23.9c10.7,5.3,15.9,13.6,15.9,25.7s-5.9,21-17.2,26.3c-7.8,3.6-20.2,3.7-27.5,.1-10.2-4.9-15.6-13.2-16.4-24.6-.5-7.8,.7-12.6,4.4-18.6,7.7-12.3,25.9-16.2,40.8-8.9Z" />
      <path d="M2031.31,604.6c-10.3,2.2-18.6,6.8-26.6,14.8s-12.2,15.4-14.9,25.7c-2.4,9-1.6,25.1,1.5,33.4,5.1,13.5,14.6,24.2,26.5,30.1,21.6,10.6,46.9,7.4,63.4-8.2l6.2-5.9-7.6-6.8-7.5-6.9-6,4.5c-3.3,2.5-8.3,5.3-11.1,6.2-7,2.4-18.8,1.7-24.7-1.4-20-10.3-24.1-40.2-7.8-56.6,5.8-5.8,10.8-7.9,19.6-8.3,9.5-.5,16.4,1.9,23.7,8.3l5.1,4.5,7.7-8.2,7.8-8.2-5.2-4.8c-12.4-11.4-31.9-16.2-50.1-12.2Z" />
      <path d="M2143.11,604.6c-19.1,4.6-34.1,20.2-38.9,40.4-1.8,7.5-1.6,22.1,.5,29.9,3.8,14.8,13.6,27.1,26.7,33.5,21.1,10.4,44.6,8,62.7-6.3,8.1-6.5,8.1-6.7,0-13.9l-7.1-6.1-4.1,3.4c-2.4,1.9-6.9,4.7-10.2,6.2-5,2.3-7.3,2.7-14.5,2.7s-9.3-.4-14.2-2.7c-6.8-3.4-12-9.1-14.7-16.4-1.1-3-2-5.8-2-6.3,0-.6,15.3-1.1,39.3-1.2l39.2-.3,.3-6.3c.7-15.4-6-34-15.8-44.1-11.4-11.5-30.5-16.6-47.2-12.5Zm22.7,21c7.6,3.6,13.1,11.1,15.3,21.2l1,4.2h-27.4c-30.8,0-28.8,.7-25.4-8.1,3.7-10,8.8-15.2,17.9-18.6,4.6-1.7,13.6-1.1,18.6,1.3Z" />
      <path d="M2387.61,604.4c-23.7,5.4-40.3,28-40.3,54.6,0,17,5.6,30.6,16.7,41,11.3,10.6,21.7,14.5,38.8,14.4,11.9-.1,19.6-2,28.5-7.2,4.5-2.6,14-10.9,14-12.2,0-.4-3.2-3.5-7-6.9l-7-6.3-3.3,2.9c-11.6,10.2-26.4,12.8-39.2,6.9-8.2-3.7-13.7-10.4-16.3-19.9l-1-3.7h78.8v-8.8c0-20.5-8.9-39.1-22.8-48.1-10.8-6.9-27-9.6-39.9-6.7Zm19.1,20c9,2.7,14.9,9.2,18,19.6,.9,3,1.6,5.7,1.6,6.2,0,.4-12.4,.8-27.5,.8s-27.5-.2-27.5-.4,.9-3.4,2.1-7.1c1.7-5.5,3.1-7.8,7.4-12.1,7.6-7.7,16.1-9.9,25.9-7Z" />
      <path d="M2526.01,604.1c-6.2,1.5-12.9,5.5-18.2,10.9l-5,5.1-.5-7.3-.5-7.3-12.2-.3-12.3-.3v107.1h24.9l.3-35.3,.3-35.2,2.8-4.8c3.4-5.8,8.6-9.3,15.5-10.7,11.1-2.1,20.6,2.4,25,11.8l2.7,5.7,.3,34.2,.4,34.3h23.8v-37c0-45.4-.8-50.4-10.2-60.6-8.5-9.3-23.6-13.5-37.1-10.3Z" />
      <path d="M2642.31,604.6c-10.3,2.2-18.6,6.8-26.6,14.8-22.3,22.3-22.1,58.2,.6,80,20.9,20.2,54.7,20.7,75.8,1.1l6.3-5.8-6.8-6.9c-3.7-3.7-7.1-6.8-7.6-6.8s-3.6,2-6.8,4.4c-7.8,5.9-14.1,7.9-23.2,7.4-12.6-.6-21.5-6.8-27-18.7-2.6-5.6-3.1-7.7-3.1-14.6,0-14.7,5.8-25.3,17.4-31.3,6.2-3.2,6.9-3.4,15-3,9.7,.5,14.5,2.5,21.4,8.9l4.3,3.9,7.9-8.1,7.9-8.1-5.5-5.1c-12.4-11.4-31.8-16.1-50-12.1Z" />
      <path d="M2754.71,604.4c-18.9,4.3-33.9,19.4-38.9,39.1-1.9,7.5-1.9,24.3,0,31.5,5.2,19.8,20.6,34.2,41,38.5,18.1,3.8,36.4-.8,49.8-12.6,3.1-2.8,5.7-5.4,5.7-5.8,0-.3-3.2-3.5-7.1-6.9l-7.1-6.2-4.1,3.5c-16,13.7-40.4,11.7-50.5-4.2-1.6-2.6-3.3-5.9-3.7-7.3-.3-1.4-.9-3.3-1.1-4.2-.5-1.7,2-1.8,38.8-2l39.3-.3-.1-10.5c-.3-18.8-7.5-34.5-20.2-44.2-10.6-8.1-27.9-11.5-41.8-8.4Zm18.9,20c2.5,.7,6,2.4,7.7,3.6,4,2.8,8.7,10.1,10.1,15.5,.6,2.2,1.2,4.8,1.5,5.7,.5,1.7-1.3,1.8-27.1,1.8h-27.7l.7-3.3c3.7-17.7,19-28.1,34.8-23.3Z" />
      <path d="M1356.31,658.5v53.5h25v-107h-25v53.5Z" />
      <path d="M1874.61,606.4c.3,.8,8.7,12.7,18.6,26.4l18,25-18.6,25.9c-10.2,14.2-19,26.4-19.5,27-.8,1,1.7,1.3,12.3,1.3l13.4-.1,12.5-18.4c6.9-10.1,12.8-18.3,13.2-18.2s6.4,8.4,13.3,18.5l12.6,18.2h26.9l-19.5-27.1c-11.9-16.6-19.2-27.6-18.7-28.3,.4-.7,8.7-12.3,18.5-25.8,9.7-13.6,17.7-24.9,17.7-25.2s-5.7-.6-12.7-.6h-12.8l-12.5,18c-6.8,9.9-12.7,17.7-13.1,17.2-.3-.4-5.9-8.5-12.3-18l-11.7-17.2h-13.1c-10.7,0-12.9,.2-12.5,1.4Z" />
    </svg>
  );

  const dribbleLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="30"
      viewBox="0 0 210 59"
      fill="none"
      className={clsx('text-neutral-950', className)}
    >
      <title>Dribbble: the community for graphic appearance</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M206.622 31.928C207.065 31.4116 207.85 31.4352 208.253 31.986H208.25L209.784 34.0834C210.075 34.4864 210.073 35.0425 209.769 35.4349C207.106 38.8893 202.44 42.2143 196.81 42.5359C192.366 42.7887 188.701 41.1051 186.706 37.9221C186.311 37.2925 185.44 37.2557 184.997 37.8511C182.63 41.0286 179.766 43.5134 176.782 43.6845C171.467 43.9876 169.966 40.4228 171.28 32.563C171.412 31.7805 170.726 31.1192 169.987 31.3141C168.885 31.6065 167.715 31.7356 166.528 31.633C166.034 31.5907 165.571 31.8912 165.422 32.3811C163.455 38.8418 158.774 44.8518 152.715 45.1997C148.847 45.421 143.069 43.205 143.647 33.9462C143.695 33.1927 143.019 32.5999 142.323 32.8106C141.11 33.1795 139.804 33.3534 138.474 33.2401C137.981 33.1979 137.52 33.4983 137.371 33.9885C135.404 40.449 130.723 46.4592 124.664 46.8068C120.796 47.0282 115.018 44.8124 115.596 35.5536C115.644 34.7998 114.968 34.207 114.272 34.418C113.059 34.7869 111.753 34.9634 110.423 34.8473C109.93 34.8053 109.469 35.1057 109.32 35.5956C107.352 42.0564 102.672 48.0664 96.6132 48.4142C93.8613 48.5723 90.1398 47.4945 88.4308 43.5264C88.1016 42.7599 87.1144 42.6438 86.6257 43.3105C84.2334 46.5751 81.3193 49.152 78.2762 49.3259C75.1571 49.505 73.4509 48.2535 72.7091 46.0216C72.4458 45.2339 71.4609 45.0467 70.9293 45.6712C68.8002 48.1744 66.3749 50.0082 63.9216 50.1479C60.1393 50.3666 57.9619 47.563 57.7823 44.1667C57.5747 40.204 59.2887 35.564 61.2025 30.4999C61.4684 29.7964 60.9873 29.0348 60.2608 29.0032C59.157 28.956 57.8963 28.8399 56.7113 28.6185C56.1771 28.5159 55.6583 28.8479 55.5063 29.3907C53.243 37.4716 49.7771 45.392 46.8529 50.074C46.5263 50.5984 45.8505 50.7381 45.3593 50.377L43.1264 48.7331C42.6682 48.393 42.5441 47.7397 42.8504 47.247C47.0759 40.478 50.8278 29.8807 52.1215 22.0421C52.2025 21.5415 52.61 21.17 53.0986 21.141L56.0683 20.9697C56.7493 20.9302 57.2861 21.5652 57.162 22.2634L57.1493 22.3372C57.0379 22.959 57.4532 23.5439 58.0532 23.6257C60.7164 23.992 64.6963 24.0366 67.3975 23.9313C68.157 23.9023 68.6938 24.6875 68.4178 25.4226C66.2507 31.1876 63.3469 39.1765 63.5139 42.3382C63.5899 43.7662 64.2204 44.5462 65.3291 44.4829C67.4508 44.3619 70.7141 40.0959 73.1876 35.3455C73.2331 35.261 73.2659 35.169 73.2862 35.0741C74.1196 31.3543 75.3565 27.2068 76.6061 23.0163L76.6837 22.7561C76.8128 22.3188 77.1901 22.0131 77.6306 21.9868L81.1876 21.7839C81.9219 21.7417 82.4712 22.4795 82.2485 23.2093C82.0654 23.8112 81.883 24.409 81.7023 25.0014C78.5723 35.2603 75.9438 43.8759 79.4838 43.6742C81.7978 43.5422 85.0764 39.6164 87.8966 34.0279C87.9421 33.9356 87.9751 33.8381 87.9954 33.7355C88.1372 33.0055 88.3092 32.2416 88.5195 31.4432C90.1639 24.8753 92.0286 18.3691 93.8955 11.855C94.4717 9.8446 95.0481 7.83341 95.6182 5.81945C95.7449 5.37417 96.1245 5.06062 96.57 5.03426L100.221 4.82611C100.963 4.78396 101.512 5.52962 101.279 6.26474C99.8208 10.8388 98.2967 15.7106 96.8487 20.4006C96.5448 21.3887 97.603 22.2107 98.4386 21.6416C99.8791 20.6562 101.545 20.0027 103.158 19.9105C107.267 19.676 110.064 23.0565 110.332 28.1496C110.347 28.4184 110.363 28.7082 110.37 29.0032C110.385 29.5673 110.808 30.023 111.348 30.0704C113.282 30.2417 115.259 29.6673 116.786 28.3051C116.943 28.1654 117.049 27.9757 117.102 27.7701C118.616 21.8916 120.287 16.0568 121.959 10.2147C122.532 8.21455 123.105 6.21353 123.672 4.20956C123.798 3.76427 124.178 3.45072 124.624 3.42438L128.274 3.21623C129.016 3.17408 129.566 3.91972 129.333 4.65484C127.874 9.22892 126.35 14.1007 124.902 18.7907C124.598 19.7788 125.657 20.6008 126.492 20.0317C127.933 19.0463 129.599 18.3929 131.211 18.3006C135.32 18.0662 138.117 21.4466 138.386 26.5399C138.401 26.8084 138.416 27.0985 138.424 27.3935C138.436 27.9573 138.862 28.4132 139.401 28.4607C141.335 28.6318 143.312 28.0573 144.839 26.6951C144.996 26.5557 145.102 26.3659 145.156 26.1604C146.67 20.2818 148.34 14.4471 150.013 8.6051C150.586 6.60484 151.158 4.60372 151.725 2.59968C151.852 2.15439 152.232 1.84085 152.677 1.8145L156.328 1.60635C157.07 1.56419 157.619 2.30985 157.386 3.04497C155.928 7.61902 154.404 12.4908 152.956 17.1808C152.652 18.1689 153.71 18.991 154.546 18.4219C155.986 17.4364 157.652 16.783 159.265 16.6908C163.374 16.4563 166.171 19.8367 166.44 24.9299C166.455 25.2013 166.47 25.4885 166.477 25.7835C166.493 26.3447 166.913 26.8032 167.452 26.8507C169.323 27.0166 171.237 26.4844 172.741 25.2171C172.908 25.0774 173.024 24.8798 173.08 24.6637C174.804 18.0187 177.336 9.31324 179.777 0.981894C179.906 0.541877 180.285 0.236236 180.726 0.209888L184.344 0.0017367C185.078 -0.0404207 185.627 0.692063 185.407 1.42191C182.047 12.5778 179.308 22.3372 177.797 28.0944C175.789 35.9039 175.711 38.1567 177.994 38.025C179.911 37.9143 182.493 35.1952 184.928 31.0847C185.025 30.924 185.075 30.7397 185.083 30.5526C185.402 22.324 190.447 14.8385 197.946 14.409C202.969 14.1218 205.721 17.916 205.918 21.6495C206.293 28.7767 199.248 33.3324 192.42 32.9107C191.625 32.8606 191.047 33.7145 191.397 34.4574C192.351 36.4967 194.359 37.6352 197.787 37.4374C201.048 37.2531 204.468 34.439 206.622 31.928ZM93.7548 33.9278C92.1345 40.4228 94.1017 42.9652 96.646 42.8203C100.823 42.5805 104.864 34.9263 104.553 29.019C104.416 26.4396 102.907 25.0958 101.145 25.1961C98.2106 25.3646 95.0512 28.745 93.7548 33.9278ZM121.808 32.3207C120.188 38.8154 122.155 41.3581 124.7 41.2131H124.697C128.874 40.9734 132.917 33.3192 132.606 27.4119C132.472 24.8324 130.96 23.4886 129.198 23.5887C126.264 23.7574 123.105 27.1379 121.808 32.3207ZM149.862 30.7133C148.242 37.2082 150.209 39.7509 152.753 39.606H152.751C156.925 39.3662 160.971 31.712 160.66 25.8047C160.525 23.2251 159.014 21.8814 157.252 21.9815C154.318 22.1501 151.158 25.5307 149.862 30.7133ZM200.584 22.2239C200.559 20.5218 199.513 19.2887 197.817 19.3862H197.815C194.483 19.5785 191.875 23.1856 191.045 27.562C190.913 28.2577 191.422 28.9058 192.103 28.8899C196.407 28.7821 200.721 25.9416 200.584 22.2239ZM44.3525 25.3837C43.9171 12.1962 35.3423 3.49339 22.6712 3.94658C17.2307 4.19426 11.0052 6.25733 6.32164 9.9461C5.88113 10.2939 5.76719 10.9315 6.06593 11.4163L8.05331 14.6519C8.39254 15.2052 9.11407 15.3185 9.60776 14.9075C13.1724 11.9459 18.0383 10.0041 22.7193 9.79855C31.403 9.43757 37.7828 14.9971 38.1551 25.7367C38.6209 38.2417 30.2157 52.5461 16.7091 53.3207C16.2382 53.3471 15.7471 53.3577 15.2559 53.3577C14.5673 53.3577 14.0585 52.6858 14.2306 51.9901C16.8357 41.4744 19.8763 30.1974 22.9776 19.7029C23.1928 18.973 22.6459 18.2458 21.9143 18.288L17.9648 18.5146C17.5218 18.5409 17.142 18.8492 17.0129 19.2918C14.0331 29.6045 11.0508 40.7895 8.36723 51.284C8.21279 51.89 7.59761 52.2379 7.02544 52.0427C5.62543 51.566 4.34693 51.0232 3.2583 50.3881C2.73677 50.0825 2.07601 50.2987 1.80765 50.8571L0.11142 54.4037C-0.139216 54.9281 0.0455967 55.5709 0.539275 55.8527C4.38489 58.0345 10.223 59.2806 16.0914 58.9462C35.4032 57.8393 44.864 40.0015 44.3525 25.3889V25.3837ZM82.3044 9.18082C79.955 9.31518 77.8713 11.9553 78.0183 14.7377C78.1143 16.5715 79.2917 17.7967 81.1195 17.694C83.4689 17.5596 85.6106 14.7798 85.4714 12.1318C85.3754 10.298 84.0005 9.08333 82.3044 9.18082Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <Link
      {...props}
      href={href}
      className={clsx(
        'inline-flex h-10 items-center justify-center rounded-button border border-transparent outline-none',
        focusRing({ isFocusVisible: true }),
        borderStyles({ isFocusVisible: true })
      )}
    >
      {gymSharkLogo}
    </Link>
  );
};
