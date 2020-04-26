import React, { Component } from 'react'

const CoronaContext = React.createContext()

class CoronaProvider extends Component {
  state = {
    all: {
      today:{},
      yesterday:{}
    },
    countries: [],
    countriesList: [],
    usStates: [],
    continents: [],
    country: {} // country display on Country.js page
  }

  componentDidMount = async () => {
    // fetch todays and yesterday data
    const resT = await fetch('https://corona.lmao.ninja/v2/all')
    const resY = await fetch('https://corona.lmao.ninja/v2/all?yesterday=true')

    // fetch countries data
    const countries = await fetch('https://corona.lmao.ninja/v2/countries?sort=cases')
    
    // fetch US states data
    const usStates = await fetch('https://corona.lmao.ninja/v2/states')

    // fetch continents data
    const continents = await fetch('https://corona.lmao.ninja/v2/continents')

    // set them into state
    this.setState({
      all: {
        today: await resT.json(),
        yesterday: await resY.json()
      },
      countries: await countries.json(),
      usStates: await usStates.json(),
      continents: await continents.json()
    })

    // set countriesList
    this.setState({
      countriesList: this.state.countries.map(country => country.country).sort()
    })
  }

  getCountryData = (country) => {
    // ss
  }

  prepareCaseCardData = (today1, yesterday) => {
    // const { today, yesterday } = this.state.all
    const todayRecovered = today1.recovered - yesterday.recovered
    const todayActiveCases = today1.cases - today1.deaths - today1.recovered
    const yesterdayActiveCases = yesterday.cases - yesterday.deaths - yesterday.recovered
    const tempData = [
        { cases: today1.cases, newCases: today1.todayCases, title: "confirmed", color:'info', perc: (today1.todayCases)/yesterday.cases},
        { cases: today1.deaths, newCases: today1.todayDeaths, title: "deaths", color:'danger',perc: (today1.todayDeaths)/yesterday.deaths},
        { cases: today1.recovered, newCases: todayRecovered, title: "recovered", color:'success',perc: (today1.recovered-yesterday.recovered)/yesterday.recovered },
        { cases: today1.active, newCases: today1.active-yesterday.active, title: "active", color:'warning',perc: (today1.active-yesterday.active)/yesterday.active},
      ];

    return tempData
  }

  prepareTableData = () => {
    // [
    //   {team:'Leicester City (C)',	ply:38,w:23,d:	12,l:	3,gf:	68},
    //   {team:'Real Madrid',	ply:38,w:35,d:1,l:3,gf:	98},
    //   {team:'Barcelona',	ply:38,w:23,d:	12,l:	103,gf:	98},
    //   {team:'Juventus',	ply:38,w:23,d:	12,l:	3,gf:	68},
    // ]
    let tempData = this.state.countries.map((item, i) => (
      { '#': i+1,
        country: item.country,
        // id: item.countryInfo._id,
        cases: item.cases,
        deaths: item.deaths,
        recover: item.recovered
      }
    ))

    return tempData
  }

  prepareUSStatesTableData = () => {
    let tempData = this.state.usStates.map((state, i) => (
     {
       '#': i+1,
       state: state.state,
       active: state.active,
       deaths: state.deaths,
       tests: state.tests
     } 
    ))
    return tempData
  }

  render() {
    return (
      <CoronaContext.Provider value={{...this.state, 
      prepareCaseCardData:this.prepareCaseCardData, 
      prepareTableData: this.prepareTableData,
      prepareUSStatesTableData: this.prepareUSStatesTableData
      }}>
        {this.props.children}
      </CoronaContext.Provider>
    )
  }
}

const CoronaConsumer = CoronaContext.Consumer


export { CoronaProvider, CoronaConsumer, CoronaContext }

