export type Lang = 'ja' | 'en';

export interface PageItem {
  title: string;
  description: string;
  lastUpdated: string;
}

export interface AppItem {
  name: string;
  name_en: string;
  description: string;
  description_en: string;
  href: string;
  iconSrc: string;
  alt: string;
}

export const PAGE_TEXT = {
  ja: {
    title: '公開アプリ一覧',
    description: '私が開発しているアプリのプライバシーポリシーです。',
    lastUpdated: '最終更新日',
  },
  en: {
    title: 'Apps Privacy Policies',
    description: 'Privacy policies for apps I have developed.',
    lastUpdated: 'Last Updated',
  },
} as const satisfies Record<Lang, PageItem>;

export const APPS: AppItem[] = [
  {
    name: 'todoni',
    name_en: 'todoni',
    description: 'シンプルTODOアプリ',
    description_en: 'Simple TODO App',
    href: 'apps-privacy/todoni',
    iconSrc: '/images/todoni_icon.png',
    alt: 'todoniアイコン',
  },
  {
    name: 'sanpo note',
    name_en: 'sanpo note',
    description: '散歩・移動の記録アプリ',
    description_en: 'Walking & Travel Log App',
    href: 'apps-privacy/sanpo-note',
    iconSrc: '/images/sanpo_note_icon.png',
    alt: 'sanpo noteアイコン',
  },
  {
    name: 'kuratine',
    name_en: 'kuratine',
    description: '生活のルーティン＆タスク管理',
    description_en: 'Routine & Task Management App',
    href: 'apps-privacy/kuratine',
    iconSrc: '/images/kuratine_icon.png',
    alt: 'kuratineアイコン',
  },
  {
    name: 'miniar',
    name_en: 'miniar',
    description: 'がんばらない日記アプリ',
    description_en: 'Stress-Free Diary App',
    href: 'apps-privacy/miniar',
    iconSrc: '/images/miniar_icon.png',
    alt: 'miniarアイコン',
  },
  {
    name: 'ことノート',
    name_en: 'kotonote',
    description: '知識を蓄えるアプリ',
    description_en: 'Knowledge Storage App',
    href: 'apps-privacy/kotonote',
    iconSrc: '/images/kotonote_icon.png',
    alt: 'ことノートアイコン',
  },
];
