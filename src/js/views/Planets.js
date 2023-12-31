import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Planets = () => {
    const { store, actions } = useContext(Context)
    
    return (
        <div className='container-card mb-5'>
            {store.planetsStarWars.map((planet, index) => {
                return <div key={index} className="custom-card m-2 border rounded">
                    <img className="card-img-top custom-img" src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`} alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">Population:{planet.population}</p>
                        <p className="card-text"> Terrain:{planet.terrain}</p>

                        {/* boton de learnmore */}

                        <Link to={"/"} >
                            <button type='button' className='btn btn-warning me-3'>
                                Learn more
                            </button>
                        </Link>

                        <button type='button' className='btn btn-danger'>
                            ♡
                        </button>
                    </div>
                </div>
            })}

        </div>
    );
}

export default Planets



