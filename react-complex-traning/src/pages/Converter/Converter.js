import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import staticFormula from './static/unitValue'
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

    const formula = staticFormula
    const navigate = useNavigate()

    const changeMenu = (unit) => {
        setTargetMenu(unit);
        setSelectUnit(units[unit][0]);
    }

    const onChangeUnit = (e) => {
        console.log(e.currentTarget.value)
        setSelectUnit(e.currentTarget.value);
    }

    const onChangeValue = (e) => {
        setTargetValue(e.target.value);
        
    }

    return(
        <div className="container">
            <div className='text-center'>
                <i className='icon mdi mdi-chevron-left' onClick={() => { navigate('/') }}></i>
            </div>
            <div className='convert-box'>
                <div className='convert-nav'>
                    {Object.keys(unitName).map(unit => {
                            return <div key={unit}><span onClick={() => changeMenu(unit)}>{unitName[unit]}</span> |&nbsp;</div>
                    })}
                </div>
                <div className='convert-input'>
                    <input type='number' placeholder="값을 입력해주세요." onChange={onChangeValue}></input>
                    {
                        <select name='length' onChange={onChangeUnit}>
                            {units[TargetMenu].map(unitItem => {
                                return (<option key={unitItem} value={unitItem}>{unitItem}</option>)
                            })}                                    
                        </select>
                    }
                </div>
                <div className='convert-result'>
                    <div className='convert-result-div'>
                        {units[TargetMenu].filter(item => item !== SelectUnit).map(unit => {
                            if (unit !== '단위 선택') {
                                return (
                                    <div key={unit} className='convert-result-box'>
                                        <div className='convert-result-label'>{unit}</div>
                                        <div className='convert-result-output'>{TargetValue  ? (TargetValue * (formula[TargetMenu][unit] / formula[TargetMenu][SelectUnit])).toFixed(2) : 0}</div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConverterPage;