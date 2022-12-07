import { useHttp } from "../../hooks/http.hook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import classNames from "classnames";
import Spinner from "../spinner/Spinner";

import { fetchFilters } from "../../actions";
import { heroFiltered } from "./filtersSlice";

const HeroesFilters = () => {

    const { filters, filtersFetchingStatus, currentFilter } = useSelector(data => data.filters);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchFilters(request));
    }, []);

    if (filtersFetchingStatus === 'loading') {
        return <Spinner/>;
    } else if (filtersFetchingStatus === 'error') {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderFilters = arr => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Фильтры не найдены</h5>
        }
        return arr.map(({name, label, className}) => {
            const btnClass = classNames('btn', className, {
                'active': name === currentFilter
            });
            return <button
                className={btnClass}
                key={name}
                id={name}
                onClick={() => dispatch(heroFiltered(name))}
            >{label}</button>
        })

    }

    
    const elements = renderFilters(filters);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;