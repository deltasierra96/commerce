import { type ButtonProps } from 'react-aria-components';
import { ButtonIcon, type ButtonIconProps } from '../../button-icon';
import { Tooltip } from '../../tooltip';

type ToolbarButtonProps = ButtonIconProps &
  ButtonProps & {
    label?: string;
    className?: string;
  };

export const ToolbarButton = ({ icon, label, ...rest }: ToolbarButtonProps) => (
  <Tooltip>
    <ButtonIcon {...rest} size='sm' icon={icon} variant='ghost' color='neutral' />
    <Tooltip.Content>{label}</Tooltip.Content>
  </Tooltip>
);
