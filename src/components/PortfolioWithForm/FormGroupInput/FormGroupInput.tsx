import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import classes from './FormGroupInput.module.css';

interface Props {
  className?: string;
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 14:181 */
export const FormGroupInput: FC<Props> = memo(function FormGroupInput(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Label
        text={{
          label: props.text?.label,
        }}
      />
      <Input />
    </div>
  );
});
