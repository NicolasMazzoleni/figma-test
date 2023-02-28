import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Label.module.css';

interface Props {
  className?: string;
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 14:177 */
export const Label: FC<Props> = memo(function Label(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}
    </div>
  );
});
