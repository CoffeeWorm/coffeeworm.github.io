import type { PropsWithChildren } from 'react';

export type PropsWithChildrenAndClassName<
  T extends Record<string, unknown> = {}
> = PropsWithChildren & { className?: string } & T;
