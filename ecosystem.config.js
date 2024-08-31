module.exports = {
  apps : [{
    name: 'dashboard_iot_valve',
    script: 'node_modules/.bin/next',
    args: 'start',
    env: {
	MQTT_BROKER_URL: 'ws://194.233.77.60:9001',
        MQTT_BROKER_USERNAME: 'asak_galak',
        MQTT_BROKER_PASSWORD: 'kit0pacak',
  }
}]
};
