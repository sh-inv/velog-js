import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import EditButton from '../../../components/EditButton';
import Button from '../../../components/Button';
import styled from 'styled-components';
import { UserIntroMaxWidth768px, UserIntroTitleMaxWidth768px } from '../../../styles/media';
import { setIntro, setName } from '../../../store/modules/user';

const UserIntro = () => {
  // const [user, setUser] = useState('');
  // const [introduction, setIntroduction] = useState('');
  const [isModify, setIsModify] = useState(false);

  const { name, intro } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onModify = () => {
    isModify ? setIsModify(false) : setIsModify(true);
  };

  useEffect(() => {
    // fetch =>user info
    const profile = { user: 'Eden', introduction: 'one part' };

    dispatch(setName(profile.user));
    dispatch(setIntro(profile.introduction));
  }, []);

  const getUser = e => {
    dispatch(setName(e.target.value));
  };

  const getIntro = e => {
    dispatch(setIntro(setIntroduction(e.target.value)));
  };

  return (
    <UserIntroContainer>
      {isModify ? (
        <>
          <input className='modify-input modify-user' type='text' placeholder='이름' onChange={getUser} value={name} />
          <input className='modify-input modify-intro' type='text' placeholder='한 줄 소개' onChange={getIntro} value={intro} />
          <Button
            className='confirm-button'
            onClick={() => {
              setIsModify(false);
            }}
            text='저장'
          />
        </>
      ) : (
        <>
          <h2>{name}</h2>
          <p>{intro}</p>
          <EditButton text='수정' onClick={onModify} />
        </>
      )}
    </UserIntroContainer>
  );
};

const UserIntroContainer = styled.div`
  flex: 1 1 0%;
  padding-left: 1.5rem;
  border-left: 1px solid var(--border4);

  ${UserIntroMaxWidth768px};

  .modify-input {
    display: block;
    width: 100%;
    padding: 0.5rem;

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

  .modify-user {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .modify-intro {
    margin: 1rem 0;
  }

  .confirm-button {
    background: var(--primary1);
    color: var(--button-text);

    &:hover {
      background: var(--primary2);
    }
  }

  h2 {
    margin: 0px;
    line-height: 1.5;
    font-size: 2.25rem;

    ${UserIntroTitleMaxWidth768px};
  }

  p {
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--text3);
  }
`;

export default UserIntro;