import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonPrimary.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 5:263 */
export const ButtonPrimary: FC<Props> = memo(function ButtonPrimary(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Projects</div>}
    </button>
  );
});
