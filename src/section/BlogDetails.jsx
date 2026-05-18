import React from 'react';
import { Link } from "react-router-dom";
import BlogDetailImage1 from "../assets/images/resource/news-details.jpg";
import ClientImage1 from "../assets/images/resource/client-2.jpg";
import ClientImage2 from "../assets/images/resource/client-3.jpg";
import NewsDetailsImg1 from "../assets/images/resource/news-1.jpg";
import NewsDetailsImg2 from "../assets/images/resource/news-2.jpg";
import NewsDetailsImg3 from "../assets/images/resource/news-3.jpg";
const BlogOne = () => {
  return (
  <section className="blog-details pt-120 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="blog-details__left">
            <div className="blog-details__img">
              <img src={BlogDetailImage1} alt="Blog Detail"/>
              <div className="blog-details__date">
                <span className="day">28</span>
                <span className="month">Aug</span>
              </div>
            </div>
            <div className="blog-details__content">
              <ul className="list-unstyled blog-details__meta">
                <li><Link to="/news-details"><i className="fas fa-user-circle"></i> Admin</Link> </li>
                <li><Link to="/news-details"><i className="fas fa-comments"></i> 02 Comments</Link>
                </li>
              </ul>
              <div className="h3 blog-details__title">Delivering the best web design agency</div>
              <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet </p>
              <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet </p>
              <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet </p>
            </div>
            <div className="blog-details__bottom">
              <p className="blog-details__tags"> <span>Tags</span> <Link to="/news-details">Business</Link> <Link to="/news-details">Agency</Link> </p>
              <div className="blog-details__social-list"> <Link to="/news-details"><i className="fa fa-x"></i></Link> <Link to="/news-details"><i className="fab fa-facebook"></i></Link> <Link to="/news-details"><i className="fab fa-pinterest-p"></i></Link> <Link to="/news-details"><i className="fab fa-instagram"></i></Link> </div>
            </div>
            <div className="nav-links">
              <div className="prev">
                <Link to="/news-details" rel="prev">Bring to the table win-win survival strategies</Link>
              </div>
              <div className="next">
                <Link to="/news-details" rel="next">How to lead a healthy &amp; well-balanced life</Link>
              </div>
            </div>
            <div className="comment-one">
              <div className="h3 comment-one__title">2 Comments</div>
              <div className="comment-one__single">
                <div className="comment-one__image"> <img src={ClientImage1} alt=""/> </div>
                <div className="comment-one__content">
                  <div className="h3">Kevin Martin</div>
                  <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
                    Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla,
                    sollicitudin at euismod.
                  </p>
                  <Link to="/news-details" className="theme-btn btn-style-one comment-one__btn">
                    <span className="btn-text">Reply</span>
                  </Link>
                </div>
              </div>
              <div className="comment-one__single">
                <div className="comment-one__image"> <img src={ClientImage2} alt=""/> </div>
                <div className="comment-one__content">
                  <div className="h3">Sarah Albert</div>
                  <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
                    Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla,
                    sollicitudin at euismod.
                  </p>
                  <Link to="/news-details" className="theme-btn btn-style-one comment-one__btn">
                    <span className="btn-text">Reply</span>
                  </Link>
                </div>
              </div>
              <div className="comment-form">
                <div className="h3 comment-form__title">Leave a Comment</div>
                <form id="contact_form" name="contact_form">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea name="form_message" className="form-control required" rows={5} placeholder="Enter Message"></textarea>
                  </div>
                  <div className="mb-3">
                    <input name="form_botcheck" className="form-control" type="hidden" />
                      <button type="submit" name="form_botcheck" className="theme-btn-nine animation-box" data-loading-text="Please wait...">
                      <span className="royle-btn__text">Submit Comment</span>
                      <span className="royle-btn__hover royle-btn__hover--1"></span>
                      <span className="royle-btn__hover royle-btn__hover--2"></span>
                      <span className="royle-btn__hover royle-btn__hover--3"></span>
                      <span className="royle-btn__hover royle-btn__hover--4"></span>
                      <span className="royle-btn__hover royle-btn__hover--5"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="sidebar">
            <div className="sidebar__single sidebar__search">
              <form action="#" className="sidebar__search-form">
                <input type="search" placeholder="Search here"/>
                <button type="submit"><i className="lnr-icon-search"></i></button>
              </form>
            </div>
            <div className="sidebar__single sidebar__post">
              <h3 className="sidebar__title">Latest Posts</h3>
              <ul className="sidebar__post-list list-unstyled">
                <li>
                  <div className="sidebar__post-image"> <img src={NewsDetailsImg1} alt=""/> </div>
                  <div className="sidebar__post-content">
                    <h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">Top crypto exchange influencers</Link>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="sidebar__post-image"> <img src={NewsDetailsImg2} alt=""/> </div>
                  <div className="sidebar__post-content">
                    <h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">Necessity may give us best virtual court</Link> </h3>
                  </div>
                </li>
                <li>
                  <div className="sidebar__post-image"> <img src={NewsDetailsImg3} alt=""/> </div>
                  <div className="sidebar__post-content">
                    <h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">You should know about business plan</Link> </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar__single sidebar__category">
              <div className="h3 sidebar__title">Categories</div>
              <ul className="sidebar__category-list list-unstyled">
                <li><Link to="/news-details">SaaS Strategy<span className="fa fa-long-arrow-right"></span></Link> </li>
                <li className="active"><Link to="/news-details">Product Development<span className="fa fa-long-arrow-right"></span></Link></li>
                <li><Link to="/news-details">Startup Growth<span className="fa fa-long-arrow-right"></span></Link> </li>
                <li><Link to="/news-details">Cloud Technology<span className="fa fa-long-arrow-right"></span></Link> </li>
                <li><Link to="/news-details">UI/UX Design<span className="fa fa-long-arrow-right"></span></Link> </li>
                <li><Link to="/news-details">Artificial Intelligence<span className="fa fa-long-arrow-right"></span></Link> </li>
              </ul>
            </div>
            <div className="sidebar__single sidebar__tags">
              <div className="h3 sidebar__title">Tags</div>
              <div className="sidebar__tags-list"> <Link to="#">SaaS</Link> <Link to="#">Startup</Link> <Link to="#">Cloud Computing</Link> <Link to="#">Software </Link> <Link to="#">SaaS Growth</Link> <Link to="#">Automation</Link> </div>
            </div>
            <div className="sidebar__single sidebar__comments">
              <div className="h3 sidebar__title">Recent Comments</div>
              <ul className="sidebar__comments-list list-unstyled">
                <li>
                  <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                  <div className="sidebar__comments-text-box">
                    <p>A wordpress commenter on <br/> launch new mobile app</p>
                  </div>
                </li>
                <li>
                  <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                  <div className="sidebar__comments-text-box">
                    <p> <span>John Doe</span> on template:</p>
                    <div className="h5">comments</div>
                  </div>
                </li>
                <li>
                  <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                  <div className="sidebar__comments-text-box">
                    <p>A wordpress commenter on <br/> launch new mobile app</p>
                  </div>
                </li>
                <li>
                  <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                  <div className="sidebar__comments-text-box">
                    <p> <span>John Doe</span> on template:</p>
                    <div className="h5">comments</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default BlogOne;
