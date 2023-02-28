import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary';
import { FooterIcons } from '../FooterIcons/FooterIcons';
import { FormGroupInput } from '../FormGroupInput/FormGroupInput';
import { FormGroupTextarea } from '../FormGroupTextarea/FormGroupTextarea';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import classes from './FooterForm.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 10:0 */
export const FooterForm: FC<Props> = memo(function FooterForm(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.frame3352}>
        <div className={classes.form}>
          <FormGroupInput
            text={{
              label: <div className={classes.label}>Name</div>,
            }}
          />
          <FormGroupInput
            text={{
              label: <div className={classes.label2}>Email</div>,
            }}
          />
          <FormGroupTextarea
            text={{
              label: <div className={classes.label3}>Message</div>,
            }}
          />
          <ButtonPrimary
            text={{
              text: <div className={classes.text}>Send</div>,
            }}
          />
        </div>
        <FooterIcons />
      </div>
      <SectionTitle className={classes.sectionTitle} />
    </div>
  );
});
