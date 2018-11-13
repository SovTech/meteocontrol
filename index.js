// a library to wrap and simplify api calls
const apisauce = require('apisauce')

// our "constructor"
const create = (METEOCONTROL_API_KEY, METEOCONTROL_AUTH_KEY, baseURL = 'https://api.meteocontrol.de/') => {

  // Create and configure an apisauce-based api object.
  const api = apisauce.create({

    // base URL is read from the "constructor"
    baseURL,

    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      'x-api-key': METEOCONTROL_API_KEY,
      'authorization': 'Basic ' + METEOCONTROL_AUTH_KEY
    },

    // 10 second timeout...
    timeout: 10000
  })

  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.

  // list all systems available
  const systems = () => api.get('/systems')
  // get single system info
  const system = (system) => api.get('/systems/' + system)
  // get system technical data
  const technicalData = (system) => api.get('/systems/' + system + '/technical-data')
  // get bulk measurement data from system
  const bulk = (system, from, to) => api.get('/systems/' + system + '/bulk/measurements', {from, to})
  
  // get basic abbreviations
  const basicsAbbrs = (system) => api.get('/systems/' + system + '/basics/abbreviations')
  // get basic abbreviation info
  const basicsAbbr = (system, abbr) => api.get('/systems/' + system + '/basics/abbreviations/' + abbr)
  // get basic abbreviation measurement data
  const basicsAbbrMeasurement = (system, abbr, from, to) => api.get('/systems/' + system + '/basics/abbreviations/' + abbr + '/measurements', {from, to})

  // get calculations abbreviations
  const calculationsAbbrs = (system) => api.get('/systems/' + system + '/calculations/abbreviations')
  // get calculations abbreviation info
  const calculationsAbbr = (system, abbr) => api.get('/systems/' + system + '/calculations/abbreviations/' + abbr)
  // get calculations abbreviation measurement data
  const calculationsAbbrMeasurement = (system, abbr, from, to) => api.get('/systems/' + system + '/calculations/abbreviations/' + abbr + '/measurements', {from, to})

  // get inverters
  const inverters = (system) => api.get('/systems/' + system + '/inverters')
  // get inverter info
  const inverter = (system, inverter) => api.get('/systems/' + system + '/inverters/' + inverter)
  // get inverter abbreviations
  const inverterAbbrs = (system, inverter) => api.get('/systems/' + system + '/inverters/' + inverter + '/abbreviations')
  // get inverter abbreviation info
  const inverterAbbr = (system, inverter, abbr) => api.get('/systems/' + system + '/inverters/' + inverter + '/abbreviations/' + abbr)

  // get meters
  const meters = (system) => api.get('/systems/' + system + '/meters')
  // get meter info
  const meter = (system, meter) => api.get('/systems/' + system + '/meters/' + meter)
  // get meter abbreviations
  const meterAbbrs = (system, meter) => api.get('/systems/' + system + '/meters/' + meter + '/abbreviations')
  // get meter abbreviation info
  const meterAbbr = (system, meter, abbr) => api.get('/systems/' + system + '/meters/' + meter + '/abbreviations/' + abbr)

  // get sensors
  const sensors = (system) => api.get('/systems/' + system + '/sensors')
  // get sensor info
  const sensor = (system, sensor) => api.get('/systems/' + system + '/sensors/' + sensor)
  // get sensor abbreviations
  const sensorAbbrs = (system, sensor) => api.get('/systems/' + system + '/sensors/' + sensor + '/abbreviations')
  // get sensor abbreviation info
  const sensorAbbr = (system, sensor, abbr) => api.get('/systems/' + system + '/sensors/' + sensor + '/abbreviations/' + abbr)

  // get stringboxes
  const stringboxes = (system) => api.get('/systems/' + system + '/stringboxes')
  // get stringbox info
  const stringbox = (system, stringbox) => api.get('/systems/' + system + '/stringboxes/' + stringbox)
  // get stringbox abbreviations
  const stringboxAbbrs = (system, stringbox) => api.get('/systems/' + system + '/stringboxes/' + stringbox + '/abbreviations')
  // get stringbox abbreviation info
  const stringboxAbbr = (system, stringbox, abbr) => api.get('/systems/' + system + '/stringboxes/' + stringbox + '/abbreviations/' + abbr)

  // get batteries
  const batteries = (system) => api.get('/systems/' + system + '/batteries')
  // get battery info
  const battery = (system, battery) => api.get('/systems/' + system + '/batteries/' + battery)
  // get battery abbreviations
  const batteryAbbrs = (system, battery) => api.get('/systems/' + system + '/batteries/' + battery + '/abbreviations')
  // get battery abbreviation indo
  const batteryAbbr = (system, battery, abbr) => api.get('/systems/' + system + '/batteries/' + battery + '/abbreviations/' + abbr)

  // get tickets
  const tickets = (system) => api.get('/tickets?systemKey=' + system)

  // Return back a collection of functions that we would consider our
  // interface.
  return {
    systems,
    system,
    technicalData,
    bulk,
    basicsAbbrs,
    basicsAbbr,
    basicsAbbrMeasurement,    
    calculationsAbbrs,
    calculationsAbbr,
    calculationsAbbrMeasurement,
    inverters,
    inverter,
    inverterAbbrs,
    inverterAbbr,
    meters,
    meter,
    meterAbbrs,
    meterAbbr,
    sensors,
    sensor,
    sensorAbbrs,
    sensorAbbr,
    stringboxes,
    stringbox,
    stringboxAbbrs,
    stringboxAbbr,
    batteries,
    battery,
    batteryAbbrs,
    batteryAbbr,
    tickets
  }
}

// let's return back our create method as the default.
module.exports.create = create