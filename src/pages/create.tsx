import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { ButtonToggle, TextAreaEdit } from '../components/ButtonToggle'
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
import ReactMarkdown from 'react-markdown';
import { defaultPost } from '../data/default'
import firebase from 'firebase';

//import { useObjectVal } from "react-firebase-hooks/database"

import "firebase/firestore"

const config = {
  // apiKey: ,
  // authDomain: ,
  // databaseURL: ,
  // projectId: ,
  // storageBucket: ,
  // messagingSenderId: ,
}
var firebaseConfig = {
  apiKey: "AIzaSyBg1sT0llNHmVOPAnnU8Z0QMKeeUrjXpeY",
  authDomain: "microblog-8d530.firebaseapp.com",
  databaseURL: "https://microblog-8d530.firebaseio.com",
  projectId: "microblog-8d530",
  storageBucket: "microblog-8d530.appspot.com",
  messagingSenderId: "325509934546",
  appId: "1:325509934546:web:69f9b99408d22628a7ec0b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function TestFireBase() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    firebase
      .database()
      .ref("/post")
      .once("value")
      .then(snapshot => {
        debugger
        setData(snapshot.val())
      })
  }, [])

  return <div>{data ? data : "Loading..."}</div>
}



const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const Create: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [contentData, setcontentData] = useState(defaultPost);

  return (
    <IndexLayout>
      <Helmet>
        <title>New post</title>
      </Helmet>

      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>

          <ButtonToggle onClick={() => setToggle(!toggle)}>{!toggle ? 'Open' : 'Preview'}</ButtonToggle>
          {toggle &&
            <TextAreaEdit value={contentData} onChange={e => setcontentData(e.target.value)} ></TextAreaEdit>
          }
          {!toggle && <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <TestFireBase></TestFireBase>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">Create</PostFullTitle>
              </PostFullHeader>
              <PostFullContent className="post-full-content">
                <ReactMarkdown source={contentData} />
              </PostFullContent>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <h5>
                    A starter template for Gatsby <br /> GitHub: <a href="https://github.com/scttcper/gatsby-casper">scttcper/gatsby-casper</a>
                  </h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo finibus leo,
                    non tempus magna vehicula ac. Maecenas mollis ante finibus pharetra imperdiet.
                    Maecenas in aliquam purus. Nam et massa a nulla fermentum dapibus sit amet in
                    neque. Ut ipsum ipsum, rhoncus a sodales pellentesque, interdum a elit. Nullam
                    aliquam tellus nibh, eget laoreet dui aliquet non. Vestibulum malesuada ante at
                    diam tempus, ac interdum risus scelerisque. Sed ipsum neque, vulputate porta diam
                    eget, consequat blandit nulla. Integer volutpat velit vitae purus lacinia aliquam.
                    Integer bibendum ipsum vitae magna pulvinar, nec vehicula dolor vulputate. Nulla
                    eu massa id orci placerat finibus vel sit amet eros. Vestibulum quis consequat
                    massa. Sed sagittis sollicitudin massa at commodo. Praesent diam nisi, imperdiet
                    posuere eleifend nec, blandit ac massa.
                </p>
                  <p>
                    Vestibulum semper pretium ipsum nec congue. Ut ac eros nisi. Donec leo sem,
                    aliquam mollis sapien ultrices, dapibus congue diam. Proin viverra dapibus
                    blandit. Ut mauris tellus, tristique id felis vel, venenatis vestibulum nunc. Nam
                    molestie pulvinar nibh, eget egestas augue. Maecenas tellus arcu, mattis ut ipsum
                    non, sollicitudin convallis nunc. Donec nec neque tristique, aliquet lacus id,
                    laoreet nunc. Cras dapibus nisi nulla, ullamcorper faucibus neque suscipit ac.
                    Donec eget orci venenatis justo lobortis volutpat. Proin vel placerat nisl.
                    Integer arcu nunc, sodales eu fringilla non, aliquam non diam. Cras placerat,
                    massa et faucibus pretium, ante elit tincidunt tellus, tristique ultricies velit
                    quam et massa.
                </p>
                  <p>
                    In nunc lacus, dapibus vitae lacus sit amet, efficitur iaculis neque. Suspendisse
                    ut tellus quis leo vestibulum tincidunt. Aenean nec enim ac dolor lacinia semper.
                    Ut sed laoreet libero. Nunc elementum sollicitudin accumsan. Nunc eu augue neque.
                    Proin a tortor nibh. Cras eu nisl ornare sapien feugiat pellentesque. Mauris
                    dignissim vel quam eu pellentesque. Integer sit amet posuere quam, eu ullamcorper
                    odio. Nullam a lacus tempus sapien dignissim ullamcorper. In hac habitasse platea
                    dictumst. Proin quis massa aliquam, feugiat tortor sit amet, tincidunt urna. Donec
                    posuere pulvinar lectus, ac semper ipsum vulputate quis.
                </p>
                </div>
              </PostFullContent>
            </article>
          </div>}
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  )
};

export default Create;
