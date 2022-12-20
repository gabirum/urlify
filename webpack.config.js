const { join, resolve } = require('path')
const Encore = require('@symfony/webpack-encore')

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore.setOutputPath('./public/assets')
Encore.setPublicPath('/assets')

Encore.addAliases({ '~': resolve(__dirname, 'resources', 'js') })

Encore.addEntry('app', './resources/js/app.tsx')

Encore.enableReactPreset()
Encore.enableBabelTypeScriptPreset()
Encore.splitEntryChunks()
Encore.enableSingleRuntimeChunk()

Encore.enableSassLoader()
Encore.enablePostCssLoader()

Encore.enableSourceMaps(!Encore.isProduction())
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

module.exports = config
