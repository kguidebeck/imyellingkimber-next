import React from 'react';
import {
  SanityImageCrop,
  SanityImageHotspot,
} from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from '@portabletext/types';
// import { Globals } from './globals.model';

export namespace Sanity {
  export interface Document {
    [x: string]: any;
    _type: string;
    _id: string;
  }

  export interface Slug {
    _type: string;
    current: string;
  }

  export interface Seo {
    _type: string;
    title: string;
    secret: string;
    description: string;
    keywords: string;
    image?: {
      _type: string;
      asset: {
        url: string;
      };
    };
    no_index?: boolean;
  }

  export interface Page extends Document {
    title: string;
    seo: Seo;
    slug?: Slug;
  }

  // export interface PageProps {
  //   globals: Globals;
  // }

  // export interface Serializers {
  //   types?: Record<string, (props: any) => JSX.Element | null>;
  //   marks?: Record<string, (props: any) => JSX.Element | null>;
  //   list?: React.Component;
  //   listItem?: React.Component;
  //   hardBreak?: React.Component;
  //   container?: React.Component;
  // }

  export type PortableText = PortableTextBlock[];

  export interface Cta {
    text: string;
    url: string;
  }

  // export interface File {
  //   _type: string;
  //   asset: {
  //     _type: string;
  //     url: string;
  //     originalFilename: string;
  //     mimeType: string;
  //   };
  // }

  export interface SanityAsset {
    url: string;
    metadata: {
      aspectRatio: number;
      height: number;
      width: number;
    };
  }

  export interface Image {
    alt: string;
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  }

  export enum Console {
    SWITCH = "switch",
    WII = "wii",
    SNES = "snes"
  }
}

