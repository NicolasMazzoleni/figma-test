import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Label } from '../Label/Label';
import { Textarea } from '../Textarea/Textarea';
import classes from './FormGroupTextarea.module.css';

interface Props {
  className?: string;
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 14:340 */
export const FormGroupTextarea: FC<Props> = memo(function FormGroupTextarea(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Label
        text={{
          label: props.text?.label,
        }}
      />
      <Textarea />
    </div>
  );
});
