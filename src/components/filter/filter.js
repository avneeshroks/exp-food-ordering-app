import * as _ from 'lodash';
import { useState } from 'react';
import './filterStyles.css';


function Filter(props) {

    const [ filterText, setFilterText ] = useState('')
    const [ filterDropDown, setFilterDropDown ] = useState(0)

    const onFiltersChange = (e) => {

        const filterObj = {
            filterText,
            filterDropDown,
        }

        switch (e.target.name) {
            case 'filterText':
                setFilterText(e.target.value)
                filterObj['filterText'] = e.target.value
                break;
            case 'filterDropdown':
                setFilterDropDown(e.target.value)
                filterObj['filterDropDown'] = e.target.value  
                break;
        
            default:
                break;
        }

        props.setFilters(filterObj)
    }

    return (
        <div className={'filterContainer'}>
            <div className={'filterTextControl'}>
                <input 
                    className={'filterText'}
                    type={'text'}
                    name={'filterText'}
                    onChange={_.debounce(onFiltersChange, 500)}
                    placeholder={'Filter Restaurants'}
                />
            </div>
            <div className={'filterDropdownControl'}>
                <select 
                    name={'filterDropdown'}
                    value={filterDropDown}
                    onChange={onFiltersChange}
                    className={'filterDropdown'}
                >
                    <option value={0}>None</option>
                    <option value={1}>Vegetarian</option>
                    <option value={2}>Non Vegetarian</option>
                </select>
            </div>
        </div>
    )
}

export default Filter;