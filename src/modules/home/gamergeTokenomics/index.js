'use client';
import React from 'react';
import styles from './gamergeTokenomics.module.scss';
import DownIcon from '@/components/icons/downIcon';
import UpArrow from '@/components/icons/upArrow';
import { motion } from 'framer-motion';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

const VecTwoImage = '/assets/images/vec-two.png';
const chartCenterImage = '/assets/images/chart-center-image.png';
const ToyImage = '/assets/images/toy-two.png';
const ChartLine = '/assets/images/chartline.png';
const MobileChart = '/assets/images/mobile-chart.png';


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { name, value, description } = payload[0].payload;
        return (
            <div className={styles.customTooltip}>
                <h2>{name}</h2>
                {/* <p>{value} GMG</p> */}
                <span>{description}</span>
            </div>
        );
    }
    return null;
};

export default function GamergeTokenomics() {
    const chartData = [
        {
            id: 1,
            name: 'Advisors 4%',
            value: 4,
            color: '#F7B801',
            percent: '4%',
            description: 'Allocated to strategic partners and advisors contributing to growth. Provides expert guidance and industry connections to accelerate progress.',
        },
        {
            id: 2,
            name: 'Team Allocation 12%',
            value: 12,
            color: '#9B5DE5',
            percent: '12%',
            description: 'Distributed to the founding team under a vesting schedule. Aligns team incentives with long-term project success and commitment.',
        },
        {
            id: 3,
            name: 'Key Opinion Leaders (KOLs) 4%',
            value: 4,
            color: '#0A9396',
            percent: '4%',
            description: 'Reserved for influencers and promoters to boost project visibility. Helps drive adoption and expand the Gamerge community through trusted voices.',
        },
        {
            id: 4,
            name: 'Staking Rewards 12%',
            value: 12,
            color: '#90BE6D',
            percent: '12%',
            description: 'Incentivizes users to lock their tokens and support network stability. Encourages long-term holding and active participation in the ecosystem.',
        },
        {
            id: 5,
            name: 'Presale 21.5%',
            value: 21.5,
            color: '#F9C74F',
            percent: '21.5%',
            description: 'Allocated to raise initial capital and engage early supporters. This helps bootstrap the project while rewarding early believers.',
        },
        {
            id: 6,
            name: 'Liquidity 17%',
            value: 17,
            color: '#F3722C',
            percent: '17%',
            description: 'Allocated to DEX/CEX liquidity pools for smooth trading experience. Maintains price stability and ease of access for new investors.',
        },
        {
            id: 7,
            name: 'Ecosystem Development 18%',
            value: 18,
            color: '#F94144',
            percent: '18%',
            description: 'Supports future innovations, partnerships, and product expansion. Ensures ongoing improvement and scalability of the Gamerge platform.',
        },
        {
            id: 8,
            name: 'Airdrops 4.5%',
            value: 4.5,
            color: '#FFC6FF',
            percent: '4.5%',
            description: 'Rewarding community members and boosting platform engagement. Builds loyalty and spreads awareness through free token distributions.',
        },
        {
            id: 9,
            name: 'Marketing Efforts 7%',
            value: 7,
            color: '#00FF7F',
            percent: '7%',
            description: 'Fueling promotional campaigns and user acquisition strategies. Ensures sustained visibility and brand growth in competitive markets.',
        },
    ];


    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, index,
    }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) / 2;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="#000"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="18"
                fontWeight="bold"
            >
                {chartData[index].percent}
            </text>
        );
    };

    return (
        <div className={styles.mobilepaddingRemove}>
        <div className="container-md">
            <div className={styles.gamergeTokenomics}>
                <div className={styles.pinkblur}></div>
                <div className={styles.vectwo}>
                    <img src={VecTwoImage} alt="VecTwoImage" />
                </div>
                <div className={styles.borderBottom}></div>
                <div className={styles.line}></div>
                <div className={styles.leftSide}></div>
                <div className={styles.rightSide}></div>

                <motion.div
                    className={styles.titleIconAlignment}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <DownIcon />
                    <h2>Gamerge Tokenomics</h2>
                </motion.div>

                {/* Chart Section */}
                <motion.div
                    className={styles.imageCenter}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className={styles.chartLine}>
                        <img src={ChartLine} alt='ChartLine' />
                    </div>
                    <div className={styles.mobileChartline}>
                        <img src={MobileChart} alt='MobileChart'/>
                    </div>
                    <div
                        className={styles.chartSvg}>

                        <ResponsiveContainer tabIndex={-1}>
                            <PieChart>
                                <Tooltip wrapperStyle={{ zIndex: 9999 }} content={<CustomTooltip />} />
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius="54%"
                                    outerRadius="100%"
                                    cornerRadius={10}
                                    paddingAngle={2}
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    isAnimationActive={false}
                                    activeShape={false}
                                    startAngle={-205}
                                    endAngle={180}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} stroke={entry.color}
                                            strokeWidth={1.5} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div
                        className={styles.svgroundtexrt}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                                color: '#FAFAFA',
                            }}
                        >
                            <p>
                                Built on
                            </p>

                            <h4
                            >
                                BINANCE <br/> SMART CHAIN
                            </h4>
                            <img
                                className={styles.centerImage}
                                src={chartCenterImage}
                                alt="bnb"

                            />
                        </div>
                    </div>
                </motion.div>

                {/* Button */}
                <div className={styles.buttonCenter}>
                    <a aria-label='Smart Contract' href="https://bscscan.com/token/0xa3cba8c94b758d56315def513dec5e75ce05041a" target='_blank'>
                    <button>
                        Smart Contract
                        <UpArrow />
                    </button>
                    </a>
                </div>
                <div className={styles.toyImage}>
                    <img src={ToyImage} alt="ToyImage" />
                </div>
                {/* Footer Background Elements */}
                <div className={styles.linebottom}></div>
                <div className={styles.leftSidebottom}></div>
                <div className={styles.rightSidebottom}></div>

            </div>
        </div>
        </div>
    );
}
