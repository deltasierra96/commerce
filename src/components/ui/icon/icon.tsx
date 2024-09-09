import { clsx } from '@/utils';
import { Fragment, type SVGProps } from 'react';

export const IconsList = [
  'address-book',
  'adjustments',
  'alert-triangle-filled',
  'align-center',
  'align-left',
  'align-right',
  'apple',
  'archive',
  'arrow-autofit-down',
  'arrow-autofit-left',
  'arrow-autofit-right',
  'arrow-autofit-up',
  'arrow-bar-both',
  'arrow-bar-down',
  'arrow-bar-left',
  'arrow-bar-right',
  'arrow-bar-to-down',
  'arrow-bar-to-left',
  'arrow-bar-to-right',
  'arrow-bar-to-up',
  'arrow-bar-up',
  'arrow-down-circle',
  'arrow-down-left',
  'arrow-down-right',
  'arrow-down',
  'arrow-left-circle',
  'arrow-left',
  'arrow-long-down',
  'arrow-long-left',
  'arrow-long-right',
  'arrow-long-up',
  'arrow-refresh',
  'arrow-right-circle',
  'arrow-right',
  'arrow-small-down',
  'arrow-small-left',
  'arrow-small-right',
  'arrow-small-up',
  'arrow-trending-down',
  'arrow-trending-up',
  'arrow-up-circle',
  'arrow-up-left',
  'arrow-up-on-square-stack',
  'arrow-up-on-square',
  'arrow-up-right',
  'arrow-up',
  'arrow-uturn-down',
  'arrow-uturn-left',
  'arrow-uturn-right',
  'arrow-uturn-up',
  'arrows-left-right',
  'arrows-move-horizontal',
  'arrows-move-vertical',
  'arrows-pointing-in',
  'arrows-pointing-out',
  'article',
  'at-symbol',
  'backspace',
  'bell-alert',
  'bell-slash',
  'bell-snooze',
  'bell',
  'blog',
  'bold-off',
  'bold',
  'book-open',
  'bookmark-slash',
  'bookmark-square',
  'bookmark',
  'briefcase',
  'brush',
  'bug',
  'cake',
  'calculator',
  'calendar-clock',
  'calendar-days',
  'calendar',
  'camera',
  'car',
  'cash',
  'chart-bar',
  'chart-pie',
  'chat-bubble-dots',
  'chat-bubble-empty',
  'chat-bubble-oval-dots',
  'chat-bubble-oval-empty',
  'chat-bubble-stacked',
  'chat-bubble-text',
  'check',
  'chef-hat',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevrons-down',
  'chevrons-left',
  'chevrons-right',
  'chevrons-up',
  'circle-check-filled',
  'circle-plus',
  'circle-x-filled',
  'clipboard',
  'cloud',
  'code',
  'columns',
  'copy',
  'credit-card',
  'credit-card',
  'device-desktop',
  'dots-vertical',
  'dots',
  'download',
  'edit-2',
  'edit',
  'email',
  'exclamation-mark-circle',
  'exclamation-mark',
  'eye-check',
  'eye-off',
  'eye',
  'facebook-filled',
  'facebook-meta',
  'facebook',
  'female',
  'file-download',
  'file-search',
  'filter-minus',
  'filter-plus',
  'filter',
  'flame',
  'folder-down',
  'gif',
  'github-filled',
  'github',
  'google',
  'grid',
  'heart',
  'help',
  'history',
  'home',
  'hourglass',
  'id',
  'info-circle-filled',
  'instagram',
  'italic',
  'layout-dashboard',
  'layout-grid',
  'layout-sidebar-left-collapse',
  'layout-sidebar-left-expand',
  'layout',
  'list-numbers',
  'list',
  'list',
  'loader',
  'lock',
  'login',
  'logout',
  'mail',
  'male',
  'map-pin',
  'menu',
  'meta',
  'minus',
  'moon',
  'package',
  'pencil',
  'phone',
  'photo-minus',
  'photo-plus',
  'photo-up',
  'photo',
  'plus',
  'point-filled',
  'point',
  'refresh',
  'search-list',
  'search-map',
  'search-off',
  'search',
  'selector',
  'settings',
  'share',
  'share',
  'shopping-bag',
  'shopping-cart',
  'sort-asc',
  'sort-desc',
  'source-code',
  'square-rounded-chevron-down',
  'square-rounded-chevron-left',
  'square-rounded-chevron-right',
  'square-rounded-chevron-up',
  'square-rounded-chevrons-down',
  'square-rounded-chevrons-left',
  'square-rounded-chevrons-right',
  'square-rounded-chevrons-up',
  'square-rounded-filled',
  'square-rounded-minus',
  'square-rounded',
  'star-half',
  'star',
  'store',
  'strikethrough',
  'sun',
  'tag',
  'tags',
  'thumb-down-filled',
  'thumb-down',
  'thumb-up-filled',
  'thumb-up',
  'trash',
  'transition-down',
  'transition-left',
  'transition-right',
  'transition-up',
  'trending-down',
  'trending-up',
  'truck-return',
  'truck',
  'twitter-filled',
  'twitter',
  'underline',
  'user-bolt',
  'user-cancel',
  'user-check',
  'user-circle',
  'user-code',
  'user-cog',
  'user-dollar',
  'user-down',
  'user-edit',
  'user-exclamation',
  'user-heart',
  'user-minus',
  'user-off',
  'user-pause',
  'user-pin',
  'user-plus',
  'user-question',
  'user-search',
  'user-share',
  'user-shield',
  'user-star',
  'user-up',
  'user-x',
  'user',
  'users-group',
  'users-minus',
  'users-search',
  'users',
  'video-plus',
  'video',
  'voucher',
  'warning',
  'whatsapp',
  'world',
  'x',
] as const;

export type IconTypeProps = (typeof IconsList)[number];

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
  icon: IconTypeProps;
  label?: string;
};

const SVG = ({ icon }: { icon: IconTypeProps }) => {
  switch (icon) {
    case 'trash':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 7l16 0' />
          <path d='M10 11l0 6' />
          <path d='M14 11l0 6' />
          <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
          <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
        </Fragment>
      );
    case 'columns':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 6l5.5 0' />
          <path d='M4 10l5.5 0' />
          <path d='M4 14l5.5 0' />
          <path d='M4 18l5.5 0' />
          <path d='M14.5 6l5.5 0' />
          <path d='M14.5 10l5.5 0' />
          <path d='M14.5 14l5.5 0' />
          <path d='M14.5 18l5.5 0' />
        </Fragment>
      );
    case 'sort-desc':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 6l9 0' />
          <path d='M4 12l7 0' />
          <path d='M4 18l7 0' />
          <path d='M15 15l3 3l3 -3' />
          <path d='M18 6l0 12' />
        </Fragment>
      );
    case 'sort-asc':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 6l7 0' />
          <path d='M4 12l7 0' />
          <path d='M4 18l9 0' />
          <path d='M15 9l3 -3l3 3' />
          <path d='M18 6l0 12' />
        </Fragment>
      );
    case 'filter-minus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3' />
          <path d='M16 19h6' />
        </Fragment>
      );
    case 'filter-plus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3' />
          <path d='M16 19h6' />
          <path d='M19 16v6' />
        </Fragment>
      );
    case 'filter':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z' />
        </Fragment>
      );
    case 'eye-check':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
          <path d='M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032' />
          <path d='M15 19l2 2l4 -4' />
        </Fragment>
      );
    case 'world':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' />
          <path d='M3.6 9h16.8' />
          <path d='M3.6 15h16.8' />
          <path d='M11.5 3a17 17 0 0 0 0 18' />
          <path d='M12.5 3a17 17 0 0 1 0 18' />
        </Fragment>
      );
    case 'list':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 6l11 0' />
          <path d='M9 12l11 0' />
          <path d='M9 18l11 0' />
          <path d='M5 6l0 .01' />
          <path d='M5 12l0 .01' />
          <path d='M5 18l0 .01' />
        </Fragment>
      );
    case 'list-numbers':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M11 6h9' />
          <path d='M11 12h9' />
          <path d='M12 18h8' />
          <path d='M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4' />
          <path d='M6 10v-6l-2 2' />
        </Fragment>
      );
    case 'strikethrough':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M5 12l14 0' />
          <path d='M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5' />
        </Fragment>
      );
    case 'align-left':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 6l16 0' />
          <path d='M4 12l10 0' />
          <path d='M4 18l14 0' />
        </Fragment>
      );
    case 'align-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 6l16 0' />
          <path d='M10 12l10 0' />
          <path d='M6 18l14 0' />
        </Fragment>
      );
    case 'align-center':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 6l16 0' />
          <path d='M8 12l8 0' />
          <path d='M6 18l12 0' />
        </Fragment>
      );
    case 'underline':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M7 5v5a5 5 0 0 0 10 0v-5' />
          <path d='M5 19h14' />
        </Fragment>
      );
    case 'italic':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M11 5l6 0' />
          <path d='M7 19l6 0' />
          <path d='M14 5l-4 14' />
        </Fragment>
      );
    case 'bold':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M7 5h6a3.5 3.5 0 0 1 0 7h-6z' />
          <path d='M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7' />
        </Fragment>
      );
    case 'bold-off':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 5h4a3.5 3.5 0 0 1 2.222 6.204m-3.222 .796h-5v-5' />
          <path d='M17.107 17.112a3.5 3.5 0 0 1 -3.107 1.888h-7v-7' />
          <path d='M3 3l18 18' />
        </Fragment>
      );
    case 'tag':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
          <path d='M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z' />
        </Fragment>
      );
    case 'tags':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z' />
          <path d='M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592' />
          <path d='M7 10h-.01' />
        </Fragment>
      );
    case 'info-circle-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path
            d='M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z'
            strokeWidth='0'
            fill='currentColor'
          />
        </Fragment>
      );
    case 'circle-check-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path
            d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'
            strokeWidth='0'
            fill='currentColor'
          />
        </Fragment>
      );
    case 'alert-triangle-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path
            d='M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z'
            strokeWidth='0'
            fill='currentColor'
          />
        </Fragment>
      );
    case 'circle-x-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path
            d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z'
            strokeWidth='0'
            fill='currentColor'
          />
        </Fragment>
      );
    case 'photo-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M15 8h.01' />
          <path d='M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5' />
          <path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3.5 3.5' />
          <path d='M14 14l1 -1c.679 -.653 1.473 -.829 2.214 -.526' />
          <path d='M19 22v-6' />
          <path d='M22 19l-3 -3l-3 3' />
        </Fragment>
      );
    case 'video':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z' />
          <path d='M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z' />
        </Fragment>
      );
    case 'video-plus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z' />
          <path d='M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z' />
          <path d='M7 12l4 0' />
          <path d='M9 10l0 4' />
        </Fragment>
      );
    case 'gif':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M8 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1' />
          <path d='M12 8v8' />
          <path d='M16 12h3' />
          <path d='M20 8h-4v8' />
        </Fragment>
      );
    case 'photo':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M15 8h.01' />
          <path d='M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z' />
          <path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5' />
          <path d='M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3' />
        </Fragment>
      );
    case 'photo-plus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M15 8h.01' />
          <path d='M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5' />
          <path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4' />
          <path d='M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54' />
          <path d='M16 19h6' />
          <path d='M19 16v6' />
        </Fragment>
      );
    case 'photo-minus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M15 8h.01' />
          <path d='M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v9' />
          <path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4' />
          <path d='M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2' />
          <path d='M16 19h6' />
        </Fragment>
      );
    case 'flame':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z' />
        </Fragment>
      );
    case 'trending-up':
    case 'trending-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M3 7l6 6l4 -4l8 8' />
          <path d='M21 10l0 7l-7 0' />
        </Fragment>
      );
    case 'thumb-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3' />
        </Fragment>
      );
    case 'thumb-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3' />
        </Fragment>
      );
    case 'thumb-up-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path
            d='M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z'
            strokeWidth='0'
            fill='currentColor'
          />
          <path
            d='M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z'
            strokeWidth='0'
            fill='currentColor'
          />
        </Fragment>
      );
    case 'thumb-down-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path
            d='M13 21.008a3 3 0 0 0 2.995 -2.823l.005 -.177v-4h2a3 3 0 0 0 2.98 -2.65l.015 -.173l.005 -.177l-.02 -.196l-1.006 -5.032c-.381 -1.625 -1.502 -2.796 -2.81 -2.78l-.164 .008h-8a1 1 0 0 0 -.993 .884l-.007 .116l.001 9.536a1 1 0 0 0 .5 .866a2.998 2.998 0 0 1 1.492 2.396l.007 .202v1a3 3 0 0 0 3 3z'
            strokeWidth='0'
            fill='currentColor'
          />
          <path
            d='M5 14.008a1 1 0 0 0 .993 -.883l.007 -.117v-9a1 1 0 0 0 -.883 -.993l-.117 -.007h-1a2 2 0 0 0 -1.995 1.852l-.005 .15v7a2 2 0 0 0 1.85 1.994l.15 .005h1z'
            strokeWidth='0'
            fill='currentColor'
          />
        </Fragment>
      );
    case 'refresh':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4'></path>
          <path d='M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4'></path>
        </Fragment>
      );
    case 'layout':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z'></path>
          <path d='M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z'></path>
          <path d='M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z'></path>
        </Fragment>
      );
    case 'layout-grid':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z'></path>
          <path d='M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z'></path>
          <path d='M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z'></path>
          <path d='M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z'></path>
        </Fragment>
      );
    case 'layout-dashboard':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4 4h6v8h-6z'></path>
          <path d='M4 16h6v4h-6z'></path>
          <path d='M14 12h6v8h-6z'></path>
          <path d='M14 4h6v4h-6z'></path>
        </Fragment>
      );
    case 'google':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M17.788 5.108a9 9 0 1 0 3.212 6.892h-8'></path>
        </Fragment>
      );
    case 'github':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
        </Fragment>
      );
    case 'github-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path
            d='M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z'
            strokeWidth='0'
            fill='currentColor'
          ></path>
        </Fragment>
      );
    case 'exclamation-mark':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 19v.01'></path>
          <path d='M12 15v-10'></path>
        </Fragment>
      );
    case 'exclamation-mark-circle':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
          <path d='M12 9v4'></path>
          <path d='M12 16v.01'></path>
        </Fragment>
      );
    case 'arrows-move-horizontal':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M18 9l3 3l-3 3'></path>
          <path d='M15 12h6'></path>
          <path d='M6 9l-3 3l3 3'></path>
          <path d='M3 12h6'></path>
        </Fragment>
      );
    case 'arrows-move-vertical':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M9 18l3 3l3 -3'></path>
          <path d='M12 15v6'></path>
          <path d='M15 6l-3 -3l-3 3'></path>
          <path d='M12 3v6'></path>
        </Fragment>
      );
    case 'share':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
          <path d='M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
          <path d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
          <path d='M8.7 10.7l6.6 -3.4'></path>
          <path d='M8.7 13.3l6.6 3.4'></path>
        </Fragment>
      );
    case 'arrows-left-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M21 17l-18 0'></path>
          <path d='M6 10l-3 -3l3 -3'></path>
          <path d='M3 7l18 0'></path>
          <path d='M18 20l3 -3l-3 -3'></path>
        </Fragment>
      );
    case 'device-desktop':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z'></path>
          <path d='M7 20h10'></path>
          <path d='M9 16v4'></path>
          <path d='M15 16v4'></path>
        </Fragment>
      );
    case 'adjustments':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0'></path>
          <path d='M6 4v4'></path>
          <path d='M6 12v8'></path>
          <path d='M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0'></path>
          <path d='M12 4v10'></path>
          <path d='M12 18v2'></path>
          <path d='M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0'></path>
          <path d='M18 4v1'></path>
          <path d='M18 9v11'></path>
        </Fragment>
      );
    case 'list':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M9 6l11 0'></path>
          <path d='M9 12l11 0'></path>
          <path d='M9 18l11 0'></path>
          <path d='M5 6l0 .01'></path>
          <path d='M5 12l0 .01'></path>
          <path d='M5 18l0 .01'></path>
        </Fragment>
      );
    case 'circle-plus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
          <path d='M9 12l6 0'></path>
          <path d='M12 9l0 6'></path>
        </Fragment>
      );
    case 'square-rounded-minus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M9 12h6'></path>
          <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'></path>
        </Fragment>
      );
    case 'square-rounded-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path
            d='M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001z'
            strokeWidth='0'
            fill='currentColor'
          ></path>
        </Fragment>
      );
    case 'square-rounded':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'></path>
        </Fragment>
      );
    case 'hourglass':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'></path>
          <path d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'></path>
        </Fragment>
      );
    case 'pencil':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4'></path>
          <path d='M13.5 6.5l4 4'></path>
        </Fragment>
      );
    case 'folder-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5'></path>
          <path d='M19 16v6'></path>
          <path d='M22 19l-3 3l-3 -3'></path>
        </Fragment>
      );
    case 'chart-bar':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
          />
        </Fragment>
      );
    case 'chart-pie':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'
          />
        </Fragment>
      );
    case 'camera':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
          />
        </Fragment>
      );
    case 'book-open':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
          />
        </Fragment>
      );
    case 'bookmark':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
          />
        </Fragment>
      );
    case 'bookmark-slash':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5'
          />
        </Fragment>
      );
    case 'bookmark-square':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9'
          />
        </Fragment>
      );
    case 'briefcase':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
          />
        </Fragment>
      );
    case 'bug':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082'
          />
        </Fragment>
      );
    case 'cake':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z'
          />
        </Fragment>
      );
    case 'calculator':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z'
          />
        </Fragment>
      );
    case 'arrows-pointing-in':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25'
          />
        </Fragment>
      );
    case 'arrows-pointing-out':
      return (
        <Fragment>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15'
            />
          </svg>
        </Fragment>
      );
    case 'arrow-trending-down':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181'
          />
        </Fragment>
      );
    case 'arrow-trending-up':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941'
          />
        </Fragment>
      );
    case 'arrow-up-circle':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </Fragment>
      );
    case 'arrow-down-circle':
      return (
        <Fragment>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </Fragment>
      );
    case 'arrow-left-circle':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </Fragment>
      );
    case 'arrow-right-circle':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </Fragment>
      );
    case 'backspace':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z'
          />
        </Fragment>
      );
    case 'arrow-up-on-square-stack':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75'
          />
        </Fragment>
      );
    case 'arrow-up-on-square':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15'
          />
        </Fragment>
      );
    case 'cash':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
          />
        </Fragment>
      );
    case 'at-symbol':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25'
          />
        </Fragment>
      );
    case 'map-pin':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
          />
        </Fragment>
      );
    case 'bell':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
          />
        </Fragment>
      );
    case 'bell-alert':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5'
          />
        </Fragment>
      );
    case 'bell-slash':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53'
          />
        </Fragment>
      );
    case 'bell-snooze':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3'
          />
        </Fragment>
      );
    case 'home':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
          />
        </Fragment>
      );
    case 'blog':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z'></path>
          <path d='M16 7h4'></path>
          <path d='M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3'></path>
        </Fragment>
      );
    case 'edit':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1'></path>
          <path d='M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z'></path>
          <path d='M16 5l3 3'></path>
        </Fragment>
      );
    case 'grid':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='5' cy='5' r='1'></circle>
          <circle cx='12' cy='5' r='1'></circle>
          <circle cx='19' cy='5' r='1'></circle>
          <circle cx='5' cy='12' r='1'></circle>
          <circle cx='12' cy='12' r='1'></circle>
          <circle cx='19' cy='12' r='1'></circle>
          <circle cx='5' cy='19' r='1'></circle>
          <circle cx='12' cy='19' r='1'></circle>
          <circle cx='19' cy='19' r='1'></circle>
        </Fragment>
      );
    case 'edit-2':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4'></path>
          <line x1='13.5' y1='6.5' x2='17.5' y2='10.5'></line>
        </Fragment>
      );
    case 'menu':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <line x1='4' y1='6' x2='20' y2='6'></line>
          <line x1='4' y1='12' x2='20' y2='12'></line>
          <line x1='4' y1='18' x2='20' y2='18'></line>
        </Fragment>
      );
    case 'warning':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='12' cy='12' r='9'></circle>
          <line x1='12' y1='8' x2='12' y2='12'></line>
          <line x1='12' y1='16' x2='12.01' y2='16'></line>
        </Fragment>
      );
    case 'brush':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M3 21v-4a4 4 0 1 1 4 4h-4'></path>
          <path d='M21 3a16 16 0 0 0 -12.8 10.2'></path>
          <path d='M21 3a16 16 0 0 1 -10.2 12.8'></path>
          <path d='M10.6 9a9 9 0 0 1 4.4 4.4'></path>
        </Fragment>
      );
    case 'phone':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>
        </Fragment>
      );
    case 'check':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M5 12l5 5l10 -10'></path>
        </Fragment>
      );
    case 'heart':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
        </Fragment>
      );
    case 'minus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <line x1='5' y1='12' x2='19' y2='12'></line>
        </Fragment>
      );
    case 'plus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <line x1='12' y1='5' x2='12' y2='19'></line>
          <line x1='5' y1='12' x2='19' y2='12'></line>
        </Fragment>
      );
    case 'cloud':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 .996c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878'></path>
        </Fragment>
      );
    case 'help':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='12' cy='12' r='9'></circle>
          <line x1='12' y1='17' x2='12' y2='17.01'></line>
          <path d='M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4'></path>
        </Fragment>
      );
    case 'arrow-refresh':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4'></path>
          <path d='M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4'></path>
        </Fragment>
      );
    case 'eye':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='12' cy='12' r='2'></circle>
          <path d='M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7'></path>
        </Fragment>
      );
    case 'eye-off':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <line x1='3' y1='3' x2='21' y2='21'></line>
          <path d='M10.584 10.587a2 2 0 0 0 2.828 2.83'></path>
          <path d='M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341'></path>
        </Fragment>
      );
    case 'calendar':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
          />
        </Fragment>
      );
    case 'calendar-clock':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3' />
          <path d='M16 3v4' />
          <path d='M8 3v4' />
          <path d='M4 11h10' />
          <path d='M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
          <path d='M18 16.5v1.5l.5 .5' />
        </Fragment>
      );
    case 'calendar-days':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
          />
        </Fragment>
      );
    case 'loader':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 3a9 9 0 1 0 9 9'></path>
        </Fragment>
      );
    case 'store':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
          />
        </Fragment>
      );
    case 'user':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='12' cy='7' r='4'></circle>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
        </Fragment>
      );
    case 'users':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
          />
        </Fragment>
      );
    case 'sun':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z'></path>
          <path d='M6.343 17.657l-1.414 1.414'></path>
          <path d='M6.343 6.343l-1.414 -1.414'></path>
          <path d='M17.657 6.343l1.414 -1.414'></path>
          <path d='M17.657 17.657l1.414 1.414'></path>
          <path d='M4 12h-2'></path>
          <path d='M12 4v-2'></path>
          <path d='M20 12h2'></path>
          <path d='M12 20v2'></path>
        </Fragment>
      );
    case 'moon':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'></path>
        </Fragment>
      );
    case 'shopping-bag':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z'></path>
          <path d='M9 11v-5a3 3 0 0 1 6 0v5'></path>
        </Fragment>
      );
    case 'shopping-cart':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
          <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
          <path d='M17 17h-11v-14h-2' />
          <path d='M6 5l14 1l-1 7h-13' />
        </Fragment>
      );
    case 'whatsapp':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
          <path d='M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1'></path>
        </Fragment>
      );
    case 'facebook':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3'></path>
        </Fragment>
      );
    case 'facebook-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path
            d='M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z'
            strokeWidth='0'
            fill='currentColor'
          ></path>
        </Fragment>
      );
    case 'facebook-meta':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z'></path>
          <path d='M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z'></path>
        </Fragment>
      );
    case 'meta':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z'></path>
          <path d='M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z'></path>
        </Fragment>
      );
    case 'instagram':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <rect x='4' y='4' width='16' height='16' rx='4'></rect>
          <circle cx='12' cy='12' r='3'></circle>
          <line x1='16.5' y1='7.5' x2='16.5' y2='7.501'></line>
        </Fragment>
      );
    case 'twitter':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z'></path>
        </Fragment>
      );
    case 'twitter-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path
            d='M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z'
            strokeWidth='0'
            fill='currentColor'
          ></path>
        </Fragment>
      );
    case 'chevron-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='6 15 12 9 18 15'></polyline>
        </Fragment>
      );
    case 'chevron-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='6 9 12 15 18 9'></polyline>
        </Fragment>
      );
    case 'chevron-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='9 6 15 12 9 18'></polyline>
        </Fragment>
      );
    case 'chevron-left':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='15 6 9 12 15 18'></polyline>
        </Fragment>
      );
    case 'package':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3'></polyline>
          <line x1='12' y1='12' x2='20' y2='7.5'></line>
          <line x1='12' y1='12' x2='12' y2='21'></line>
          <line x1='12' y1='12' x2='4' y2='7.5'></line>
          <line x1='16' y1='5.25' x2='8' y2='9.75'></line>
        </Fragment>
      );
    case 'id':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <rect x='3' y='4' width='18' height='16' rx='3'></rect>
          <circle cx='9' cy='10' r='2'></circle>
          <line x1='15' y1='8' x2='17' y2='8'></line>
          <line x1='15' y1='12' x2='17' y2='12'></line>
          <line x1='7' y1='16' x2='17' y2='16'></line>
        </Fragment>
      );
    case 'truck':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='7' cy='17' r='2'></circle>
          <circle cx='17' cy='17' r='2'></circle>
          <path d='M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5'></path>
          <line x1='3' y1='9' x2='7' y2='9'></line>
        </Fragment>
      );
    case 'truck-return':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='7' cy='17' r='2'></circle>
          <circle cx='17' cy='17' r='2'></circle>
          <path d='M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2'></path>
          <line x1='9' y1='17' x2='15' y2='17'></line>
          <path d='M13 6h5l3 5v6h-2'></path>
        </Fragment>
      );
    case 'lock':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <rect x='5' y='11' width='14' height='10' rx='2'></rect>
          <circle cx='12' cy='16' r='1'></circle>
          <path d='M8 11v-4a4 4 0 0 1 8 0v4'></path>
        </Fragment>
      );
    case 'address-book':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z'></path>
          <path d='M10 16h6'></path>
          <circle cx='13' cy='11' r='2'></circle>
          <path d='M4 8h3'></path>
          <path d='M4 12h3'></path>
          <path d='M4 16h3'></path>
        </Fragment>
      );
    case 'credit-card':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <rect x='3' y='5' width='18' height='14' rx='3'></rect>
          <line x1='3' y1='10' x2='21' y2='10'></line>
          <line x1='7' y1='15' x2='7.01' y2='15'></line>
          <line x1='11' y1='15' x2='13' y2='15'></line>
        </Fragment>
      );
    case 'mail':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <rect x='3' y='5' width='18' height='14' rx='2'></rect>
          <polyline points='3 7 12 13 21 7'></polyline>
        </Fragment>
      );
    case 'email':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='12' cy='12' r='4'></circle>
          <path d='M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28'></path>
        </Fragment>
      );
    case 'share':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='6' cy='12' r='3'></circle>
          <circle cx='18' cy='6' r='3'></circle>
          <circle cx='18' cy='18' r='3'></circle>
          <line x1='8.7' y1='10.7' x2='15.3' y2='7.3'></line>
          <line x1='8.7' y1='13.3' x2='15.3' y2='16.7'></line>
        </Fragment>
      );
    case 'voucher':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <rect x='3' y='5' width='18' height='14' rx='3'></rect>
          <path d='M7 16l3 -3l3 3'></path>
          <path d='M8 13c-.789 0 -2 -.672 -2 -1.5s.711 -1.5 1.5 -1.5c1.128 -.02 2.077 1.17 2.5 3c.423 -1.83 1.372 -3.02 2.5 -3c.789 0 1.5 .672 1.5 1.5s-1.211 1.5 -2 1.5h-4z'></path>
        </Fragment>
      );
    case 'logout':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2'></path>
          <path d='M7 12h14l-3 -3m0 6l3 -3'></path>
        </Fragment>
      );
    case 'login':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2'></path>
          <path d='M20 12h-13l3 -3m0 6l-3 -3'></path>
        </Fragment>
      );

    case 'arrow-up':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18'
          />
        </Fragment>
      );
    case 'arrow-down':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
          />
        </Fragment>
      );
    case 'arrow-down-left':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25'
          />
        </Fragment>
      );
    case 'arrow-down-right':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25'
          />
        </Fragment>
      );
    case 'arrow-up-left':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25'
          />
        </Fragment>
      );
    case 'arrow-up-right':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
          />
        </Fragment>
      );
    case 'arrow-right':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
          />
        </Fragment>
      );
    case 'arrow-left':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
          />
        </Fragment>
      );

    case 'arrow-uturn-up':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3'
          />
        </Fragment>
      );
    case 'arrow-uturn-down':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3'
          />
        </Fragment>
      );
    case 'arrow-uturn-left':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
          />
        </Fragment>
      );
    case 'arrow-uturn-right':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3'
          />
        </Fragment>
      );

    case 'arrow-long-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <line x1='12' y1='5' x2='12' y2='19'></line>
          <line x1='16' y1='9' x2='12' y2='5'></line>
          <line x1='8' y1='9' x2='12' y2='5'></line>
        </Fragment>
      );
    case 'arrow-long-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <line x1='12' y1='5' x2='12' y2='19'></line>
          <line x1='16' y1='15' x2='12' y2='19'></line>
          <line x1='8' y1='15' x2='12' y2='19'></line>
        </Fragment>
      );
    case 'arrow-long-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <line x1='5' y1='12' x2='19' y2='12'></line>
          <line x1='15' y1='16' x2='19' y2='12'></line>
          <line x1='15' y1='8' x2='19' y2='12'></line>
        </Fragment>
      );
    case 'arrow-long-left':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <line x1='5' y1='12' x2='19' y2='12'></line>
          <line x1='5' y1='12' x2='9' y2='16'></line>
          <line x1='5' y1='12' x2='9' y2='8'></line>
        </Fragment>
      );

    case 'arrow-small-up':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75'
          />
        </Fragment>
      );
    case 'arrow-small-down':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75'
          />
        </Fragment>
      );
    case 'arrow-small-right':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
          />
        </Fragment>
      );
    case 'arrow-small-left':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
          />
        </Fragment>
      );

    case 'chevrons-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='7 11 12 6 17 11'></polyline>
          <polyline points='7 17 12 12 17 17'></polyline>
        </Fragment>
      );
    case 'chevrons-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='7 7 12 12 17 7'></polyline>
          <polyline points='7 13 12 18 17 13'></polyline>
        </Fragment>
      );
    case 'chevrons-left':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='11 7 6 12 11 17'></polyline>
          <polyline points='17 7 12 12 17 17'></polyline>
        </Fragment>
      );
    case 'chevrons-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='7 7 12 12 7 17'></polyline>
          <polyline points='13 7 18 12 13 17'></polyline>
        </Fragment>
      );
    case 'x':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <line x1='18' y1='6' x2='6' y2='18'></line>
          <line x1='6' y1='6' x2='18' y2='18'></line>
        </Fragment>
      );

    case 'car':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='7' cy='17' r='2'></circle>
          <circle cx='17' cy='17' r='2'></circle>
          <path d='M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5'></path>
        </Fragment>
      );

    case 'credit-card':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <rect x='3' y='5' width='18' height='14' rx='3'></rect>
          <line x1='3' y1='10' x2='21' y2='10'></line>
          <line x1='7' y1='15' x2='7.01' y2='15'></line>
          <line x1='11' y1='15' x2='13' y2='15'></line>
        </Fragment>
      );
    case 'download':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2'></path>
          <polyline points='7 11 12 16 17 11'></polyline>
          <line x1='12' y1='4' x2='12' y2='16'></line>
        </Fragment>
      );
    case 'file-download':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
          <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z'></path>
          <path d='M12 17v-6'></path>
          <path d='M9.5 14.5l2.5 2.5l2.5 -2.5'></path>
        </Fragment>
      );
    case 'file-search':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
          <path d='M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5'></path>
          <circle cx='16.5' cy='17.5' r='2.5'></circle>
          <line x1='18.5' y1='19.5' x2='21' y2='22'></line>
        </Fragment>
      );
    case 'star':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z'></path>
        </Fragment>
      );
    case 'star-half':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253z'></path>
        </Fragment>
      );
    case 'search':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='10' cy='10' r='7'></circle>
          <line x1='21' y1='21' x2='15' y2='15'></line>
        </Fragment>
      );
    case 'search-off':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M5.039 5.062a7 7 0 0 0 9.91 9.89m1.584 -2.434a7 7 0 0 0 -9.038 -9.057'></path>
          <path d='M3 3l18 18'></path>
        </Fragment>
      );
    case 'search-list':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <circle cx='15' cy='15' r='4'></circle>
          <path d='M18.5 18.5l2.5 2.5'></path>
          <path d='M4 6h16'></path>
          <path d='M4 12h4'></path>
          <path d='M4 18h4'></path>
        </Fragment>
      );
    case 'search-map':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v10'></path>
          <path d='M9 4v13'></path>
          <path d='M15 7v5'></path>
          <circle cx='16.5' cy='17.5' r='2.5'></circle>
          <path d='M18.5 19.5l2.5 2.5'></path>
        </Fragment>
      );
    case 'history':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='12 8 12 12 14 14'></polyline>
          <path d='M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5'></path>
        </Fragment>
      );
    case 'article':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <rect x='3' y='4' width='18' height='16' rx='2'></rect>
          <path d='M7 8h10'></path>
          <path d='M7 12h10'></path>
          <path d='M7 16h10'></path>
        </Fragment>
      );
    case 'chat-bubble-oval-dots':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
          />
        </Fragment>
      );
    case 'chat-bubble-oval-empty':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z'
          />
        </Fragment>
      );
    case 'chat-bubble-empty':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
          />
        </Fragment>
      );
    case 'chat-bubble-text':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
          />
        </Fragment>
      );
    case 'chat-bubble-dots':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
          />
        </Fragment>
      );
    case 'chat-bubble-stacked':
      return (
        <Fragment>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
          />
        </Fragment>
      );

    case 'clipboard':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h3m9 -9v-5a2 2 0 0 0 -2 -2h-2'></path>
          <path d='M13 17v-1a1 1 0 0 1 1 -1h1m3 0h1a1 1 0 0 1 1 1v1m0 3v1a1 1 0 0 1 -1 1h-1m-3 0h-1a1 1 0 0 1 -1 -1v-1'></path>
          <rect x='9' y='3' width='6' height='4' rx='2'></rect>
        </Fragment>
      );
    case 'copy':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <rect x='8' y='8' width='12' height='12' rx='2'></rect>
          <path d='M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2'></path>
        </Fragment>
      );
    case 'code':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='7 8 3 12 7 16'></polyline>
          <polyline points='17 8 21 12 17 16'></polyline>
          <line x1='14' y1='4' x2='10' y2='20'></line>
        </Fragment>
      );
    case 'source-code':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5'></path>
          <path d='M6 5l-2 2l2 2'></path>
          <path d='M10 9l2 -2l-2 -2'></path>
        </Fragment>
      );
    case 'settings':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z'></path>
          <path d='M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
        </Fragment>
      );
    case 'layout-sidebar-left-collapse':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
          <path d='M9 4v16'></path>
          <path d='M15 10l-2 2l2 2'></path>
        </Fragment>
      );
    case 'layout-sidebar-left-expand':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
          <path d='M9 4v16'></path>
          <path d='M14 10l2 2l-2 2'></path>
        </Fragment>
      );
    case 'square-rounded-chevron-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M9 13l3 -3l3 3'></path>
          <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'></path>
        </Fragment>
      );
    case 'square-rounded-chevron-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M15 11l-3 3l-3 -3'></path>
          <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'></path>
        </Fragment>
      );
    case 'square-rounded-chevron-left':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M13 15l-3 -3l3 -3'></path>
          <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'></path>
        </Fragment>
      );
    case 'square-rounded-chevron-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M11 9l3 3l-3 3'></path>
          <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'></path>
        </Fragment>
      );

    case 'square-rounded-chevrons-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M9 15l3 -3l3 3'></path>
          <path d='M9 11l3 -3l3 3'></path>
          <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'></path>
        </Fragment>
      );
    case 'square-rounded-chevrons-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M15 9l-3 3l-3 -3'></path>
          <path d='M15 13l-3 3l-3 -3'></path>
          <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'></path>
        </Fragment>
      );
    case 'square-rounded-chevrons-left':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M15 15l-3 -3l3 -3'></path>
          <path d='M11 15l-3 -3l3 -3'></path>
          <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'></path>
        </Fragment>
      );
    case 'square-rounded-chevrons-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M9 9l3 3l-3 3'></path>
          <path d='M13 9l3 3l-3 3'></path>
          <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'></path>
        </Fragment>
      );

    case 'transition-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3'></path>
          <path d='M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6z'></path>
          <path d='M12 15v-8'></path>
          <path d='M9 10l3 -3l3 3'></path>
        </Fragment>
      );
    case 'transition-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3'></path>
          <path d='M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z'></path>
          <path d='M12 9v8'></path>
          <path d='M9 14l3 3l3 -3'></path>
        </Fragment>
      );
    case 'transition-left':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3'></path>
          <path d='M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0z'></path>
          <path d='M15 12h-8'></path>
          <path d='M10 9l-3 3l3 3'></path>
        </Fragment>
      );
    case 'transition-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3'></path>
          <path d='M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0z'></path>
          <path d='M9 12h8'></path>
          <path d='M14 15l3 -3l-3 -3'></path>
        </Fragment>
      );

    case 'user-bolt':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4c.267 0 .529 .026 .781 .076'></path>
          <path d='M19 16l-2 3h4l-2 3'></path>
        </Fragment>
      );
    case 'user-cancel':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h3.5'></path>
          <path d='M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
          <path d='M17 21l4 -4'></path>
        </Fragment>
      );
    case 'user-check':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4'></path>
          <path d='M15 19l2 2l4 -4'></path>
        </Fragment>
      );
    case 'user-circle':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
          <path d='M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
          <path d='M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855'></path>
        </Fragment>
      );
    case 'user-code':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h3.5'></path>
          <path d='M20 21l2 -2l-2 -2'></path>
          <path d='M17 17l-2 2l2 2'></path>
        </Fragment>
      );
    case 'user-cog':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h2.5'></path>
          <path d='M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
          <path d='M19.001 15.5v1.5'></path>
          <path d='M19.001 21v1.5'></path>
          <path d='M22.032 17.25l-1.299 .75'></path>
          <path d='M17.27 20l-1.3 .75'></path>
          <path d='M15.97 17.25l1.3 .75'></path>
          <path d='M20.733 20l1.3 .75'></path>
        </Fragment>
      );
    case 'user-dollar':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h3'></path>
          <path d='M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5'></path>
          <path d='M19 21v1m0 -8v1'></path>
        </Fragment>
      );
    case 'user-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4c.342 0 .674 .043 .99 .124'></path>
          <path d='M19 16v6'></path>
          <path d='M22 19l-3 3l-3 -3'></path>
        </Fragment>
      );
    case 'user-edit':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h3.5'></path>
          <path d='M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z'></path>
        </Fragment>
      );
    case 'user-exclamation':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.008 .128'></path>
          <path d='M19 16v3'></path>
          <path d='M19 22v.01'></path>
        </Fragment>
      );
    case 'user-heart':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h.5'></path>
          <path d='M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z'></path>
        </Fragment>
      );
    case 'user-minus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.009 .128'></path>
          <path d='M16 19h6'></path>
        </Fragment>
      );
    case 'user-off':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8.18 8.189a4.01 4.01 0 0 0 2.616 2.627m3.507 -.545a4 4 0 1 0 -5.59 -5.552'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4c.412 0 .81 .062 1.183 .178m2.633 2.618c.12 .38 .184 .785 .184 1.204v2'></path>
          <path d='M3 3l18 18'></path>
        </Fragment>
      );
    case 'user-pause':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h3.5'></path>
          <path d='M17 17v5'></path>
          <path d='M21 17v5'></path>
        </Fragment>
      );
    case 'user-pin':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h2.5'></path>
          <path d='M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z'></path>
          <path d='M19 18v.01'></path>
        </Fragment>
      );
    case 'user-plus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M16 19h6'></path>
          <path d='M19 16v6'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4'></path>
        </Fragment>
      );
    case 'user-question':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h3.5'></path>
          <path d='M19 22v.01'></path>
          <path d='M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'></path>
        </Fragment>
      );
    case 'user-search':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h1.5'></path>
          <path d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
          <path d='M20.2 20.2l1.8 1.8'></path>
        </Fragment>
      );
    case 'user-share':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h3'></path>
          <path d='M16 22l5 -5'></path>
          <path d='M21 21.5v-4.5h-4.5'></path>
        </Fragment>
      );
    case 'user-shield':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h2'></path>
          <path d='M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
        </Fragment>
      );
    case 'user-star':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h.5'></path>
          <path d='M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z'></path>
        </Fragment>
      );
    case 'user-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4'></path>
          <path d='M19 22v-6'></path>
          <path d='M22 19l-3 -3l-3 3'></path>
        </Fragment>
      );
    case 'user-x':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M6 21v-2a4 4 0 0 1 4 -4h3.5'></path>
          <path d='M22 22l-5 -5'></path>
          <path d='M17 22l5 -5'></path>
        </Fragment>
      );
    case 'users-group':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0'></path>
          <path d='M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1'></path>
          <path d='M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0'></path>
          <path d='M17 10h2a2 2 0 0 1 2 2v1'></path>
          <path d='M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0'></path>
          <path d='M3 13v-1a2 2 0 0 1 2 -2h2'></path>
        </Fragment>
      );
    case 'users-minus':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
          <path d='M3 21v-2a4 4 0 0 1 4 -4h4c.948 0 1.818 .33 2.504 .88'></path>
          <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
          <path d='M16 19h6'></path>
        </Fragment>
      );
    case 'users-search':
      return (
        <Fragment>
          <path d='M14,1.13c2.14,.55,3.43,2.73,2.88,4.87-.36,1.42-1.47,2.52-2.88,2.88' />
          <path d='M19,19v-2c0-1.02-.39-1.96-1.04-2.67' />
          <g>
            <path d='M3,5c0,2.21,1.79,4,4,4s4-1.79,4-4S9.21,1,7,1,3,2.79,3,5' />
            <path d='M1,19v-2c0-2.21,1.79-4,4-4h1.5' />
            <g>
              <path d='M9,16c0,1.66,1.34,3,3,3s3-1.34,3-3-1.34-3-3-3-3,1.34-3,3' />
              <path d='M14.2,18.2l1.8,1.8' />
            </g>
          </g>
        </Fragment>
      );
    case 'dots':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
          <path d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
          <path d='M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
        </Fragment>
      );
    case 'dots-vertical':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
          <path d='M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
          <path d='M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
        </Fragment>
      );
    case 'archive':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z'></path>
          <path d='M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10'></path>
          <path d='M10 12l4 0'></path>
        </Fragment>
      );
    case 'point':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0'></path>
        </Fragment>
      );
    case 'point-filled':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path
            d='M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z'
            fill='currentColor'
          ></path>
        </Fragment>
      );
    case 'selector':
      return (
        <Fragment>
          <path d='M8 9l4 -4l4 4'></path>
          <path d='M16 15l-4 4l-4 -4'></path>
        </Fragment>
      );
    case 'chef-hat':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z'></path>
          <path d='M6.161 17.009l11.839 -.009'></path>
        </Fragment>
      );
    case 'apple':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
          <path d='M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2'></path>
          <path d='M10 10.5c1.333 .667 2.667 .667 4 0'></path>
        </Fragment>
      );
    case 'male':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0'></path>
          <path d='M19 5l-5.4 5.4'></path>
          <path d='M19 5h-5'></path>
          <path d='M19 5v5'></path>
        </Fragment>
      );
    case 'female':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0'></path>
          <path d='M12 14v7'></path>
          <path d='M9 18h6'></path>
        </Fragment>
      );
    case 'arrow-autofit-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8' />
          <path d='M18 20v-17' />
          <path d='M15 6l3 -3l3 3' />
        </Fragment>
      );
    case 'arrow-autofit-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8' />
          <path d='M18 4v17' />
          <path d='M15 18l3 3l3 -3' />
        </Fragment>
      );
    case 'arrow-autofit-left':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8' />
          <path d='M20 18h-17' />
          <path d='M6 15l-3 3l3 3' />
        </Fragment>
      );
    case 'arrow-autofit-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8' />
          <path d='M4 18h17' />
          <path d='M18 15l3 3l-3 3' />
        </Fragment>
      );
    case 'arrow-bar-to-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 10l0 10' />
          <path d='M12 10l4 4' />
          <path d='M12 10l-4 4' />
          <path d='M4 4l16 0' />
        </Fragment>
      );
    case 'arrow-bar-to-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 20l16 0' />
          <path d='M12 14l0 -10' />
          <path d='M12 14l4 -4' />
          <path d='M12 14l-4 -4' />
        </Fragment>
      );
    case 'arrow-bar-to-left':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M10 12l10 0' />
          <path d='M10 12l4 4' />
          <path d='M10 12l4 -4' />
          <path d='M4 4l0 16' />
        </Fragment>
      );
    case 'arrow-bar-to-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M14 12l-10 0' />
          <path d='M14 12l-4 4' />
          <path d='M14 12l-4 -4' />
          <path d='M20 4l0 16' />
        </Fragment>
      );
    case 'arrow-bar-up':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 4l0 10' />
          <path d='M12 4l4 4' />
          <path d='M12 4l-4 4' />
          <path d='M4 20l16 0' />
        </Fragment>
      );
    case 'arrow-bar-down':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 20l0 -10' />
          <path d='M12 20l4 -4' />
          <path d='M12 20l-4 -4' />
          <path d='M4 4l16 0' />
        </Fragment>
      );
    case 'arrow-bar-left':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 12l10 0' />
          <path d='M4 12l4 4' />
          <path d='M4 12l4 -4' />
          <path d='M20 4l0 16' />
        </Fragment>
      );
    case 'arrow-bar-right':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M20 12l-10 0' />
          <path d='M20 12l-4 4' />
          <path d='M20 12l-4 -4' />
          <path d='M4 4l0 16' />
        </Fragment>
      );
    case 'arrow-bar-both':
      return (
        <Fragment>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M8 12h-6' />
          <path d='M5 15l-3 -3l3 -3' />
          <path d='M22 12h-6' />
          <path d='M19 15l3 -3l-3 -3' />
          <path d='M12 4v16' />
        </Fragment>
      );
  }
};

export const Icon = ({ icon, className, label, ...props }: IconProps) => {
  return (
    <svg
      role='img'
      aria-label={!label ? label : `${label}-icon`}
      className={clsx('pointer-events-none flex h-5 w-5 shrink-0 stroke-icon', className)}
      viewBox='0 0 24 24'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden={true}
      {...props}
    >
      <SVG icon={icon} />
    </svg>
  );
};
