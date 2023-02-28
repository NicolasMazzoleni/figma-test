import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Input.module.css';

interface Props {
  className?: string;
}
/* @figmaId 14:144 */
export const Input: FC<Props> = memo(function Input(props = {}) {
  return <div className={`${resets.clapyResets} ${classes.root}`}></div>;
});
