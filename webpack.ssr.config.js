const { join, resolve } = require('path')
const Encore = require('@symfony/webpack-encore')

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore.setOutputPath('./inertia/ssr')
Encore.setPublicPath('/ssr')

Encore.addAliases({ '~': resolve(__dirname, 'resources', 'js') })

Encore.addEntry('ssr', './resources/js/ssr.tsx')

Encore.enableReactPreset()
Encore.enableBabelTypeScriptPreset()
Encore.splitEntryChunks()
Encore.disableSingleRuntimeChunk()

Encore.enableSassLoader()
Encore.enablePostCssLoader()

Encore.enableVersioning(Encore.isProduction())

Encore.cleanupOutputBeforeBuild()

Encore.configureDevServerOptions(options => {
  /**
   * Normalize "options.static" property to an array
   */
  if (!options.static) {
    options.static = []
  } else if (!Array.isArray(options.static)) {
    options.static = [options.static]
  }

  /**
   * Enable live reload and add views directory
   */
  options.liveReload = true
  options.static.push({
    directory: join(__dirname, './resources/views'),
    watch: true,
  })
})

const config = Encore.getWebpackConfig()
config.infrastructureLogging = {
  level: 'warn',
}
config.stats = 'errors-warnings'
config.externals = [require('webpack-node-externals')()]
config.externalsPresets = { node: true }
config.output = {
  libraryTarget: 'commonjs2',
  filename: 'ssr.js',
  path: join(__dirname, './inertia/ssr'),
}
config.experiments = { outputModule: true }

module.exports = config
