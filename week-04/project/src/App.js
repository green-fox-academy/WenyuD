import React from 'react';

import './App.css';
import greyWhale from './images/grey_whale.jpg';
import humpbackWhaleBreaching from './images/humpback_whale_breaching.jpg';
import humpbackWhaleFluking from './images/humpback_whale_fluking.jpg';
import brydesWhale from './images/brydes_whale.jpg';
import spermWhaleFluking from './images/sperm_whale_fluking.jpg';
import {ReactComponent as Arrow} from './images/arrow.svg';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[greyWhale, humpbackWhaleBreaching, humpbackWhaleFluking, brydesWhale, spermWhaleFluking], 
      imageCalled:[0]
      };
    this.viewImage = this.viewImage.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
  }

  viewImage(img) {
    let imgIndex = this.state.images.indexOf(img);
    this.setState({imageCalled: [imgIndex]});
  }

  goLeft(imgIndex) {
    if (this.state.imageCalled[0] !== 0) {
      this.setState({imageCalled: [imgIndex[0]-1]});
    }
  }

  goRight(imgIndex) {
    if (this.state.imageCalled[0] !== (this.state.images.length-1)) {
      this.setState({imageCalled: [imgIndex[0]+1]});
    }
  }

  render() {
    const styles = StyleSheet.create({
      gallery: {
        height: '100%',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    });
    return (
      <div className={css(styles.gallery)}>
        <ImageViewr
          images = {this.state.images}
          imageCalled = {this.state.imageCalled}
          goLeft = {this.goLeft}
          goRight = {this.goRight}
        />
        <nav>
          <Thumbnails 
            images = {this.state.images}
            viewImage = {this.viewImage}
          />
        </nav>
      </div>
    );

  }
}

function ImageViewr(props) {
  console.log(props.imageCalled[0])
  const styles = StyleSheet.create({
    imageViewContainerStyle: {
        height: '70vh',
        display: 'flex',
        alignItems: 'center'
    },

    imageViewStyle: {
      height: '100%',
      width: 'auto'
    },

    arrowLeftDefaultStyle: {
      marginRight: '2em',
      cursor: 'pointer'
    },
    arrowLeftDisableStyle: {
      marginRight: '2em',
      opacity: '0.2'
    },

    arrowRightDefaultStyle: {
      marginLeft: '2em',
      transform: 'rotate(180deg)',
      cursor: 'pointer'
    },
    arrowRightDisableStyle: {
      marginLeft: '2em',
      transform: 'rotate(180deg)',
      opacity: '0.2'
    }
  });

  const arrowLeftStyle = css(
    (props.imageCalled[0] !== 0) ? styles.arrowLeftDefaultStyle : styles.arrowLeftDisableStyle
  )
  const arrowRightStyle = css(
    (props.imageCalled[0] !== props.images.length-1) ? styles.arrowRightDefaultStyle : styles.arrowRightDisableStyle
  )
  return (
    <div className={css(styles.imageViewContainerStyle)}>
      <Arrow 
        className={arrowLeftStyle} 
        onClick={() => {props.goLeft(props.imageCalled)}}
      />
        <img 
          className={css(styles.imageViewStyle)} 
          src={props.images[props.imageCalled]} 
          alt=""/>
      <Arrow 
        className={arrowRightStyle} 
        onClick={() => {props.goRight(props.imageCalled)}}
      />
    </div>
  )
}

function Thumbnails(props) {
  const thumbnailStyle = {
    width: '5rem',
    height: '5rem',
    margin: '2em 1em 0 1em',
    cursor: 'pointer'
  }
  return (
    <>
      {props.images.map((element, index) => {
        return <img src={element} key={index} style={thumbnailStyle} onClick={() => props.viewImage(element)}/>
      })}
    </>
  )
}

export default App;
