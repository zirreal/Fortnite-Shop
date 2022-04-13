import React, {FC} from 'react';

import { Result} from 'antd';
import { SmileOutlined } from '@ant-design/icons';

// @ts-ignore
import Dance from '../assets/dance.gif';

const ThankYouPage: FC = () => {
    return (
        <div className="thankyou">
            <Result
                icon={<SmileOutlined className='icon' />}
                title="Спасибо за просмотр моего проекта"
            />
            <div>
                <img src={Dance} alt="dance"/>
            </div>
        </div>
    );
};

export default ThankYouPage;