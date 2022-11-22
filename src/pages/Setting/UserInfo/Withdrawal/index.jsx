import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import ConfirmModal from '../../../../components/ConfirmModal';
import styled from 'styled-components';

const Withdrawal = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);

  const onModal = () => {
    //token 값 추가해야함
    setIsModal(true);
  };

  return (
    <>
      <WithdrawalContainer>
        <Button text='회원 탈퇴' onClick={onModal} className='withdrawal-button' />
      </WithdrawalContainer>
      {isModal && (
        <ConfirmModal
          title='회원탈퇴'
          message='정말로 탈퇴 하시겠습니까?'
          onClose={() => {
            setIsModal(false);
          }}
          onMove={() => {
            setIsModal(false);
            navigate('/');
          }}
        />
      )}
    </>
  );
};

const WithdrawalContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: var(--text2);
  line-height: 1.5;

  .withdrawal-button {
    background: var(--destructive1);
    color: var(--button-text);

    &:hover {
      background: var(--destructive2);
    }
  }
`;

export default Withdrawal;
