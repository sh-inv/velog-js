import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../../store/modules/user';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { apiClient } from '../../../../api';
import EditButton from '../../../../components/EditButton';
import Button from '../../../../components/Button';
import Toastify from '../../../../components/Toastify';

const Title = () => {
  const [isModifyTitle, setIsModifyTitle] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const onModify = () => {
    setIsModifyTitle(true);
  };

  const getTitle = e => {
    e.preventDefault();
    dispatch(
      setUser({
        ...user,
        title: e.target.value,
      })
    );
  };

  const onModifyConfirm = async () => {
    const body = {
      title: user.title,
    };
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      await apiClient.patch('/users?type=title', body, config);
      dispatch(
        setUser({
          ...user,
          body,
        })
      );
      setIsModifyTitle(false);
    } catch (error) {
      console.log(error);
      toast.error('제목을 입력해주세요');
    }
  };

  return (
    user && (
      <>
        {isModifyTitle ? (
          <TitleContainer>
            <form onSubmit={e => e.preventDefault()}>
              <input className='modify-input' type='text' placeholder='벨로그 제목' onChange={getTitle} value={user.title} />
              <Button type='submit' onClick={onModifyConfirm} text='저장' className='confirm-button' />
            </form>
          </TitleContainer>
        ) : (
          <>
            <TitleContainer>{user.title}</TitleContainer>
            <EditButtonContainer>
              <EditButton text='수정' onClick={onModify} />
            </EditButtonContainer>
          </>
        )}
        <Toastify />
      </>
    )
  );
};

const TitleContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: var(--text2);
  line-height: 1.5;

  form {
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    .modify-input {
      flex: 1 1 0%;
      display: block;
      padding: 0.5rem;
      margin-right: 1rem;

      border: 1px solid var(--border3);
      border-radius: 4px;
      background: var(--bg-element1);
      color: var(--text2);
      font-size: 1rem;
      line-height: 1rem;
      outline: none;

      :focus {
        border: 1px solid var(--border1);
      }
    }

    .confirm-button {
      background: var(--primary1);
      color: var(--button-text);

      &:hover {
        background: var(--primary2);
      }
    }
  }
`;

const EditButtonContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 1rem;
`;

export default Title;
