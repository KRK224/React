import React, {Component } from 'react';
import PropTypes from 'prop-types';

class MyComponentClass extends Component {
    render (){
        const {name, favoriteSinger, children} = this.props;

        return (
            <>
                안녕하세요, 제 이름은 {name} 입니다. <br></br>
                children 값은 {children} <br />
                제가 좋아하는 가수는 {favoriteSinger} 입니다.
            </>
        )
    }
}

MyComponentClass.defaultProps = {
    name: "무명",
    favoriteSinger: "없음"
};

MyComponentClass.propsTypes = {
    name: PropTypes.string,
    favoriteSinger: PropTypes.string.isRequired,
}


export default MyComponentClass;