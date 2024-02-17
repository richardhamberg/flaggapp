import React, { useContext } from 'react'
import data from '../data/data.json'
import { Link, useParams } from 'react-router-dom'
import ArrowLeft from '../assets/arrow-left-dark.svg'
import ArrowLeftLight from '../assets/arrow-left.svg'
import { ThemeContext } from '../App'

const CountryPage = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { name } = useParams()
    const decodedName = decodeURIComponent(name)
    const country = data.find((c) => c.name === decodedName)

    if (!country) {
        return <div>Country not found</div>
    }

    return (
        <div className="country-container">
            <Link to="/" className="back">
                <img
                    src={theme === 'dark' ? ArrowLeftLight : ArrowLeft}
                    alt="Back"
                />
                <p className="page-back">Back</p>
            </Link>
            <div className="country-main">
                <div className="page-flag-container">
                    <img className="page-flag" src={country.flags.svg} alt="" />
                </div>
                <div className="page-text">
                    <h2>{country.name}</h2>
                    <div className="info-columns">
                        <div className="column">
                            <p>
                                <span className="larger-text">
                                    Population:{' '}
                                </span>{' '}
                                <span className="smaller-text">
                                    {country.population.toLocaleString()}
                                </span>
                            </p>
                            <p>
                                <span className="larger-text">Region: </span>
                                <span className="smaller-text">
                                    {country.region}
                                </span>
                            </p>
                            <p>
                                <span className="larger-text">Capital: </span>
                                <span className="smaller-text">
                                    {country.capital}
                                </span>
                            </p>
                            <p>
                                <span className="larger-text">
                                    Native Name:{' '}
                                </span>
                                <span className="smaller-text">
                                    {country.nativeName}
                                </span>
                            </p>
                        </div>
                        <div className="column">
                            <p>
                                <span className="larger-text">
                                    Top Level Domain:{' '}
                                </span>
                                <span className="smaller-text">
                                    {country.topLevelDomain[0]}
                                </span>
                            </p>
                            <p>
                                <span className="larger-text">
                                    Currencies:{' '}
                                </span>
                                <span className="smaller-text">
                                    {country.currencies[0].code}
                                </span>
                            </p>

                            <p>
                                <span className="larger-text">Language: </span>
                                <span className="smaller-text">
                                    {country.languages
                                        ? country.languages
                                              .map((language) => language.name)
                                              .join(', ')
                                        : 'N/A'}
                                </span>
                            </p>
                        </div>
                    </div>
                    {country.borders ? (
                        <div className="page-border">
                            <span className="larger-text">
                                Border Countries:
                            </span>
                            <div className="border-countries">
                                {country.borders.map((border, index) => (
                                    <div
                                        key={border}
                                        className="border-country"
                                    >
                                        {border}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="page-border">
                            <span className="larger-text">
                                Border Countries:
                            </span>
                            <div className="border-country">
                                No borders
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='bg'></div>
        </div>
        
    )
}

export default CountryPage
