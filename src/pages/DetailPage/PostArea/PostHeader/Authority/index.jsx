import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../../../../api';
import ConfirmModal from '../../../../../components/ConfirmModal';
import styled from 'styled-components';

const Authority = () => {
  const { postData } = useSelector(state => state.detailData);

  const [isDelModal, setIsDelModal] = useState(false);
  const navigate = useNavigate();

  const deletePost = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
      };
      await apiClient.delete(`/posts/${postData.post.post_id}`, config);
      navigate(`/${postData.post.login_id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthorityContainer className='authority-container'>
      <button onClick={() => navigate(`/write?id=${postData.post.post_id}&status=${postData.post.status}`)}>수정</button>
      <button onClick={() => setIsDelModal(true)}>삭제</button>
      {isDelModal && <ConfirmModal title='포스트 삭제' message='정말로 삭제하시겠습니까?' onClose={() => setIsDelModal(false)} onMove={deletePost} />}
    </AuthorityContainer>
  );
};

const AuthorityContainer = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: -1.25rem;

  button {
    padding: 0px;
    outline: none;
    border: none;
    background: none;
    color: var(--text3);
    font-size: inherit;
    cursor: pointer;

    &:hover {
      color: var(--text1);
    }
  }

  button + button {
    margin-left: 0.5rem;
  }
`;

export default Authority;
