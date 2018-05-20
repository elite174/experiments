import { Component } from 'inferno'
import './style.css'
import { throttle } from '../../utils';
import WannaParallax from './ScollObjects/WannaParallax';

export default class Scroll extends Component {
    state = { scrollState: 0 }
    height = 2000
    scroll = throttle((e, self = this) => {
        self.setState({ scrollState: e.target.scrollTop })
    })
    WPAnim = [{
        selector: 'wanna-parallax',
        properties: [
            {
                property: 'scale',
                keyframes: [{
                    state: 0,
                    value: 1
                },
                {
                    state: 100,
                    value: 2
                }],
                unit: '',
                transform: true
            },
            {
                property: 'opacity',
                keyframes: [{
                    state: 0,
                    value: 0
                },
                {
                    state: 33,
                    value: 1
                },
                {
                    state: 66,
                    value: 1
                }, {
                    state: 100,
                    value: 0
                }],
                unit: ''
            }, {
                property: 'translateY',
                keyframes: [{
                    state: 0,
                    value: 50
                }, {
                    state: 100,
                    value: 0
                }],
                unit: 'px',
                transform: true
            }
        ]
    }]
    render() {
        /*  <Hello animation={[{
              selector: 'scroll-hello', properties: [
                  {
                      property: 'opacity',
                      keyframes: [
                          {
                              state: 0,
                              value: 0,
                          },
                          {
                              state: 50,
                              value: 1
                          },
                          {
                              state: 100,
                              value: 0
                          }
                      ],
                      unit: ''
                  },
                  {
                      property: 'top',
                      keyframes: [
                          {
                              state: 50,
                              value: 0
                          },
                          {
                              state: 100,
                              value: 100
                          }
                      ],
                      unit: 'px'
                  },
                  {
                      property: 'rotate',
                      keyframes: [{
                          state: 50,
                          value: 0
                      },
                      {
                          state: 100,
                          value: 360
                      }
                      ],
                      unit: 'deg',
                      transform: true
                  }, {
                      property: 'scale',
                      keyframes: [{
                          state: 50,
                          value: 1
                      }, {
                          state: 100,
                          value: 2
                      }],
                      unit: '',
                      transform: true
                  },
              ]
          }]} scrollState={this.state.scrollState} start='0.0%' end='50.0%' length={this.height}
              style={{ left: i * 10 }} key={i} />
      )
  }*/

        return (
            <div className='scroll-scene' >
                <div className='scroll-container' onScroll={this.scroll}>
                    <div className='scroll-view' style={{ height: this.height }}>

                    </div>
                </div>
                <WannaParallax animation={this.WPAnim} scrollState={this.state.scrollState} start='0%' end='30%'
                    length={this.height} />
            </div>
        )
    }
}