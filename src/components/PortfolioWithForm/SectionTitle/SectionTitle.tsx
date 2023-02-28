import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SectionTitle.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 10:135 */
export const SectionTitle: FC<Props> = memo(function SectionTitle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.text}>Projects</div>
      <div className={classes.rectangle19}></div>
    </div>
  );
});
