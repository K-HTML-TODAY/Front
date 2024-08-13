import { FunctionComponent, SVGProps } from 'react';

export interface MainSectionType {
  Logo?: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  onClick?: () => void;
  ranking?: RankingItemType[];
}

export interface MainRankingType {
  uid: number;
  name: string;
  email: string;
  phone: string;
  account: string;
  nickname: string;
  roles: [string];
  authorities: [
    {
      authority: string;
    },
  ];
}

export interface RankingItemType {
  nickname: string;
  level: number;
}
