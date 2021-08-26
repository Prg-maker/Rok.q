import userImg from '../assets/images/user.svg'

import '../styles/question.scss'

export function Question ({
  quesiton,
  content,
  isAnswered,
  children 
}) {
  return(
    <div className='question'>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={userImg} alt="avatar"/>
        </div>
      </footer>

    </div>
  );
}