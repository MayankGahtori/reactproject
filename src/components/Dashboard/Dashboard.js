import React from 'react';

import '../../styles/Dashboard.css';
import {AiFillBell, AiOutlineLike} from 'react-icons/ai';
import {SiGooglemeet} from 'react-icons/si';
import {BsFillChatLeftTextFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {FaCommentAlt, FaRegComment, FaVideo} from 'react-icons/fa';
import {MdAddPhotoAlternate} from 'react-icons/md';
import {IoMdSend} from 'react-icons/io';

import ppimg from '../../images/pp.jpg';

import { BrowserRouter as Route, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="posts__create">
          <div className="posts__write">
            <div className="posts__write__profile">
              <img src={ppimg} alt="profile" />
            </div>
            <div className="posts__write__about">
              <form>
                <input type="text" className="posts__write__about__input" placeholder={`What's on your mind ?`} />
                <input type="text" className="posts__write__about__input" placeholder="Image URL (Optional)" />
                <IoMdSend className="posts__write__about__button"size={25}/>
              </form>
            </div>
          </div>
          <div className="posts__bottoms">
            <div className="posts__create__videobutton">
              <FaVideo size={25}/>
              <h3> Like </h3>
            </div>
            <div className="posts__create__photobutton">
              <MdAddPhotoAlternate size={25}/>
              <h3> Photo/Video </h3>
            </div>
          </div>
        </div>


        <div className="posts">
          <div className="posts__info">
            <div className="posts__pic">
              <img src={ppimg} alt="profile" />
            </div>
            <div className="posts__details">
              <h3> Roy </h3>
              <p> 3/25/2022</p>
            </div>
          </div>
          <div className="posts_about">
            <div className="posts__about__section">
              <p> runaway but were running in circles, runaway😭 </p>
            </div>
            <div className="posts__about__pic">
              <img src={ppimg} alt="profile" />
            </div>
          </div>
          <div className="posts_down">
            <div className="posts__reactions">
              <div className="posts__buttons">
                <div className="posts__button__like">
                  <AiOutlineLike size={25}/>
                  <h3> Like </h3>
                </div>
                <div className="posts__button__comment">
                  <FaRegComment size={25}/>
                  <h3> Comment </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="posts">
          <div className="posts__info">
            <div className="posts__pic">
              <img src={ppimg} alt="profile" />
            </div>
            <div className="posts__details">
              <h3> Roy </h3>
              <p> 3/25/2022</p>
            </div>
          </div>
          <div className="posts_about">
            <div className="posts__about__section">
              <p> runaway but were running in circles, runaway😭 </p>
            </div>
            <div className="posts__about__pic">
              <img src={ppimg} alt="profile" />
            </div>
          </div>
          <div className="posts_down">
            <div className="posts__reactions">
              <div className="posts__buttons">
                <div className="posts__button__like">
                  <AiOutlineLike size={25}/>
                  <h3> Like </h3>
                </div>
                <div className="posts__button__comment">
                  <FaRegComment size={25}/>
                  <h3> Comment </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-box fixed-top">
          <div className="dashboard-meet">
            <AiFillBell className="icon" size={25}/>
            <SiGooglemeet className="icon" size={25}/>
            <FaCommentAlt className="icon" size={25}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
