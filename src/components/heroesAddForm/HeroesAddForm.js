import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { heroCreated } from '../heroesList/heroesSlice';

const HeroesAddForm = () => {
    const dispatch = useDispatch(),
        [name, setName] = useState(''),
        [description, setDescription] = useState(''),
        [element, setElement] = useState(''),
        {filters, filtersLoadingStatus} = useSelector(state => state.filters);

    const addHero = (e) => {
        e.preventDefault();
        const data = {id: uuidv4(), name, description, element};
        dispatch(heroCreated(data));
        setName('');
        setDescription('');
        setElement('');
    }
 
    

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={addHero}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={e => setElement(e.target.value)}
                    >
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;