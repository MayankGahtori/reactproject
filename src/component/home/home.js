import React from 'react';
import { Carousel, Button } from 'antd';

const items = [
    {
        key: '1',
        title: 'Connecting for Contributing,<b>Interacting for Innovating</b>'
    },
]

function AppHero()
{
    return(
        <div className="heroBlock">
            <Carousel>
                {items.map(item => {
                return(
                    <div className="container-fluid">
                        <div className="content">
                            <h1>{item.title}</h1>
                            <div className="btnHolder">
                            <Button type="primary" shape="round" >Join Us</Button>
                            </div>
                        </div>
                    </div>
                );
                })}
            </Carousel>
        </div>
    );
}

export default AppHero;