import NodeGeocoder, { GenericOptions } from 'node-geocoder';

const options: GenericOptions = {
  provider: 'mapquest',
  apiKey: 'icO4uAoHSjuBEmgA8594hkjfo2mNrGaT'
};

export default NodeGeocoder(options);
