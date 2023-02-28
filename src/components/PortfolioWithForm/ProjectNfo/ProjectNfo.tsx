import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ProjectNfo.module.css';

interface Props {
  className?: string;
  classes?: {
    frame3350?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 2:2 */
export const ProjectNfo: FC<Props> = memo(function ProjectNfo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={`${props.classes?.frame3350 || ''} ${classes.frame3350}`}>
        <div className={classes.text}>Project Name</div>
        {props.text?.text != null ? (
          props.text?.text
        ) : (
          <div className={classes.text2}>
            I created this personal project in order to show how to create an interface in Figma using a portfolio as an
            example.
          </div>
        )}
        <div className={classes.botaoSecudario}>
          <div className={classes.text3}>View Project</div>
        </div>
      </div>
    </div>
  );
});
