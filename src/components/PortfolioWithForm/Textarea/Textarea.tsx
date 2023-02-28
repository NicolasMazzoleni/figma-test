import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Textarea.module.css';

interface Props {
  className?: string;
}
/* @figmaId 14:334 */
export const Textarea: FC<Props> = memo(function Textarea(props = {}) {
  return <div className={`${resets.clapyResets} ${classes.root}`}></div>;
});
