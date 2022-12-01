import { Modal } from 'antd';
import FormInput from '../../FormInput';

type Props = {
  open: boolean;
  title: string;
  onCancel: () => void;
  onClose: () => void;
  onConfirm: () => void;
};
export const Dialog = (props: Props) => {
  const { open, title, onConfirm, onCancel, onClose } = props;
  return (
    <Modal open={open} title={title} closable onCancel={onCancel} destroyOnClose onOk={onConfirm}>
      <FormInput />
    </Modal>
  );
};
