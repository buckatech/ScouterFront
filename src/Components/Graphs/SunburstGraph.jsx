import React, { PureComponent } from 'react';
import Sunburst from './SunBurst';

const DIVERGING_COLOR_SCALE = ['#00939C', '#85C4C8', '#EC9370', '#C22E00'];
const data = {
    "name": "TOTAL", "children": [
        {
            "name": "COAL", "children": [
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 }
            ]
        },
        {
            "name": "Hydro", "children": [
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 }
            ]
        },
        {
            "name": "WIND", "children": [
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
            ]
        },
        {
            "name": "BIOMASS", "children": [
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
            ]
        },
        {
            "name": "GAS", "children": [
                {
                    "name": "TEST", "children": [
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                    ]
                },
                {
                    "name": "TEST2", "children": [
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                    ]
                },
                {
                    "name": "TEST3", "children": [
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 }
                    ]
                }
            ]
        },


    ]
}
class SunBurstGraph extends PureComponent {
    onSelect(event) {
        console.log(event);
    }
    render() {

        return (
            <div className="second-row'">
                <div className="sunburst-wrapper">
                    <div className="block">
                        <div className="sunburst-title">
                            ENERGY DISTRIBUTION
                        </div>
                        <Sunburst
                            data={data}
                            colorType={'category'}
                            colorRange={DIVERGING_COLOR_SCALE}
                            style={{ stroke: '#fff' }}
                            onSelect={this.onSelect}
                            scale="linear"
                            tooltipContent={<div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />}
                            tooltip
                            tooltipPosition="right"
                            keyId="anagraph"
                            width="700"
                            height="600"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SunBurstGraph;
