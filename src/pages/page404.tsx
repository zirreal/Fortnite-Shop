import React, {FC} from 'react';
import { Link } from "react-router-dom";

import { Result } from 'antd';

const Page404: FC = () => {
    return (
        <div className={'page404'}>
            <Result
                status="404"
                title="404"
                subTitle="Страница, которую вы ищете не существует :(."
                extra={<Link to={'/'} >Вернуться на главную страницу</Link>}
            />
        </div>
    );
};

export default Page404;
