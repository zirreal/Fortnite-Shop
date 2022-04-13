import React, {FC} from 'react';
import { Alert } from 'antd';

interface IError {
    text : string;
}

const Error: FC<IError> = ({text}) => {
    return (
        <Alert
            message="Error"
            description={text}
            type="error"
            showIcon
        />
    );
};

export default Error;