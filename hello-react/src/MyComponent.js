import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children, favoriteSinger}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name} 입니다. <br />
            Children 값은 {children} 입니다.
            <br/>

            제가 좋아하는 가수는 {favoriteSinger}

        </div>
    );
};

MyComponent.defaultProps = {
    name: "아무 이름",
    favoriteSinger: "팍팍한 세상 가수를 좋아할 시간이 어디있어!"
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteSinger: PropTypes.string.isRequired
};

export default MyComponent;