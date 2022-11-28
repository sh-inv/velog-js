import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUploadModal } from '../../../../store/modules/write';
import Button from '../../../../components/Button';
import styled from 'styled-components';

const ModalBtns = () => {
  const { title, content, thumbnail, uploadType } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  const onUpload = async () => {
    if (title && content) {
      try {
        const bodyData = { title: title, content: content, thumbnail: thumbnail, tags: [] };
        const response = await axios.post(`http://localhost:8000/posts?status=${uploadType}`, bodyData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('제목 또는 내용이 비어있습니다.');
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setIsUploadModal(false));
    };
  }, []);

  return (
    <ModalBtnsContainer className='modal-btns-container'>
      <Button text='취소' color='transparent' onClick={() => dispatch(setIsUploadModal(false))} />
      <Button text='출간하기' color='teal' onClick={onUpload} />
    </ModalBtnsContainer>
  );
};

const ModalBtnsContainer = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;

  button + button {
    margin-left: 0.875rem;
  }
`;

export default ModalBtns;
