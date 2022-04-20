import React, { useEffect, useState } from 'react'

import './Converter.css'

function ConverterPage() {
    const [TargetMenu, setTargetMenu] = useState('length');
    const [TargetValue, setTargetValue] = useState(0)
    const [SelectUnit, setSelectUnit] = useState('밀리미터(mm)');

    const unitName = {'length': '길이', 'area': '넓이', 'weight': '무게', 'volume': '부피', 'temp': '온도', 'data': '데이터양'}
    const units = {
        'length': ['밀리미터(mm)', '센티미터(cm)', '미터(m)', '킬로미터(km)', '인치(in)', '피트(ft)', '야드(yd)', '마일(mile)', '자(尺)', '간(間)', '정(町)', '리(里)', '해리(海里)'],
        'area': ['제곱미터', '아르', '헥타르', '제곱킬로미터', '제곱피트', '제곱야드', '에이커', '평방자', '평', '단보', '정보'],
        'weight': ['밀리그램(mg)', '그램(g)', '킬로그램(kg)', '톤(t)', '킬로톤(kt)', '그레인(gr)', '온스(oz)', '파운드(lb)', '돈', '냥', '근', '관'],
        'volume': ['cc', '㎖', '㎗', 'ℓ', '세제곱센티미터', '세제곱미터', '세제곱인치', '세제곱피트', '세제곱야드', '갤런', '배럴', '온스', '홉', '되', '말'],
        'temp': ['섭씨(℃)', '화씨(℉)', '절대온도(K)', '란씨(°R)'],
        'data': ['bit', 'byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'],
    };

    const formula = {
        'length': {
            '밀리미터(mm)': 1852000,
            '센티미터(cm)': 185200,
            '미터(m)': 1852,
            '킬로미터(km)': 1.852,
            '인치(in)': 72913.3858,
            '피트(ft)': 6076.11549,
            '야드(yd)': 2025.37183,
            '마일(mile)': 1.150779, 
            '자(尺)': 6111.6, 
            '간(間)': 1018.6,
            '정(町)': 16.976667,
            '리(里)': 4.715741,
            '해리(海里)': 1,

        },
        'area': {
            '제곱미터': 9917.35537, 
            '아르': 99.173554, 
            '헥타르': 0.991736, 
            '제곱킬로미터': 0.009917, 
            '제곱피트': 106749.525, 
            '제곱야드': 11861.0583, 
            '에이커': 2.450632, 
            '평방자': 108000, 
            '평': 3000, 
            '단보': 10, 
            '정보': 1,
        },
        'weight': {
            '밀리그램(mg)': 3750000,
            '그램(g)': 1000000000,
            '킬로그램(kg)': 1000000,
            '톤(t)': 1000,
            '킬로톤(kt)': 1,
            '그레인(gr)': 15432000000,
            '온스(oz)': 35273961.9,
            '파운드(lb)': 2204622.62,
            '돈': 266666667,
            '냥': 26666666.7,
            '근': 1666666.67,
            '관': 266666.667,
        },
        'volume': {
            'cc': 764554.858,
            '㎖': 764554.858,
            '㎗': 7645.54858,
            'ℓ': 764.554858,
            '세제곱센티미터': 764554.858,
            '세제곱미터': 0.764555,
            '세제곱인치': 46656,
            '세제곱피트': 27,
            '세제곱야드': 1,
            '갤런': 201.974026,
            '배럴': 4.811547,
            '온스': 25852.6749,
            '홉': 4238.34391,
            '되': 423.834391,
            '말': 42.383439,
        },
        'temp': {
            '섭씨(℃)': 1,
            '화씨(℉)': 33.8,
            '절대온도(K)': 274.15,
            '란씨(°R)': 493.47,
        },
        'data': {
            'bit': 8589900000,
            'byte': 1073700000,
            'KB': 1048576,
            'MB': 1024,
            'GB': 1,
            'TB': 0.000977,
            'PB': 0.00000095367,
            'EB': 0.00000000093132,
        },
    }

    const changeMenu = (unit) => {
        setTargetMenu(unit);
    }

    const onChangeUnit = (e) => {
        setSelectUnit(e.currentTarget.value);
    }

    const onChangeValue = (e) => {
        console.log(e.target.value)
        setTargetValue(e.target.value);
    }

    return(
        <div className="container">
            <div className='convert-box'>
                <div className='convert-nav'>
                    {Object.keys(unitName).map(unit => {
                            return <div><span onClick={() => changeMenu(unit)}>{unitName[unit]}</span> |&nbsp;</div>
                    })}
                </div>
                <div className='convert-input'>
                    <input type={TargetMenu} placeholder="값을 입력해주세요." onChange={onChangeValue}></input>
                    {
                        <select name='length' onChange={onChangeUnit}>
                            {units[TargetMenu].map(unitItem => {
                                return <option value={unitItem}>{unitItem}</option>
                            })}                                    
                        </select>
                    }
                </div>
                <div className='convert-result'>
                    <div className='convert-result-div'>
                        {units[TargetMenu].filter(item => item !== SelectUnit).map(unit => {
                            return (
                                <div className='convert-result-box'>
                                    <div className='convert-result-label'>{unit}</div>
                                    <div className='convert-result-output'>{TargetValue  ? (TargetValue * (formula[TargetMenu][SelectUnit] / formula[TargetMenu][unit])).toFixed(3) : 0}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConverterPage;