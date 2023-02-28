import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { TabDefault } from '../TabDefault/TabDefault';
import classes from './Header.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5:274 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.madelynTorff}>Madelyn Torff</div>
      <div className={classes.nav}>
        <TabDefault
          text={{
            sobre: <div className={classes.sobre}>About</div>,
          }}
        />
        <TabDefault
          text={{
            sobre: <div className={classes.sobre2}>Projects</div>,
          }}
        />
        <TabDefault
          text={{
            sobre: <div className={classes.sobre3}>Contacts</div>,
          }}
        />
      </div>
    </div>
  );
});
