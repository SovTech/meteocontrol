const assert = require('assert');
const mock = require('./mock.json');

const meteocontrol = require('../index').create(process.env.METEOCONTROL_API_KEY, process.env.METEOCONTROL_AUTH_KEY);

describe('Test .systems', function() {
  it('should return an ok response', function() {
    return meteocontrol.systems().then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .system', function() {
  it('should return an ok response', function() {
    return meteocontrol.system(mock.system).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .technicalData', function() {
  it('should return an ok response', function() {
    return meteocontrol.technicalData(mock.system).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .bulk', function() {
  it('should return an ok response', function() {
    return meteocontrol.bulk(mock.system, mock.from, mock.to).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .basicsAbbrs', function() {
  it('should return an ok response', function() {
    return meteocontrol.basicsAbbrs(mock.system).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .basicsAbbr', function() {
  it('should return an ok response', function() {
    return meteocontrol.basicsAbbr(mock.system, mock.basicsAbbr).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .basicsAbbrMeasurement', function() {
  it('should return an ok response', function() {
    return meteocontrol.basicsAbbrMeasurement(mock.system, mock.basicsAbbr, mock.from, mock.to).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .calculationsAbbrs', function() {
  it('should return an ok response', function() {
    return meteocontrol.calculationsAbbrs(mock.system).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .calculationsAbbr', function() {
  it('should return an ok response', function() {
    return meteocontrol.calculationsAbbr(mock.system, mock.calculationsAbbr).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .calculationsAbbrMeasurement', function() {
  it('should return an ok response', function() {
    return meteocontrol.calculationsAbbrMeasurement(mock.system, mock.calculationsAbbr, mock.from, mock.to).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .inverters', function() {
  it('should return an ok response', function() {
    return meteocontrol.inverters(mock.system).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .inverter', function() {
  it('should return an ok response', function() {
    return meteocontrol.inverter(mock.system, mock.inverter).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .inverterAbbrs', function() {
  it('should return an ok response', function() {
    return meteocontrol.inverterAbbrs(mock.system, mock.inverter).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .inverterAbbr', function() {
  it('should return an ok response', function() {
    return meteocontrol.inverterAbbr(mock.system, mock.inverter, mock.inverterAbbr).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .meters', function() {
  it('should return an ok response', function() {
    return meteocontrol.meters(mock.system).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .meter', function() {
  it('should return an ok response', function() {
    return meteocontrol.meter(mock.system, mock.meter).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .meterAbbrs', function() {
  it('should return an ok response', function() {
    return meteocontrol.meterAbbrs(mock.system, mock.meter).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .meterAbbr', function() {
  it('should return an ok response', function() {
    return meteocontrol.meterAbbr(mock.system, mock.meter, mock.meterAbbr).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .sensors', function() {
  it('should return an ok response', function() {
    return meteocontrol.sensors(mock.system).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .sensor', function() {
  it('should return an ok response', function() {
    return meteocontrol.sensor(mock.system, mock.sensor).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .sensorAbbrs', function() {
  it('should return an ok response', function() {
    return meteocontrol.sensorAbbrs(mock.system, mock.sensor).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .sensorAbbr', function() {
  it('should return an ok response', function() {
    return meteocontrol.sensorAbbr(mock.system, mock.sensor, mock.sensorAbbr).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});

describe('Test .tickets', function() {
  it('should return an ok response', function() {
    return meteocontrol.tickets(mock.system).then(response => {
      return assert.equal(response.ok, true);
    });
  });
});
