import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ButtonWrapper } from './styles';

interface IIconButtonProps {
  icon: IconDefinition;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function IconButton({ icon, onClick }: IIconButtonProps) {
  return (
    <ButtonWrapper onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </ButtonWrapper>
  );
}
