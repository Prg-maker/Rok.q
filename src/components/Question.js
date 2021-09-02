import userImg from '../assets/images/user.svg'
import checkImg from '../assets/images/check.svg'
import trashImg from '../assets/images/trash.svg'

import '../styles/question.scss'

export function Question ({
  content,
  isAnswered,
  children 
}) {




  return(
    <div className='question'>
      <footer className="footer-question">
        <div className="user-info">
          <img src={userImg} alt="avatar"/>
        </div>
        <p>{content}</p>

      </footer>

    </div>
  );
}