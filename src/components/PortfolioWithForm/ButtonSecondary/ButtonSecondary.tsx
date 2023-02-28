import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonSecondary.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5:264 */
export const ButtonSecondary: FC<Props> = memo(function ButtonSecondary(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.text}>LinkedIn</div>
    </button>
  );
});
