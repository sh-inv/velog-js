import { useNavigate } from 'react-router-dom';
import LoginModal from '../LoginModal';

const Join = ({ setIsLoginModal, setIsJoinModal }) => {
  const navigate = useNavigate();

  return (
    <LoginModal
      title='회원가입'
      message='계정이 이미 있으신가요?'
      link='로그인'
      onClose={() => {
        setIsJoinModal(false);
      }}
      onChange={() => {
        setIsJoinModal(false);
        setIsLoginModal(true);
      }}
      onClick={() => navigate('/register')}
    />
  );
};

export default Join;