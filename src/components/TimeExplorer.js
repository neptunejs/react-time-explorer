import React from 'react';
import {TimeAxis} from 'react-axis';
import {scaleLinear} from 'd3-scale';

export default function TimeExplorer(props) {
    const data = props.data;

    let minY = Infinity;
    let maxY = -Infinity;
    for (const point of data) {
        if (point.y < minY) minY = point.y;
        if (point.y > maxY) maxY = point.y;
    }
    const scale = scaleLinear().domain([minY, maxY]).range([10, 990]);

    let minTime = data[0].time;
    let maxTime = data[data.length - 1].time;
    const diff = Math.round((maxTime - minTime) / 100);
    minTime -= diff;
    maxTime += diff;
    const timeScale = scaleLinear().domain([minTime, maxTime]).range([0, 1000]);

    return (
        <svg width={props.width} height={props.height} viewBox="0 0 1000 1100">
            <svg x="0" y="0" width="1000" height="1000">
                {data.map(renderData)}
            </svg>
            <svg x="0" y="1000" width="1000" height="100">
                <TimeAxis position="bottom" beginTime={minTime} endTime={maxTime} width={1000} height={100} />
            </svg>
        </svg>
    );

    function renderData(point) {
        const x = timeScale(point.time);
        const y = scale(point.y);
        return (
            <g key={point.id}>
                <circle cx={x} cy={y} r="5" />
                <text x={x + 5} y={y}>{point.id}</text>
            </g>
        );
    }
}
