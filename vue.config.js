module.exports = {
  pwa: {
    manifestOptions: {
      background_color: 'green'
    },
    name: 'Worker App',
    themeColor: 'blue',
    workboxOptions: {
        runtimeCaching: [
            {
                handler: 'NetworkFirst',
                options: {
                    networkTimeoutSeconds: 5
                },
                urlPattern: 'http://dummy.restapiexample.com/api/v1/employees'
            }
        ]
    }
  }
}
