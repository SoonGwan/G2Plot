import { RangeBar } from '../../src';

describe.skip('Radar plot', () => {
  const canvasDiv = document.createElement('div');
  canvasDiv.style.width = '600px';
  canvasDiv.style.height = '600px';
  canvasDiv.style.left = '30px';
  canvasDiv.style.top = '30px';
  canvasDiv.id = 'canvas1';
  document.body.appendChild(canvasDiv);

  const data = [
    { type: '分类一', values: [76, 100] },
    { type: '分类二', values: [56, 108] },
    { type: '分类三', values: [38, 129] },
    { type: '分类四', values: [58, 155] },
    { type: '分类五', values: [45, 120] },
    { type: '分类六', values: [23, 99] },
    { type: '分类七', values: [18, 56] },
    { type: '分类八', values: [18, 34] },
  ];

  it.only('initialize', () => {
    const barPlot = new RangeBar(canvasDiv, {
      title: {
        visible: true,
        text: '区间条形图',
      },
      data,
      xField: 'values',
      yField: 'type',
      label: {
        visible: true,
        leftStyle: {
          fill: '#3e5bdb',
        },
        rightStyle: {
          fill: '#dd3121',
        },
      },
    });
    barPlot.render();
  });
});
