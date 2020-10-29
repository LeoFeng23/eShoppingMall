// @flow
import * as React from 'react';
import BScroll from '@better-scroll/core'
import {RefObject} from "react";
import './ScrollBox.scss'

type Props = {
    children?: any,
    className?: String
};
type State = {
    // 给外层盒子设置ref，通过ref向BScroll构造器提供DOM节点
    boxRef?: RefObject<any>,
    // 设置BScroll的实例属性
    bs?: BScroll
};

export class ScrollBox extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            boxRef: React.createRef(),
        }
    }

    render() {
        return (
            <div ref={this.state.boxRef} className={`scroll-box-container ${this.props.className}`}>
                <div className="scroll-inner">
                    {this.props.children}
                </div>
            </div>
        );
    };

    // 组件挂载时初始化BetterScroll
    componentDidMount() {
        const bs = new BScroll(this.state.boxRef?.current, {
            click: true,
            probeType: 3
        });
        bs.on('beforeScrollStart', () => {
            bs.refresh();
        })
        this.setState({
            bs: bs
        })
    }

};
